'use client';

import { clsx } from 'clsx';

interface FilterChipsProps {
  filters: { id: string; label: string; count?: number }[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}

export function FilterChips({ filters, active, onChange, className }: FilterChipsProps) {
  return (
    <div className={clsx('flex gap-2 overflow-x-auto scrollbar-hide', className)}>
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={clsx(
            'flex-shrink-0 px-3 py-1.5 rounded-full text-[12px] font-bold border transition-all duration-200',
            active === f.id
              ? 'bg-gold text-bg border-gold'
              : 'bg-transparent text-tx3 border-brd hover:border-tx3'
          )}
        >
          {f.label}
          {f.count !== undefined && (
            <span className="ml-1 opacity-70">{f.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
