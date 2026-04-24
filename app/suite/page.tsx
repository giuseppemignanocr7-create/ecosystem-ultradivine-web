import type { Metadata } from 'next';
import Link from 'next/link';
import { SUITES } from '@/content/suites';
import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Le 13 Suite',
  description:
    'Esplora le 13 suite verticali di Ecosystem UltraDivine. Ogni suite è costruita con la profondità di un software dedicato, tutte condividono la stessa AI.',
};

export default function SuitePage() {
  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero suite">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <SectionNumber number="02" label="IL PORTAFOGLIO" />
          <h1 className="font-serif text-ink-900 max-w-2xl">
            Tredici verticali.
            <br />
            <em className="text-tech not-italic">Un unico ecosistema.</em>
          </h1>
          <p className="mt-6 text-lg text-ink-700 max-w-xl">
            Ogni suite è costruita con la profondità di un software dedicato.
            Tutte condividono lo stesso database, la stessa AI, la stessa
            esperienza.
          </p>
        </div>
      </section>

      <section className="pb-24" aria-label="Elenco suite">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUITES.map((suite, i) => (
              <Reveal key={suite.id} delay={i * 50}>
                <Link
                  href={`/suite/${suite.id}`}
                  className="group block bg-paper border border-line rounded-xl p-8 hover:border-brass/50 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-sm text-ink-300">
                      {suite.number}
                    </span>
                    <span className="inline-block px-2 py-1 bg-paper-2 rounded text-[10px] font-mono uppercase tracking-wider text-ink-500">
                      {suite.tag}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-ink-900 group-hover:text-tech transition-colors">
                    {suite.name}
                  </h2>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed">
                    {suite.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-line flex items-center justify-between">
                    <span className="text-sm text-ink-500">
                      {suite.modules.length} moduli
                    </span>
                    <span className="text-sm font-medium text-tech group-hover:translate-x-1 transition-transform">
                      Esplora →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={SUITES.length * 50}>
              <Link
                href="/contatti"
                className="group block bg-ink-900 border border-ink-2 rounded-xl p-8 hover:border-brass/50 transition-all duration-300 h-full flex flex-col justify-center text-center"
              >
                <span className="font-mono text-sm text-brass mb-4">+</span>
                <h2 className="font-serif text-2xl text-white group-hover:text-brass transition-colors">
                  Il tuo settore
                </h2>
                <p className="mt-3 text-base text-ink-300 leading-relaxed">
                  Non c&apos;è il tuo verticale? Lo costruiamo su misura. Stesso
                  database, stessa AI, stesso ecosistema.
                </p>
                <span className="mt-6 text-sm font-medium text-brass">
                  Parliamone →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
