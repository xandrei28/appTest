import { create } from 'zustand';

type Role = 'doctor' | 'patient' | 'nurse';

interface BiometricModal {
  show: boolean;
  mode: 'auth' | 'sign';
  title: string;
  subtitle: string;
}

interface AuthState {
  currentRole: Role | null;
  isAuthenticated: boolean;
  biometricModal: BiometricModal | null;

  selectRole: (role: Role) => void;
  switchRole: () => void;
  showBiometricAuth: () => void;
  dismissBiometric: () => void;
  showBiometricSign: (title: string, subtitle?: string) => void;
  confirmBiometric: () => void;
  cancelBiometric: () => void;
}

const ROLE_CYCLE: Role[] = ['doctor', 'nurse', 'patient'];

export const useAuthStore = create<AuthState>((set, get) => ({
  currentRole: null,
  isAuthenticated: false,
  biometricModal: null,

  selectRole: (role) =>
    set({ currentRole: role, isAuthenticated: true }),

  switchRole: () => {
    const { currentRole } = get();
    if (!currentRole) return;
    const idx = ROLE_CYCLE.indexOf(currentRole);
    const next = ROLE_CYCLE[(idx + 1) % ROLE_CYCLE.length];
    set({ currentRole: next });
  },

  showBiometricAuth: () =>
    set({
      biometricModal: {
        show: true,
        mode: 'auth',
        title: 'Autentificare biometrică',
        subtitle: 'Scanați amprenta pentru a continua',
      },
    }),

  dismissBiometric: () => set({ biometricModal: null }),

  showBiometricSign: (title, subtitle) =>
    set({
      biometricModal: {
        show: true,
        mode: 'sign',
        title,
        subtitle: subtitle ?? 'Confirmați cu amprenta',
      },
    }),

  confirmBiometric: () => set({ biometricModal: null }),

  cancelBiometric: () => set({ biometricModal: null }),
}));
