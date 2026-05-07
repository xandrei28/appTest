'use client';

import { useAuthStore } from '@/stores/auth-store';
import { clsx } from 'clsx';

export function BiometricModal() {
  const modal = useAuthStore((s) => s.biometricModal);
  const dismiss = useAuthStore((s) => s.dismissBiometric);
  const confirm = useAuthStore((s) => s.confirmBiometric);
  const cancel = useAuthStore((s) => s.cancelBiometric);
  const role = useAuthStore((s) => s.currentRole);

  if (!modal || !modal.show) return null;

  const accentColor = role === 'nurse' ? 'bg-teal' : 'bg-gold';
  const roleBadge = role === 'doctor' ? '🩺 Medic' : role === 'nurse' ? '👩‍⚕️ Asistentă' : '🫀 Pacient';

  if (modal.mode === 'auth') {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-6 animate-fade-up">
        <div className="bg-bg-card border border-brd rounded-r p-6 w-full max-w-sm text-center">
          <div className="text-[48px] mb-4">🔐</div>
          <div className={clsx('inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold mb-4',
            role === 'nurse' ? 'bg-teal/10 text-teal' : 'bg-gold-soft text-gold'
          )}>
            {roleBadge}
          </div>
          <h2 className="text-[18px] font-bold text-tx mb-2">Autentificare Biometrică</h2>
          <p className="text-[13px] text-tx3 mb-6">Confirmă identitatea cu Face ID pentru a accesa aplicația</p>
          <button
            onClick={dismiss}
            className={clsx('w-full py-3 rounded-rs font-bold text-[14px] text-bg transition-all', accentColor)}
          >
            Autentifică cu Face ID
          </button>
        </div>
      </div>
    );
  }

  // Sign mode
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-end justify-center animate-fade-up">
      <div className="bg-bg-card border border-brd border-b-0 rounded-t-r p-6 w-full max-w-sm text-center animate-slide-up">
        <div className="w-10 h-1 bg-brd2 rounded-full mx-auto mb-4" />
        <div className="text-[36px] mb-3">✍️</div>
        <h2 className="text-[16px] font-bold text-tx mb-1">{modal.title}</h2>
        <p className="text-[13px] text-tx3 mb-5">{modal.subtitle}</p>
        <button
          onClick={confirm}
          className={clsx('w-full py-3 rounded-rs font-bold text-[14px] text-bg mb-2 transition-all', accentColor)}
        >
          Semnează cu Face ID
        </button>
        <button
          onClick={cancel}
          className="w-full py-3 rounded-rs font-bold text-[14px] text-tx3 bg-bg-surf transition-all hover:text-tx"
        >
          Anulează
        </button>
      </div>
    </div>
  );
}
