'use client';

import { clsx } from 'clsx';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-0.5 bg-bg-surf rounded-rx text-[10px] font-bold text-tx3',
        className
      )}
    >
      {children}
    </span>
  );
}
