import type { AuditEntry } from '@/data/types';

let auditId = 100;

function nextId(): string {
  auditId += 1;
  return `AUD-${auditId}`;
}

/** In-memory audit trail */
const auditTrail: AuditEntry[] = [
  {
    id: 'AUD-001',
    timestamp: '04.04.2026 · 08:12',
    user: 'Dr. Alexandru Pavel',
    role: 'doctor',
    action: 'Vizualizare fișă pacient',
    target: 'Ionescu Maria',
    details: 'Acces la secțiunea Semne Vitale',
    ip: '192.168.1.45',
  },
  {
    id: 'AUD-002',
    timestamp: '04.04.2026 · 08:15',
    user: 'Dr. Alexandru Pavel',
    role: 'doctor',
    action: 'Editare evoluție zilnică',
    target: 'Ionescu Maria',
    details: 'Adăugare evoluție — semnătură biometrică validată',
    ip: '192.168.1.45',
  },
  {
    id: 'AUD-003',
    timestamp: '04.04.2026 · 08:22',
    user: 'Elena Dumitrescu',
    role: 'nurse',
    action: 'Administrare medicament',
    target: 'Vasilescu Ion — Ceftriaxonă 2g i.v.',
    details: 'Confirmare administrare — scanare cod QR',
    ip: '192.168.1.52',
  },
  {
    id: 'AUD-004',
    timestamp: '04.04.2026 · 07:50',
    user: 'Dr. Alexandru Pavel',
    role: 'doctor',
    action: 'Vizualizare analize',
    target: 'Stan Alexandru',
    details: 'Acces la rezultate D-dimeri, Troponina',
    ip: '192.168.1.45',
  },
  {
    id: 'AUD-005',
    timestamp: '04.04.2026 · 07:45',
    user: 'Dr. Alexandru Pavel',
    role: 'doctor',
    action: 'Prescriere medicament',
    target: 'Stan Alexandru — Heparină LMWH',
    details: 'Prescripție nouă — semnătură biometrică validată',
    ip: '192.168.1.45',
  },
  {
    id: 'AUD-006',
    timestamp: '04.04.2026 · 06:35',
    user: 'Elena Dumitrescu',
    role: 'nurse',
    action: 'Înregistrare semne vitale',
    target: 'Marin Elena — TA 178/95, FC 110, GCS 11',
    details: 'Set complet vitale — alertă generată pentru TA și GCS',
    ip: '192.168.1.52',
  },
  {
    id: 'AUD-007',
    timestamp: '03.04.2026 · 20:10',
    user: 'Alexandru Pavel',
    role: 'patient',
    action: 'Vizualizare rezultate analize',
    target: 'Profil propriu',
    details: 'Acces la secțiunea Istoric Medical',
    ip: '10.0.0.12',
  },
  {
    id: 'AUD-008',
    timestamp: '03.04.2026 · 19:45',
    user: 'Dr. Alexandru Pavel',
    role: 'doctor',
    action: 'Generare scrisoare externare',
    target: 'Tudor Cristina',
    details: 'Draft scrisoare externare — în așteptare semnătură',
    ip: '192.168.1.45',
  },
];

/** Add a new entry to the audit trail */
export function addAuditEntry(
  entry: Omit<AuditEntry, 'id' | 'timestamp'>
): AuditEntry {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');

  const newEntry: AuditEntry = {
    ...entry,
    id: nextId(),
    timestamp: `${dd}.${mm}.${yyyy} · ${hh}:${min}`,
  };

  auditTrail.unshift(newEntry);
  return newEntry;
}

/** Get the full audit trail (newest first) */
export function getAuditTrail(): AuditEntry[] {
  return [...auditTrail];
}

/** Get audit entries filtered by role */
export function getAuditByRole(role: 'doctor' | 'patient' | 'nurse'): AuditEntry[] {
  return auditTrail.filter((e) => e.role === role);
}

/** Get audit entries filtered by target (patient name) */
export function getAuditByTarget(target: string): AuditEntry[] {
  return auditTrail.filter((e) =>
    e.target.toLowerCase().includes(target.toLowerCase())
  );
}

/** Get the count of audit entries */
export function getAuditCount(): number {
  return auditTrail.length;
}
