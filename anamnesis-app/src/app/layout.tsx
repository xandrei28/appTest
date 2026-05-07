import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { BiometricModal } from '@/components/auth/BiometricModal';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Anamnesis — Medical Blockchain Platform',
  description: 'Anamnesis: Platformă medicală blockchain pe MultiversX Sovereign Chain',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0A0E14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={dmSans.variable}>
      <body className="font-sans bg-bg text-tx antialiased">
        {children}
        <BiometricModal />
      </body>
    </html>
  );
}
