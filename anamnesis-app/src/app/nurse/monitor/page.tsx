"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InfoBanner } from "@/components/ui/InfoBanner";

interface VitalField {
  label: string;
  value: string;
  color?: string;
  updateLabel?: string;
}

interface PatientMonitor {
  name: string;
  location: string;
  status: { label: string; variant: "err" | "ok" | "blue" | "warn" };
  borderColor: string;
  monitorLabel: string;
  vitals: VitalField[];
  alert?: string;
}

const patients: PatientMonitor[] = [
  {
    name: "Ionescu Maria",
    location: "401/P1",
    status: { label: "Critic", variant: "err" },
    borderColor: "border-l-err",
    monitorLabel: "Monitorizare la 4h - Setata de Dr. Popescu",
    vitals: [
      { label: "TA", value: "95/60", color: "text-warn", updateLabel: "10:00" },
      { label: "FC", value: "128", color: "text-err", updateLabel: "10:00" },
      { label: "SpO2", value: "91%", color: "text-err", updateLabel: "10:00" },
      { label: "Diureza 24h", value: "1800 mL", updateLabel: "Actualizeaza" },
      { label: "Greutate", value: "78.5 kg", updateLabel: "Actualizeaza" },
    ],
  },
  {
    name: "Marin Elena",
    location: "402/P1",
    status: { label: "Critic", variant: "err" },
    borderColor: "border-l-err",
    monitorLabel: "Monitorizare la 4h - Setata de Dr. Popescu",
    vitals: [
      { label: "TA", value: "178/95", color: "text-err" },
      { label: "FC", value: "110", color: "text-warn" },
      { label: "GCS", value: "11", color: "text-err" },
      { label: "SpO2", value: "93%" },
    ],
    alert: "Evaluare neurologica obligatorie: pupile, forta musculara, afazie",
  },
  {
    name: "Stan Alexandru",
    location: "401/P3",
    status: { label: "Nou", variant: "blue" },
    borderColor: "border-l-blue",
    monitorLabel: "Monitorizare la 6h - Setata de Dr. Popescu",
    vitals: [
      { label: "SpO2", value: "92%", color: "text-warn" },
      { label: "FC", value: "105", color: "text-warn" },
      { label: "FR", value: "22" },
    ],
  },
  {
    name: "Vasilescu Ion",
    location: "401/P2",
    status: { label: "Stabil", variant: "ok" },
    borderColor: "border-l-ok",
    monitorLabel: "Monitorizare la 8h - Temperatura + SpO2",
    vitals: [
      { label: "Temp", value: "37.0 C" },
      { label: "SpO2", value: "94%" },
    ],
  },
  {
    name: "Neagu Dragos",
    location: "402/P2",
    status: { label: "Obs.", variant: "warn" },
    borderColor: "border-l-warn",
    monitorLabel: "Monitorizare la 12h - Durere (EVA) + Temp + Diureza",
    vitals: [
      { label: "Durere EVA", value: "4/10", color: "text-warn" },
      { label: "Temp", value: "37.5 C" },
      { label: "Diureza", value: "—" },
    ],
  },
];

export default function NurseMonitorPage() {
  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Monitorizare</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-3">
        Parametrii configurati de medicul curant - Completeaza valorile
      </p>

      <InfoBanner variant="gold" className="mb-3.5">
        <span className="text-[16px]">{"📊"}</span>
        <span>
          Fiecare pacient are parametri <strong>diferiti</strong>, configurati de medicul curant. Completeaza doar ce vezi mai jos.
        </span>
      </InfoBanner>

      {patients.map(function (pt) {
        var topVitals = pt.vitals.length <= 3 ? pt.vitals : pt.vitals.slice(0, Math.min(4, pt.vitals.length));
        var bottomVitals = pt.vitals.length > 3 ? pt.vitals.slice(Math.min(4, pt.vitals.length)) : [];
        var gridCols = topVitals.length === 2 ? "grid-cols-2" : topVitals.length === 4 ? "grid-cols-4" : "grid-cols-3";

        return (
          <Card key={pt.name} className={"mb-3 !border-l-[3px] !" + pt.borderColor}>
            <div className="flex items-center gap-2.5 mb-1">
              <Badge variant={pt.status.variant}>{pt.status.label}</Badge>
              <div className="text-[15px] font-extrabold text-tx">{pt.name}</div>
              <div className="text-[12px] text-tx3 ml-auto">{pt.location}</div>
            </div>

            <div className="text-[11px] text-tx3 font-bold tracking-wider uppercase mt-3 mb-2">
              {pt.monitorLabel}
            </div>

            <div className={"grid " + gridCols + " gap-1.5 mb-2"}>
              {topVitals.map(function (v) {
                return (
                  <div
                    key={v.label}
                    className="bg-bg-surf border border-brd rounded-rs p-2 text-center cursor-pointer hover:border-gold transition-colors"
                  >
                    <div className="text-[9px] text-tx3 font-bold">{v.label}</div>
                    <div className={"text-[14px] font-extrabold mt-0.5 " + (v.color || "text-tx")}>
                      {v.value}
                    </div>
                    {v.updateLabel ? <div className="text-[9px] text-tx3 mt-0.5">{v.updateLabel}</div> : null}
                  </div>
                );
              })}
            </div>

            {bottomVitals.length > 0 ? (
              <div className={"grid grid-cols-" + bottomVitals.length + " gap-1.5"}>
                {bottomVitals.map(function (v) {
                  return (
                    <div
                      key={v.label}
                      className="bg-bg-surf border border-brd rounded-rs p-2 text-center cursor-pointer hover:border-gold transition-colors"
                    >
                      <div className="text-[9px] text-tx3 font-bold">{v.label}</div>
                      <div className={"text-[14px] font-bold mt-0.5 " + (v.color || "text-tx")}>
                        {v.value}
                      </div>
                      {v.updateLabel ? <div className="text-[9px] text-tx3 mt-0.5">{v.updateLabel}</div> : null}
                    </div>
                  );
                })}
              </div>
            ) : null}

            {pt.alert ? (
              <InfoBanner variant="err" className="mt-2.5 !m-0">
                <span className="text-[12px]">{pt.alert}</span>
              </InfoBanner>
            ) : null}
          </Card>
        );
      })}

      <Button variant="outline" fullWidth className="mt-2">
        Alerta medic curant
      </Button>
    </div>
  );
}
