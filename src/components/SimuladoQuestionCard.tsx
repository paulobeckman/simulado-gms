import { useState } from 'react';
import type { AnswerState, Question } from '../types';
import { MultipleChoice } from './MultipleChoice';
import { TrueFalse } from './TrueFalse';
import { OpenAnswer } from './OpenAnswer';

interface Props {
  question: Question;
  answer: AnswerState | undefined;
  isLast: boolean;
  onSubmitMultipla: (id: string) => void;
  onSubmitVf: (value: boolean) => void;
  onSubmitDiscursiva: (text: string) => void;
  onNext: () => void;
}

const ERROR_MESSAGE = 'Escolha uma resposta antes de continuar';
const primaryButton =
  'inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600';

/**
 * Card de questão para a prova simulada: sem dica e sem correção imediata.
 * Ao avançar, a resposta é registrada e a próxima questão aparece direto;
 * a correção só é exibida na tela de resultado, ao final da prova.
 */
export function SimuladoQuestionCard({
  question,
  answer,
  isLast,
  onSubmitMultipla,
  onSubmitVf,
  onSubmitDiscursiva,
  onNext,
}: Props) {
  const [draftOption, setDraftOption] = useState<string | null>(answer?.selectedOptionId ?? null);
  const [draftVf, setDraftVf] = useState<boolean | null>(answer?.selectedAnswer ?? null);
  const [draftText, setDraftText] = useState<string>(answer?.text ?? '');
  const [error, setError] = useState<string | null>(null);

  const handleAdvance = () => {
    if (question.type === 'multipla') {
      if (!draftOption) {
        setError(ERROR_MESSAGE);
        return;
      }
      onSubmitMultipla(draftOption);
    } else if (question.type === 'vf') {
      if (draftVf === null) {
        setError(ERROR_MESSAGE);
        return;
      }
      onSubmitVf(draftVf);
    } else {
      if (draftText.trim().length < 20) {
        setError('Escreva uma resposta antes de continuar');
        return;
      }
      onSubmitDiscursiva(draftText);
    }
    onNext();
  };

  const advanceDisabled =
    (question.type === 'multipla' && !draftOption) ||
    (question.type === 'vf' && draftVf === null) ||
    (question.type === 'discursiva' && draftText.trim().length === 0);

  return (
    <div className="space-y-5 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:p-6">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {question.topic}
        </span>
      </div>

      <p className="text-base leading-relaxed text-neutral-900 dark:text-neutral-100">
        {question.prompt}
      </p>

      {question.type === 'multipla' && (
        <MultipleChoice
          options={question.options}
          draftId={draftOption}
          submitted={false}
          correctId={question.correctOptionId}
          onSelect={(id) => {
            setDraftOption(id);
            setError(null);
          }}
        />
      )}

      {question.type === 'vf' && (
        <TrueFalse
          draft={draftVf}
          submitted={false}
          correct={question.correctAnswer}
          onSelect={(value) => {
            setDraftVf(value);
            setError(null);
          }}
        />
      )}

      {question.type === 'discursiva' && (
        <OpenAnswer
          value={draftText}
          submitted={false}
          onChange={(value) => {
            setDraftText(value);
            setError(null);
          }}
        />
      )}

      {error && <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>}

      <button type="button" onClick={handleAdvance} disabled={advanceDisabled} className={primaryButton}>
        {isLast ? 'Finalizar prova' : 'Próxima questão'}
      </button>
    </div>
  );
}
