import { create } from 'zustand';

type DoctorsSubTab = 'hub' | 'access' | 'book' | 'research';

interface PatientState {
  doctorsSubTab: DoctorsSubTab;
  setDoctorsSubTab: (tab: DoctorsSubTab) => void;

  expandedStudy: string | null;
  toggleStudyDetail: (id: string) => void;
}

export const usePatientStore = create<PatientState>((set, get) => ({
  doctorsSubTab: 'hub',

  setDoctorsSubTab: (tab) => set({ doctorsSubTab: tab }),

  expandedStudy: null,

  toggleStudyDetail: (id) => {
    const { expandedStudy } = get();
    set({ expandedStudy: expandedStudy === id ? null : id });
  },
}));
