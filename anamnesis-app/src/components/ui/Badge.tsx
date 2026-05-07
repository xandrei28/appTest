'use client';

import { clsx } from 'clsx';

interface BadgeProps {
  variant?: 'gold' | 'ok' | 'err' | 'warn' | 'blue' | 'purp' | 'teal' | 'default';
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  gold: 'bg-gold-soft text-gold border-gold-border',
  ok: 'bg-ok/10 text-ok border-ok/20',
  err: 'bg-err/10 text-err border-err/20',
  warn: 'bg-warn/10 text-warn border-warn/20',
  blue: 'bg-blue/10 text-blue border-blue/20',
  purp: 'bg-purp/10 text-purp border-purp/20',
  teal: 'bg-teal/10 text-teal border-teal/20',
  default: 'bg-bg-surf text-tx2 border-brd',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-0.5 rounded-rx text-[11px] font-bold border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
