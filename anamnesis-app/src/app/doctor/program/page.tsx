'use client';

import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function DoctorProgramPage() {
  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Program</h2>
      <p className="text-[13px] text-tx3 mt-1">Programările tale de cabinet și spital</p>

      {/* ═══ Azi ═══ */}
      <SectionLabel>Azi — 04 Apr 2026</SectionLabel>
      <Card>
        <div className="text-[14px] text-tx2 text-center py-2.5">
          Fără programări cabinet azi
        </div>
      </Card>

      {/* ═══ Mâine ═══ */}
      <SectionLabel>Mâine — 05 Apr 2026</SectionLabel>

      <Card variant="gold" className="mb-2">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: 'var(--blue-s)', color: 'var(--blue)' }}
          >
            AP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Alexandru Pavel</div>
            <div className="text-[13px] text-tx2">Control cardiologic · Pacient existent</div>
          </div>
        </div>
        <div className="text-[13px] text-tx3 mt-2.5">
          &#x1F550; 10:30 · Cabinet 204 · Durată: 30 min
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: 'var(--ok-s)', color: 'var(--ok)' }}
          >
            MV
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Munteanu Vlad</div>
            <div className="text-[13px] text-tx2">Primă consultație · Referral MF</div>
          </div>
        </div>
        <div className="text-[13px] text-tx3 mt-2.5">
          &#x1F550; 11:15 · Cabinet 204 · Durată: 45 min
        </div>
      </Card>

      {/* ═══ Cereri programare ═══ */}
      <SectionLabel>Cereri programare (din Sistem)</SectionLabel>

      <div className="bg-bg-card border border-brd rounded-r p-3">
        {/* Request header */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: 'var(--teal-s)', color: 'var(--teal)' }}
          >
            DM
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-bold text-tx">Marinescu Diana</div>
            <div className="text-[12px] text-tx2">Solicită programare · Control periodic</div>
          </div>
          <Badge variant="teal">Sistem</Badge>
        </div>

        {/* Request details */}
        <div className="text-[12px] text-tx3 mt-2 mb-2">
          Motiv: control tiroidian periodic, ultimul consult acum 6 luni
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="ok" size="sm" className="flex-1">
            &#x2713; Acceptă
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Propune altă dată
          </Button>
        </div>
      </div>
    </div>
  );
}
