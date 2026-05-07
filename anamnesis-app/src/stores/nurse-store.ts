import { create } from 'zustand';

interface NurseState {
  selectedPatient: string | null;
  selectPatient: (key: string | null) => void;
}

export const useNurseStore = create<NurseState>((set) => ({
  selectedPatient: null,

  selectPatient: (key) => set({ selectedPatient: key }),
}));
