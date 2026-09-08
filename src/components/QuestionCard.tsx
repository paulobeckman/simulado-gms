import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import type { AnswerState, Question, SelfAssessment } from '../types';
import { areaLabel } from '../lib/format';
import { MultipleChoice } from './MultipleChoice';
import { TrueFalse } from './TrueFalse';
import { OpenAnswer } from './OpenAnswer';
import { Feedback } from './Feedback';

interface Props {
  question: Question;
  answer: AnswerState | undefined;
  isLast: boolean;
  onRevealHint: () => void;
  onSubmitMultipla: (id: string) => void;
  onSubmitVf: (value: boolean) => void;
  onSubmitDiscursiva: (text: string) => void;
  onSetSelfAssessment: (sa: SelfAssessment) => void;
  onToggleKeyPoint: (index: number) => void;
  onNext: () => void;
}

const ERROR_MESSAGE = 'Escreva uma resposta antes de continuar';
const primaryButton =
  'inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600';

export function QuestionCard({
  question,
  answer,
  isLast,
  onRevealHint,
  onSubmitMultipla,
  onSubmitVf,
  onSubmitDiscursiva,
  onSetSelfAssessment,
  onToggleKeyPoint,
  onNext,
}: Props) {
  const submitted = answer?.submitted === true;
  const hintUsed = answer?.hintUsed === true;

  const [draftOption, setDraftOption] = useState<string | null>(answer?.selectedOptionId ?? null);
  const [draftVf, setDraftVf] = useState<boolean | null>(answer?.selectedAnswer ?? null);
  const [draftText, setDraftText] = useState<string>(answer?.text ?? '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
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
        setError(ERROR_MESSAGE);
        return;
      }
      onSubmitDiscursiva(draftText);
    }
  };

  // O botão fica desabilitado enquanto não houver nenhuma resposta iniciada.
  // Nas discursivas, basta um caractere para habilitar; a checagem de tamanho
  // mínimo acontece na validação do clique.
  const submitDisabled =
    (question.type === 'multipla' && !draftOption) ||
    (question.type === 'vf' && draftVf === null) ||
    (question.type === 'discursiva' && draftText.trim().length === 0);

  const nextDisabled = question.type === 'discursiva' && !answer?.selfAssessment;

  return (
    <div className="space-y-5 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:p-6">
      <div className="flex flex-wrap gap-2">
        {question.area && (
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            {areaLabel(question.area)}
          </span>
        )}
        <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {question.topic}
        </span>
      </div>

      <p className="text-base leading-relaxed text-neutral-900 dark:text-neutral-100">
        {question.prompt}
      </p>

      <div>
        {!hintUsed && !submitted && (
          <button
            type="button"
            onClick={onRevealHint}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Lightbulb size={16} />
            Ver dica
          </button>
        )}
        {hintUsed && (
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm leading-relaxed text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
            {question.hint}
          </div>
        )}
      </div>

      {question.type === 'multipla' && (
        <MultipleChoice
          options={question.options}
          draftId={draftOption}
          submitted={submitted}
          chosenId={answer?.selectedOptionId}
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
          submitted={submitted}
          chosen={answer?.selectedAnswer}
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
          submitted={submitted}
          onChange={(value) => {
            setDraftText(value);
            setError(null);
          }}
        />
      )}

      {error && <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>}

      {!submitted && (
        <button type="button" onClick={handleSubmit} disabled={submitDisabled} className={primaryButton}>
          Responder
        </button>
      )}

      {submitted && answer && (
        <div className="space-y-5">
          <Feedback
            question={question}
            answer={answer}
            onToggleKeyPoint={onToggleKeyPoint}
            onSetSelfAssessment={onSetSelfAssessment}
          />
          <button type="button" onClick={onNext} disabled={nextDisabled} className={primaryButton}>
            {isLast ? 'Ver resultado' : 'Próxima questão'}
          </button>
        </div>
      )}
    </div>
  );
}
