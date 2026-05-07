import { clsx, type ClassValue } from 'clsx';

/** Merge class names with clsx */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Format a date string like "04.04.2026" to a more readable form */
export function formatDate(dateStr: string): string {
  return dateStr;
}

/** Format a timestamp like "04.04 · 08:00" */
export function formatTimestamp(date: string, time: string): string {
  return `${date} · ${time}`;
}

/** Get the relative day label (e.g., "Zi 4") */
export function formatDayLabel(day: number): string {
  return `Zi ${day}`;
}

/** Get current date formatted as DD.MM.YYYY */
export function getCurrentDate(): string {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

/** Get current time formatted as HH:MM */
export function getCurrentTime(): string {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

/** Map status class to Tailwind color classes */
export function getStatusColor(stcls: string): {
  text: string;
  bg: string;
  border: string;
} {
  const map: Record<string, { text: string; bg: string; border: string }> = {
    err: {
      text: 'text-err',
      bg: 'bg-err-s',
      border: 'border-err/25',
    },
    ok: {
      text: 'text-ok',
      bg: 'bg-ok-s',
      border: 'border-ok/25',
    },
    warn: {
      text: 'text-warn',
      bg: 'bg-warn-s',
      border: 'border-warn/25',
    },
    blue: {
      text: 'text-blue',
      bg: 'bg-blue-s',
      border: 'border-blue/25',
    },
    purp: {
      text: 'text-purp',
      bg: 'bg-purp-s',
      border: 'border-purp/25',
    },
    teal: {
      text: 'text-teal',
      bg: 'bg-teal-s',
      border: 'border-teal/25',
    },
    gold: {
      text: 'text-gold',
      bg: 'bg-gold-s',
      border: 'border-gold-border',
    },
  };

  return map[stcls] ?? map.ok;
}

/** Map lab flag to color info */
export function getLabFlagColor(flag: '' | 'high' | 'low'): {
  text: string;
  bg: string;
} {
  if (flag === 'high') return { text: 'text-err', bg: 'bg-err-s' };
  if (flag === 'low') return { text: 'text-blue', bg: 'bg-blue-s' };
  return { text: 'text-tx', bg: '' };
}

/** Get initials from a full name */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}
