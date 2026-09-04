interface Props {
  options: { id: string; text: string }[];
  draftId: string | null;
  submitted: boolean;
  chosenId?: string;
  correctId: string;
  onSelect: (id: string) => void;
}

const base =
  'flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors';

export function MultipleChoice({ options, draftId, submitted, chosenId, correctId, onSelect }: Props) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        let cls = `${base} border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800`;

        if (!submitted && draftId === opt.id) {
          cls = `${base} border-indigo-600 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950`;
        }
        if (submitted && opt.id === correctId) {
          cls = `${base} border-emerald-600 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950`;
        } else if (submitted && opt.id === chosenId) {
          cls = `${base} border-red-600 bg-red-50 dark:border-red-500 dark:bg-red-950`;
        }

        return (
          <button
            key={opt.id}
            type="button"
            disabled={submitted}
            onClick={() => onSelect(opt.id)}
            className={cls}
          >
            <span className="font-semibold uppercase text-neutral-400">{opt.id}</span>
            <span>{opt.text}</span>
          </button>
        );
      })}
    </div>
  );
}
