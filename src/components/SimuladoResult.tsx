import { ArrowLeft, Download, RotateCcw } from 'lucide-react';
import type { QuizResultItem } from '../hooks/useQuiz';
import type { SelfAssessment } from '../types';
import { Feedback } from './Feedback';

interface Props {
  results: QuizResultItem[];
  /** Fração mínima de acerto para liberar o material. Padrão: 0.6 */
  passRatio?: number;
  material?: { title: string; url: string };
  onSetSelfAssessment: (questionId: string, sa: SelfAssessment) => void;
  onToggleKeyPoint: (questionId: string, index: number) => void;
  onRedo: () => void;
  onBack: () => void;
}

function ReviewItem({
  item,
  index,
  onSetSelfAssessment,
  onToggleKeyPoint,
}: {
  item: QuizResultItem;
  index: number;
  onSetSelfAssessment: (sa: SelfAssessment) => void;
  onToggleKeyPoint: (i: number) => void;
}) {
  const ok = item.score === 1;
  const partial = item.score > 0 && item.score < 1;
  const badgeClass = ok
    ? 'text-emerald-600 dark:text-emerald-400'
    : partial
      ? 'text-neutral-500 dark:text-neutral-400'
      : 'text-red-600 dark:text-red-400';
  const badgeText = ok ? 'Acerto' : partial ? 'Parcial' : 'Erro';

  return (
    <details className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
      <summary className="cursor-pointer text-sm font-medium leading-relaxed">
        <span className="text-neutral-400">{index}.</span> {item.question.prompt}{' '}
        <span className={`text-xs font-semibold ${badgeClass}`}>[{badgeText}]</span>
      </summary>
      <div className="mt-3">
        {item.answer && (
          <Feedback
            question={item.question}
            answer={item.answer}
            onToggleKeyPoint={onToggleKeyPoint}
            onSetSelfAssessment={onSetSelfAssessment}
          />
        )}
      </div>
    </details>
  );
}

export function SimuladoResult({
  results,
  passRatio,
  material,
  onSetSelfAssessment,
  onToggleKeyPoint,
  onRedo,
  onBack,
}: Props) {
  const total = results.length;
  const score = results.reduce((sum, r) => sum + r.score, 0);
  const percent = total > 0 ? (score / total) * 100 : 0;
  const roundedPercent = Math.round(percent);
  const threshold = Math.round((passRatio ?? 0.6) * 100);
  const passed = percent >= threshold;

  const secondaryButton =
    'inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900';
  const primaryButton =
    'inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600';

  return (
    <div className="space-y-8">
      <div
        className={
          passed
            ? 'rounded-xl border border-emerald-300 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950'
            : 'rounded-xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950'
        }
      >
        <h2 className="text-lg font-semibold">
          {passed ? 'Material da prova liberado' : 'Ainda não foi dessa vez'}
        </h2>
        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">
          Você acertou {roundedPercent}% ({Number(score.toFixed(1))} de {total}) questões.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {passed
            ? `Você atingiu os ${threshold}% necessários. O material de revisão está disponível abaixo.`
            : `É preciso acertar pelo menos ${threshold}% para liberar o material de revisão. Nas discursivas, compare sua resposta com a resposta modelo e marque os pontos-chave para se autoavaliar — a nota é atualizada na hora.`}
        </p>

        {!passed && (
          <button type="button" onClick={onRedo} className={`mt-4 ${primaryButton}`}>
            <RotateCcw size={16} />
            Refazer a prova
          </button>
        )}
      </div>

      {passed && material && (
        <section className="space-y-3">
          <h3 className="font-semibold">Material da prova</h3>
          <a
            href={material.url}
            download
            className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            <Download size={20} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span>
              <span className="block text-sm font-medium">{material.title}</span>
              <span className="block text-xs text-neutral-500 dark:text-neutral-400">
                Baixar o PDF
              </span>
            </span>
          </a>
        </section>
      )}

      <section className="space-y-2">
        <h3 className="font-semibold">Revisão das questões</h3>
        {results.map((item, i) => (
          <ReviewItem
            key={item.question.id}
            item={item}
            index={i + 1}
            onSetSelfAssessment={(sa) => onSetSelfAssessment(item.question.id, sa)}
            onToggleKeyPoint={(index) => onToggleKeyPoint(item.question.id, index)}
          />
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onRedo} className={primaryButton}>
          <RotateCcw size={16} />
          Refazer a prova
        </button>
        <button type="button" onClick={onBack} className={secondaryButton}>
          <ArrowLeft size={16} />
          Voltar ao assunto
        </button>
      </div>
    </div>
  );
}
