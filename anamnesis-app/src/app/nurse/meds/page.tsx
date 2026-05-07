'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { InfoBanner } from '@/components/ui/InfoBanner';

interface MedRow {
  name: string;
  patient: string;
  location: string;
  status: 'done' | 'pending' | 'upcoming';
  time?: string;
  extra?: string;
}

const time0800: MedRow[] = [
  { name: 'Furosemid 40mg i.v.', patient: 'Ionescu Maria', location: 'Salon 401/Pat 1', status: 'done', time: '08:05' },
  { name: 'Digoxin 0.125mg p.o.', patient: 'Ionescu Maria', location: 'Salon 401/Pat 1', status: 'done', time: '08:05' },
  { name: 'Apixaban 2.5mg p.o.', patient: 'Ionescu Maria', location: 'Salon 401/Pat 1', status: 'done', time: '08:05' },
  { name: 'Spironolactona 25mg p.o.', patient: 'Ionescu Maria', location: 'Salon 401/Pat 1', status: 'done', time: '08:06' },
  { name: 'Dexametazona 8mg i.v.', patient: 'Vasilescu Ion', location: 'Salon 401/Pat 2', status: 'done', time: '08:12' },
  { name: 'Salbutamol neb 2.5mg', patient: 'Vasilescu Ion', location: 'Salon 401/Pat 2', status: 'done', time: '08:15' },
  { name: 'Omeprazol 40mg i.v.', patient: 'Neagu Dragos', location: 'Salon 402/Pat 2', status: 'done', time: '08:20' },
  { name: 'Pregabalina 75mg p.o.', patient: 'Tudor Cristina', location: 'Salon 402/Pat 3', status: 'done', time: '08:22' },
];

const time0900: MedRow[] = [
  { name: 'Heparina LMWH 1mg/kg s.c.', patient: 'Stan Alexandru', location: 'Salon 401/Pat 3', status: 'done', time: '09:00' },
  { name: 'Nicardipina perf. — verificare debit', patient: 'Marin Elena', location: 'Salon 402/Pat 1', status: 'pending', extra: 'Verificare debit' },
];

const time1000: MedRow[] = [
  { name: 'Ceftriaxona 2g i.v.', patient: 'Vasilescu Ion', location: 'Salon 401/Pat 2', status: 'upcoming' },
  { name: 'Paracetamol 1g i.v.', patient: 'Neagu Dragos', location: 'Salon 402/Pat 2', status: 'upcoming' },
  { name: 'Azitromicina 500mg p.o.', patient: 'Vasilescu Ion', location: 'Salon 401/Pat 2', status: 'upcoming' },
];

function MedRowComponent({ med }: { med: MedRow }) {
  const isDone = med.status === 'done';
  const isPending = med.status === 'pending';

  return (
    <div
      className={`flex items-center justify-between py-2.5 border-b border-brd last:border-b-0 ${
        isDone ? 'opacity-60' : 'cursor-pointer'
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-tx">{med.name}</div>
        <div className="text-[11px] text-tx3 mt-0.5">
          {med.patient} · {med.location}
          {med.extra && <span className="text-warn"> · {med.extra}</span>}
        </div>
      </div>
      <div className="flex-shrink-0 ml-2">
        {isDone && (
          <span className="text-[11px] text-ok font-bold">✓ {med.time}</span>
        )}
        {isPending && (
          <span className="text-[11px] text-warn font-bold">→</span>
        )}
        {med.status === 'upcoming' && (
          <span className="text-[11px] text-blue font-bold">→</span>
        )}
      </div>
    </div>
  );
}

export default function NurseMedsPage() {
  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Administrare Medicatie</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-3">
        Medicamentele prescrise de medic · Confirma administrarea
      </p>

      <InfoBanner variant="teal" className="mb-3.5">
        <span className="text-[16px]">\u{1F48A}</span>
        <span>
          Fiecare administrare necesita <strong>confirmare biometrica</strong>. Nu poti modifica doza sau medicamentul.
        </span>
      </InfoBanner>

      {/* 08:00 — done */}
      <Card className="mb-3 !border-l-[3px] !border-l-ok">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[20px]">\u{1F305}</span>
          <span className="text-[16px] font-bold text-tx">08:00</span>
          <Badge variant="ok" className="ml-auto">✓ Administrat</Badge>
        </div>
        {time0800.map((med, i) => (
          <MedRowComponent key={i} med={med} />
        ))}
      </Card>

      {/* 09:00 — partial */}
      <Card className="mb-3 !border-l-[3px] !border-l-warn">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[20px]">☀️</span>
          <span className="text-[16px] font-bold text-tx">09:00</span>
          <Badge variant="warn" className="ml-auto">Partial</Badge>
        </div>
        {time0900.map((med, i) => (
          <MedRowComponent key={i} med={med} />
        ))}
      </Card>

      {/* 10:00 — upcoming */}
      <Card className="mb-3 !border-l-[3px] !border-l-blue">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[20px]">\u{1F559}</span>
          <span className="text-[16px] font-bold text-tx">10:00</span>
          <Badge variant="blue" className="ml-auto">Urmatoare</Badge>
        </div>
        {time1000.map((med, i) => (
          <MedRowComponent key={i} med={med} />
        ))}
      </Card>

      {/* Cannot modify alert */}
      <InfoBanner variant="err" className="mt-3.5">
        <span className="text-[16px]">\u{1F512}</span>
        <span>
          Nu poti modifica medicatia. Pentru orice schimbare, contacteaza <strong>medicul curant</strong>.
        </span>
      </InfoBanner>

      <Button variant="outline" fullWidth className="mt-2">
        ⚠️ Semnaleaza problema la administrare
      </Button>
    </div>
  );
}
