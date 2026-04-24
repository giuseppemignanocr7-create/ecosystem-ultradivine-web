interface SectionNumberProps {
  number: string;
  label: string;
  dark?: boolean;
}

export function SectionNumber({ number, label, dark }: SectionNumberProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className={`font-mono text-xs uppercase tracking-wider ${
          dark ? 'text-brass' : 'text-brass-2'
        }`}
      >
        {number}
      </span>
      <span
        className={`h-px flex-1 max-w-[40px] ${
          dark ? 'bg-brass/30' : 'bg-brass-2/30'
        }`}
      />
      <span
        className={`font-mono text-xs uppercase tracking-wider ${
          dark ? 'text-ink-300' : 'text-ink-500'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
