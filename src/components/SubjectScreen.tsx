import { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronRight, Download, GraduationCap, RotateCcw } from 'lucide-react';
import type { FixacaoPart, Subject } from '../data/subjects';
import { modeInfo } from '../data/subjects';
import { useFixacao } from '../hooks/useFixacao';
import { useSimulado } from '../hooks/useSimulado';
import { QuestionCard } from './QuestionCard';
import { SimuladoQuestionCard } from './SimuladoQuestionCard';
import { ProgressBar } from './ProgressBar';
import { FixacaoResult } from './FixacaoResult';
import { SimuladoResult } from './SimuladoResult';

interface Props {
  subject: Subject;
  onBack: () => void;
}

function partStorageKey(subjectId: string, partId: string) {
  return `gms:progress:${subjectId}:fixacao:${partId}`;
}

function unlockStorageKey(subjectId: string, partId: string) {
  return `gms:unlocked:${subjectId}:fixacao:${partId}`;
}

function isUnlocked(key: string): boolean {
  try {
    return window.localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

function simuladoStorageKey(subjectId: string) {
  return `gms:progress:${subjectId}:simulado`;
}

function hasSavedPart(key: string): { index: number; total: number } | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as {
      currentIndex?: number;
      answers?: Record<string, { submitted?: boolean }>;
      finished?: boolean;
    };
    if (parsed.finished) return null;
    const answers = parsed.answers ?? {};
    const answered = Object.values(answers).filter((a) => a?.submitted).length;
    if (answered === 0) return null;
    const total = Object.keys(answers).length;
    return { index: Math.min((parsed.currentIndex ?? 0) + 1, total), total };
  } catch {
    return null;
  }
}

