"use client";

import { useState } from "react";
import { SubTabs } from "@/components/ui/SubTabs";
import { HubCard } from "@/components/ui/HubCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SearchBar } from "@/components/ui/SearchBar";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { Timeline } from "@/components/ui/Timeline";

function HubPane({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-2 mt-3">
      <HubCard
        icon={"🛡"}
        iconBg="var(--blue-s)"
        title="Control acces date"
        subtitle="Vezi cine are acces la fisa ta, modifica sau retrage permisiuni"
        onClick={function () { onNavigate("access"); }}
      />
      <HubCard
        icon={"📅"}
        iconBg="var(--ok-s)"
        title="Programari"
        subtitle="Programeaza consultatii, vezi programari viitoare, reprogrameaza"
        onClick={function () { onNavigate("book"); }}
      />
      <HubCard
        icon={"💬"}
        iconBg="var(--purp-s)"
        title="Mesaje"
        subtitle="Comunica cu medicii tai (in curand)"
      />
      <HubCard
        icon={"🔬"}
        iconBg="var(--warn-s)"
        title="Consimtamant cercetare"
        subtitle="Studiile tale active, date partajate, retragere din studiu"
        onClick={function () { onNavigate("research"); }}
      />
    </div>
  );
}

function AccessPane() {
  var doctors = [
    {
      initials: "EP",
      bg: "var(--blue-s)",
      color: "var(--blue)",
      name: "Dr. Elena Popescu",
      specialty: "Cardiologie - Sp. Universitar",
      tags: ["Analize", "Vitale", "Imagistica", "Medicatie"],
      meta: "Acordat 15 Mar 2026 - Expira 15 Sep 2026 - Scop: Control cardiologic",
    },
    {
      initials: "MI",
      bg: "var(--gold-soft)",
      color: "var(--gold)",
      name: "Dr. Mihai Ionescu",
      specialty: "Medicina Interna - Regina Maria",
      tags: ["Istoric complet", "Prescriptii"],
      meta: "Acordat 05 Dec 2025 - Expira 05 Iun 2026",
    },
    {
      initials: "AM",
      bg: "var(--purp-s)",
      color: "var(--purp)",
      name: "Dr. Marinescu",
      specialty: "Medicina familiei",
      tags: ["Istoric complet"],
      meta: "Acordat 05 Dec 2025 - Expira 05 Dec 2026",
    },
  ];

  return (
    <div className="mt-1">
      <SectionLabel className="!mt-1">Medici cu acces activ (3)</SectionLabel>

      {doctors.map(function (doc) {
        return (
          <Card key={doc.initials} className="mb-3">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
                style={{ background: doc.bg, color: doc.color }}
              >
                {doc.initials}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-tx">{doc.name}</h4>
                <p className="text-[12px] text-tx2">{doc.specialty}</p>
              </div>
              <Badge variant="ok">Activ</Badge>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {doc.tags.map(function (t) {
                return <Tag key={t}>{t}</Tag>;
              })}
            </div>
            <div className="text-[11px] text-tx3 mb-3">{doc.meta}</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Modifica</Button>
              <Button variant="err" size="sm" className="flex-1">Revoca</Button>
            </div>
          </Card>
        );
      })}

      <SectionLabel>Cereri in asteptare</SectionLabel>

      <Card className="mb-3 !border-warn/30">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--warn-s)", color: "var(--warn)" }}
          >
            AC
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[14px] font-bold text-tx">Dr. Ana Crisan</h4>
            <p className="text-[12px] text-tx2">Dermatologie - Dermanova</p>
          </div>
          <Badge variant="warn">Nou</Badge>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-2">
          <Tag>Alergii</Tag>
          <Tag>Medicatie</Tag>
        </div>
        <div className="text-[11px] text-tx3 mb-3">
          Cerut azi - Scop: Consultatie noua - Durata: 90 zile
        </div>
        <div className="flex gap-2">
          <Button variant="gold" size="sm" className="flex-1">Aproba</Button>
          <Button variant="err" size="sm" className="flex-1">Refuza</Button>
        </div>
      </Card>

      <SectionLabel>Jurnal accesari</SectionLabel>

      <Card>
        <Timeline
          entries={[
            {
              color: "var(--ok)",
              title: "Dr. Popescu — CITIRE",
              subtitle: "Analize, Vitale",
              time: "Azi 08:12",
            },
            {
              color: "var(--gold)",
              title: "MedLife — SCRIERE",
              subtitle: "Hemoleucograma",
              time: "28 Mar",
            },
          ]}
        />
      </Card>
    </div>
  );
}

