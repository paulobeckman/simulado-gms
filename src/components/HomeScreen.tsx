import { ArrowRight, BookOpen, GraduationCap, RotateCcw } from 'lucide-react';
import { modeInfo, subjects, type QuizMode, type Subject } from '../data/subjects';

interface Props {
  hasSavedSession: boolean;
  savedProgress: { index: number; total: number } | null;
  onOpenLegado: () => void;
  onResume: () => void;
  onSelectMode: (subjectId: string, mode: QuizMode) => void;
}

function StatusBadge({ status }: { status: Subject['status'] }) {
  if (status === 'disponivel') {
    return (
      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
        Disponível
      </span>
    );
  }
  return (
    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
      Em breve
    </span>
  );
}

function CardShell({ subject, children }: { subject: Subject; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug">{subject.title}</h3>
          <StatusBadge status={subject.status} />
        </div>
        {subject.lesson && (
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {subject.lesson}
          </p>
        )}
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {subject.subtitle}
        </p>
      </div>
      {children}
    </div>
  );
}

function LegadoCard({
  subject,
  hasSavedSession,
  savedProgress,
  onOpen,
  onResume,
}: {
  subject: Subject;
  hasSavedSession: boolean;
  savedProgress: { index: number; total: number } | null;
  onOpen: () => void;
  onResume: () => void;
}) {
  return (
    <CardShell subject={subject}>
      {hasSavedSession && savedProgress && (
        <button
          type="button"
          onClick={onResume}
          className="inline-flex items-center gap-2 self-start rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900"
        >
          <RotateCcw size={16} />
          Continuar de onde parei (questão {savedProgress.index} de {savedProgress.total})
        </button>
      )}
      <button
        type="button"
        onClick={onOpen}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        Abrir assunto
        <ArrowRight size={16} />
      </button>
    </CardShell>
  );
}

function ModeButton({
  mode,
  enabled,
  onClick,
}: {
  mode: QuizMode;
  enabled: boolean;
  onClick: () => void;
}) {
  const Icon = mode === 'fixacao' ? BookOpen : GraduationCap;
  return (
    <button
      type="button"
      disabled={!enabled}
      onClick={onClick}
      className="flex w-full items-start gap-3 rounded-lg border border-neutral-200 p-3 text-left transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent dark:border-neutral-800 dark:hover:bg-neutral-900 dark:disabled:hover:bg-transparent"
    >
      <Icon size={18} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium">{modeInfo[mode].label}</span>
          {!enabled && (
            <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              Em breve
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-xs text-neutral-500 dark:text-neutral-400">
          {modeInfo[mode].description}
        </span>
      </span>
    </button>
  );
}

function ModularCard({
  subject,
  onSelectMode,
}: {
  subject: Subject;
  onSelectMode: (subjectId: string, mode: QuizMode) => void;
}) {
  const fixacaoEnabled =
    subject.status === 'disponivel' && (subject.fixacaoParts?.length ?? 0) > 0;
  const simuladoEnabled = subject.simulado?.status === 'disponivel';

  return (
    <CardShell subject={subject}>
      <div className="mt-auto space-y-2">
        <ModeButton
          mode="fixacao"
          enabled={fixacaoEnabled}
          onClick={() => onSelectMode(subject.id, 'fixacao')}
        />
        <ModeButton
          mode="simulado"
          enabled={simuladoEnabled}
          onClick={() => onSelectMode(subject.id, 'simulado')}
        />
      </div>
    </CardShell>
  );
}

export function HomeScreen({
  hasSavedSession,
  savedProgress,
  onOpenLegado,
  onResume,
  onSelectMode,
}: Props) {
  const featured = subjects.filter((s) => s.featured);
  const past = subjects.filter((s) => !s.featured);

  const renderCard = (subject: Subject) =>
    subject.kind === 'legado' ? (
      <LegadoCard
        key={subject.id}
        subject={subject}
        hasSavedSession={hasSavedSession}
        savedProgress={savedProgress}
        onOpen={onOpenLegado}
        onResume={onResume}
      />
    ) : (
      <ModularCard key={subject.id} subject={subject} onSelectMode={onSelectMode} />
    );

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-semibold sm:text-2xl">Escolha um assunto</h2>
        <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
          Cada assunto tem <strong>questões de fixação</strong>, organizadas por aula, e uma{' '}
          <strong>prova simulada</strong>.
        </p>
      </div>

      {featured.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Assunto da semana
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">{featured.map(renderCard)}</div>
        </section>
      )}

      {past.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Aulas passadas
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">{past.map(renderCard)}</div>
        </section>
      )}
    </div>
  );
}
