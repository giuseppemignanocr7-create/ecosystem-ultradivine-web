import type { Metadata } from 'next';
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { LenisProvider } from '@/app/providers/LenisProvider';
import { PageTransition } from '@/components/motion/PageTransition';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ecosystemultradivine.com'),
  title: {
    default: 'Ecosystem UltraDivine — La piattaforma AI-native multi-verticale',
    template: '%s · Ecosystem UltraDivine',
  },
  description:
    "Un unico ecosistema. Tredici verticali di settore. CoreMind, l'intelligenza nativa che capisce la tua azienda. Made in Italy. GDPR ready. AI Act compliant.",
  keywords: [
    'gestionale AI',
    'ERP italiano',
    'software aziendale',
    'intelligenza artificiale',
    'gestionale cantieri',
    'software studi legali',
    'CoreMind',
    'Ecosystem UltraDivine',
  ],
  authors: [{ name: 'Global Consulting S.R.L.S.' }],
  creator: 'Giuseppe Mignano',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://ecosystemultradivine.com',
    title: 'Ecosystem UltraDivine — AI-native per ogni settore',
    description: "Un'unica piattaforma. Tutti i tuoi settori. Zero compromessi.",
    siteName: 'Ecosystem UltraDivine',
    images: [{ url: '/og/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecosystem UltraDivine',
    description: 'La piattaforma AI-native multi-verticale',
    images: ['/og/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/', languages: { 'it-IT': '/' } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <LenisProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
          <CookieBanner />
        </LenisProvider>
      </body>
    </html>
  );
}
