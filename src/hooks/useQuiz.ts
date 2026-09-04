import { useCallback, useMemo, useState } from 'react';
import { questions as ALL_QUESTIONS } from '../data/questions';
import type {
  AnswerState,
  Question,
  QuizConfig,
  QuizSession,
  SelfAssessment,
} from '../types';
import { useLocalStorage } from './useLocalStorage';

const SESSION_KEY = 'simulado-gms:session';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestionIds(config: QuizConfig): string[] {
  let pool = ALL_QUESTIONS.slice();
  if (config.area !== 'todas') pool = pool.filter((q) => q.area === config.area);
  if (config.type !== 'todos') pool = pool.filter((q) => q.type === config.type);
  if (config.order === 'embaralhada') pool = shuffle(pool);
  if (config.quantity !== 'todas') pool = pool.slice(0, config.quantity);
  return pool.map((q) => q.id);
}

function emptyAnswer(questionId: string): AnswerState {
  return { questionId, hintUsed: false, submitted: false };
}

export function questionScore(q: Question, a?: AnswerState): number {
  if (!a || !a.submitted) return 0;
  if (q.type === 'multipla') return a.selectedOptionId === q.correctOptionId ? 1 : 0;
  if (q.type === 'vf') return a.selectedAnswer === q.correctAnswer ? 1 : 0;
  if (a.selfAssessment === 'acertei') return 1;
  if (a.selfAssessment === 'parcial') return 0.5;
  return 0;
}

export function isWrong(q: Question, a?: AnswerState): boolean {
  if (!a || !a.submitted) return false;
  if (q.type === 'discursiva') return a.selfAssessment === 'errei';
  return questionScore(q, a) === 0;
}

export interface QuizResultItem {
  question: Question;
  answer: AnswerState | undefined;
  score: number;
  wrong: boolean;
}

export function useQuiz() {
  const [session, setSession, clearSession] = useLocalStorage<QuizSession | null>(SESSION_KEY, null);
  const [view, setView] = useState<'start' | 'quiz' | 'result'>('start');

  const questionMap = useMemo(() => {
    const m = new Map<string, Question>();
    ALL_QUESTIONS.forEach((q) => m.set(q.id, q));
    return m;
  }, []);

  const activeQuestions = useMemo<Question[]>(() => {
    if (!session) return [];
    return session.questionIds
      .map((id) => questionMap.get(id))
      .filter((q): q is Question => Boolean(q));
  }, [session, questionMap]);

  const currentIndex = session?.currentIndex ?? 0;
  const currentQuestion = activeQuestions[currentIndex];
  const currentId = currentQuestion?.id;
  const currentAnswer = currentId ? session?.answers[currentId] : undefined;
  const total = activeQuestions.length;
  const isLast = total > 0 && currentIndex >= total - 1;

  const patchAnswer = useCallback(
    (id: string, patch: Partial<AnswerState>) => {
      setSession((prev) => {
        if (!prev) return prev;
        const cur = prev.answers[id] ?? emptyAnswer(id);
        return { ...prev, answers: { ...prev.answers, [id]: { ...cur, ...patch } } };
      });
    },
    [setSession],
  );

  const start = useCallback(
    (config: QuizConfig) => {
      const ids = buildQuestionIds(config);
      const answers: Record<string, AnswerState> = {};
      ids.forEach((id) => {
        answers[id] = emptyAnswer(id);
      });
      setSession({ status: 'quiz', config, questionIds: ids, currentIndex: 0, answers });
      setView('quiz');
    },
    [setSession],
  );

  const resume = useCallback(() => {
    if (!session) return;
    setView(session.status === 'result' ? 'result' : 'quiz');
  }, [session]);

  const backToStart = useCallback(() => setView('start'), []);

  const revealHint = useCallback(() => {
    if (currentId) patchAnswer(currentId, { hintUsed: true });
  }, [currentId, patchAnswer]);

  const submitMultipla = useCallback(
    (optionId: string) => {
      if (currentId) patchAnswer(currentId, { selectedOptionId: optionId, submitted: true });
    },
    [currentId, patchAnswer],
  );

  const submitVf = useCallback(
    (answer: boolean) => {
      if (currentId) patchAnswer(currentId, { selectedAnswer: answer, submitted: true });
    },
    [currentId, patchAnswer],
  );

  const submitDiscursiva = useCallback(
    (text: string) => {
      if (currentId && currentQuestion && currentQuestion.type === 'discursiva') {
        patchAnswer(currentId, {
          text,
          submitted: true,
          keyPointsChecked:
            currentAnswer?.keyPointsChecked ??
            new Array<boolean>(currentQuestion.keyPoints.length).fill(false),
        });
      }
    },
    [currentId, currentQuestion, currentAnswer, patchAnswer],
  );

  const setSelfAssessment = useCallback(
    (sa: SelfAssessment) => {
      if (currentId) patchAnswer(currentId, { selfAssessment: sa });
    },
    [currentId, patchAnswer],
  );

  const toggleKeyPoint = useCallback(
    (index: number) => {
      if (!currentId || !currentQuestion || currentQuestion.type !== 'discursiva') return;
      const len = currentQuestion.keyPoints.length;
      const base = currentAnswer?.keyPointsChecked ?? new Array<boolean>(len).fill(false);
      const next = base.slice();
      next[index] = !next[index];
      patchAnswer(currentId, { keyPointsChecked: next });
    },
    [currentId, currentQuestion, currentAnswer, patchAnswer],
  );

  const goNext = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      const last = prev.currentIndex >= prev.questionIds.length - 1;
      if (last) return { ...prev, status: 'result' };
      return { ...prev, currentIndex: prev.currentIndex + 1 };
    });
    if (isLast) setView('result');
  }, [setSession, isLast]);

  const results = useMemo<QuizResultItem[]>(
    () =>
      activeQuestions.map((q) => {
        const answer = session?.answers[q.id];
        return { question: q, answer, score: questionScore(q, answer), wrong: isWrong(q, answer) };
      }),
    [activeQuestions, session],
  );

  const wrongCount = results.filter((r) => r.wrong).length;

  const restartAll = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      const answers: Record<string, AnswerState> = {};
      prev.questionIds.forEach((id) => {
        answers[id] = emptyAnswer(id);
      });
      return { ...prev, status: 'quiz', currentIndex: 0, answers };
    });
    setView('quiz');
  }, [setSession]);

  const restartWrongOnly = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      const wrongIds = prev.questionIds.filter((id) => {
        const q = questionMap.get(id);
        return q ? isWrong(q, prev.answers[id]) : false;
      });
      if (wrongIds.length === 0) return prev;
      const answers: Record<string, AnswerState> = {};
      wrongIds.forEach((id) => {
        answers[id] = emptyAnswer(id);
      });
      return { ...prev, status: 'quiz', questionIds: wrongIds, currentIndex: 0, answers };
    });
    setView('quiz');
  }, [setSession, questionMap]);

  const hasSavedSession = Boolean(session && session.status === 'quiz');
  const savedProgress = session
    ? { index: session.currentIndex + 1, total: session.questionIds.length }
    : null;

  return {
    view,
    session,
    hasSavedSession,
    savedProgress,
    currentQuestion,
    currentAnswer,
    currentNumber: currentIndex + 1,
    total,
    isLast,
    start,
    resume,
    backToStart,
    revealHint,
    submitMultipla,
    submitVf,
    submitDiscursiva,
    setSelfAssessment,
    toggleKeyPoint,
    goNext,
    results,
    wrongCount,
    restartAll,
    restartWrongOnly,
    clearSession,
  };
}
