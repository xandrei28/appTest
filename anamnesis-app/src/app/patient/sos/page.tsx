'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Toggle } from '@/components/ui/Toggle';

export default function PatientSosPage() {
  const [tier2Toggles, setTier2Toggles] = useState({
    externari: true,
    simptome: true,
    analize: true,
  });

  const toggleTier2 = (key: keyof typeof tier2Toggles) => {
    setTier2Toggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Profil Urgenta</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-4">
        TierGuard™ — datele tale in situatii critice
      </p>

      {/* QR Section */}
      <div className="bg-bg-card border border-brd rounded-r p-5 text-center mb-4">
        <div className="text-[12px] font-bold tracking-widest uppercase text-err mb-3">
          QR Medical de Urgenta
        </div>

        {/* QR Code Placeholder */}
        <div className="w-36 h-36 mx-auto bg-bg-surf rounded-lg border border-brd relative flex items-center justify-center mb-3">
          <div className="grid grid-cols-11 gap-px w-28 h-28">
            {[1,1,1,0,1,1,0,1,1,1,0,
              1,0,1,1,0,1,1,0,1,0,1,
              1,1,0,1,1,0,1,1,0,1,1,
              0,1,1,0,1,1,0,1,1,0,1,
              1,0,1,1,0,1,1,0,1,1,0,
              0,1,0,1,1,0,1,1,0,1,1,
              1,1,1,0,1,1,0,1,1,0,1,
              1,0,1,1,0,1,1,0,1,1,0,
              0,1,0,1,1,0,1,1,0,1,1,
              1,0,1,0,1,1,0,1,1,0,1,
              1,1,0,1,0,1,1,0,1,1,1].map((v, i) => (
              <div
                key={i}
                className={`rounded-[1px] ${v ? 'bg-tx' : 'bg-transparent'}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-md bg-err flex items-center justify-center text-bg text-[14px] font-black">
              SOS
            </div>
          </div>
        </div>

        <p className="text-[13px] text-tx2 mb-3">
          Scanabil cu orice camera. Deschide instant ID Card-ul tau de urgenta in aplicatia medicului.
        </p>
        <Button variant="outline" size="sm">
          \u{1F4F2} Adauga in Apple / Google Wallet
        </Button>
      </div>

      {/* Tier 1 */}
      <SectionLabel>Tier 1 — Acces instant (fara consimtamant)</SectionLabel>

      <InfoBanner variant="err" className="mb-3">
        <span className="text-[16px]">\u{1F6A8}</span>
        <span>Vizibil IMEDIAT pentru echipele de urgenta cand nu poti comunica.</span>
      </InfoBanner>

      <Card className="mb-4">
        {[
          { label: 'Nume', value: 'Alexandru Pavel' },
          { label: 'Varsta', value: '34 ani' },
          { label: 'Grup sangvin', value: 'O+', valueColor: 'text-err' },
          { label: 'Alergii', value: 'Penicilina, AINS', valueColor: 'text-warn' },
          { label: 'APP', value: 'Hiperlipidemie' },
          { label: 'Medicatie oficiala', value: 'Atorvastatina 20mg\nRamipril 5mg' },
        ].map((field) => (
          <div key={field.label} className="flex justify-between py-2 border-b border-brd last:border-b-0">
            <span className="text-[12px] text-tx3 font-medium">{field.label}</span>
            <span className={`text-[13px] font-semibold text-right whitespace-pre-line ${field.valueColor || 'text-tx'}`}>
              {field.value}
            </span>
          </div>
        ))}
      </Card>

      {/* Tier 2 */}
      <SectionLabel>Tier 2 — Acces extins (cu accept ulterior)</SectionLabel>

      <InfoBanner variant="blue" className="mb-3">
        <span className="text-[16px]">ℹ️</span>
        <span>Accesibile doar cu aprobarea ta sau review DPO in 72h.</span>
      </InfoBanner>

      <Card className="mb-4">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-[18px]">\u{1F4C4}</span>
          <div className="text-[14px] font-bold text-tx flex-1">Toate externarile</div>
          <Toggle checked={tier2Toggles.externari} onChange={() => toggleTier2('externari')} />
        </div>
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-[18px]">\u{1F4CA}</span>
          <div className="text-[14px] font-bold text-tx flex-1">Istoricul simptomelor</div>
          <Toggle checked={tier2Toggles.simptome} onChange={() => toggleTier2('simptome')} />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[18px]">\u{1FA78}</span>
          <div className="text-[14px] font-bold text-tx flex-1">Ultimele analize (sange + radio)</div>
          <Toggle checked={tier2Toggles.analize} onChange={() => toggleTier2('analize')} />
        </div>
      </Card>

      {/* Emergency contact */}
      <SectionLabel>Contact urgenta</SectionLabel>

      <Card className="mb-4">
        {[
          { label: 'Persoana', value: 'Maria Pavel' },
          { label: 'Telefon', value: '+40 722 *** ***' },
        ].map((field) => (
          <div key={field.label} className="flex justify-between py-2 border-b border-brd last:border-b-0">
            <span className="text-[12px] text-tx3 font-medium">{field.label}</span>
            <span className="text-[13px] font-semibold text-tx">{field.value}</span>
          </div>
        ))}
        <div className="flex justify-between py-2">
          <span className="text-[12px] text-tx3 font-medium">Directiva anticipata</span>
          <Badge variant="ok">Incarcata</Badge>
        </div>
      </Card>

      <Button variant="outline" fullWidth>
        ✏️ Editeaza profilul de urgenta
      </Button>
    </div>
  );
}
