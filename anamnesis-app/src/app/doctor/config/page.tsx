"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HubCard } from "@/components/ui/HubCard";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { Toggle } from "@/components/ui/Toggle";

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
  var backupState = useState(true);
  var iCloudBackup = backupState[0];
  var setICloudBackup = backupState[1];

  var gpsState = useState(false);
  var gpsRestriction = gpsState[0];
  var setGpsRestriction = gpsState[1];

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Configurari</h2>
      <p className="text-[13px] text-tx3 mt-1">Securitate, recuperare cont si setari aplicatie</p>

      <SectionLabel>Securitate si Autentificare</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🔐"}
          iconBg="var(--ok-s)"
          title="Autentificare biometrica"
          subtitle="Face ID activat - Semnare pe fiecare actiune"
        />
        <HubCard
          icon={"🔢"}
          iconBg="var(--blue-s)"
          title="PIN de siguranta"
          subtitle="PIN alternativ cand biometria nu functioneaza"
        />
        <HubCard
          icon={"📱"}
          iconBg="var(--purp-s)"
          title="Dispozitive si sesiuni active"
          subtitle="1 dispozitiv activ - iPhone 15 Pro"
        />
      </div>

      <SectionLabel>Recuperare si Backup</SectionLabel>

      <InfoBanner variant="err" className="mb-2">
        <span className="text-[16px]">{"⚠"}</span>
        <span>
          Salveaza fraza de recuperare intr-un loc sigur. Fara ea, contul{" "}
          <strong>nu poate fi recuperat</strong>.
        </span>
      </InfoBanner>

      <div className="space-y-2">
        <HubCard
          icon={"🔑"}
          iconBg="var(--gold-soft)"
          title="Fraza de recuperare (Seed)"
          subtitle="12 cuvinte - Ultima verificare: 01.03.2026"
        />
        <HubCard
          icon={"🔑"}
          iconBg="var(--blue-s)"
          title="Cheie privata si export"
          subtitle="Wallet securizat - Backup criptat"
        />
        <HubCardToggle
          icon={"☁"}
          iconBg="var(--ok-s)"
          title="Backup automat iCloud"
          subtitle="Activat - Ultimul backup: azi, 07:00"
          checked={iCloudBackup}
          onChange={setICloudBackup}
        />
      </div>

      <SectionLabel>Blocare si Urgenta</SectionLabel>

      <InfoBanner variant="blue" className="mb-2">
        <span className="text-[12px]">
          Daca telefonul este furat, blocheaza contul imediat. Datele medicale raman sigure pe blockchain.
        </span>
      </InfoBanner>

      <div className="space-y-2">
        <div className="flex items-center gap-3 bg-bg-card border border-brd rounded-r p-3.5 cursor-pointer hover:bg-bg-card-h transition-colors active:scale-[0.99]">
          <div
            className="w-10 h-10 rounded-rm flex items-center justify-center text-[18px] flex-shrink-0"
            style={{ background: "var(--err-s)" }}
          >
            {"🚫"}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[14px] font-bold text-tx">Blocheaza contul</h3>
            <p className="text-[11px] text-tx3 mt-0.5">
              Dezactivare imediata pe toate dispozitivele
            </p>
          </div>
          <span className="text-err text-[16px] flex-shrink-0">{"→"}</span>
        </div>

        <HubCard
          icon={"🔒"}
          iconBg="var(--warn-s)"
          title="Auto-lock"
          subtitle="Blocare automata dupa 5 minute de inactivitate"
        />

        <HubCardToggle
          icon={"📍"}
          iconBg="var(--purp-s)"
          title="Restrictie locatie"
          subtitle="Permite acces doar din spital (GPS)"
          checked={gpsRestriction}
          onChange={setGpsRestriction}
        />
      </div>

      <SectionLabel>Configurare clinica</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🏥"}
          iconBg="var(--purp-s)"
          title="Sectie si saloane"
          subtitle="Configurare saloane, paturi, sectie activa"
        />
        <HubCard
          icon={"🔔"}
          iconBg="var(--warn-s)"
          title="Notificari"
          subtitle="Alerte critice, rezultate noi, cereri acces"
        />
      </div>

      <SectionLabel>Audit si Transparenta</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"📋"}
          iconBg="var(--teal-s)"
          title="Jurnal complet de activitate"
          subtitle="Toate actiunile semnate — audit blockchain"
        />
        <HubCard
          icon={"✅"}
          iconBg="var(--ok-s)"
          title="Verificare integritate cont"
          subtitle="Ultima verificare: azi - Totul OK"
        />
      </div>

      <SectionLabel>Cont</SectionLabel>
      <div className="space-y-2">
        <HubCard
          icon={"🌐"}
          iconBg="var(--blue-s)"
          title="Limba"
          subtitle="Romana"
        />
        <HubCard
          icon={"📄"}
          iconBg="var(--bg-surf)"
          title="Termeni si conditii"
          subtitle="GDPR - Politica de confidentialitate"
        />

        <div className="flex items-center gap-3 bg-bg-card border border-brd rounded-r p-3.5 cursor-pointer hover:bg-bg-card-h transition-colors active:scale-[0.99]">
          <div
            className="w-10 h-10 rounded-rm flex items-center justify-center text-[18px] flex-shrink-0"
            style={{ background: "var(--err-s)" }}
          >
            {"🗑"}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[14px] font-bold text-err">Dezactivare cont</h3>
            <p className="text-[11px] text-tx3 mt-0.5">
              Ireversibil - Datele raman pe blockchain
            </p>
          </div>
          <span className="text-err text-[16px] flex-shrink-0">{"→"}</span>
        </div>
      </div>

      <InfoBanner variant="gold" className="mt-4">
        <span className="text-[16px]">{"🔗"}</span>
        <span>Blockchain: MultiversX Sovereign - Bloc #4,893,412 - Sincronizat</span>
      </InfoBanner>

      <div className="text-[11px] text-tx3 text-center mt-3 mb-2">
        Anamnesis v1.0.0 - Build 2026.04.07
      </div>
    </div>
  );
}
