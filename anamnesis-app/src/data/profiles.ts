import type { DoctorProfile, PatientProfile, NurseProfile } from './types';

export const doctorProfile: DoctorProfile = {
  name: 'Dr. Alexandru Pavel',
  specialty: 'Medicină Internă',
  cmp: '14523',
  experience: '8 ani experiență',
  section: 'Secția Medicină Internă',
  hospital: 'Spitalul Universitar',
  avatar: 'AP',
};

export const patientProfile: PatientProfile = {
  name: 'Alexandru Pavel',
  age: '34 ani',
  cnp: '•••••••••1234',
  bloodType: 'A+',
  allergies: 'Fără alergii cunoscute',
  insurer: 'CNAS — Asigurat',
  avatar: 'AP',
};

export const nurseProfile: NurseProfile = {
  name: 'Elena Dumitrescu',
  title: 'Asistentă Medicală',
  section: 'Secția Medicină Internă',
  badge: 'AMG-7821',
  shift: 'Tura de zi (07:00–19:00)',
  hospital: 'Spitalul Universitar',
  avatar: 'ED',
};
