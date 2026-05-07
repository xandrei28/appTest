'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchBar } from '@/components/ui/SearchBar';
import { Badge } from '@/components/ui/Badge';
import { Tag } from '@/components/ui/Tag';

interface DocCard {
  icon: string;
  iconBg: string;
  title: string;
  meta: string;
  date: string;
  status: string;
  statusColor: string;
  tags: string[];
  actions: { label: string; key: string }[];
  route?: string;
}

const documents: DocCard[] = [
  {
    icon: '\u{1FA78}',
    iconBg: 'var(--ok-s)',
    title: 'Hemoleucograma completa',
    meta: 'MedLife Bucuresti',
    date: '28 Mar 2026',
    status: '✓ Verificat blockchain',
    statusColor: 'text-ok',
    tags: ['Laborator', 'PDF'],
    actions: [
      { label: '\u{1F441} Deschide', key: 'open' },
      { label: '⬇ PDF', key: 'pdf' },
      { label: '\u{1F517} NFT', key: 'nft' },
    ],
    route: '/patient/lab',
  },
  {
    icon: '\u{1FAC0}',
    iconBg: 'var(--blue-s)',
    title: 'Consult Cardiologie + Echo',
    meta: 'Dr. Elena Popescu · Sp. Universitar',
    date: '15 Mar 2026',
    status: '✓ Verificat',
    statusColor: 'text-ok',
    tags: ['Cardiologie', 'Echo', 'ECG'],
    actions: [
      { label: '\u{1F441} Deschide', key: 'open' },
      { label: '⬇ PDF', key: 'pdf' },
      { label: '\u{1F517} NFT', key: 'nft' },
    ],
  },
  {
    icon: '\u{1F4F8}',
    iconBg: 'var(--purp-s)',
    title: 'CT Torace — Fara leziuni',
    meta: 'Regina Maria · Radiologie',
    date: '02 Feb 2026',
    status: '✓ Verificat',
    statusColor: 'text-ok',
    tags: ['Imagistica', 'DICOM'],
    actions: [
      { label: '\u{1F441} Deschide', key: 'open' },
      { label: '⬇ DICOM', key: 'dicom' },
      { label: '\u{1F517} NFT', key: 'nft' },
    ],
  },
  {
    icon: '\u{1F4CB}',
    iconBg: 'var(--gold-soft)',
    title: 'Reteta — Ramipril + Aspirina',
    meta: 'Dr. Elena Popescu · C-28451',
    date: '15 Mar 2026',
    status: '✓ Activa',
    statusColor: 'text-ok',
    tags: ['Reteta', 'QR Farmacie'],
    actions: [
      { label: '\u{1F441} Deschide', key: 'open' },
      { label: '⬇ PDF', key: 'pdf' },
      { label: '\u{1F517} NFT', key: 'nft' },
    ],
    route: '/patient/rx',
  },
  {
    icon: '\u{1F3E5}',
    iconBg: 'var(--err-s)',
    title: 'Scrisoare de externare',
    meta: 'Sp. Universitar · Cardiologie · 3 zile',
    date: '20 Dec 2025',
    status: '✓ Semnat digital',
    statusColor: 'text-ok',
    tags: ['Externare', 'Semnat'],
    actions: [
      { label: '\u{1F441} Deschide', key: 'open' },
      { label: '⬇ PDF', key: 'pdf' },
      { label: '\u{1F517} NFT', key: 'nft' },
    ],
  },
  {
    icon: '\u{1FA7A}',
    iconBg: 'var(--ok-s)',
    title: 'Control anual',
    meta: 'Dr. Marinescu · Medicina de familie',
    date: '05 Dec 2025',
    status: '✓ Verificat',
    statusColor: 'text-ok',
    tags: ['General', 'Preventiv'],
    actions: [
      { label: '\u{1F441} Deschide', key: 'open' },
      { label: '⬇ PDF', key: 'pdf' },
      { label: '\u{1F517} NFT', key: 'nft' },
    ],
  },
];

export default function PatientHistoryPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2 className="text-[20px] font-extrabold text-tx">Istoric Medical</h2>
      <p className="text-[13px] text-tx3 mt-1 mb-4">
        Toate documentele tale, verificabile pe blockchain ca NFT
      </p>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Cauta documente, analize, externari..."
        className="mb-4"
      />

      <div className="space-y-3">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="bg-bg-card border border-brd rounded-r overflow-hidden cursor-pointer hover:bg-bg-card-h transition-colors"
            onClick={() => doc.route && router.push(doc.route)}
          >
            <div className="p-3.5">
              <div className="flex gap-3">
                {/* Icon */}
                <div
                  className="w-11 h-14 rounded-lg flex items-center justify-center text-[20px] relative flex-shrink-0"
                  style={{ background: doc.iconBg }}
                >
                  {doc.icon}
                  <span className="absolute -top-1 -right-1 bg-gold text-bg text-[7px] font-black px-1 py-px rounded">
                    NFT
                  </span>
                </div>
                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-bold text-tx">{doc.title}</div>
                  <div className="text-[12px] text-tx2 mt-0.5">{doc.meta}</div>
                  <div className="text-[11px] text-tx3 mt-1">
                    {doc.date} · <span className={doc.statusColor}>{doc.status}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {doc.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="flex border-t border-brd">
              {doc.actions.map((act) => (
                <button
                  key={act.key}
                  className="flex-1 py-2 text-[11px] font-bold text-tx3 hover:text-gold hover:bg-bg-surf transition-colors border-r border-brd last:border-r-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
