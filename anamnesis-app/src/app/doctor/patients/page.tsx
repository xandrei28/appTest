'use client';

import { useState, useMemo } from 'react';
import { SubTabs } from '@/components/ui/SubTabs';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterChips } from '@/components/ui/FilterChips';
import { Badge } from '@/components/ui/Badge';
import { Tag } from '@/components/ui/Tag';
import { patients } from '@/data/patients';
import type { Patient } from '@/data/types';

/* ---- Patient card status stripe color ---- */
const statusBorder: Record<string, string> = {
  err: 'border-l-err',
  ok: 'border-l-ok',
  blue: 'border-l-blue',
  warn: 'border-l-warn',
};

/* ---- Badge variant for patient status ---- */
const statusBadge: Record<string, 'err' | 'ok' | 'blue' | 'warn'> = {
  err: 'err',
  ok: 'ok',
  blue: 'blue',
  warn: 'warn',
};

/* ---- Tag mapping for filter ---- */
const patientTags: Record<string, string[]> = {
  ionescu: ['crit'],
  vasilescu: ['ext'],
  stan: ['new'],
  marin: ['crit'],
  neagu: ['chir'],
  tudor: ['ext'],
};

/* ---- Salon grouping ---- */
const salons = [
  {
    name: 'Salon 401',
    beds: '3 paturi',
    patients: ['ionescu', 'vasilescu', 'stan'],
  },
  {
    name: 'Salon 402',
    beds: '3 paturi',
    patients: ['marin', 'neagu', 'tudor'],
  },
];

/* ---- File icon SVG ---- */
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

