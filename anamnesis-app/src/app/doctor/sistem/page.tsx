'use client';

import { useState } from 'react';
import { SubTabs } from '@/components/ui/SubTabs';
import { SearchBar } from '@/components/ui/SearchBar';
import { InfoBanner } from '@/components/ui/InfoBanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

/* ---- System result card ---- */
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
      style={borderOk ? { borderLeft: '3px solid var(--ok)' } : undefined}
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
        {actions.map((a, i) => (
          <button
            key={i}
            className="px-2.5 py-1.5 bg-bg-surf border border-brd rounded-rs text-[11px] font-bold text-tx2 hover:border-gold hover:text-gold transition-colors"
          >
            {a.emoji} {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---- Request card for pending ---- */
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
          style={{ background: 'var(--warn-s)', color: 'var(--warn)' }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-bold text-tx">{name}</div>
          <div className="text-[12px] text-tx2">{requestType}</div>
        </div>
        <Badge variant="warn">În așteptare</Badge>
      </div>
      <div className="text-[11px] text-tx3 mt-2">{note}</div>
    </div>
  );
}

export default function DoctorSistemPage() {
  const [activeTab, setActiveTab] = useState('sys-search');
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Sistem Anamnesis</h2>
      <p className="text-[13px] text-tx3 mt-1">
        Caută și interacționează cu orice pacient din ecosistem
      </p>

      {/* Teal search bar */}
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Caută pacient în Anamnesis…"
        className="mt-4 [&_input]:border-teal [&_input]:border-[1.5px]"
      />

      {/* Info banner */}
      <InfoBanner variant="teal" className="mt-4 mb-4">
        <span className="text-[16px]">&#x1F517;</span>
        <span>
          Accesul la datele pacienților necesită <strong>aprobarea</strong> acestora. Medicul trimite
          cererea, pacientul o aprobă din aplicație.
        </span>
      </InfoBanner>

      {/* Sub Tabs */}
      <SubTabs
        tabs={[
          { id: 'sys-search', label: 'Căutare' },
          { id: 'sys-pending', label: 'În așteptare (2)' },
          { id: 'sys-active', label: 'Acces activ (4)' },
        ]}
        active={activeTab}
        onChange={setActiveTab}
        className="mb-4"
      />

      {/* ═══ SEARCH TAB ═══ */}
      {activeTab === 'sys-search' && (
        <div>
          <SectionLabel>Rezultate recente</SectionLabel>

          <SysResult
            initials="PA"
            initialsStyle={{ background: 'var(--purp-s)', color: 'var(--purp)' }}
            name="Popescu Adriana"
            details="48 ani · F · București · Ultima vizită: 12.02.2026"
            actions={[
              { emoji: '&#x1F4C5;', label: 'Programare' },
              { emoji: '&#x1F52C;', label: 'Analize' },
              { emoji: '&#x1F52C;', label: 'HP' },
              { emoji: '&#x1F48A;', label: 'Rețetă' },
            ]}
          />

          <SysResult
            initials="CM"
            initialsStyle={{ background: 'var(--blue-s)', color: 'var(--blue)' }}
            name="Costache Mihai"
            details="62 ani · M · Cluj · Ultima vizită: 28.03.2026"
            actions={[
              { emoji: '&#x1F4C5;', label: 'Programare' },
              { emoji: '&#x1F52C;', label: 'Analize' },
              { emoji: '&#x1F4CB;', label: 'Istoric' },
              { emoji: '&#x1F48A;', label: 'Rețetă' },
            ]}
          />

          <SysResult
            initials="BI"
            initialsStyle={{ background: 'var(--ok-s)', color: 'var(--ok)' }}
            name="Barbu Ioana"
            details="29 ani · F · Timișoara · Niciodată consultată"
            actions={[
              { emoji: '&#x1F4C5;', label: 'Programare' },
              { emoji: '&#x1F52C;', label: 'Analize' },
              { emoji: '&#x1F4CB;', label: 'Istoric' },
            ]}
          />
        </div>
      )}

      {/* ═══ PENDING TAB ═══ */}
      {activeTab === 'sys-pending' && (
        <div>
          <SectionLabel>Cereri trimise — în așteptare</SectionLabel>

          <PendingCard
            initials="GM"
            name="Gheorghiu Marius"
            requestType="Cerere: Vizualizare analize hepatice"
            note="Trimisă acum 3 ore · Pacientul nu a răspuns încă"
          />

          <PendingCard
            initials="LV"
            name="Lăzărescu Valentina"
            requestType="Cerere: Programare control post-operator"
            note="Trimisă ieri · Notificare re-trimisă automat"
          />
        </div>
      )}

      {/* ═══ ACTIVE ACCESS TAB ═══ */}
      {activeTab === 'sys-active' && (
        <div>
          <SectionLabel>Acces activ — aprobat de pacient</SectionLabel>

          <SysResult
            initials="DM"
            initialsStyle={{ background: 'var(--ok-s)', color: 'var(--ok)' }}
            name="Marinescu Diana"
            details="Acces: Analize + Istoric · Expiră: 10.04.2026"
            actions={[
              { emoji: '&#x1F4CB;', label: 'Deschide dosarul' },
              { emoji: '&#x1F48A;', label: 'Prescrie' },
              { emoji: '&#x1F4C5;', label: 'Programare' },
            ]}
            borderOk
          />

          <SysResult
            initials="RT"
            initialsStyle={{ background: 'var(--ok-s)', color: 'var(--ok)' }}
            name="Rădulescu Teodor"
            details="Acces: Doar analize · Expiră: 08.04.2026"
            actions={[
              { emoji: '&#x1F52C;', label: 'Analize' },
              { emoji: '&#x1F48A;', label: 'Prescrie' },
            ]}
            borderOk
          />
        </div>
      )}
    </div>
  );
}
