"use client";

import { useState } from "react";
import { SubTabs } from "@/components/ui/SubTabs";
import { SearchBar } from "@/components/ui/SearchBar";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

function SysResult({
  initials,
  initialsStyle,
  name,
  details,
  actions,
  borderOk,
}: {
  initials: string;
  initialsStyle: React.CSSProperties;
  name: string;
  details: string;
  actions: { emoji: string; label: string }[];
  borderOk?: boolean;
}) {
  return (
    <div
      className="bg-bg-card border border-brd rounded-r p-3 mb-2"
      style={borderOk ? { borderLeft: "3px solid var(--ok)" } : undefined}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
          style={initialsStyle}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[14px] font-bold text-tx">{name}</h4>
          <p className="text-[12px] text-tx3 mt-0.5">{details}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2.5">
        {actions.map(function (a, i) {
          return (
            <button
              key={i}
              className="px-2.5 py-1.5 bg-bg-surf border border-brd rounded-rs text-[11px] font-bold text-tx2 hover:border-gold hover:text-gold transition-colors"
            >
              {a.emoji} {a.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PendingCard({
  initials,
  name,
  requestType,
  note,
}: {
  initials: string;
  name: string;
  requestType: string;
  note: string;
}) {
  return (
    <div className="bg-bg-card border border-brd rounded-r p-3 mb-2">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
          style={{ background: "var(--warn-s)", color: "var(--warn)" }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-bold text-tx">{name}</div>
          <div className="text-[12px] text-tx2">{requestType}</div>
        </div>
        <Badge variant="warn">In asteptare</Badge>
      </div>
      <div className="text-[11px] text-tx3 mt-2">{note}</div>
    </div>
  );
}

export default function DoctorSistemPage() {
  var tabState = useState("sys-search");
  var activeTab = tabState[0];
  var setActiveTab = tabState[1];

  var searchState = useState("");
  var search = searchState[0];
  var setSearch = searchState[1];

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Sistem Anamnesis</h2>
      <p className="text-[13px] text-tx3 mt-1">
        Cauta si interactioneaza cu orice pacient din ecosistem
      </p>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Cauta pacient in Anamnesis..."
        className="mt-4 [&_input]:border-teal [&_input]:border-[1.5px]"
      />

      <InfoBanner variant="teal" className="mt-4 mb-4">
        <span className="text-[16px]">{"🔗"}</span>
        <span>
          Accesul la datele pacientilor necesita <strong>aprobarea</strong> acestora. Medicul trimite
          cererea, pacientul o aproba din aplicatie.
        </span>
      </InfoBanner>

      <SubTabs
        tabs={[
          { id: "sys-search", label: "Cautare" },
          { id: "sys-pending", label: "In asteptare (2)" },
          { id: "sys-active", label: "Acces activ (4)" },
        ]}
        active={activeTab}
        onChange={setActiveTab}
        className="mb-4"
      />

      {activeTab === "sys-search" ? (
        <div>
          <SectionLabel>Rezultate recente</SectionLabel>

          <SysResult
            initials="PA"
            initialsStyle={{ background: "var(--purp-s)", color: "var(--purp)" }}
            name="Popescu Adriana"
            details="48 ani - F - Bucuresti - Ultima vizita: 12.02.2026"
            actions={[
              { emoji: "📅", label: "Programare" },
              { emoji: "🔬", label: "Analize" },
              { emoji: "🔬", label: "HP" },
              { emoji: "💊", label: "Reteta" },
            ]}
          />

          <SysResult
            initials="CM"
            initialsStyle={{ background: "var(--blue-s)", color: "var(--blue)" }}
            name="Costache Mihai"
            details="62 ani - M - Cluj - Ultima vizita: 28.03.2026"
            actions={[
              { emoji: "📅", label: "Programare" },
              { emoji: "🔬", label: "Analize" },
              { emoji: "📋", label: "Istoric" },
              { emoji: "💊", label: "Reteta" },
            ]}
          />

          <SysResult
            initials="BI"
            initialsStyle={{ background: "var(--ok-s)", color: "var(--ok)" }}
            name="Barbu Ioana"
            details="29 ani - F - Timisoara - Niciodata consultata"
            actions={[
              { emoji: "📅", label: "Programare" },
              { emoji: "🔬", label: "Analize" },
              { emoji: "📋", label: "Istoric" },
            ]}
          />
        </div>
      ) : null}

      {activeTab === "sys-pending" ? (
        <div>
          <SectionLabel>Cereri trimise — in asteptare</SectionLabel>

          <PendingCard
            initials="GM"
            name="Gheorghiu Marius"
            requestType="Cerere: Vizualizare analize hepatice"
            note="Trimisa acum 3 ore - Pacientul nu a raspuns inca"
          />

          <PendingCard
            initials="LV"
            name="Lazarescu Valentina"
            requestType="Cerere: Programare control post-operator"
            note="Trimisa ieri - Notificare re-trimisa automat"
          />
        </div>
      ) : null}

      {activeTab === "sys-active" ? (
        <div>
          <SectionLabel>Acces activ — aprobat de pacient</SectionLabel>

          <SysResult
            initials="DM"
            initialsStyle={{ background: "var(--ok-s)", color: "var(--ok)" }}
            name="Marinescu Diana"
            details="Acces: Analize + Istoric - Expira: 10.04.2026"
            actions={[
              { emoji: "📋", label: "Deschide dosarul" },
              { emoji: "💊", label: "Prescrie" },
              { emoji: "📅", label: "Programare" },
            ]}
            borderOk
          />

          <SysResult
            initials="RT"
            initialsStyle={{ background: "var(--ok-s)", color: "var(--ok)" }}
            name="Radulescu Teodor"
            details="Acces: Doar analize - Expira: 08.04.2026"
            actions={[
              { emoji: "🔬", label: "Analize" },
              { emoji: "💊", label: "Prescrie" },
            ]}
            borderOk
          />
        </div>
      ) : null}
    </div>
  );
}
