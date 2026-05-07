import { create } from 'zustand';

type ChartTab = 'overview' | 'vitals' | 'meds' | 'evol' | 'labs' | 'actions';
type PatientsSubTab = 'internati' | 'zi';
type SystemSubTab = 'search' | 'pending' | 'active';

interface DoctorState {
  // Patient detail overlay
  detailPatientKey: string | null;
  detailChartTab: ChartTab;
  openDetail: (key: string) => void;
  closeDetail: () => void;
  switchChart: (tab: ChartTab) => void;

  // FOCG overlay
  focgPatientKey: string | null;
  focgOpenSections: string[];
  openFOCG: (key: string) => void;
  closeFOCG: () => void;
  toggleFOCGSection: (section: string) => void;

  // Patient list
  patientFilter: string;
  patientSearch: string;
  patientsSubTab: PatientsSubTab;
  setPatientFilter: (f: string) => void;
  setPatientSearch: (q: string) => void;
  setPatientsSubTab: (tab: PatientsSubTab) => void;

  // Sistem
  systemSearch: string;
  systemSubTab: SystemSubTab;
  setSystemSearch: (q: string) => void;
  setSystemSubTab: (tab: SystemSubTab) => void;

  // Modals
  accessModal: { patientName: string } | null;
  rxModal: { patientKey: string } | null;
  extModal: { patientKey: string } | null;
  openAccessModal: (name: string) => void;
  closeAccessModal: () => void;
  openRxModal: (key: string) => void;
  closeRxModal: () => void;
  openExtModal: (key: string) => void;
  closeExtModal: () => void;
}

export const useDoctorStore = create<DoctorState>((set, get) => ({
  // Patient detail overlay
  detailPatientKey: null,
  detailChartTab: 'overview',

  openDetail: (key) =>
    set({ detailPatientKey: key, detailChartTab: 'overview' }),

  closeDetail: () =>
    set({ detailPatientKey: null, detailChartTab: 'overview' }),

  switchChart: (tab) => set({ detailChartTab: tab }),

  // FOCG overlay
  focgPatientKey: null,
  focgOpenSections: [],

  openFOCG: (key) => set({ focgPatientKey: key, focgOpenSections: [] }),

  closeFOCG: () => set({ focgPatientKey: null, focgOpenSections: [] }),

  toggleFOCGSection: (section) => {
    const { focgOpenSections } = get();
    const isOpen = focgOpenSections.includes(section);
    set({
      focgOpenSections: isOpen
        ? focgOpenSections.filter((s) => s !== section)
        : [...focgOpenSections, section],
    });
  },

  // Patient list
  patientFilter: 'all',
  patientSearch: '',
  patientsSubTab: 'internati',

  setPatientFilter: (f) => set({ patientFilter: f }),
  setPatientSearch: (q) => set({ patientSearch: q }),
  setPatientsSubTab: (tab) => set({ patientsSubTab: tab }),

  // Sistem
  systemSearch: '',
  systemSubTab: 'search',

  setSystemSearch: (q) => set({ systemSearch: q }),
  setSystemSubTab: (tab) => set({ systemSubTab: tab }),

  // Modals
  accessModal: null,
  rxModal: null,
  extModal: null,

  openAccessModal: (name) => set({ accessModal: { patientName: name } }),
  closeAccessModal: () => set({ accessModal: null }),

  openRxModal: (key) => set({ rxModal: { patientKey: key } }),
  closeRxModal: () => set({ rxModal: null }),

  openExtModal: (key) => set({ extModal: { patientKey: key } }),
  closeExtModal: () => set({ extModal: null }),
}));
