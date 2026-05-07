'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { Badge } from '@/components/ui/Badge';

interface PatientCard {
  name: string;
  sub: string;
  bed: string;
  salon: string;
  diagnosis: string;
  status: { label: string; variant: 'err' | 'ok' | 'blue' | 'warn' };
  alerts?: { label: string; variant: 'err' | 'ok' | 'blue' | 'warn' | 'gold' | 'purp' }[];
  tasks: { label: string; variant: 'err' | 'ok' | 'blue' | 'warn' | 'gold' | 'purp' }[];
  doctor: string;
  borderColor: string;
}

const salon401: PatientCard[] = [
  {
    name: 'Ionescu Maria',
    sub: '72 ani · F · Zi 4',
    bed: 'Pat 1',
    salon: '401',
    diagnosis: 'IC decompensata NYHA III · FA cu AV rapida',
    status: { label: 'Critic', variant: 'err' },
    alerts: [{ label: '⚠ Alergie Penicilina', variant: 'warn' }],
    tasks: [
      { label: '\u{1F48A} Furosemid 08:00 ✓', variant: 'gold' },
      { label: '\u{1F4CA} TA/FC la 10:00', variant: 'warn' },
      { label: '\u{1FA78} Bilant renal', variant: 'blue' },
    ],
    doctor: 'Medic curant: Dr. Popescu A.',
    borderColor: 'border-l-err',
  },
  {
    name: 'Vasilescu Ion',
    sub: '58 ani · M · Zi 6',
    bed: 'Pat 2',
    salon: '401',
    diagnosis: 'Pneumonie comunitara · BPOC Gold III',
    status: { label: 'Stabil', variant: 'ok' },
    alerts: [{ label: 'Externare maine', variant: 'warn' }],
    tasks: [
      { label: '\u{1F48A} Ceftriaxona 10:00', variant: 'gold' },
      { label: '\u{1F32B}️ Salbutamol neb 08:00 ✓', variant: 'purp' },
    ],
    doctor: 'Medic curant: Dr. Popescu A.',
    borderColor: 'border-l-ok',
  },
  {
    name: 'Stan Alexandru',
    sub: '45 ani · M · Zi 1',
    bed: 'Pat 3',
    salon: '401',
    diagnosis: 'Suspiciune TEP · CT angio URGENT',
    status: { label: 'Nou azi', variant: 'blue' },
    alerts: [],
    tasks: [
      { label: '\u{1FA78} D-dimeri control URGENT', variant: 'err' },
      { label: '\u{1F3E5} Transport CT 10:30', variant: 'blue' },
      { label: '\u{1F489} LMWH 09:00 ✓', variant: 'gold' },
    ],
    doctor: 'Medic curant: Dr. Popescu A.',
    borderColor: 'border-l-blue',
  },
];

const salon402: PatientCard[] = [
  {
    name: 'Marin Elena',
    sub: '81 ani · F · Zi 2',
    bed: 'Pat 1',
    salon: '402',
    diagnosis: 'AVC ischemic acut ACM stanga · FA · HTA gr. III',
    status: { label: 'Critic', variant: 'err' },
    alerts: [{ label: '⚠ Anticoag. activ', variant: 'warn' }],
    tasks: [
      { label: '\u{1F4CA} TA/FC/GCS la 10:00', variant: 'warn' },
      { label: '\u{1F48A} Nicardipina ✓ continuu', variant: 'gold' },
    ],
    doctor: 'Medic curant: Dr. Popescu A.',
    borderColor: 'border-l-err',
  },
  {
    name: 'Neagu Dragos',
    sub: '34 ani · M · Zi 3',
    bed: 'Pat 2',
    salon: '402',
    diagnosis: 'Pancreatita acuta biliara · Litiaza coledociana',
    status: { label: 'Observatie', variant: 'warn' },
    alerts: [{ label: 'ERCP maine', variant: 'purp' }],
    tasks: [
      { label: '\u{1F4A7} Ringer 250mL/h ✓', variant: 'gold' },
      { label: '\u{1F48A} Paracetamol 14:00', variant: 'gold' },
    ],
    doctor: 'Medic curant: Dr. Popescu A.',
    borderColor: 'border-l-warn',
  },
  {
    name: 'Tudor Cristina',
    sub: '66 ani · F · Zi 7',
    bed: 'Pat 3',
    salon: '402',
    diagnosis: 'DZ tip 2 decompensat · Neuropatie diabetica',
    status: { label: 'Stabil', variant: 'ok' },
    alerts: [{ label: 'Externare azi', variant: 'gold' }],
    tasks: [
      { label: '✓ Branula de scos', variant: 'ok' },
      { label: '\u{1F4CB} Externare pregatita', variant: 'ok' },
    ],
    doctor: 'Medic curant: Dr. Popescu A.',
    borderColor: 'border-l-ok',
  },
];

function PatientCardComponent({ patient }: { patient: PatientCard }) {
  return (
    <div className={`bg-bg-card border border-brd rounded-r p-3.5 border-l-[3px] ${patient.borderColor} cursor-pointer hover:bg-bg-card-h transition-colors`}>
      {/* Top row */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <div className="text-[15px] font-bold text-tx">{patient.name}</div>
          <div className="text-[12px] text-tx3">{patient.sub}</div>
        </div>
        <div className="text-[12px] text-tx3 flex-shrink-0">\u{1F6CF} {patient.bed}</div>
      </div>

      {/* Diagnosis */}
      <div className="text-[12px] text-tx2 mb-2">
        <strong>Dg:</strong> {patient.diagnosis}
      </div>

      {/* Status badges */}
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        <Badge variant={patient.status.variant}>{patient.status.label}</Badge>
        {patient.alerts?.map((a) => (
          <Badge key={a.label} variant={a.variant}>{a.label}</Badge>
        ))}
      </div>

      {/* Tasks */}
      <div className="pt-2.5 border-t border-brd">
        <div className="text-[11px] text-tx3 font-bold tracking-wider uppercase mb-1.5">
          De facut acum
        </div>
        <div className="flex flex-wrap gap-1.5">
          {patient.tasks.map((t) => (
            <Badge key={t.label} variant={t.variant} className="!text-[10px]">
              {t.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Doctor */}
      <div className="text-[11px] text-tx3 mt-2.5">{patient.doctor}</div>
    </div>
  );
}

export default function NursePatientsPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Pacienti Sectie</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-4">
        Medicina Interna · Tura de zi · 6 pacienti
      </p>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Cauta pacient, pat, diagnostic..."
        className="mb-4"
      />

      {/* Salon 401 */}
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-[13px] font-bold text-tx flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal inline-block" />
          Salon 401
        </h4>
        <span className="text-[11px] text-tx3">3 paturi</span>
      </div>

      <div className="space-y-3 mb-5">
        {salon401.map((p) => (
          <PatientCardComponent key={p.name} patient={p} />
        ))}
      </div>

      {/* Salon 402 */}
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-[13px] font-bold text-tx flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal inline-block" />
          Salon 402
        </h4>
        <span className="text-[11px] text-tx3">3 paturi</span>
      </div>

      <div className="space-y-3">
        {salon402.map((p) => (
          <PatientCardComponent key={p.name} patient={p} />
        ))}
      </div>
    </div>
  );
}
