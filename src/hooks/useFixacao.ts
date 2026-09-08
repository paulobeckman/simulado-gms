import { useCallback, useMemo } from 'react';
import type { AnswerState, Question, SelfAssessment } from '../types';
import { isWrong, questionScore, type QuizResultItem } from './useQuiz';
import { useLocalStorage } from './useLocalStorage';

interface FixacaoState {
  currentIndex: number;
  answers: Record<string, AnswerState>;
  finished: boolean;
}

function emptyAnswer(questionId: string): AnswerState {
  return { questionId, hintUsed: false, submitted: false };
}

function initialState(questions: Question[]): FixacaoState {
  const answers: Record<string, AnswerState> = {};
  questions.forEach((q) => {
    answers[q.id] = emptyAnswer(q.id);
  });
  return { currentIndex: 0, answers, finished: false };
}

/**
 * Estado de uma rodada de fixação sobre uma lista fixa de questões.
 * Ordem sequencial, dica disponível, correção imediata. Progresso salvo em `storageKey`.
 * Monte o componente que usa este hook com `key={storageKey}` para reiniciar ao trocar de parte.
 */
export function useFixacao(questions: Question[], storageKey: string) {
  const [stored, setStored, clearStored] = useLocalStorage<FixacaoState | null>(storageKey, null);

  const state = stored ?? initialState(questions);

  const currentIndex = Math.min(state.currentIndex, Math.max(0, questions.length - 1));
  const currentQuestion = questions[currentIndex];
  const currentId = currentQuestion?.id;
  const currentAnswer = currentId ? state.answers[currentId] : undefined;
  const total = questions.length;
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
      const arr = (currentAnswer?.keyPointsChecked ?? new Array<boolean>(len).fill(false)).slice();
      arr[index] = !arr[index];
      patchAnswer(currentId, { keyPointsChecked: arr });
    },
    [currentId, currentQuestion, currentAnswer, patchAnswer],
  );

  const goNext = useCallback(() => {
    setStored((prev) => {
      const base = prev ?? initialState(questions);
      if (base.currentIndex >= questions.length - 1) return { ...base, finished: true };
      return { ...base, currentIndex: base.currentIndex + 1 };
    });
  }, [setStored, questions]);

  const restart = useCallback(() => {
    setStored(initialState(questions));
  }, [setStored, questions]);

  const results = useMemo<QuizResultItem[]>(
    () =>
      questions.map((q) => {
        const answer = state.answers[q.id];
        return { question: q, answer, score: questionScore(q, answer), wrong: isWrong(q, answer) };
      }),
    [questions, state],
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
    revealHint,
    submitMultipla,
    submitVf,
    submitDiscursiva,
    setSelfAssessment,
    toggleKeyPoint,
    goNext,
    restart,
    results,
    clearStored,
  };
}
