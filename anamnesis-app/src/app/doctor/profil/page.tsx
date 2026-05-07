"use client";

import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { HubCard } from "@/components/ui/HubCard";

export default function DoctorProfilPage() {
  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Profil si Jurnal</h2>
      <p className="text-[13px] text-tx3 mt-1">Identitate verificata, audit si setari</p>

      <SectionLabel>Identitate medicala verificata</SectionLabel>

      <Card variant="gold">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-[18px] font-extrabold flex-shrink-0"
            style={{ background: "var(--gold-soft)", color: "var(--gold)" }}
          >
            AP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[16px] font-bold text-tx">Dr. Andrei Popescu</div>
            <div className="text-[13px] text-tx2">Medicina Interna - Spitalul Universitar</div>
            <div className="text-[12px] text-gold mt-0.5">
              Cod parafa: <strong>M-41822</strong>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="ok">KYC verificat</Badge>
          <Badge variant="ok">Licenta activa</Badge>
          <Badge variant="gold">Blockchain ID</Badge>
        </div>
      </Card>

      <SectionLabel>Jurnal de activitate (Audit Trail)</SectionLabel>

      <Card className="!p-2.5">
        {[
          {
            color: "var(--ok)",
            title: "Evolutie semnata — Marin Elena",
            subtitle: "AVC ischemic - Semnatura biometrica",
            time: "07:45",
          },
          {
            color: "var(--blue)",
            title: "Internare noua — Stan Alexandru",
            subtitle: "Foaie de observatie generata",
            time: "06:30",
          },
          {
            color: "var(--teal)",
            title: "Acces Sistem — Marinescu Diana",
            subtitle: "Vizualizare analize - Aprobat de pacient",
            time: "Ieri",
          },
          {
            color: "var(--gold)",
            title: "Reteta NFT — Vasilescu Ion",
            subtitle: "#R-2026-0847 - Antibiotice",
            time: "Ieri",
          },
          {
            color: "var(--purp)",
            title: "Cerere acces trimisa — Gheorghiu M.",
            subtitle: "Analize hepatice - In asteptare",
            time: "Ieri",
          },
        ].map(function (entry, i) {
          return (
            <div
              key={i}
              className="flex items-start gap-3 py-2.5 border-b border-brd last:border-0"
            >
              <div
                className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: entry.color }}
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

      <SectionLabel>Statistici activitate</SectionLabel>
      <HubCard
        icon={"📊"}
        iconBg="var(--teal-s)"
        title="Statistici activitate"
        subtitle="Pacienti tratati, documente semnate, externari"
      />

      <InfoBanner variant="gold" className="mt-4">
        <span className="text-[16px]">{"🔗"}</span>
        <span>Blockchain: MultiversX Sovereign - Bloc #4,893,412 - Sincronizat</span>
      </InfoBanner>
    </div>
  );
}
