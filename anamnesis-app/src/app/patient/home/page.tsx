'use client';

import { useRouter } from 'next/navigation';
import { StatGrid } from '@/components/ui/StatGrid';
import { Card } from '@/components/ui/Card';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { Timeline } from '@/components/ui/Timeline';

export default function PatientHomePage() {
  const router = useRouter();

  return (
    <div>
      {/* Greeting */}
      <div className="mb-5">
        <p className="text-[13px] text-tx3 font-medium">Buna dimineata,</p>
        <h2 className="text-[22px] font-extrabold text-tx mt-0.5">Alexandru</h2>
      </div>

      {/* Stats */}
      <StatGrid
        columns={2}
        stats={[
          { label: 'Documente medicale →', value: 14, color: 'text-gold' },
          { label: 'Medici cu acces →', value: 3, color: 'text-gold' },
        ]}
      />

      {/* Programare urmatoare */}
      <SectionLabel>Programare urmatoare</SectionLabel>

      <Card
        variant="gold"
        onClick={() => router.push('/patient/doctors')}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: 'var(--blue-s)', color: 'var(--blue)' }}
          >
            EP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Dr. Elena Popescu</div>
            <div className="text-[13px] text-tx2">Cardiologie · Control</div>
          </div>
          <Badge variant="blue">Maine</Badge>
        </div>
        <div className="text-[13px] text-tx3 mt-2.5">
          &#x1F4C5; 31 Mar 2026 · &#x1F550; 10:30 · Sp. Universitar
        </div>
      </Card>

      {/* Activitate recenta */}
      <SectionLabel>Activitate recenta</SectionLabel>

      <Card>
        <Timeline
          entries={[
            {
              color: 'var(--ok)',
              title: 'Dr. Popescu a accesat fisa',
              subtitle: 'Analize · Semne vitale',
              time: '2h',
            },
            {
              color: 'var(--gold)',
              title: 'Analize noi adaugate',
              subtitle: 'MedLife · Hemoleucograma',
              time: 'Ieri',
            },
            {
              color: 'var(--blue)',
              title: 'Reteta noua primita',
              subtitle: 'Dr. Popescu · Ramipril + Aspirina',
              time: '3 zile',
            },
          ]}
        />
      </Card>

      {/* Medicatie azi */}
      <SectionLabel>Medicatie azi</SectionLabel>

      <Card onClick={() => router.push('/patient/meds')}>
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--blue)' }} />
          <div className="text-[14px] font-semibold text-tx flex-1">Ramipril 5mg</div>
          <div className="text-[12px] text-ok font-medium">Dimineata &#x2713;</div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
          <div className="text-[14px] font-semibold text-tx flex-1">Atorvastatina 20mg</div>
          <div className="text-[12px] text-tx3 font-medium">Seara</div>
        </div>
        <div className="text-[12px] text-gold font-semibold text-center mt-3">
          Vezi program complet →
        </div>
      </Card>
    </div>
  );
}
