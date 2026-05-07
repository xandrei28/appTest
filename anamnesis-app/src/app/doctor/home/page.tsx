'use client';

import { useRouter } from 'next/navigation';
import { StatGrid } from '@/components/ui/StatGrid';
import { Card } from '@/components/ui/Card';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { Timeline } from '@/components/ui/Timeline';

export default function DoctorHomePage() {
  const router = useRouter();

  return (
    <div>
      {/* Greeting */}
      <div className="mb-5">
        <p className="text-[13px] text-tx3 font-medium">Bună dimineața, Dr.</p>
        <h2 className="text-[22px] font-extrabold text-tx mt-0.5">Andrei Popescu</h2>
        <div className="text-[13px] text-gold font-semibold mt-1">
          Medicină Internă · Spitalul Universitar
        </div>
      </div>

      {/* Stats Grid */}
      <StatGrid
        columns={2}
        stats={[
          {
            label: 'Pacienți internați →',
            value: 12,
            color: 'text-gold',
          },
          {
            label: 'Internări de zi →',
            value: 5,
            color: 'text-gold',
          },
          {
            label: 'Pacienți critici',
            value: 2,
            color: 'text-err',
          },
          {
            label: 'Externări azi',
            value: 2,
            color: 'text-warn',
          },
        ]}
      />

      {/* Alerte active */}
      <SectionLabel>Alerte active</SectionLabel>

      <InfoBanner variant="err" className="mb-2">
        <span className="text-[16px]">&#x1F6A8;</span>
        <span>
          <strong>Ionescu Maria</strong> — FC 128, SpO&#x2082; 91%. Necesită evaluare.
        </span>
      </InfoBanner>

      <InfoBanner variant="gold">
        <span className="text-[16px]">&#x1F4CB;</span>
        <span>
          <strong>Tudor Cristina</strong> — Externare azi. Scrisoare medicală de generat.
        </span>
      </InfoBanner>

      {/* Cereri de acces */}
      <SectionLabel>Cereri de acces în așteptare</SectionLabel>

      <InfoBanner variant="blue">
        <span className="text-[16px]">&#x1F514;</span>
        <span>
          <strong>3 cereri</strong> de la pacienți din Sistem Anamnesis necesită răspuns.
        </span>
      </InfoBanner>

      {/* Activitate recentă */}
      <SectionLabel>Activitate recentă</SectionLabel>

      <Card>
        <Timeline
          entries={[
            {
              color: 'var(--blue)',
              title: 'Stan Alexandru internat',
              subtitle: 'Suspiciune TEP · Salon 401 Pat 3',
              time: '2h',
            },
            {
              color: 'var(--ok)',
              title: 'Analize primite — Neagu D.',
              subtitle: 'Amilaze, Lipaze, Biochimie',
              time: '4h',
            },
            {
              color: 'var(--gold)',
              title: 'Acces aprobat — Marinescu D.',
              subtitle: 'Pacient Sistem · Analize din 20.03',
              time: 'Ieri',
            },
          ]}
        />
      </Card>

      {/* Programări cabinet */}
      <SectionLabel>Programări cabinet</SectionLabel>

      <Card variant="gold" onClick={() => router.push('/doctor/program')}>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: 'var(--blue-s)', color: 'var(--blue)' }}
          >
            AP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Alexandru Pavel</div>
            <div className="text-[13px] text-tx2">Control cardiologic</div>
          </div>
          <Badge variant="blue">Mâine</Badge>
        </div>
        <div className="text-[13px] text-tx3 mt-2.5">
          &#x1F4C5; 05 Apr 2026 · &#x1F550; 10:30 · Cabinet 204
        </div>
      </Card>
    </div>
  );
}
