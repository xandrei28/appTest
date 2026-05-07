'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

interface MedItem {
  color: string;
  name: string;
  dose: string;
}

interface TimeSlot {
  icon: string;
  label: string;
  time: string;
  meds: MedItem[];
}

const schedule: TimeSlot[] = [
  {
    icon: '\u{1F305}',
    label: 'Dimineata',
    time: '08:00',
    meds: [
      { color: 'var(--blue)', name: 'Ramipril 5mg', dose: '1 compr.' },
      { color: 'var(--ok)', name: 'Aspirina 75mg', dose: '1 compr.' },
      { color: 'var(--purp)', name: 'Omeprazol 20mg', dose: '1 caps, a jeun' },
    ],
  },
  {
    icon: '☀️',
    label: 'Pranz',
    time: '13:00',
    meds: [
      { color: 'var(--warn)', name: 'Metformin 500mg', dose: '1 compr.' },
    ],
  },
  {
    icon: '\u{1F319}',
    label: 'Seara',
    time: '21:00',
    meds: [
      { color: 'var(--gold)', name: 'Atorvastatina 20mg', dose: '1 compr.' },
      { color: 'var(--warn)', name: 'Metformin 500mg', dose: '1 compr.' },
    ],
  },
];

export default function PatientMedsPage() {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Medicatia Mea</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-4">
        Program generat automat din retetele active
      </p>

      {/* Medication schedule */}
      {schedule.map((slot) => (
        <Card key={slot.time} className="mb-3">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[18px]">{slot.icon}</span>
            <span className="text-[15px] font-bold text-tx">{slot.label}</span>
            <span className="text-[13px] text-tx3 ml-auto">{slot.time}</span>
          </div>
          {slot.meds.map((med) => (
            <div key={med.name} className="flex items-center gap-2.5 py-1.5">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: med.color }}
              />
              <div className="text-[14px] font-semibold text-tx flex-1">{med.name}</div>
              <div className="text-[12px] text-tx3">{med.dose}</div>
            </div>
          ))}
        </Card>
      ))}

      <InfoBanner variant="gold" className="mt-4 mb-4">
        <span className="text-[16px]">\u{1F48A}</span>
        <span>Se actualizeaza automat la fiecare reteta noua prescrisa.</span>
      </InfoBanner>

      {/* Active prescriptions */}
      <SectionLabel>Retete active</SectionLabel>

      <Card onClick={() => router.push('/patient/rx')}>
        <div className="flex items-center gap-3">
          <span className="text-[20px]">\u{1F4CB}</span>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-bold text-tx">Reteta #R-2026-0501</div>
            <div className="text-[12px] text-tx2">Dr. Popescu · 15 Mar 2026</div>
          </div>
          <Badge variant="ok">Activa</Badge>
        </div>
        <div className="text-[12px] text-gold font-semibold text-center mt-2.5">
          Deschide reteta + QR farmacie →
        </div>
      </Card>
    </div>
  );
}
