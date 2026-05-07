"use client";

import { HubCard } from "@/components/ui/HubCard";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function PatientConfigPage() {
  return (
    <div>
      <SectionLabel className="!mt-0">Securitate si Autentificare</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🔐"}
          iconBg="var(--ok-s)"
          title="Autentificare biometrica"
          subtitle="Face ID activat - Requis la fiecare actiune sensibila"
        />
        <HubCard
          icon={"🔢"}
          iconBg="var(--blue-s)"
          title="PIN de securitate"
          subtitle="PIN alternativ configurat - Schimba PIN-ul"
        />
        <HubCard
          icon={"📱"}
          iconBg="var(--purp-s)"
          title="Dispozitive active"
          subtitle="1 dispozitiv autorizat - iPhone 15 Pro"
        />
      </div>

      <SectionLabel>Recuperare si Backup</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🔑"}
          iconBg="var(--warn-s)"
          title="Fraza de recuperare"
          subtitle="12 cuvinte - Vizualizeaza si verifica backup"
        />
        <HubCard
          icon={"☁"}
          iconBg="var(--blue-s)"
          title="Backup iCloud"
          subtitle="Backup criptat activ - Ultimul: azi, 08:30"
        />
      </div>

      <SectionLabel>Blocare si Urgenta</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🚨"}
          iconBg="var(--err-s)"
          title="Blocheaza contul"
          subtitle="Blocare imediata — pentru telefon furat sau pierdut"
        />
        <HubCard
          icon={"⏱"}
          iconBg="var(--warn-s)"
          title="Auto-lock"
          subtitle="Blocare automata dupa 5 minute de inactivitate"
        />
      </div>

      <SectionLabel>Confidentialitate</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"👁"}
          iconBg="var(--teal-s)"
          title="Vizibilitate dosar medical"
          subtitle="Controleaza ce medici vad datele tale"
        />
        <HubCard
          icon={"📋"}
          iconBg="var(--purp-s)"
          title="Consimtaminte active"
          subtitle="3 consimtaminte acordate - Gestioneaza accesul"
        />
        <HubCard
          icon={"🔔"}
          iconBg="var(--blue-s)"
          title="Notificari"
          subtitle="Push activat - Alerte medicamente, programari, urgente"
        />
      </div>

      <SectionLabel>Audit si Transparenta</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"📜"}
          iconBg="var(--gold-s)"
          title="Jurnal de accesare"
          subtitle="Cine ti-a vizualizat dosarul — istoric complet blockchain"
        />
        <HubCard
          icon={"✅"}
          iconBg="var(--ok-s)"
          title="Verificare integritate"
          subtitle="Verifica daca datele tale medicale sunt intacte pe blockchain"
        />
      </div>

      <SectionLabel>Cont</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🌐"}
          iconBg="var(--bg-surf)"
          title="Limba"
          subtitle="Romana"
        />
        <HubCard
          icon={"📄"}
          iconBg="var(--bg-surf)"
          title="Termeni si GDPR"
          subtitle="Politica de confidentialitate - Drepturile pacientului"
        />
        <HubCard
          icon={"⛔"}
          iconBg="var(--err-s)"
          title="Dezactivare cont"
          subtitle="Dezactiveaza temporar sau sterge permanent contul"
        />
      </div>

      <InfoBanner variant="gold" className="mt-4">
        <span className="text-[16px]">{"🔗"}</span>
        <span>Blockchain: MultiversX Sovereign - Bloc #4,893,412 - Sincronizat</span>
      </InfoBanner>

      <div className="text-[11px] text-tx3 text-center mt-3">
        Anamnesis v1.0.0 - Build 2026.04.07
      </div>
    </div>
  );
}
