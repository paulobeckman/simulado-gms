import { ArrowLeft, RotateCcw, Target } from 'lucide-react';
import type { QuizResultItem } from '../hooks/useQuiz';
import type { Area, QuestionType } from '../types';
import {
  areaLabel,
  formatPercent,
  formatScore,
  selfAssessmentLabel,
  typeLabel,
} from '../lib/format';

interface Props {
  results: QuizResultItem[];
  wrongCount: number;
  onRedoAll: () => void;
  onRedoWrong: () => void;
  onBackToStart: () => void;
}

function Ring({ percent }: { percent: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(100, percent)) / 100) * circumference;

  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 shrink-0">
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        strokeWidth="10"
        className="stroke-neutral-200 dark:stroke-neutral-800"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        className="stroke-indigo-600 dark:stroke-indigo-500"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"
      />
      <text
        x="60"
        y="67"
        textAnchor="middle"
        className="fill-neutral-900 text-2xl font-semibold dark:fill-neutral-100"
      >
        {formatPercent(percent)}
      </text>
    </svg>
  );
}

function Bar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
      <div
        className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
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

export function ResultScreen({ results, wrongCount, onRedoAll, onRedoWrong, onBackToStart }: Props) {
  const total = results.length;
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const percent = total > 0 ? (totalScore / total) * 100 : 0;
  const hintsUsed = results.filter((r) => r.answer?.hintUsed).length;

  const areaStats = (['historia', 'apologetica'] as Area[])
    .map((area) => {
      const items = results.filter((r) => r.question.area === area);
      return { area, count: items.length, score: items.reduce((s, r) => s + r.score, 0) };
    })
    .filter((s) => s.count > 0);

  const typeStats = (['multipla', 'vf', 'discursiva'] as QuestionType[])
    .map((type) => {
      const items = results.filter((r) => r.question.type === type);
      return { type, count: items.length, score: items.reduce((s, r) => s + r.score, 0) };
    })
    .filter((s) => s.count > 0);

  const topicErrors = Object.entries(
    results.reduce<Record<string, number>>((acc, r) => {
      if (r.wrong) acc[r.question.topic] = (acc[r.question.topic] ?? 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);

  const secondaryButton =
    'inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900';

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800 sm:flex-row sm:gap-8">
        <Ring percent={percent} />
        <div>
          <h2 className="text-xl font-semibold">Resultado</h2>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            Você acertou {formatScore(totalScore)} de {total} questões.
          </p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {hintsUsed} {hintsUsed === 1 ? 'questão precisou' : 'questões precisaram'} de dica.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h3 className="font-semibold">Desempenho por área</h3>
        {areaStats.map((s) => (
          <div key={s.area} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{areaLabel(s.area)}</span>
              <span className="text-neutral-500 dark:text-neutral-400">
                {formatScore(s.score)} / {s.count}
              </span>
            </div>
            <Bar value={(s.score / s.count) * 100} />
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold">Desempenho por tipo de questão</h3>
        {typeStats.map((s) => (
          <div key={s.type} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{typeLabel(s.type)}</span>
              <span className="text-neutral-500 dark:text-neutral-400">
                {formatScore(s.score)} / {s.count}
              </span>
            </div>
            <Bar value={(s.score / s.count) * 100} />
          </div>
        ))}
      </section>

      {topicErrors.length > 0 && (
        <section className="space-y-2">
          <h3 className="font-semibold">Tópicos com mais erros</h3>
          <ul className="space-y-2">
            {topicErrors.map(([topic, count]) => (
              <li
                key={topic}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
              >
                <span className="flex items-center gap-2">
                  <Target size={14} className="text-neutral-400" />
                  {topic}
                </span>
                <span className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                  {count} {count === 1 ? 'erro' : 'erros'}
                  <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    Estude primeiro
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-2">
        <h3 className="font-semibold">Revisão completa</h3>
        {results.map((item, i) => (
          <ReviewItem key={item.question.id} item={item} index={i + 1} />
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onRedoAll}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          <RotateCcw size={16} />
          Refazer tudo
        </button>
        <button
          type="button"
          onClick={onRedoWrong}
          disabled={wrongCount === 0}
          className={secondaryButton}
        >
          <RotateCcw size={16} />
          Refazer só as que errei
        </button>
        <button type="button" onClick={onBackToStart} className={secondaryButton}>
          <ArrowLeft size={16} />
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
