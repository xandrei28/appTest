'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth-store';

const roles = [
  {
    id: 'doctor' as const,
    emoji: '🩺',
    title: 'Medic',
    subtitle: 'Dr. Alexandru Pavel · Medicină Internă',
    badge: 'CMP: 14523',
    href: '/doctor/home',
  },
  {
    id: 'nurse' as const,
    emoji: '👩‍⚕️',
    title: 'Asistentă',
    subtitle: 'Elena Dumitrescu · Secția Medicină Internă',
    badge: 'OAMGMAMR: 28491',
    href: '/nurse/home',
  },
  {
    id: 'patient' as const,
    emoji: '🫀',
    title: 'Pacient',
    subtitle: 'Alexandru Pavel · CNP: 1900***',
    badge: 'ID Verificat',
    href: '/patient/home',
  },
];

export function RoleSelector() {
  const router = useRouter();
  const selectRole = useAuthStore((s) => s.selectRole);

  const handleSelect = (role: typeof roles[number]) => {
    selectRole(role.id);
    router.push(role.href);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Logo / Title */}
        <div className="text-center mb-10">
          <div className="text-[40px] mb-3">🏥</div>
          <h1 className="text-[28px] font-bold text-tx">Anamnesis</h1>
          <p className="text-[14px] text-tx3 mt-2">Selectează rolul pentru demo</p>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Role Cards */}
        <div className="space-y-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleSelect(role)}
              className="w-full bg-bg-card border border-brd rounded-r p-4 flex items-center gap-4 hover:bg-bg-card-h hover:border-gold-border transition-all duration-200 cursor-pointer active:scale-[0.98] text-left"
            >
              <div className="w-12 h-12 bg-gold-soft rounded-rm flex items-center justify-center text-[24px] flex-shrink-0">
                {role.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-[16px] font-bold text-tx">{role.title}</h2>
                  <span className="inline-flex items-center px-2 py-0.5 bg-gold-soft text-gold text-[10px] font-bold rounded-rx border border-gold-border">
                    {role.badge}
                  </span>
                </div>
                <p className="text-[12px] text-tx3 mt-1">{role.subtitle}</p>
              </div>
              <span className="text-gold text-[18px]">→</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-[11px] text-tx3">
            Blockchain: MultiversX Sovereign · Demo Mode
          </p>
          <p className="text-[10px] text-tx3 mt-1">
            Anamnesis v1.0.0 · Build 2026.04.07
          </p>
        </div>
      </div>
    </div>
  );
}
