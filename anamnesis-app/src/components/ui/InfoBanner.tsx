'use client';

import { clsx } from 'clsx';

interface InfoBannerProps {
  variant?: 'gold' | 'ok' | 'err' | 'warn' | 'blue' | 'teal';
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  gold: 'bg-gold-soft border-gold-border text-gold',
  ok: 'bg-ok/10 border-ok/20 text-ok',
  err: 'bg-err/10 border-err/20 text-err',
  warn: 'bg-warn/10 border-warn/20 text-warn',
  blue: 'bg-blue/10 border-blue/20 text-blue',
  teal: 'bg-teal/10 border-teal/20 text-teal',
};

export function InfoBanner({ variant = 'gold', children, className }: InfoBannerProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 px-3 py-2.5 rounded-rs border text-[12px] font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
