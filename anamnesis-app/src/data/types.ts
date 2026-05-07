// ═══ Vital Signs ═══
export interface VitalSign {
  v: string;
  w: 0 | 1; // 0 = normal, 1 = warning/alert
}

export interface VitalSigns {
  ta: VitalSign;   // Tensiune arterială
  fc: VitalSign;   // Frecvență cardiacă
  spo2: VitalSign; // Saturație oxigen
  temp: VitalSign; // Temperatură
  fr: VitalSign;   // Frecvență respiratorie
  gcs: VitalSign;  // Glasgow Coma Scale
}

// ═══ Medication ═══
export interface Medication {
  n: string;  // Nume
  d: string;  // Doză
  s: string;  // Program (schedule)
}

// ═══ Lab Result ═══
export interface LabResult {
  name: string;
  val: string;
  unit: string;
  ref: string;
  flag: '' | 'high' | 'low';
}

// ═══ Evolution Entry ═══
export interface EvolutionEntry {
  date: string;
  text: string;
  who: string;
}

// ═══ Patient ═══
export interface Patient {
  name: string;
  age: string;
  sex: 'M' | 'F';
  cnp: string;
  bed: string;
  diag: string;
  adm: string;
  day: number;
  status: string;
  stcls: 'err' | 'ok' | 'blue' | 'warn';
  vit: VitalSigns;
  alg: string;
  algD: boolean;
  meds: Medication[];
  notes: string;
  evol: EvolutionEntry[];
  labs: LabResult[];
  interventii: string;
  recom: string;
}

// ═══ Audit Entry ═══
export interface AuditEntry {
  id: string;
  timestamp: string;
  user: string;
  role: 'doctor' | 'patient' | 'nurse';
  action: string;
  target: string;
  details: string;
  ip?: string;
}

// ═══ Profile Types ═══
export interface DoctorProfile {
  name: string;
  specialty: string;
  cmp: string;
  experience: string;
  section: string;
  hospital: string;
  avatar: string;
}

export interface PatientProfile {
  name: string;
  age: string;
  cnp: string;
  bloodType: string;
  allergies: string;
  insurer: string;
  avatar: string;
}

export interface NurseProfile {
  name: string;
  title: string;
  section: string;
  badge: string;
  shift: string;
  hospital: string;
  avatar: string;
}

// ═══ Navigation ═══
export interface NavItem {
  id: string;
  label: string;
  icon: string; // lucide-react icon name
}
