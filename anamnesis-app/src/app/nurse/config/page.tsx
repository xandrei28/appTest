'use client';

import { HubCard } from '@/components/ui/HubCard';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { SectionLabel } from '@/components/ui/SectionLabel';

export default function NurseConfigPage() {
  return (
    <div>
      {/* Securitate & Autentificare */}
      <SectionLabel className="!mt-0">Securitate & Autentificare</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="\u{1F510}"
          iconBg="var(--ok-s)"
          title="Autentificare biometrica"
          subtitle="Face ID activat · Semnare pe fiecare actiune"
        />
        <HubCard
          icon="\u{1F522}"
          iconBg="var(--blue-s)"
          title="PIN de securitate"
          subtitle="PIN alternativ configurat · Schimba PIN-ul"
        />
        <HubCard
          icon="\u{1F4F1}"
          iconBg="var(--purp-s)"
          title="Dispozitive & Sesiuni active"
          subtitle="1 dispozitiv autorizat · 1 sesiune activa"
        />
      </div>

      {/* Recuperare & Backup */}
      <SectionLabel>Recuperare & Backup</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="\u{1F511}"
          iconBg="var(--warn-s)"
          title="Fraza de recuperare"
          subtitle="12 cuvinte · Vizualizeaza & verifica backup"
        />
        <HubCard
          icon="☁️"
          iconBg="var(--blue-s)"
          title="Backup iCloud"
          subtitle="Backup criptat activ · Ultimul: azi, 06:45"
        />
      </div>

      {/* Blocare & Urgenta */}
      <SectionLabel>Blocare & Urgenta</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="\u{1F6A8}"
          iconBg="var(--err-s)"
          title="Blocheaza contul"
          subtitle="Blocare imediata — pentru telefon furat sau pierdut"
        />
        <HubCard
          icon="⏱️"
          iconBg="var(--warn-s)"
          title="Auto-lock"
          subtitle="Blocare automata dupa 3 minute de inactivitate"
        />
        <HubCard
          icon="\u{1F4CD}"
          iconBg="var(--teal-s)"
          title="Restrictie GPS"
          subtitle="Cont activ doar in locatia spitalului"
        />
      </div>

      {/* Configurare Tura */}
      <SectionLabel>Configurare Tura</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="\u{1F514}"
          iconBg="var(--teal-s)"
          title="Notificari tura"
          subtitle="Alerte administrare, monitorizare, predare tura"
        />
        <HubCard
          icon="⏰"
          iconBg="var(--purp-s)"
          title="Program implicit"
          subtitle="Tura 12h · Schimba tipul de tura"
        />
      </div>

      {/* Audit & Transparenta */}
      <SectionLabel>Audit & Transparenta</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="\u{1F4DC}"
          iconBg="var(--gold-s)"
          title="Jurnal complet de activitate"
          subtitle="Administrari, monitorizari, accesari — audit blockchain"
        />
        <HubCard
          icon="✅"
          iconBg="var(--ok-s)"
          title="Verificare integritate cont"
          subtitle="Hash-check blockchain · Ultima verificare: azi"
        />
      </div>

      {/* Cont */}
      <SectionLabel>Cont</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon="\u{1F310}"
          iconBg="var(--bg-surf)"
          title="Limba"
          subtitle="Romana"
        />
        <HubCard
          icon="\u{1F4C4}"
          iconBg="var(--bg-surf)"
          title="Termeni & GDPR"
          subtitle="Politica de confidentialitate · Regulament intern"
        />
        <HubCard
          icon="⛔"
          iconBg="var(--err-s)"
          title="Dezactivare cont"
          subtitle="Dezactiveaza temporar sau sterge permanent contul"
        />
      </div>

      {/* Blockchain sync */}
      <InfoBanner variant="teal" className="mt-4">
        <span className="text-[16px]">\u{1F517}</span>
        <span>Blockchain: MultiversX Sovereign · Bloc #4,893,412 · ✓ Sincronizat</span>
      </InfoBanner>

      <div className="text-[11px] text-tx3 text-center mt-3">
        Anamnesis v1.0.0 · Build 2026.04.07
      </div>
    </div>
  );
}
