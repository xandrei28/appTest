'use client';

import { AppShell } from '@/components/layout/AppShell';

export default function NurseLayout({ children }: { children: React.ReactNode }) {
  return <AppShell role="nurse">{children}</AppShell>;
}
