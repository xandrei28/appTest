"use client";

import { useRouter } from "next/navigation";
import { StatGrid } from "@/components/ui/StatGrid";
import { Card } from "@/components/ui/Card";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/ui/Timeline";

export default function DoctorHomePage() {
  var router = useRouter();

  return (
    <div>
      <div className="mb-5">
        <p className="text-[13px] text-tx3 font-medium">Buna dimineata, Dr.</p>
        <h2 className="text-[22px] font-extrabold text-tx mt-0.5">Andrei Popescu</h2>
        <div className="text-[13px] text-gold font-semibold mt-1">
          Medicina Interna - Spitalul Universitar
        </div>
      </div>

      <StatGrid
        columns={2}
        stats={[
          { label: "Pacienti internati", value: 12, color: "text-gold" },
          { label: "Internari de zi", value: 5, color: "text-gold" },
          { label: "Pacienti critici", value: 2, color: "text-err" },
          { label: "Externari azi", value: 2, color: "text-warn" },
        ]}
      />

      <SectionLabel>Alerte active</SectionLabel>

      <InfoBanner variant="err" className="mb-2">
        <span className="text-[16px]">{"🚨"}</span>
        <span>
          <strong>Ionescu Maria</strong> — FC 128, SpO2 91%. Necesita evaluare.
        </span>
      </InfoBanner>

      <InfoBanner variant="gold">
        <span className="text-[16px]">{"📋"}</span>
        <span>
          <strong>Tudor Cristina</strong> — Externare azi. Scrisoare medicala de generat.
        </span>
      </InfoBanner>

      <SectionLabel>Cereri de acces in asteptare</SectionLabel>

      <InfoBanner variant="blue">
        <span className="text-[16px]">{"🔔"}</span>
        <span>
          <strong>3 cereri</strong> de la pacienti din Sistem Anamnesis necesita raspuns.
        </span>
      </InfoBanner>

      <SectionLabel>Activitate recenta</SectionLabel>

      <Card>
        <Timeline
          entries={[
            {
              color: "var(--blue)",
              title: "Stan Alexandru internat",
              subtitle: "Suspiciune TEP - Salon 401 Pat 3",
              time: "2h",
            },
            {
              color: "var(--ok)",
              title: "Analize primite — Neagu D.",
              subtitle: "Amilaze, Lipaze, Biochimie",
              time: "4h",
            },
            {
              color: "var(--gold)",
              title: "Acces aprobat — Marinescu D.",
              subtitle: "Pacient Sistem - Analize din 20.03",
              time: "Ieri",
            },
          ]}
        />
      </Card>

      <SectionLabel>Programari cabinet</SectionLabel>

      <Card variant="gold" onClick={function () { router.push("/doctor/program"); }}>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--blue-s)", color: "var(--blue)" }}
          >
            AP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Alexandru Pavel</div>
            <div className="text-[13px] text-tx2">Control cardiologic</div>
          </div>
          <Badge variant="blue">Maine</Badge>
        </div>
        <div className="text-[13px] text-tx3 mt-2.5">
          05 Apr 2026 - 10:30 - Cabinet 204
        </div>
      </Card>
    </div>
  );
}
