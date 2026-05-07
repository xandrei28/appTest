'use client';

import { Search } from 'lucide-react';
import { clsx } from 'clsx';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Caută...', className }: SearchBarProps) {
  return (
    <div className={clsx('relative', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tx3" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-bg-surf border border-brd rounded-rs pl-9 pr-3 py-2.5 text-[13px] text-tx placeholder:text-tx3 outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