function BookPane() {
  var searchState = useState("");
  var search = searchState[0];
  var setSearch = searchState[1];

  var days = [
    { short: "Lun", num: "31" },
    { short: "Mar", num: "1" },
    { short: "Mie", num: "2", selected: true },
    { short: "Joi", num: "3" },
    { short: "Vin", num: "4" },
  ];
  var slots = [
    { time: "09:00", selected: false, off: false },
    { time: "09:30", selected: true, off: false },
    { time: "10:00", selected: false, off: false },
    { time: "10:30", selected: false, off: true },
    { time: "11:00", selected: false, off: false },
    { time: "14:00", selected: false, off: false },
  ];

  return (
    <div className="mt-1">
      <SectionLabel className="!mt-1">Urmatoarea programare</SectionLabel>

      <Card variant="gold" className="mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--blue-s)", color: "var(--blue)" }}
          >
            EP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Dr. Elena Popescu</div>
            <div className="text-[13px] text-tx2">Cardiologie - Control</div>
          </div>
        </div>
        <div className="text-[14px] text-tx2 mt-2.5">
          31 Mar 2026 - 10:30 - Camera 204
        </div>
        <div className="flex gap-2 mt-3">
          <Button variant="outline" size="sm" className="flex-1">Reprogrameaza</Button>
          <Button variant="err" size="sm" className="flex-1">Anuleaza</Button>
        </div>
      </Card>

      <SectionLabel>Programare noua</SectionLabel>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Cauta medic sau specialitate..."
        className="mb-3"
      />

      <Card>
        <div className="flex items-center gap-3 mb-3.5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--ok-s)", color: "var(--ok)" }}
          >
            AC
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-tx">Dr. Ana Crisan</div>
            <div className="text-[12px] text-tx2">Dermatologie - Dermanova</div>
            <div className="mt-0.5">
              <span className="text-gold text-[13px]">{"★★★★★"}</span>
              {" "}
              <span className="text-[12px] text-tx3">4.9</span>
            </div>
          </div>
        </div>

        <div className="text-[11px] font-bold text-tx3 uppercase tracking-wider mb-2">Alege ziua</div>
        <div className="flex gap-2 mb-4">
          {days.map(function (d) {
            return (
              <div
                key={d.short}
                className={"flex-1 text-center py-2 rounded-rs border cursor-pointer transition-colors " + (d.selected ? "bg-gold text-bg border-gold" : "bg-bg-surf text-tx3 border-brd hover:border-tx3")}
              >
                <div className="text-[10px] font-bold">{d.short}</div>
                <div className="text-[16px] font-extrabold mt-0.5">{d.num}</div>
              </div>
            );
          })}
        </div>

        <div className="text-[11px] font-bold text-tx3 uppercase tracking-wider mb-2">
          Locuri disponibile — Mie, 2 Apr
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {slots.map(function (s) {
            return (
              <div
                key={s.time}
                className={"py-2 text-center rounded-rs border text-[13px] font-bold cursor-pointer transition-colors " + (s.selected ? "bg-gold text-bg border-gold" : s.off ? "bg-bg-surf text-tx3/40 border-brd cursor-not-allowed" : "bg-bg-surf text-tx2 border-brd hover:border-gold")}
              >
                {s.time}
              </div>
            );
          })}
        </div>

        <Button variant="gold" fullWidth>Confirma programarea</Button>
      </Card>
    </div>
  );
}

