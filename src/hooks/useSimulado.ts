import { useCallback, useMemo } from 'react';
import type { AnswerState, Question, SelfAssessment } from '../types';
import { isWrong, questionScore, shuffle, type QuizResultItem } from './useQuiz';
import { useLocalStorage } from './useLocalStorage';

interface SimuladoState {
  questionIds: string[];
  currentIndex: number;
  answers: Record<string, AnswerState>;
  finished: boolean;
}

function emptyAnswer(questionId: string): AnswerState {
  return { questionId, hintUsed: false, submitted: false };
}

function initialState(questions: Question[]): SimuladoState {
  const ids = shuffle(questions.map((q) => q.id));
  const answers: Record<string, AnswerState> = {};
  questions.forEach((q) => {
    answers[q.id] = emptyAnswer(q.id);
  });
  return { questionIds: ids, currentIndex: 0, answers, finished: false };
}

/**
 * Estado de uma prova simulada sobre uma lista fixa de questões.
 * Ordem sorteada, sem dica, sem correção imediata: a correção e a
 * autoavaliação das discursivas acontecem só na tela de resultado.
 * Progresso salvo em `storageKey`.
 */
export function useSimulado(questions: Question[], storageKey: string) {
  const [stored, setStored, clearStored] = useLocalStorage<SimuladoState | null>(storageKey, null);

  const questionMap = useMemo(() => {
    const m = new Map<string, Question>();
    questions.forEach((q) => m.set(q.id, q));
    return m;
  }, [questions]);

  const state = stored ?? initialState(questions);

  const orderedQuestions = useMemo(
    () => state.questionIds.map((id) => questionMap.get(id)).filter((q): q is Question => Boolean(q)),
    [state.questionIds, questionMap],
  );

  const currentIndex = Math.min(state.currentIndex, Math.max(0, orderedQuestions.length - 1));
  const currentQuestion = orderedQuestions[currentIndex];
  const currentId = currentQuestion?.id;
  const currentAnswer = currentId ? state.answers[currentId] : undefined;
  const total = orderedQuestions.length;
  const isLast = total > 0 && currentIndex >= total - 1;

  const patchAnswer = useCallback(
    (id: string, patch: Partial<AnswerState>) => {
      setStored((prev) => {
        const base = prev ?? initialState(questions);
        const cur = base.answers[id] ?? emptyAnswer(id);
        return { ...base, answers: { ...base.answers, [id]: { ...cur, ...patch } } };
      });
    },
    [setStored, questions],
  );

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
          keyPointsChecked: new Array<boolean>(currentQuestion.keyPoints.length).fill(false),
        });
      }
    },
    [currentId, currentQuestion, patchAnswer],
  );

  const goNext = useCallback(() => {
    setStored((prev) => {
      const base = prev ?? initialState(questions);
      if (base.currentIndex >= base.questionIds.length - 1) return { ...base, finished: true };
      return { ...base, currentIndex: base.currentIndex + 1 };
    });
  }, [setStored, questions]);

  const restart = useCallback(() => {
    setStored(initialState(questions));
  }, [setStored, questions]);

  // Usados na tela de resultado, onde todas as questões são revisadas ao mesmo tempo,
  // então a autoavaliação precisa ser endereçada por id em vez de "a atual".
  const setSelfAssessmentFor = useCallback(
    (id: string, sa: SelfAssessment) => patchAnswer(id, { selfAssessment: sa }),
    [patchAnswer],
  );

  const toggleKeyPointFor = useCallback(
    (id: string, index: number) => {
      const q = questionMap.get(id);
      if (!q || q.type !== 'discursiva') return;
      const cur = state.answers[id];
      const len = q.keyPoints.length;
      const arr = (cur?.keyPointsChecked ?? new Array<boolean>(len).fill(false)).slice();
      arr[index] = !arr[index];
      patchAnswer(id, { keyPointsChecked: arr });
    },
    [patchAnswer, questionMap, state.answers],
  );

  const results = useMemo<QuizResultItem[]>(
    () =>
      orderedQuestions.map((q) => {
        const answer = state.answers[q.id];
        return { question: q, answer, score: questionScore(q, answer), wrong: isWrong(q, answer) };
      }),
    [orderedQuestions, state],
  );

  const answeredCount = results.filter((r) => r.answer?.submitted).length;
  const hasProgress = !state.finished && answeredCount > 0;

  return {
    currentQuestion,
    currentAnswer,
    currentNumber: currentIndex + 1,
    total,
    isLast,
    finished: state.finished,
    hasProgress,
    answeredCount,
    submitMultipla,
    submitVf,
    submitDiscursiva,
    setSelfAssessmentFor,
    toggleKeyPointFor,
    goNext,
    restart,
    results,
    clearStored,
  };
}