function FixacaoRunner({
  subject,
  part,
  onExit,
}: {
  subject: Subject;
  part: FixacaoPart;
  onExit: () => void;
}) {
  const fx = useFixacao(part.questions, partStorageKey(subject.id, part.id));
  const [phase, setPhase] = useState<'quiz' | 'result'>(fx.finished ? 'result' : 'quiz');

  if (phase === 'result' || fx.finished) {
    return (
      <FixacaoResult
        part={part}
        results={fx.results}
        unlockKey={unlockStorageKey(subject.id, part.id)}
        onRedo={() => {
          fx.restart();
          setPhase('quiz');
        }}
        onBack={() => {
          // Concluiu e está saindo: limpa o progresso para a próxima rodada começar do zero.
          fx.clearStored();
          onExit();
        }}
      />
    );
  }

  if (!fx.currentQuestion) {
    return (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">Nenhuma questão nesta parte.</p>
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft size={16} />
          Voltar ao assunto
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft size={16} />
          {subject.title}
        </button>
        <span className="text-xs text-neutral-400">{part.lesson}</span>
      </div>

      <ProgressBar current={fx.currentNumber} total={fx.total} />

      <QuestionCard
        key={fx.currentQuestion.id}
        question={fx.currentQuestion}
        answer={fx.currentAnswer}
        isLast={fx.isLast}
        onRevealHint={fx.revealHint}
        onSubmitMultipla={fx.submitMultipla}
        onSubmitVf={fx.submitVf}
        onSubmitDiscursiva={fx.submitDiscursiva}
        onSetSelfAssessment={fx.setSelfAssessment}
        onToggleKeyPoint={fx.toggleKeyPoint}
        onNext={() => {
          if (fx.isLast) {
            fx.goNext();
            setPhase('result');
          } else {
            fx.goNext();
          }
        }}
      />
    </div>
  );
}

function SimuladoRunner({
  subject,
  onExit,
}: {
  subject: Subject;
  onExit: () => void;
}) {
  const questions = subject.simulado?.questions ?? [];
  const sim = useSimulado(questions, simuladoStorageKey(subject.id));
  const [phase, setPhase] = useState<'quiz' | 'result'>(sim.finished ? 'result' : 'quiz');

  if (phase === 'result' || sim.finished) {
    return (
      <SimuladoResult
        results={sim.results}
        passRatio={subject.simulado?.passRatio}
        material={subject.simulado?.material}
        onSetSelfAssessment={sim.setSelfAssessmentFor}
        onToggleKeyPoint={sim.toggleKeyPointFor}
        onRedo={() => {
          sim.restart();
          setPhase('quiz');
        }}
        onBack={() => {
          sim.clearStored();
          onExit();
        }}
      />
    );
  }

  if (!sim.currentQuestion) {
    return (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">Nenhuma questão na prova simulada.</p>
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft size={16} />
          Voltar ao assunto
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft size={16} />
          {subject.title}
        </button>
        <span className="text-xs text-neutral-400">Prova simulada</span>
      </div>

      <ProgressBar current={sim.currentNumber} total={sim.total} />

      <SimuladoQuestionCard
        key={sim.currentQuestion.id}
        question={sim.currentQuestion}
        answer={sim.currentAnswer}
        isLast={sim.isLast}
        onSubmitMultipla={sim.submitMultipla}
        onSubmitVf={sim.submitVf}
        onSubmitDiscursiva={sim.submitDiscursiva}
        onNext={() => {
          if (sim.isLast) {
            sim.goNext();
            setPhase('result');
          } else {
            sim.goNext();
          }
        }}
      />
    </div>
  );
}

function PartRow({
  subjectId,
  part,
  onStart,
}: {
  subjectId: string;
  part: FixacaoPart;
  onStart: () => void;
}) {
  const key = partStorageKey(subjectId, part.id);
  const saved = hasSavedPart(key);
  const unlocked = isUnlocked(unlockStorageKey(subjectId, part.id));

  const restart = () => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignora */
    }
    onStart();
  };

  return (
    <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {part.lesson}
          </p>
          <p className="mt-1 text-sm leading-relaxed">{part.title}</p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            {part.questions.length} questões
          </p>
        </div>
        {unlocked && (
          <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            Conteúdo liberado
          </span>
        )}
      </div>

      {unlocked && part.material && (
        <a
          href={part.material.url}
          download
          className="mt-3 inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          <Download size={16} />
          Baixar material da aula (PDF)
        </a>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {saved ? (
          <>
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <RotateCcw size={16} />
              Continuar de onde parei (questão {saved.index} de {saved.total})
            </button>
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              Recomeçar
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Começar
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export function SubjectScreen({ subject, onBack }: Props) {
  const [activePart, setActivePart] = useState<FixacaoPart | null>(null);
  const [simuladoActive, setSimuladoActive] = useState(false);
  const parts = subject.fixacaoParts ?? [];
  const simuladoDisponivel =
    subject.simulado?.status === 'disponivel' && (subject.simulado.questions?.length ?? 0) > 0;
  const simuladoEmBreve = !simuladoDisponivel;
  const simuladoKey = simuladoStorageKey(subject.id);
  const savedSimulado = simuladoDisponivel ? hasSavedPart(simuladoKey) : null;

  if (activePart) {
    return (
      <FixacaoRunner
        key={activePart.id}
        subject={subject}
        part={activePart}
        onExit={() => setActivePart(null)}
      />
    );
  }

  if (simuladoActive) {
    return <SimuladoRunner subject={subject} onExit={() => setSimuladoActive(false)} />;
  }

  return (
    <div className="space-y-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <ArrowLeft size={16} />
        Todos os assuntos
      </button>

      <div>
        <h2 className="text-xl font-semibold sm:text-2xl">{subject.title}</h2>
        {subject.lesson && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{subject.lesson}</p>
        )}
        <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {subject.subtitle}
        </p>
      </div>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-semibold">{modeInfo.fixacao.label}</h3>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {modeInfo.fixacao.description}
        </p>
        {parts.length > 0 ? (
          <div className="space-y-3">
            {parts.map((part) => (
              <PartRow
                key={part.id}
                subjectId={subject.id}
                part={part}
                onStart={() => setActivePart(part)}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-neutral-200 p-4 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            Nenhuma parte disponível ainda.
          </p>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-semibold">{modeInfo.simulado.label}</h3>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {modeInfo.simulado.description}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {simuladoEmBreve
              ? 'A prova simulada deste assunto ainda está sendo montada.'
              : `Prova com ${subject.simulado?.size ?? 0} questões.`}
          </span>
          {simuladoEmBreve ? (
            <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              Em breve
            </span>
          ) : savedSimulado ? (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSimuladoActive(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <RotateCcw size={16} />
                Continuar (questão {savedSimulado.index} de {savedSimulado.total})
              </button>
              <button
                type="button"
                onClick={() => {
                  try {
                    window.localStorage.removeItem(simuladoKey);
                  } catch {
                    /* ignora */
                  }
                  setSimuladoActive(true);
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                Recomeçar
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setSimuladoActive(true)}
              className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Começar prova
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
