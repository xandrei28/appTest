'use client';

import { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HubCard } from '@/components/ui/HubCard';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { Toggle } from '@/components/ui/Toggle';

/* ---- HubCard with toggle instead of arrow ---- */
function HubCardToggle({
  icon,
  iconBg,
  title,
  subtitle,
  checked,
  onChange,
}: {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3 bg-bg-card border border-brd rounded-r p-3.5">
      <div
        className="w-10 h-10 rounded-rm flex items-center justify-center text-[18px] flex-shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] font-bold text-tx">{title}</h3>
        <p className="text-[11px] text-tx3 mt-0.5">{subtitle}</p>
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

export default function DoctorConfigPage() {
  const [iCloudBackup, setICloudBackup] = useState(true);
  const [gpsRestriction, setGpsRestriction] = useState(false);

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Configurări</h2>
      <p className="text-[13px] text-tx3 mt-1">Securitate, recuperare cont și setări aplicație</p>

      {/* ═══ Securitate & Autentificare ═══ */}
      <SectionLabel>Securitate & Autentificare</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="&#x1F510;"
          iconBg="var(--ok-s)"
          title="Autentificare biometrică"
          subtitle="Face ID activat · Semnare pe fiecare acțiune"
        />
        <HubCard
          icon="&#x1F522;"
          iconBg="var(--blue-s)"
          title="PIN de siguranță"
          subtitle="PIN alternativ când biometria nu funcționează"
        />
        <HubCard
          icon="&#x1F4F1;"
          iconBg="var(--purp-s)"
          title="Dispozitive & sesiuni active"
          subtitle="1 dispozitiv activ · iPhone 15 Pro"
        />
      </div>

      {/* ═══ Recuperare & Backup ═══ */}
      <SectionLabel>Recuperare & Backup</SectionLabel>

      <InfoBanner variant="err" className="mb-2">
        <span className="text-[16px]">&#x26A0;&#xFE0F;</span>
        <span>
          Salvează fraza de recuperare într-un loc sigur. Fără ea, contul{' '}
          <strong>nu poate fi recuperat</strong>.
        </span>
      </InfoBanner>

      <div className="space-y-2">
        <HubCard
          icon="&#x1F5DD;&#xFE0F;"
          iconBg="var(--gold-soft)"
          title="Frază de recuperare (Seed)"
          subtitle="12 cuvinte · Ultima verificare: 01.03.2026"
        />
        <HubCard
          icon="&#x1F511;"
          iconBg="var(--blue-s)"
          title="Cheie privată & export"
          subtitle="Wallet securizat · Backup criptat"
        />
        <HubCardToggle
          icon="&#x2601;&#xFE0F;"
          iconBg="var(--ok-s)"
          title="Backup automat iCloud"
          subtitle="Activat · Ultimul backup: azi, 07:00"
          checked={iCloudBackup}
          onChange={setICloudBackup}
        />
      </div>

      {/* ═══ Blocare & Urgență ═══ */}
      <SectionLabel>Blocare & Urgență</SectionLabel>

      <InfoBanner variant="blue" className="mb-2">
        <span className="text-[16px]">&#x2139;&#xFE0F;</span>
        <span>
          Dacă telefonul este furat, blochează contul imediat. Datele medicale rămân sigure pe
          blockchain.
        </span>
      </InfoBanner>

      <div className="space-y-2">
        <div className="flex items-center gap-3 bg-bg-card border border-brd rounded-r p-3.5 cursor-pointer hover:bg-bg-card-h transition-colors active:scale-[0.99]">
          <div
            className="w-10 h-10 rounded-rm flex items-center justify-center text-[18px] flex-shrink-0"
            style={{ background: 'var(--err-s)' }}
          >
            &#x1F6AB;
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[14px] font-bold text-tx">Blochează contul</h3>
            <p className="text-[11px] text-tx3 mt-0.5">
              Dezactivare imediată pe toate dispozitivele
            </p>
          </div>
          <span className="text-err text-[16px] flex-shrink-0">→</span>
        </div>

        <HubCard
          icon="&#x1F512;"
          iconBg="var(--warn-s)"
          title="Auto-lock"
          subtitle="Blocare automată după 5 minute de inactivitate"
        />

        <HubCardToggle
          icon="&#x1F4CD;"
          iconBg="var(--purp-s)"
          title="Restricție locație"
          subtitle="Permite acces doar din spital (GPS)"
          checked={gpsRestriction}
          onChange={setGpsRestriction}
        />
      </div>

      {/* ═══ Configurare clinică ═══ */}
      <SectionLabel>Configurare clinică</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="&#x1F3E5;"
          iconBg="var(--purp-s)"
          title="Secție & saloane"
          subtitle="Configurare saloane, paturi, secție activă"
        />
        <HubCard
          icon="&#x1F514;"
          iconBg="var(--warn-s)"
          title="Notificări"
          subtitle="Alerte critice, rezultate noi, cereri acces"
        />
      </div>

      {/* ═══ Audit & Transparență ═══ */}
      <SectionLabel>Audit & Transparență</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="&#x1F4CB;"
          iconBg="var(--teal-s)"
          title="Jurnal complet de activitate"
          subtitle="Toate acțiunile semnate — audit blockchain"
        />
        <HubCard
          icon="&#x2705;"
          iconBg="var(--ok-s)"
          title="Verificare integritate cont"
          subtitle="Ultima verificare: azi · Totul OK"
        />
      </div>

      {/* ═══ Cont ═══ */}
      <SectionLabel>Cont</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="&#x1F310;"
          iconBg="var(--blue-s)"
          title="Limbă"
          subtitle="Română"
        />
        <HubCard
          icon="&#x1F4C4;"
          iconBg="var(--bg-surf)"
          title="Termeni și condiții"
          subtitle="GDPR · Politica de confidențialitate"
        />

        {/* Dezactivare cont (special styling) */}
        <div className="flex items-center gap-3 bg-bg-card border border-brd rounded-r p-3.5 cursor-pointer hover:bg-bg-card-h transition-colors active:scale-[0.99]">
          <div
            className="w-10 h-10 rounded-rm flex items-center justify-center text-[18px] flex-shrink-0"
            style={{ background: 'var(--err-s)' }}
          >
            &#x1F5D1;&#xFE0F;
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[14px] font-bold text-err">Dezactivare cont</h3>
            <p className="text-[11px] text-tx3 mt-0.5">
              Ireversibil · Datele rămân pe blockchain
            </p>
          </div>
          <span className="text-err text-[16px] flex-shrink-0">→</span>
        </div>
      </div>

      {/* ═══ Blockchain footer ═══ */}
      <InfoBanner variant="gold" className="mt-4">
        <span className="text-[16px]">&#x1F517;</span>
        <span>Blockchain: MultiversX Sovereign · Bloc #4,893,412 · &#x2713; Sincronizat</span>
      </InfoBanner>

      <div className="text-[11px] text-tx3 text-center mt-3 mb-2">
        Anamnesis v1.0.0 · Build 2026.04.07
      </div>
    </div>
  );
}
