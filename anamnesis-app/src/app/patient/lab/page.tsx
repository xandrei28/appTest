"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { Button } from "@/components/ui/Button";

interface LabRow {
  name: string;
  value: string;
  ref: string;
  status: "ok" | "hi" | "lo";
}

var lipidPanel: LabRow[] = [
  { name: "Colesterol total", value: "238", ref: "mg/dL (<200)", status: "hi" },
  { name: "LDL-Colesterol", value: "142", ref: "mg/dL (<100)", status: "hi" },
  { name: "HDL-Colesterol", value: "58", ref: "mg/dL (>40)", status: "ok" },
  { name: "Trigliceride", value: "156", ref: "mg/dL (<150)", status: "ok" },
];

var hemogram: LabRow[] = [
  { name: "Hemoglobina", value: "14.2", ref: "g/dL (13-17)", status: "ok" },
  { name: "Leucocite", value: "6.8", ref: "x10^3/uL (4-10)", status: "ok" },
  { name: "Trombocite", value: "245", ref: "x10^3/uL (150-400)", status: "ok" },
  { name: "VSH", value: "8", ref: "mm/h (<15)", status: "ok" },
];

var metabolic: LabRow[] = [
  { name: "HbA1c", value: "5.4", ref: "% (<5.7)", status: "ok" },
  { name: "Glicemie", value: "92", ref: "mg/dL (70-100)", status: "ok" },
  { name: "CRP", value: "0.8", ref: "mg/L (<3)", status: "ok" },
  { name: "Creatinina", value: "0.95", ref: "mg/dL (0.7-1.2)", status: "ok" },
];

function LabSection({ title, rows }: { title: string; rows: LabRow[] }) {
  return (
    <Card className="mb-3">
      <div className="text-[13px] font-bold text-gold mb-3 tracking-wider">{title}</div>
      <div className="space-y-0">
        {rows.map(function (row) {
          return (
            <div key={row.name} className="flex items-center py-2 border-b border-brd last:border-b-0">
              <div className="text-[13px] text-tx flex-1">{row.name}</div>
              <div className={"text-[15px] font-bold w-14 text-right " + (row.status === "hi" ? "text-err" : row.status === "lo" ? "text-warn" : "text-ok")}>
                {row.value}
              </div>
              <div className="text-[11px] text-tx3 w-28 text-right">{row.ref}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default function PatientLabPage() {
  var router = useRouter();

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <button
          className="text-tx2 text-[20px] p-1 bg-transparent border-none cursor-pointer"
          onClick={function () { router.push("/patient/history"); }}
        >
          {"←"}
        </button>
        <h2 className="text-[20px] font-extrabold text-tx">Analize de Sange</h2>
      </div>
      <p className="text-[13px] text-tx3 mb-3">Hemoleucograma completa - 28 Mar 2026</p>

      <InfoBanner variant="gold" className="mb-4">
        <span className="text-[16px]">{"🔗"}</span>
        <span>NFT #ANM-LAB-0x8f4a - Verificat - MedLife Bucuresti</span>
      </InfoBanner>

      <LabSection title="PROFIL LIPIDIC" rows={lipidPanel} />
      <LabSection title="HEMOLEUCOGRAMA" rows={hemogram} />
      <LabSection title="METABOLIC" rows={metabolic} />

      <div className="text-[12px] text-tx3 text-center my-3.5">
        Normal / Atentie / Critic
      </div>

      <Button variant="gold" fullWidth className="mb-2">
        Descarca PDF — Analize complete
      </Button>
      <Button variant="outline" fullWidth>
        Verifica autenticitatea NFT
      </Button>
    </div>
  );
}
