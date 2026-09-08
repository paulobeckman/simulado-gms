import { useEffect } from 'react';
import { ArrowLeft, BookOpenText, FileText, RotateCcw } from 'lucide-react';
import type { QuizResultItem } from '../hooks/useQuiz';
import type { FixacaoPart } from '../data/subjects';
import { selfAssessmentLabel } from '../lib/format';

interface Props {
  part: FixacaoPart;
  results: QuizResultItem[];
  unlockKey: string;
  onRedo: () => void;
  onBack: () => void;
}

function userAnswerText(item: QuizResultItem): string {
  const { question: q, answer: a } = item;
  if (!a || !a.submitted) return 'Não respondida';
  if (q.type === 'multipla') {
    const opt = q.options.find((o) => o.id === a.selectedOptionId);
    return opt ? `${opt.id.toUpperCase()}) ${opt.text}` : 'Não respondida';
  }
  if (q.type === 'vf') {
    if (a.selectedAnswer === undefined) return 'Não respondida';
    return a.selectedAnswer ? 'Verdadeiro' : 'Falso';
  }
  const assessment = a.selfAssessment
    ? ` (autoavaliação: ${selfAssessmentLabel(a.selfAssessment)})`
    : '';
  return `${a.text ?? ''}${assessment}`;
}

function correctAnswerText(item: QuizResultItem): string {
  const q = item.question;
  if (q.type === 'multipla') {
    const opt = q.options.find((o) => o.id === q.correctOptionId);
    return opt ? `${opt.id.toUpperCase()}) ${opt.text}` : '';
  }
  if (q.type === 'vf') return q.correctAnswer ? 'Verdadeiro' : 'Falso';
  return q.modelAnswer;
}

function ReviewItem({ item, index }: { item: QuizResultItem; index: number }) {
  const { question: q } = item;
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
        <span className="text-neutral-400">{index}.</span> {q.prompt}{' '}
        <span className={`text-xs font-semibold ${badgeClass}`}>[{badgeText}]</span>
      </summary>
      <div className="mt-3 space-y-2 text-sm leading-relaxed">
        <p>
          <span className="font-semibold text-neutral-500 dark:text-neutral-400">Sua resposta: </span>
          <span className="whitespace-pre-wrap">{userAnswerText(item)}</span>
        </p>
        <p>
          <span className="font-semibold text-neutral-500 dark:text-neutral-400">
            {q.type === 'discursiva' ? 'Resposta modelo: ' : 'Resposta correta: '}
          </span>
          <span className="whitespace-pre-wrap">{correctAnswerText(item)}</span>
        </p>
        {q.type !== 'discursiva' && (
          <p>
            <span className="font-semibold text-neutral-500 dark:text-neutral-400">Explicação: </span>
            {q.explanation}
          </p>
        )}
      </div>
    </details>
  );
}

export function FixacaoResult({ part, results, unlockKey, onRedo, onBack }: Props) {
  const total = results.length;
  const score = results.reduce((sum, r) => sum + r.score, 0);
  const percent = total > 0 ? (score / total) * 100 : 0;
  const roundedPercent = Math.round(percent);
  const threshold = Math.round((part.passRatio ?? 0.6) * 100);
  const passed = percent >= threshold;

  const wrongTopics = Array.from(
    new Set(results.filter((r) => r.wrong).map((r) => r.question.topic)),
  );

  useEffect(() => {
    if (!passed) return;
    try {
      window.localStorage.setItem(unlockKey, '1');
    } catch {
      /* ignora */
    }
  }, [passed, unlockKey]);

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
          {passed ? 'Conteúdo da aula liberado' : 'Ainda não foi dessa vez'}
        </h2>
        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">
          Você acertou {roundedPercent}% ({total === 0 ? 0 : Number(score.toFixed(1))} de {total}) em{' '}
          {part.lesson}.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {passed
            ? `Você atingiu os ${threshold}% necessários. O material de estudo está disponível abaixo.`
            : `É preciso acertar pelo menos ${threshold}% para liberar o conteúdo da aula. Refaça as questões e tente de novo.`}
        </p>

        {!passed && (
          <button type="button" onClick={onRedo} className={`mt-4 ${primaryButton}`}>
            <RotateCcw size={16} />
            Responder novamente
          </button>
        )}
      </div>

      {passed && part.material && (
        <section className="space-y-3">
          <h3 className="font-semibold">Material da aula</h3>
          <a
            href={part.material.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            <FileText size={20} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span>
              <span className="block text-sm font-medium">{part.material.title}</span>
              <span className="block text-xs text-neutral-500 dark:text-neutral-400">
                Abrir em uma nova aba
              </span>
            </span>
          </a>
        </section>
      )}

      {passed && wrongTopics.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <BookOpenText size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-semibold">Onde revisar no material</h3>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Você errou questões destes assuntos. Estude estes trechos antes de refazer.
          </p>
          <ul className="space-y-2">
            {wrongTopics.map((topic) => (
              <li
                key={topic}
                className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800"
              >
                <span className="font-medium">{topic}</span>
                {part.studyMap?.[topic] && (
                  <span className="mt-1 block text-neutral-600 dark:text-neutral-300">
                    {part.studyMap[topic]}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!passed && wrongTopics.length > 0 && (
        <section className="space-y-2">
          <h3 className="font-semibold">Assuntos para focar</h3>
          <div className="flex flex-wrap gap-2">
            {wrongTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-2">
        <h3 className="font-semibold">Revisão das questões</h3>
        {results.map((item, i) => (
          <ReviewItem key={item.question.id} item={item} index={i + 1} />
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onRedo} className={primaryButton}>
          <RotateCcw size={16} />
          Refazer esta parte
        </button>
        <button type="button" onClick={onBack} className={secondaryButton}>
          <ArrowLeft size={16} />
          Voltar ao assunto
        </button>
      </div>
    </div>
  );
}
