'use client';

import { clsx } from 'clsx';

interface CardProps {
  variant?: 'default' | 'gold';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Card({ variant = 'default', className, onClick, children }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-r p-4 transition-colors duration-200',
        variant === 'gold'
          ? 'bg-gold-soft border border-gold-border'
          : 'bg-bg-card border border-brd hover:bg-bg-card-h',
        onClick && 'cursor-pointer active:scale-[0.99]',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
