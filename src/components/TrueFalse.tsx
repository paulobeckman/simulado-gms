interface Props {
  draft: boolean | null;
  submitted: boolean;
  chosen?: boolean;
  correct: boolean;
  onSelect: (value: boolean) => void;
}

const base =
  'flex-1 rounded-lg border px-4 py-6 text-base font-medium transition-colors';

export function TrueFalse({ draft, submitted, chosen, correct, onSelect }: Props) {
  const renderButton = (value: boolean, label: string) => {
    let cls = `${base} border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800`;

    if (!submitted && draft === value) {
      cls = `${base} border-indigo-600 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950`;
    }
    if (submitted && value === correct) {
      cls = `${base} border-emerald-600 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950`;
    } else if (submitted && value === chosen) {
      cls = `${base} border-red-600 bg-red-50 dark:border-red-500 dark:bg-red-950`;
    }

    return (
      <button
        key={label}
        type="button"
        disabled={submitted}
        onClick={() => onSelect(value)}
        className={cls}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="flex gap-3">
      {renderButton(true, 'Verdadeiro')}
      {renderButton(false, 'Falso')}
    </div>
  );
}
