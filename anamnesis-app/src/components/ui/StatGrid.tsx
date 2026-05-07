'use client';

import { clsx } from 'clsx';

interface StatItem {
  label: string;
  value: string | number;
  color?: string;
}

interface StatGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatGrid({ stats, columns = 4, className }: StatGridProps) {
  const gridCols = columns === 2 ? 'grid-cols-2' : columns === 3 ? 'grid-cols-3' : 'grid-cols-4';

  return (
    <div className={clsx('grid gap-2', gridCols, className)}>
      {stats.map((stat, i) => (
        <div key={i} className="bg-bg-card border border-brd rounded-rs p-3 text-center">
          <div className={clsx('text-[20px] font-bold', stat.color || 'text-gold')}>
            {stat.value}
          </div>
          <div className="text-[10px] text-tx3 font-medium mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
