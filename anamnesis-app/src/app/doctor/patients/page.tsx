"use client";

import { useState, useMemo } from "react";
import { SubTabs } from "@/components/ui/SubTabs";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterChips } from "@/components/ui/FilterChips";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { patients } from "@/data/patients";
import type { Patient } from "@/data/types";

var statusBorder: Record<string, string> = {
  err: "border-l-err",
  ok: "border-l-ok",
  blue: "border-l-blue",
  warn: "border-l-warn",
};

var statusBadge: Record<string, "err" | "ok" | "blue" | "warn"> = {
  err: "err",
  ok: "ok",
  blue: "blue",
  warn: "warn",
};

var patientTags: Record<string, string[]> = {
  ionescu: ["crit"],
  vasilescu: ["ext"],
  stan: ["new"],
  marin: ["crit"],
  neagu: ["chir"],
  tudor: ["ext"],
};

var salons = [
  {
    name: "Salon 401",
    beds: "3 paturi",
    patients: ["ionescu", "vasilescu", "stan"],
  },
  {
    name: "Salon 402",
    beds: "3 paturi",
    patients: ["marin", "neagu", "tudor"],
  },
];

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
    </svg>
  );
}

function PatientCard({ pKey, patient }: { pKey: string; patient: Patient }) {
  var bedNumber = patient.bed.split("Pat ")[1] || "";
  var diagFirstLine = patient.diag.split("\n")[0];

  var extraBadges: { variant: "warn" | "gold" | "purp"; label: string }[] = [];
  if (pKey === "ionescu") extraBadges.push({ variant: "warn", label: "Alergie Penicilina" });
  if (pKey === "vasilescu") extraBadges.push({ variant: "warn", label: "Externare maine" });
  if (pKey === "marin") extraBadges.push({ variant: "warn", label: "Anticoagulant activ" });
  if (pKey === "neagu") extraBadges.push({ variant: "purp", label: "ERCP programat" });
  if (pKey === "tudor") extraBadges.push({ variant: "gold", label: "Externare azi" });

  return (
    <div
      className={"bg-bg-card border border-brd rounded-r overflow-hidden border-l-[3px] " + statusBorder[patient.stcls] + " cursor-pointer active:scale-[0.99] transition-transform"}
    >
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[15px] font-bold text-tx">{patient.name}</div>
            <div className="text-[12px] text-tx3">{patient.age} - {patient.sex} - CNP {patient.cnp}</div>
          </div>
          <div className="text-[12px] text-tx3 flex-shrink-0">Pat {bedNumber}</div>
        </div>

        <div className="text-[12px] text-tx2 mt-2 line-clamp-2">
          <strong>Dg:</strong> {diagFirstLine}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          <Badge variant={statusBadge[patient.stcls]}>{patient.status}</Badge>
          <Tag>Zi {patient.day}</Tag>
          {extraBadges.map(function (b, i) {
            return <Badge key={i} variant={b.variant}>{b.label}</Badge>;
          })}
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-brd">
          <span className="text-[11px] text-tx3">Dr. Popescu A.</span>
          <div className="flex gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-rs bg-bg-surf text-tx3 hover:text-tx transition-colors"
              onClick={function (e) { e.stopPropagation(); }}
              title="Deschide fisa"
            >
              <FileIcon />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-rs bg-bg-surf text-tx3 hover:text-tx transition-colors"
              onClick={function (e) { e.stopPropagation(); }}
              title="Investigatii"
            >
              <ClipboardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayCard({
  time,
  name,
  procedure,
  badgeVariant,
  badgeLabel,
  tag,
}: {
  time: string;
  name: string;
  procedure: string;
  badgeVariant: "purp" | "ok";
  badgeLabel: string;
  tag: string;
}) {
  return (
    <div className="bg-bg-card border border-brd rounded-r p-3 cursor-pointer active:scale-[0.99] transition-transform">
      <div className="text-[12px] text-tx3 font-semibold">{time}</div>
      <div className="text-[15px] font-bold text-tx mt-1">{name}</div>
      <div className="text-[12px] text-tx2 mt-1">{procedure}</div>
      <div className="flex items-center gap-1.5 mt-2">
        <Badge variant={badgeVariant}>{badgeLabel}</Badge>
        <Tag>{tag}</Tag>
      </div>
    </div>
  );
}

export default function DoctorPatientsPage() {
  var tabState = useState("pt-int");
  var activeTab = tabState[0];
  var setActiveTab = tabState[1];

  var searchState = useState("");
  var search = searchState[0];
  var setSearch = searchState[1];

  var filterState = useState("all");
  var filter = filterState[0];
  var setFilter = filterState[1];

  var filteredSalons = useMemo(function () {
    return salons.map(function (salon) {
      return {
        name: salon.name,
        beds: salon.beds,
        patients: salon.patients.filter(function (key) {
          var p = patients[key];
          if (!p) return false;

          if (search) {
            var q = search.toLowerCase();
            var text = (p.name + " " + p.bed + " " + p.diag + " " + p.age).toLowerCase();
            if (text.indexOf(q) === -1) return false;
          }

          if (filter !== "all") {
            var tags = patientTags[key] || [];
            if (tags.indexOf(filter) === -1) return false;
          }

          return true;
        }),
      };
    });
  }, [search, filter]);

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Pacientii Mei</h2>
      <p className="text-[13px] text-tx3 mt-1">Pacienti internati si internari de zi</p>

      <SubTabs
        tabs={[
          { id: "pt-int", label: "Internati (12)" },
          { id: "pt-zi", label: "Internari zi (5)" },
        ]}
        active={activeTab}
        onChange={setActiveTab}
        className="mt-4"
      />

      {activeTab === "pt-int" ? (
        <div className="mt-4">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Cauta pacient, pat, diagnostic..."
          />

          <FilterChips
            filters={[
              { id: "all", label: "Toti" },
              { id: "crit", label: "Critici" },
              { id: "new", label: "Noi azi" },
              { id: "ext", label: "Externare" },
              { id: "chir", label: "Chirurgie" },
            ]}
            active={filter}
            onChange={setFilter}
            className="mt-3"
          />

          <div className="mt-4 space-y-3">
            {filteredSalons.map(function (salon) {
              if (salon.patients.length === 0) return null;
              return (
                <div key={salon.name}>
                  <div className="flex items-center justify-between px-1 mb-2 mt-4 first:mt-0">
                    <h4 className="text-[13px] font-bold text-tx flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                      {salon.name}
                    </h4>
                    <span className="text-[11px] text-tx3">{salon.beds}</span>
                  </div>

                  <div className="space-y-2">
                    {salon.patients.map(function (key) {
                      return <PatientCard key={key} pKey={key} patient={patients[key]} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {activeTab === "pt-zi" ? (
        <div className="mt-4">
          <SearchBar
            value=""
            onChange={function () {}}
            placeholder="Cauta pacient..."
          />

          <div className="mt-4 space-y-2">
            <DayCard
              time="08:30 — 14:00"
              name="Radu Gheorghe"
              procedure="Chimioterapie ciclu 4/6 - Salon zi - Pat 1"
              badgeVariant="purp"
              badgeLabel="In curs"
              tag="Oncologie"
            />
            <DayCard
              time="09:00 — 12:00"
              name="Dumitrescu Ana"
              procedure="Transfuzie eritrocitara - Salon zi - Pat 2"
              badgeVariant="ok"
              badgeLabel="Programat"
              tag="Hematologie"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
