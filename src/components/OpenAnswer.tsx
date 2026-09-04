interface Props {
  value: string;
  submitted: boolean;
  onChange: (value: string) => void;
}

export function OpenAnswer({ value, submitted, onChange }: Props) {
  return (
    <div>
      <textarea
        value={value}
        disabled={submitted}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escreva sua resposta com suas palavras..."
        rows={7}
        className="w-full resize-y rounded-lg border border-neutral-200 bg-white p-3 text-sm leading-relaxed text-neutral-900 outline-none transition-colors focus:border-indigo-500 disabled:opacity-70 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
      />
      <div className="mt-1 text-right text-xs text-neutral-400">
        {value.length} {value.length === 1 ? 'caractere' : 'caracteres'}
      </div>
    </div>
  );
}
