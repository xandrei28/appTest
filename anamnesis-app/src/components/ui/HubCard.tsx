'use client';

import { clsx } from 'clsx';

interface HubCardProps {
  icon: string;
  iconBg?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  className?: string;
}

export function HubCard({ icon, iconBg, title, subtitle, onClick, className }: HubCardProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 bg-bg-card border border-brd rounded-r p-3.5 cursor-pointer hover:bg-bg-card-h transition-colors active:scale-[0.99]',
        className
      )}
      onClick={onClick}
    >
      <div
        className="w-10 h-10 rounded-rm flex items-center justify-center text-[18px] flex-shrink-0"
        style={{ background: iconBg || 'var(--bg-surf)' }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] font-bold text-tx">{title}</h3>
        <p className="text-[11px] text-tx3 mt-0.5">{subtitle}</p>
      </div>
      <span className="text-tx3 text-[16px] flex-shrink-0">→</span>
    </div>
  );
}
