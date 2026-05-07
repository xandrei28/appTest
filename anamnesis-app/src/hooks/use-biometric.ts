'use client';

import { useAuthStore } from '@/stores/auth-store';

export function useBiometric() {
  const showBiometricSign = useAuthStore((s) => s.showBiometricSign);
  const dismissBiometric = useAuthStore((s) => s.dismissBiometric);

  return {
    requestSign: (title: string, subtitle?: string) => {
      showBiometricSign(title, subtitle);
    },
    dismiss: () => {
      dismissBiometric();
    },
  };
}
