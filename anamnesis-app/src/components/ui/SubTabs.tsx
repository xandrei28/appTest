'use client';

import { clsx } from 'clsx';

interface SubTabsProps {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}

export function SubTabs({ tabs, active, onChange, className }: SubTabsProps) {
  return (
    <div className={clsx('flex gap-1 bg-bg-surf rounded-rs p-1', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'flex-1 py-2 px-3 rounded-rx text-[12px] font-bold transition-all duration-200',
            active === tab.id
              ? 'bg-gold text-bg'
              : 'text-tx3 hover:text-tx2'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
