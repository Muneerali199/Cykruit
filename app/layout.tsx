import type { Metadata } from 'next';
import { Syne, DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/providers/LenisProvider';
import CustomCursor from '@/components/ui/CustomCursor';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Cykruit | Find Your Next Security Consultant | Job',
  description: 'Explore top cybersecurity opportunities tailored to your skills. Connect with trusted employers hiring today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning className="bg-black text-text font-body antialiased selection:bg-accent selection:text-black overflow-x-hidden">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
