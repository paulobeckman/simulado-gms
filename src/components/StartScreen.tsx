import { useMemo, useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { questions } from '../data/questions';
import type {
  AreaFilter,
  OrderFilter,
  QuantityFilter,
  QuizConfig,
  TypeFilter,
} from '../types';

interface Props {
  hasSavedSession: boolean;
  savedProgress: { index: number; total: number } | null;
  onStart: (config: QuizConfig) => void;
  onResume: () => void;
}

const areaOptions: { value: AreaFilter; label: string }[] = [
  { value: 'todas', label: 'Todas' },
  { value: 'historia', label: 'História da Igreja' },
  { value: 'apologetica', label: 'Apologética' },
];

const typeOptions: { value: TypeFilter; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'multipla', label: 'Múltipla escolha' },
  { value: 'vf', label: 'Verdadeiro ou falso' },
  { value: 'discursiva', label: 'Discursivas' },
];

const quantityOptions: { value: QuantityFilter; label: string }[] = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 'todas', label: 'Todas' },
];

const orderOptions: { value: OrderFilter; label: string }[] = [
  { value: 'sequencial', label: 'Sequencial' },
  { value: 'embaralhada', label: 'Embaralhada' },
];

function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <div className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              className={
                active
                  ? 'rounded-lg border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-medium text-white dark:border-indigo-500 dark:bg-indigo-500'
                  : 'rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900'
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StartScreen({ hasSavedSession, savedProgress, onStart, onResume }: Props) {
  const [area, setArea] = useState<AreaFilter>('todas');
  const [type, setType] = useState<TypeFilter>('todos');
  const [quantity, setQuantity] = useState<QuantityFilter>(20);
  const [order, setOrder] = useState<OrderFilter>('sequencial');

  const totals = useMemo(
    () => ({
      total: questions.length,
      historia: questions.filter((q) => q.area === 'historia').length,
      apologetica: questions.filter((q) => q.area === 'apologetica').length,
    }),
    [],
  );

  const available = useMemo(() => {
    let pool = questions;
    if (area !== 'todas') pool = pool.filter((q) => q.area === area);
    if (type !== 'todos') pool = pool.filter((q) => q.type === type);
    return pool.length;
  }, [area, type]);

  const effectiveCount = quantity === 'todas' ? available : Math.min(quantity, available);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold sm:text-2xl">Simulado de estudos</h2>
        <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {totals.total} questões no banco, sendo {totals.historia} de História da Igreja e{' '}
          {totals.apologetica} de Apologética. Ajuste os filtros e comece quando quiser.
        </p>
      </div>

      {hasSavedSession && savedProgress && (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950">
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            Você tem um simulado em andamento na questão {savedProgress.index} de{' '}
            {savedProgress.total}.
          </p>
          <button
            type="button"
            onClick={onResume}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <RotateCcw size={16} />
            Continuar de onde parei
          </button>
        </div>
      )}

      <div className="space-y-5 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800 sm:p-6">
        <Segmented label="Área" value={area} options={areaOptions} onChange={setArea} />
        <Segmented label="Tipo" value={type} options={typeOptions} onChange={setType} />
        <Segmented
          label="Quantidade"
          value={quantity}
          options={quantityOptions}
          onChange={setQuantity}
        />
        <Segmented label="Ordem" value={order} options={orderOptions} onChange={setOrder} />
      </div>

      <div className="space-y-3">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {effectiveCount > 0
            ? `Seu simulado terá ${effectiveCount} ${
                effectiveCount === 1 ? 'questão' : 'questões'
              }.`
            : 'Nenhuma questão corresponde aos filtros atuais.'}
        </p>
        <button
          type="button"
          disabled={effectiveCount === 0}
          onClick={() => onStart({ area, type, quantity, order })}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          <Play size={18} />
          Começar simulado
        </button>
      </div>
    </div>
  );
}
