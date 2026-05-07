"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";

var schedule = [
  { day: "Luni 07 Apr", type: "Zi (07-19)", textColor: "text-teal", dotColor: "bg-teal", statusLabel: "Activ", statusColor: "text-ok", isOff: false },
  { day: "Marti 08 Apr", type: "Zi (07-19)", textColor: "text-teal", dotColor: "bg-teal", statusLabel: "Programat", statusColor: "text-tx3", isOff: false },
  { day: "Miercuri 09 Apr", type: "Noapte (19-07)", textColor: "text-purp", dotColor: "bg-purp", statusLabel: "Programat", statusColor: "text-tx3", isOff: false },
  { day: "Joi 10 Apr", type: "Liber", textColor: "text-tx3", dotColor: "bg-bg-surf", statusLabel: "", statusColor: "", isOff: true },
  { day: "Vineri 11 Apr", type: "Liber", textColor: "text-tx3", dotColor: "bg-bg-surf", statusLabel: "", statusColor: "", isOff: true },
  { day: "Sambata 12 Apr", type: "Zi (07-19)", textColor: "text-teal", dotColor: "bg-teal", statusLabel: "Programat", statusColor: "text-tx3", isOff: false },
  { day: "Duminica 13 Apr", type: "Noapte (19-07)", textColor: "text-purp", dotColor: "bg-purp", statusLabel: "Programat", statusColor: "text-tx3", isOff: false },
];

var shiftHistory = [
  {
    dotColor: "var(--purp)",
    title: "Tura noapte — As. Marinescu A.",
    subtitle: "06.04 - 19:00-07:00 - Semnata",
    time: "Azi",
  },
  {
    dotColor: "var(--teal)",
    title: "Tura zi — As. Dumitrescu E.",
    subtitle: "06.04 - 07:00-19:00 - Semnata",
    time: "Ieri",
  },
  {
    dotColor: "var(--purp)",
    title: "Tura noapte — As. Popa R.",
    subtitle: "05.04 - 19:00-07:00 - Semnata",
    time: "2 zile",
  },
];

export default function NurseTuraPage() {
  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Tura si Predare</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-4">
        Program, note de tura si predare
      </p>

      <Card variant="gold" className="mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-extrabold flex-shrink-0"
            style={{ background: "var(--teal-s)", color: "var(--teal)" }}
          >
            ED
          </div>
          <div>
            <div className="text-[16px] font-bold text-tx">As. Elena Dumitrescu</div>
            <div className="text-[13px] text-tx2">Medicina Interna - Spitalul Universitar</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2.5">
          <Badge variant="ok">Autentificata</Badge>
          <Badge variant="teal">Tura de zi</Badge>
          <Badge variant="gold">Blockchain ID</Badge>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-bg-surf rounded-rs p-2.5 text-center">
            <div className="text-[10px] text-tx3 font-bold uppercase tracking-wider">Start tura</div>
            <div className="text-[18px] font-extrabold text-teal mt-0.5">07:00</div>
          </div>
          <div className="bg-bg-surf rounded-rs p-2.5 text-center">
            <div className="text-[10px] text-tx3 font-bold uppercase tracking-wider">Sfarsit tura</div>
            <div className="text-[18px] font-extrabold text-tx mt-0.5">19:00</div>
          </div>
        </div>

        <div className="text-[11px] text-tx3 text-center mt-2.5">
          Acces deschis: 06:30 — 19:30 (fereastra predare +/- 30 min)
        </div>
      </Card>

      <SectionLabel>Programul turelor — Saptamana curenta</SectionLabel>

      <Card className="mb-4">
        {schedule.map(function (entry) {
          return (
            <div key={entry.day} className="flex items-center gap-3 py-2.5 border-b border-brd last:border-b-0">
              <div className={"w-2 h-2 rounded-full flex-shrink-0 " + entry.dotColor} />
              <div className="flex-1">
                <div className="text-[13px] font-bold text-tx">
                  {entry.day}
                  {!entry.isOff ? (
                    <span> — <span className={entry.textColor}>{entry.type}</span></span>
                  ) : (
                    <span className="text-tx3"> — {entry.type}</span>
                  )}
                </div>
              </div>
              {entry.statusLabel ? (
                <div className={"text-[11px] font-semibold " + entry.statusColor}>
                  {entry.statusLabel}
                </div>
              ) : null}
            </div>
          );
        })}
      </Card>

      <SectionLabel>Nota predare tura</SectionLabel>

      <InfoBanner variant="gold" className="mb-2.5">
        <span className="text-[16px]">{"✏"}</span>
        <span>
          Completeaza nota de predare cu <strong>30 min</strong> inainte de sfarsitul turei. Nota va fi semnata biometric.
        </span>
      </InfoBanner>

      <Card className="mb-4 cursor-pointer">
        <div className="text-[14px] font-bold text-tx mb-2">
          Scrie nota de predare — Tura de zi
        </div>
        <div className="text-[13px] text-tx2 leading-relaxed">
          Include pentru fiecare pacient: starea actuala, medicamentele administrate, valori vitale notabile, incidente, sarcini ramase pentru tura urmatoare.
        </div>
        <div className="text-[12px] text-teal font-semibold text-center mt-2.5">
          Apasa pentru a completa
        </div>
      </Card>

      <SectionLabel>Istoric note ture</SectionLabel>

      <Card>
        {shiftHistory.map(function (entry, i) {
          return (
            <div key={i} className="flex items-center gap-3 py-2.5 border-b border-brd last:border-b-0">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: entry.dotColor }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-tx">{entry.title}</div>
                <div className="text-[11px] text-tx3 mt-0.5">{entry.subtitle}</div>
              </div>
              <div className="text-[11px] text-tx3 flex-shrink-0">{entry.time}</div>
            </div>
          );
        })}
      </Card>

      <InfoBanner variant="teal" className="mt-4">
        <span className="text-[16px]">{"🔗"}</span>
        <span>Blockchain: MultiversX Sovereign - Bloc #4,893,412 - Sincronizat</span>
      </InfoBanner>
    </div>
  );
}