function ResearchPane() {
  var expandedStudyState = useState<string | null>(null);
  var expandedStudy = expandedStudyState[0];
  var setExpandedStudy = expandedStudyState[1];

  var expandedWithdrawState = useState<string | null>(null);
  var expandedWithdraw = expandedWithdrawState[0];
  var setExpandedWithdraw = expandedWithdrawState[1];

  function toggleDetail(id: string) {
    setExpandedStudy(expandedStudy === id ? null : id);
    setExpandedWithdraw(null);
  }
  function toggleWithdraw(id: string) {
    setExpandedWithdraw(expandedWithdraw === id ? null : id);
    setExpandedStudy(null);
  }

  return (
    <div className="mt-1">
      <SectionLabel className="!mt-1">Studii active (2)</SectionLabel>

      <Card className="mb-3">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--warn-s)", color: "var(--warn)" }}
          >
            S1
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[14px] font-bold text-tx">CardioPredict EU — Faza III</h4>
            <p className="text-[12px] text-tx2">Univ. Med. Bucuresti + Charite Berlin</p>
          </div>
          <Badge variant="ok">Activ</Badge>
        </div>
        <div className="text-[11px] text-tx3 mb-3">
          Consimtamant semnat: 12 Ian 2026 - Durata: 24 luni - Tip: Studiu observational multicentric
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={function () { toggleDetail("s1"); }}>
            Detalii studiu
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 !text-warn !border-warn/30"
            onClick={function () { toggleWithdraw("s1"); }}
          >
            Retragere
          </Button>
        </div>

        {expandedStudy === "s1" ? (
          <div className="mt-3 pt-3 border-t border-brd">
            <div className="text-[12px] font-bold text-gold tracking-widest uppercase mb-2.5">
              Date partajate cu studiul
            </div>
            <div className="bg-bg-card border border-brd rounded-rs p-3 mb-2 space-y-2">
              {[
                { icon: "🩸", label: "Analize de sange — profil lipidic" },
                { icon: "🫀", label: "Ecografie cardiaca + ECG" },
                { icon: "💊", label: "Istoric medicatie cardiovasculara" },
                { icon: "📊", label: "Semne vitale — TA, AV, greutate" },
              ].map(function (item) {
                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <span className="text-[14px]">{item.icon}</span>
                    <div className="text-[13px] font-semibold text-tx flex-1">{item.label}</div>
                    <Badge variant="ok" className="!text-[10px]">Anonimizat</Badge>
                  </div>
                );
              })}
            </div>
            <InfoBanner variant="gold" className="mb-2.5">
              <span className="text-[14px]">{"🔒"}</span>
              <span className="text-[12px]">
                Datele sunt pseudonimizate conform GDPR Art. 89. Nicio informatie personala nu paraseste mediul securizat.
              </span>
            </InfoBanner>

            <div className="text-[12px] font-bold text-gold tracking-widest uppercase mt-3.5 mb-2.5">
              Consimtamantul semnat
            </div>
            <Card className="!p-3.5 mb-2.5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-12 rounded-lg flex items-center justify-center text-[18px] relative flex-shrink-0"
                  style={{ background: "var(--gold-soft)" }}
                >
                  {"📜"}
                  <span className="absolute -top-1 -right-1 bg-gold text-bg text-[7px] font-black px-1 py-px rounded">
                    NFT
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-bold text-tx">Formular consimtamant #RC-2026-0041</div>
                  <div className="text-[12px] text-tx2">Semnat biometric - 12 Ian 2026</div>
                  <div className="text-[11px] text-ok mt-0.5">
                    Verificat blockchain - Bloc #4,801,223
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-[12px] font-bold text-gold tracking-widest uppercase mt-3.5 mb-2.5">
              Accesari recente
            </div>
            <Card>
              <Timeline
                entries={[
                  { color: "var(--ok)", title: "Charite Berlin — CITIRE", subtitle: "Profil lipidic anonimizat", time: "2 Apr" },
                  { color: "var(--ok)", title: "Univ. Med. Buc. — CITIRE", subtitle: "ECG + Vitale", time: "28 Mar" },
                ]}
              />
            </Card>
          </div>
        ) : null}

        {expandedWithdraw === "s1" ? (
          <div className="mt-3 pt-3 border-t border-brd">
            <div className="text-[12px] font-bold text-err tracking-widest uppercase mb-2.5">
              Procedura de retragere
            </div>
            <InfoBanner variant="blue" className="mb-2.5">
              <span className="text-[12px]">
                Conform contractului semnat, retragerea din acest studiu observational este posibila oricand, fara penalitati si fara impact asupra ingrijirii tale medicale.
              </span>
            </InfoBanner>
            <Card className="mb-3">
              <div className="text-[13px] font-bold text-tx mb-2">Ce se intampla la retragere:</div>
              <div className="text-[13px] text-tx2 leading-relaxed space-y-2">
                <div className="flex gap-2">
                  <span className="text-ok flex-shrink-0">{"✓"}</span>
                  <span>Accesul studiului la datele tale noi se opreste imediat</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-warn flex-shrink-0">{"⚠"}</span>
                  <span>Datele deja colectate raman in studiu conform Art. 17(3)(d) GDPR</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-ok flex-shrink-0">{"✓"}</span>
                  <span>Poti solicita stergerea datelor neprocesat inca</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-ok flex-shrink-0">{"✓"}</span>
                  <span>Ingrijirea ta medicala nu este afectata in niciun fel</span>
                </div>
              </div>
            </Card>
            <div className="text-[12px] text-tx3 mb-2 leading-relaxed">
              Perioada de procesare retragere: <strong className="text-tx">max. 30 zile</strong> de la confirmare.
            </div>
            <Button variant="err" fullWidth>
              Confirma retragerea din studiu
            </Button>
            <div className="text-[11px] text-tx3 text-center mt-2">
              Necesita semnatura biometrica pentru confirmare
            </div>
          </div>
        ) : null}
      </Card>

      <Card className="mb-3">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--purp-s)", color: "var(--purp)" }}
          >
            S2
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[14px] font-bold text-tx">MetaboTrack — Registru Diabet</h4>
            <p className="text-[12px] text-tx2">CNAS + Inst. Nutritie Paulescu</p>
          </div>
          <Badge variant="ok">Activ</Badge>
        </div>
        <div className="text-[11px] text-tx3 mb-3">
          Consimtamant semnat: 05 Dec 2025 - Durata: 36 luni - Tip: Registru national prospectiv
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={function () { toggleDetail("s2"); }}>
            Detalii studiu
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 !text-warn !border-warn/30"
            onClick={function () { toggleWithdraw("s2"); }}
          >
            Retragere
          </Button>
        </div>

        {expandedStudy === "s2" ? (
          <div className="mt-3 pt-3 border-t border-brd">
            <div className="text-[12px] font-bold text-gold tracking-widest uppercase mb-2.5">
              Date partajate cu studiul
            </div>
            <div className="bg-bg-card border border-brd rounded-rs p-3 mb-2 space-y-2">
              {[
                { icon: "🩸", label: "HbA1c + Glicemie in serie", badge: "ok" as const },
                { icon: "💊", label: "Medicatie antidiabetica", badge: "ok" as const },
                { icon: "📊", label: "IMC + Circumferinta abdominala", badge: "ok" as const },
                { icon: "🧬", label: "Markeri genetici (panel metabolic)", badge: "purp" as const },
              ].map(function (item) {
                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <span className="text-[14px]">{item.icon}</span>
                    <div className="text-[13px] font-semibold text-tx flex-1">{item.label}</div>
                    <Badge variant={item.badge} className="!text-[10px]">
                      {item.badge === "purp" ? "Pseudonimizat" : "Anonimizat"}
                    </Badge>
                  </div>
                );
              })}
            </div>
            <InfoBanner variant="gold" className="mb-2.5">
              <span className="text-[14px]">{"🔒"}</span>
              <span className="text-[12px]">
                Datele genetice sunt procesate exclusiv in mediu securizat (SPE). Niciun export de date identificabile.
              </span>
            </InfoBanner>

            <div className="text-[12px] font-bold text-gold tracking-widest uppercase mt-3.5 mb-2.5">
              Consimtamantul semnat
            </div>
            <Card className="!p-3.5 mb-2.5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-12 rounded-lg flex items-center justify-center text-[18px] relative flex-shrink-0"
                  style={{ background: "var(--purp-s)" }}
                >
                  {"📜"}
                  <span className="absolute -top-1 -right-1 bg-gold text-bg text-[7px] font-black px-1 py-px rounded">
                    NFT
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-bold text-tx">Formular consimtamant #RC-2025-1207</div>
                  <div className="text-[12px] text-tx2">Semnat biometric - 05 Dec 2025</div>
                  <div className="text-[11px] text-ok mt-0.5">
                    Verificat blockchain - Bloc #4,712,891
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-[12px] font-bold text-gold tracking-widest uppercase mt-3.5 mb-2.5">
              Accesari recente
            </div>
            <Card>
              <Timeline
                entries={[
                  { color: "var(--ok)", title: "Inst. Paulescu — CITIRE", subtitle: "HbA1c + Medicatie", time: "1 Apr" },
                  { color: "var(--ok)", title: "CNAS — CITIRE", subtitle: "IMC + Panel metabolic", time: "20 Mar" },
                ]}
              />
            </Card>
          </div>
        ) : null}

        {expandedWithdraw === "s2" ? (
          <div className="mt-3 pt-3 border-t border-brd">
            <div className="text-[12px] font-bold text-err tracking-widest uppercase mb-2.5">
              Procedura de retragere
            </div>
            <InfoBanner variant="blue" className="mb-2.5">
              <span className="text-[12px]">
                Conform contractului semnat, retragerea din registrul MetaboTrack necesita o perioada de notificare de 60 zile.
              </span>
            </InfoBanner>
            <Card className="mb-3">
              <div className="text-[13px] font-bold text-tx mb-2">Ce se intampla la retragere:</div>
              <div className="text-[13px] text-tx2 leading-relaxed space-y-2">
                <div className="flex gap-2">
                  <span className="text-ok flex-shrink-0">{"✓"}</span>
                  <span>Colectarea de date noi se opreste in termen de 60 zile</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-warn flex-shrink-0">{"⚠"}</span>
                  <span>Datele genetice deja procesate nu pot fi sterse (Art. 89 GDPR)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-ok flex-shrink-0">{"✓"}</span>
                  <span>Datele neprocesat pot fi solicitate pentru stergere</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-ok flex-shrink-0">{"✓"}</span>
                  <span>Participarea la programul CNAS nu este afectata</span>
                </div>
              </div>
            </Card>
            <div className="text-[12px] text-tx3 mb-2 leading-relaxed">
              Perioada de procesare retragere: <strong className="text-tx">60 zile</strong> de la confirmare.
            </div>
            <Button variant="err" fullWidth>
              Confirma retragerea din studiu
            </Button>
            <div className="text-[11px] text-tx3 text-center mt-2">
              Necesita semnatura biometrica pentru confirmare
            </div>
          </div>
        ) : null}
      </Card>

      <SectionLabel>Studii finalizate / retrase</SectionLabel>

      <Card className="opacity-60">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
            style={{ background: "var(--bg-surf)", color: "var(--tx3)" }}
          >
            S0
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[14px] font-bold text-tx">VaxResponse RO — Cohorta 2024</h4>
            <p className="text-[12px] text-tx2">Inst. Cantacuzino - Studiu retrospectiv</p>
          </div>
          <Badge variant="default">Finalizat</Badge>
        </div>
        <div className="text-[11px] text-tx3 mb-3">
          Consimtamant: 10 Mar 2024 - Finalizat: 15 Nov 2024 - Date: raspuns vaccinal anonimizat
        </div>
        <Button variant="outline" size="sm" className="opacity-70">
          Vezi consimtamantul
        </Button>
      </Card>
    </div>
  );
}

export default function PatientDoctorsPage() {
  var tabState = useState("hub");
  var activeTab = tabState[0];
  var setActiveTab = tabState[1];

  var tabs = [
    { id: "hub", label: "Meniu" },
    { id: "access", label: "Acces Date" },
    { id: "book", label: "Programari" },
    { id: "research", label: "Cercetare" },
  ];

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Medicii Mei</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-3">
        Programari, acces la date si interactiuni
      </p>

      <SubTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {activeTab === "hub" ? <HubPane onNavigate={setActiveTab} /> : null}
      {activeTab === "access" ? <AccessPane /> : null}
      {activeTab === "book" ? <BookPane /> : null}
      {activeTab === "research" ? <ResearchPane /> : null}
    </div>
  );
}
