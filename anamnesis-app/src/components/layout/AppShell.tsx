'use client';

import { useResponsive } from '@/hooks/use-responsive';
import { StatusBar } from './StatusBar';
import { Notch } from './Notch';
import { BottomNav } from './BottomNav';

interface AppShellProps {
  role: 'doctor' | 'patient' | 'nurse';
  children: React.ReactNode;
}

export function AppShell({ role, children }: AppShellProps) {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-bg relative flex flex-col">
        <main className="flex-1 overflow-y-auto pb-[84px] scrollbar-hide">
          {children}
        </main>
        <div className="fixed bottom-0 left-0 right-0 h-[84px] bg-bg/95 backdrop-blur-xl border-t border-brd flex items-start justify-around pt-2 px-0.5 z-[100]"
             style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <BottomNav role={role} />
        </div>
      </div>
    );
  }

  // Desktop: phone frame
  return (
    <div className="min-h-screen bg-[#050810] flex flex-col items-center justify-center p-6">
      <div className="w-[393px] h-[852px] bg-bg rounded-[48px] border-[3px] border-brd2 overflow-hidden relative shadow-2xl shadow-black/50">
        <Notch />
        <StatusBar />
        <main className="h-[calc(100%-54px-84px)] overflow-y-auto scrollbar-hide px-4 py-2">
          {children}
        </main>
        <BottomNav role={role} />
      </div>
    </div>
  );
}
