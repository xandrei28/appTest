'use client';

import { clsx } from 'clsx';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  sublabel?: string;
  className?: string;
}

export function Toggle({ checked, onChange, label, sublabel, className }: ToggleProps) {
  return (
    <div className={clsx('flex items-center justify-between', className)}>
      {(label || sublabel) && (
        <div>
          {label && <div className="text-[13px] font-semibold text-tx">{label}</div>}
          {sublabel && <div className="text-[11px] text-tx3 mt-0.5">{sublabel}</div>}
        </div>
      )}
      <button
        onClick={() => onChange(!checked)}
        className={clsx(
          'relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0',
          checked ? 'bg-gold' : 'bg-brd2'
        )}
      >
        <span
          className={clsx(
            'absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200',
            checked ? 'translate-x-[22px]' : 'translate-x-0.5'
          )}
        />
      </button>
    </div>
  );
}
