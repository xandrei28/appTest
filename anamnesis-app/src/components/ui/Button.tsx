'use client';

import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'err' | 'ok' | 'blue' | 'teal' | 'surf';
  size?: 'default' | 'sm';
  fullWidth?: boolean;
}

const variantStyles: Record<string, string> = {
  gold: 'bg-gold text-bg hover:brightness-110',
  outline: 'bg-transparent border border-brd2 text-tx2 hover:border-gold hover:text-gold',
  err: 'bg-err/10 text-err border border-err/20 hover:bg-err/20',
  ok: 'bg-ok/10 text-ok border border-ok/20 hover:bg-ok/20',
  blue: 'bg-blue/10 text-blue border border-blue/20 hover:bg-blue/20',
  teal: 'bg-teal text-bg hover:brightness-110',
  surf: 'bg-bg-surf text-tx2 hover:text-tx',
};

export function Button({
  variant = 'gold',
  size = 'default',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-rs font-bold transition-all duration-200 cursor-pointer active:scale-[0.97]',
        size === 'default' ? 'px-4 py-3 text-[14px]' : 'px-3 py-2 text-[12px]',
        fullWidth && 'w-full',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
