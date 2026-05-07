import type { NavItem } from './types';

// ═══ Doctor Navigation ═══
export const doctorNav: NavItem[] = [
  { id: 'home', label: 'Acasă', icon: 'Home' },
  { id: 'patients', label: 'Pacienți', icon: 'Users' },
  { id: 'program', label: 'Program', icon: 'Calendar' },
  { id: 'sistem', label: 'Sistem', icon: 'Globe' },
  { id: 'profil', label: 'Profil', icon: 'User' },
  { id: 'config', label: 'Configurări', icon: 'Settings' },
];

// ═══ Patient Navigation ═══
export const patientNav: NavItem[] = [
  { id: 'home', label: 'Acasă', icon: 'Home' },
  { id: 'history', label: 'Istoric Medical', icon: 'FileText' },
  { id: 'meds', label: 'Medicația Mea', icon: 'Pill' },
  { id: 'doctors', label: 'Medicii Mei', icon: 'Users' },
  { id: 'sos', label: 'Urgență SOS', icon: 'AlertCircle' },
  { id: 'config', label: 'Configurări', icon: 'Settings' },
];

// ═══ Nurse Navigation ═══
export const nurseNav: NavItem[] = [
  { id: 'home', label: 'Acasă', icon: 'Home' },
  { id: 'patients', label: 'Pacienți', icon: 'Users' },
  { id: 'meds', label: 'Medicație', icon: 'Pill' },
  { id: 'monitor', label: 'Monitorizare', icon: 'Activity' },
  { id: 'tura', label: 'Tura Mea', icon: 'Clock' },
  { id: 'config', label: 'Configurări', icon: 'Settings' },
];

// ═══ Navigation Labels (for breadcrumbs, headers, etc.) ═══
export const navLabels: Record<string, Record<string, string>> = {
  doctor: {
    home: 'Acasă',
    patients: 'Pacienți',
    program: 'Program',
    sistem: 'Sistem',
    profil: 'Profil',
    config: 'Configurări',
  },
  patient: {
    home: 'Acasă',
    history: 'Istoric Medical',
    meds: 'Medicația Mea',
    doctors: 'Medicii Mei',
    sos: 'Urgență SOS',
    config: 'Configurări',
  },
  nurse: {
    home: 'Acasă',
    patients: 'Pacienți',
    meds: 'Medicație',
    monitor: 'Monitorizare',
    tura: 'Tura Mea',
    config: 'Configurări',
  },
};
