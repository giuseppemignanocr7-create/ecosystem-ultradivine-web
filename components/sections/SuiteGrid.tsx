'use client';

import Link from 'next/link';
import { SUITES } from '@/content/suites';
import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';

export function SuiteGrid() {
  return (
    <section className="section-padding" aria-label="Suite">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumber number="02" label="IL PORTAFOGLIO" />
          <h2 className="font-serif text-ink-900 max-w-2xl">
            Un unico ecosistema.
            <br />
            <em className="text-tech not-italic">Tredici verticali di settore.</em>
          </h2>
          <p className="mt-6 text-lg text-ink-700 max-w-xl">
            Ogni suite è costruita con la profondità di un software dedicato.
            Tutte condividono lo stesso database, la stessa AI, la stessa
            esperienza. Scegli quella del tuo settore — oppure costruiamo la tua.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUITES.map((suite, i) => (
            <Reveal key={suite.id} delay={i * 50}>
              <Link
                href={`/suite/${suite.id}`}
                className="group block bg-paper border border-line rounded-lg p-6 hover:border-brass/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-ink-300">
                    {suite.number}
                  </span>
                  <span className="inline-block px-2 py-1 bg-paper-2 rounded text-[10px] font-mono uppercase tracking-wider text-ink-500">
                    {suite.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-ink-900 group-hover:text-tech transition-colors">
                  {suite.name}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-2">
                  {suite.description}
                </p>
              </Link>
            </Reveal>
          ))}

          {/* Custom suite card */}
          <Reveal delay={SUITES.length * 50}>
            <Link
              href="/contatti"
              className="group block bg-ink-900 border border-ink-2 rounded-lg p-6 hover:border-brass/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-brass">+</span>
                <span className="inline-block px-2 py-1 bg-ink-2 rounded text-[10px] font-mono uppercase tracking-wider text-ink-300">
                  CUSTOM
                </span>
              </div>
              <h3 className="font-serif text-xl text-white group-hover:text-brass transition-colors">
                Il tuo settore
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                Non c&apos;è il tuo verticale? Lo costruiamo su misura. Stesso
                database, stessa AI, stesso ecosistema. → Parliamone
              </p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
