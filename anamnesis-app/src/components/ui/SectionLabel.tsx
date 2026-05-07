'use client';

import { clsx } from 'clsx';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={clsx('text-[11px] font-bold text-tx3 uppercase tracking-wider mt-5 mb-2 px-1', className)}>
      {children}
    </div>
  );
}
