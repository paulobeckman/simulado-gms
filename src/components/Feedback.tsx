import { Check } from 'lucide-react';
import type { AnswerState, Question, SelfAssessment } from '../types';
import { questionScore } from '../hooks/useQuiz';

interface Props {
  question: Question;
  answer: AnswerState;
  onToggleKeyPoint: (index: number) => void;
  onSetSelfAssessment: (sa: SelfAssessment) => void;
}

const selfOptions: { value: SelfAssessment; label: string }[] = [
  { value: 'acertei', label: 'Acertei' },
  { value: 'parcial', label: 'Parcial' },
  { value: 'errei', label: 'Errei' },
];

export function Feedback({ question, answer, onToggleKeyPoint, onSetSelfAssessment }: Props) {
  if (question.type === 'discursiva') {
    const checked = answer.keyPointsChecked ?? [];

    return (
      <div className="space-y-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Sua resposta
          </h3>
          <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">{answer.text}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Resposta modelo
          </h3>
          <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">{question.modelAnswer}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Marque os pontos que a sua resposta contemplou
          </h3>
          <ul className="mt-2 space-y-2">
            {question.keyPoints.map((point, index) => (
              <li key={point}>
                <button
                  type="button"
                  onClick={() => onToggleKeyPoint(index)}
                  className="flex w-full items-start gap-2 rounded-md border border-neutral-200 p-2 text-left text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <span
                    className={
                      checked[index]
                        ? 'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-indigo-600 bg-indigo-600 text-white dark:border-indigo-500 dark:bg-indigo-500'
                        : 'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-neutral-300 dark:border-neutral-700'
                    }
                  >
                    {checked[index] ? <Check size={12} /> : null}
                  </span>
                  <span>{point}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Como você avalia sua resposta?
          </h3>
          <div className="mt-2 flex gap-2">
            {selfOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSetSelfAssessment(opt.value)}
                className={
                  answer.selfAssessment === opt.value
                    ? 'flex-1 rounded-lg border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-medium text-white dark:border-indigo-500 dark:bg-indigo-500'
                    : 'flex-1 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900'
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
          {!answer.selfAssessment && (
            <p className="mt-2 text-xs text-neutral-400">Escolha uma opção para avançar.</p>
          )}
        </div>
      </div>
    );
  }

  const correct = questionScore(question, answer) === 1;

  return (
    <div
      className={
        correct
          ? 'rounded-lg border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950'
          : 'rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950'
      }
    >
      <p
        className={
          correct
            ? 'font-bold text-emerald-700 dark:text-emerald-300'
            : 'font-bold text-red-700 dark:text-red-300'
        }
      >
        {correct ? 'Correto.' : 'Não foi dessa vez.'}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
        {question.explanation}
      </p>
    </div>
  );
}