/* ---- Patient Card Component ---- */
function PatientCard({ pKey, patient }: { pKey: string; patient: Patient }) {
  const bedNumber = patient.bed.split('Pat ')[1] || '';
  const diagFirstLine = patient.diag.split('\n')[0];

  // Extra meta badges
  const extraBadges: { variant: 'warn' | 'gold' | 'purp'; label: string }[] = [];
  if (pKey === 'ionescu') extraBadges.push({ variant: 'warn', label: '⚠ Alergie Penicilină' });
  if (pKey === 'vasilescu') extraBadges.push({ variant: 'warn', label: 'Externare mâine' });
  if (pKey === 'marin') extraBadges.push({ variant: 'warn', label: '⚠ Anticoagulant activ' });
  if (pKey === 'neagu') extraBadges.push({ variant: 'purp', label: 'ERCP programat' });
  if (pKey === 'tudor') extraBadges.push({ variant: 'gold', label: 'Externare azi' });

  return (
    <div
      className={`bg-bg-card border border-brd rounded-r overflow-hidden border-l-[3px] ${statusBorder[patient.stcls]} cursor-pointer active:scale-[0.99] transition-transform`}
      onClick={() => {/* TODO: open detail sheet */}}
    >
      <div className="p-3">
        {/* Top: name + bed */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[15px] font-bold text-tx">{patient.name}</div>
            <div className="text-[12px] text-tx3">{patient.age} · {patient.sex} · CNP {patient.cnp}</div>
          </div>
          <div className="text-[12px] text-tx3 flex-shrink-0">
            &#x1F6CF; Pat {bedNumber}
          </div>
        </div>

        {/* Diagnosis */}
        <div className="text-[12px] text-tx2 mt-2 line-clamp-2">
          <strong>Dg:</strong> {diagFirstLine}
        </div>

        {/* Meta: status badge + day + extras */}
        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          <Badge variant={statusBadge[patient.stcls]}>{patient.status}</Badge>
          <Tag>Zi {patient.day}</Tag>
          {extraBadges.map((b, i) => (
            <Badge key={i} variant={b.variant}>{b.label}</Badge>
          ))}
        </div>

        {/* Bottom: doctor + action buttons */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-brd">
          <span className="text-[11px] text-tx3">Dr. Popescu A.</span>
          <div className="flex gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-rs bg-bg-surf text-tx3 hover:text-tx transition-colors"
              onClick={(e) => { e.stopPropagation(); /* TODO: open detail */ }}
              title="Deschide fișa"
            >
              <FileIcon />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-rs bg-bg-surf text-tx3 hover:text-tx transition-colors"
              onClick={(e) => { e.stopPropagation(); /* TODO: investigații */ }}
              title="Investigații"
            >
              <ClipboardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Day Admission Card ---- */
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
  badgeVariant: 'purp' | 'ok';
  badgeLabel: string;
  tag: string;
}) {
  return (
    <div className="bg-bg-card border border-brd rounded-r p-3 cursor-pointer active:scale-[0.99] transition-transform">
      <div className="text-[12px] text-tx3 font-semibold">&#x1F550; {time}</div>
      <div className="text-[15px] font-bold text-tx mt-1">{name}</div>
      <div className="text-[12px] text-tx2 mt-1">{procedure}</div>
      <div className="flex items-center gap-1.5 mt-2">
        <Badge variant={badgeVariant}>{badgeLabel}</Badge>
        <Tag>{tag}</Tag>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════ */
/* ====  MAIN PAGE COMPONENT  ==== */
/* ════════════════════════════════════════ */

export default function DoctorPatientsPage() {
  const [activeTab, setActiveTab] = useState('pt-int');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  /* ---- Filter logic ---- */
  const filteredSalons = useMemo(() => {
    return salons.map((salon) => ({
      ...salon,
      patients: salon.patients.filter((key) => {
        const p = patients[key];
        if (!p) return false;

        // Search filter
        if (search) {
          const q = search.toLowerCase();
          const text = `${p.name} ${p.bed} ${p.diag} ${p.age}`.toLowerCase();
          if (!text.includes(q)) return false;
        }

        // Category filter
        if (filter !== 'all') {
          const tags = patientTags[key] || [];
          if (!tags.includes(filter)) return false;
        }

        return true;
      }),
    }));
  }, [search, filter]);

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Pacienții Mei</h2>
      <p className="text-[13px] text-tx3 mt-1">Pacienți internați și internări de zi</p>

      {/* Sub Tabs */}
      <SubTabs
        tabs={[
          { id: 'pt-int', label: 'Internați (12)' },
          { id: 'pt-zi', label: 'Internări zi (5)' },
        ]}
        active={activeTab}
        onChange={setActiveTab}
        className="mt-4"
      />

      {/* ═══ INTERNAȚI TAB ═══ */}
      {activeTab === 'pt-int' && (
        <div className="mt-4">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Caută pacient, pat, diagnostic…"
          />

          <FilterChips
            filters={[
              { id: 'all', label: 'Toți' },
              { id: 'crit', label: '🔴 Critici' },
              { id: 'new', label: '🔵 Noi azi' },
              { id: 'ext', label: 'Externare' },
              { id: 'chir', label: 'Chirurgie' },
            ]}
            active={filter}
            onChange={setFilter}
            className="mt-3"
          />

          <div className="mt-4 space-y-3">
            {filteredSalons.map((salon) =>
              salon.patients.length > 0 ? (
                <div key={salon.name}>
                  {/* Salon header */}
                  <div className="flex items-center justify-between px-1 mb-2 mt-4 first:mt-0">
                    <h4 className="text-[13px] font-bold text-tx flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                      {salon.name}
                    </h4>
                    <span className="text-[11px] text-tx3">{salon.beds}</span>
                  </div>

                  {/* Patient cards */}
                  <div className="space-y-2">
                    {salon.patients.map((key) => (
                      <PatientCard key={key} pKey={key} patient={patients[key]} />
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* ═══ INTERNĂRI DE ZI TAB ═══ */}
      {activeTab === 'pt-zi' && (
        <div className="mt-4">
          <SearchBar
            value=""
            onChange={() => {}}
            placeholder="Caută pacient…"
          />

          <div className="mt-4 space-y-2">
            <DayCard
              time="08:30 — 14:00"
              name="Radu Gheorghe"
              procedure="Chimioterapie ciclu 4/6 · Salon zi · Pat 1"
              badgeVariant="purp"
              badgeLabel="În curs"
              tag="Oncologie"
            />
            <DayCard
              time="09:00 — 12:00"
              name="Dumitrescu Ana"
              procedure="Transfuzie eritrocitară · Salon zi · Pat 2"
              badgeVariant="ok"
              badgeLabel="Programat"
              tag="Hematologie"
            />
          </div>
        </div>
      )}
    </div>
  );
}
