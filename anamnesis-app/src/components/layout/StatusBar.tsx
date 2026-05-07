'use client';

export function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="h-[54px] flex items-end justify-between px-6 pb-1 text-tx">
      <span className="text-[15px] font-semibold">{time}</span>
      <div className="flex items-center gap-1">
        {/* Signal bars */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="1" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="1" />
          <rect x="9" y="2" width="3" height="10" rx="0.5" opacity="1" />
          <rect x="13" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0114.08 0" />
          <path d="M1.42 9a16 16 0 0121.16 0" />
          <path d="M8.53 16.11a6 6 0 016.95 0" />
          <circle cx="12" cy="20" r="1" fill="currentColor" />
        </svg>
        {/* Battery */}
        <svg width="28" height="12" viewBox="0 0 28 12" fill="currentColor">
          <rect x="0" y="0" width="24" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="2" y="2" width="18" height="8" rx="1" />
          <rect x="25" y="3.5" width="2" height="5" rx="1" />
        </svg>
      </div>
    </div>
  );
}
