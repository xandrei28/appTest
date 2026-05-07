"use client";

import { StatGrid } from "@/components/ui/StatGrid";
import { Card } from "@/components/ui/Card";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";

const tasks = [
  {
    color: "var(--err)",
    title: "Prelevare analize — Stan Alexandru",
    subtitle: "D-dimeri control - Cerut de Dr. Popescu",
    time: "URGENT",
    timeColor: "text-err",
  },
  {
    color: "var(--warn)",
    title: "TA + FC — Marin Elena",
    subtitle: "Monitorizare la 4h - Urmatoare: 10:00",
    time: "10:00",
    timeColor: "text-warn",
  },
  {
    color: "var(--blue)",
    title: "CT angio — Stan Alexandru",
    subtitle: "Programat 10:30 - Pregatire transport",
    time: "10:30",
    timeColor: "text-tx3",
  },
  {
    color: "var(--ok)",
    title: "Externare — Tudor Cristina",
    subtitle: "Pregatire documente + branula de scos",
    time: "Azi",
    timeColor: "text-tx3",
  },
];

export default function NurseHomePage() {
  return (
    <div>
      <div className="mb-5">
        <p className="text-[13px] text-tx3 font-medium">Buna dimineata, As.</p>
        <h2 className="text-[22px] font-extrabold text-tx mt-0.5">Elena Dumitrescu</h2>
        <div className="text-[13px] text-teal font-semibold mt-1">
          Medicina Interna - Spitalul Universitar
        </div>
      </div>

      <InfoBanner variant="teal" className="mb-3.5">
        <span className="text-[16px]">{"🕐"}</span>
        <span>
          <strong>Tura de zi</strong> - 07:00 — 19:00 - Acces activ - Sectia Medicina Interna
        </span>
      </InfoBanner>

      <StatGrid
        columns={4}
        stats={[
          { label: "Pacienti pe sectie", value: 6, color: "text-teal" },
          { label: "Critici", value: 2, color: "text-err" },
          { label: "Medicamente acum", value: 8, color: "text-warn" },
          { label: "Monitorizari", value: 4, color: "text-purp" },
        ]}
      />

      <SectionLabel>Alerte active</SectionLabel>

      <InfoBanner variant="err" className="mb-2">
        <span className="text-[16px]">{"🚨"}</span>
        <span>
          <strong>Ionescu Maria</strong> — FC 128, SpO2 91%. Atentie speciala la administrare.
        </span>
      </InfoBanner>

      <InfoBanner variant="gold">
        <span className="text-[16px]">{"💊"}</span>
        <span>
          <strong>Ora 10:00</strong> — 3 medicamente de administrat (Ceftriaxona i.v., Salbutamol neb., Paracetamol i.v.)
        </span>
      </InfoBanner>

      <SectionLabel>De facut acum</SectionLabel>

      <Card>
        <div className="space-y-0">
          {tasks.map(function (item, i) {
            return (
              <div key={i} className="flex items-start gap-3 py-2.5 border-b border-brd last:border-b-0">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: item.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-semibold text-tx">{item.title}</div>
                  <div className="text-[12px] text-tx3 mt-0.5">{item.subtitle}</div>
                </div>
                <div className={"text-[11px] font-bold flex-shrink-0 " + item.timeColor}>
                  {item.time}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <SectionLabel>Nota turei precedente</SectionLabel>

      <Card className="!border-l-[3px] !border-l-purp">
        <div className="text-[12px] text-purp font-bold mb-1.5">
          TURA NOAPTE - As. Marinescu A. - 19:00–07:00
        </div>
        <div className="text-[13px] text-tx2 leading-relaxed">
          Ionescu Maria: agitatie psihomotorie la ora 02:00, s-a administrat Diazepam 5mg p.o. conform indicatie Dr. Ionescu. FC oscilanta 110–128. Vasilescu Ion: afebril, noapte linistita. Stan Alexandru: SpO2 92% sub O2 4L, mentinut. Diureza 24h Ionescu: 1800mL.
        </div>
        <div className="text-[11px] text-tx3 mt-2">
          Semnat biometric - 07:00 - Blockchain
        </div>
      </Card>
    </div>
  );
}
