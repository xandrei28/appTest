'use client';

import { clsx } from 'clsx';

interface TimelineEntry {
  color?: string;
  title: string;
  subtitle: string;
  time: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export function Timeline({ entries, className }: TimelineProps) {
  return (
    <div className={clsx('space-y-0', className)}>
      {entries.map((entry, i) => (
        <div key={i} className="flex items-start gap-3 py-2.5 border-b border-brd last:border-0">
          <div
            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
            style={{ background: entry.color || 'var(--gold)' }}
          />
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-tx">{entry.title}</div>
            <div className="text-[11px] text-tx3 mt-0.5">{entry.subtitle}</div>
          </div>
          <div className="text-[11px] text-tx3 flex-shrink-0">{entry.time}</div>
        </div>
      ))}
    </div>
  );
}
