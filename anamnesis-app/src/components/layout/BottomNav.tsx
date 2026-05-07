'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Calendar, Globe, User, Settings, FileText, Pill, AlertCircle, Activity, Clock } from 'lucide-react';
import { clsx } from 'clsx';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Users, Calendar, Globe, User, Settings, FileText, Pill, AlertCircle, Activity, Clock,
};

interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const navConfigs: Record<string, NavItem[]> = {
  doctor: [
    { id: 'home', label: 'Acasă', icon: 'Home', href: '/doctor/home' },
    { id: 'patients', label: 'Pacienți', icon: 'Users', href: '/doctor/patients' },
    { id: 'program', label: 'Program', icon: 'Calendar', href: '/doctor/program' },
    { id: 'sistem', label: 'Sistem', icon: 'Globe', href: '/doctor/sistem' },
    { id: 'profil', label: 'Profil', icon: 'User', href: '/doctor/profil' },
    { id: 'config', label: 'Setări', icon: 'Settings', href: '/doctor/config' },
  ],
  patient: [
    { id: 'home', label: 'Acasă', icon: 'Home', href: '/patient/home' },
    { id: 'history', label: 'Istoric', icon: 'FileText', href: '/patient/history' },
    { id: 'meds', label: 'Medicație', icon: 'Pill', href: '/patient/meds' },
    { id: 'doctors', label: 'Medici', icon: 'Users', href: '/patient/doctors' },
    { id: 'sos', label: 'SOS', icon: 'AlertCircle', href: '/patient/sos' },
    { id: 'config', label: 'Setări', icon: 'Settings', href: '/patient/config' },
  ],
  nurse: [
    { id: 'home', label: 'Acasă', icon: 'Home', href: '/nurse/home' },
    { id: 'patients', label: 'Pacienți', icon: 'Users', href: '/nurse/patients' },
    { id: 'meds', label: 'Medicație', icon: 'Pill', href: '/nurse/meds' },
    { id: 'monitor', label: 'Monitorizare', icon: 'Activity', href: '/nurse/monitor' },
    { id: 'tura', label: 'Tură', icon: 'Clock', href: '/nurse/tura' },
    { id: 'config', label: 'Setări', icon: 'Settings', href: '/nurse/config' },
  ],
};

interface BottomNavProps {
  role: 'doctor' | 'patient' | 'nurse';
}

export function BottomNav({ role }: BottomNavProps) {
  const pathname = usePathname();
  const items = navConfigs[role];
  const accentColor = role === 'nurse' ? 'text-teal' : 'text-gold';

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[84px] bg-bg/95 backdrop-blur-xl border-t border-brd flex items-start justify-around pt-2 px-0.5 z-[100]">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        const isActive = pathname?.startsWith(item.href);

        return (
          <Link
            key={item.id}
            href={item.href}
            className={clsx(
              'flex flex-col items-center gap-0.5 min-w-[48px] px-0.5 py-1.5 rounded-xl transition-all duration-200',
              isActive ? accentColor : 'text-tx3'
            )}
          >
            {Icon && <Icon className="w-6 h-6" />}
            <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
