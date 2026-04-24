'use client';

import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from '@/content/integrations';

export function IntegrationLogos() {
  return (
    <section className="section-padding" aria-label="Integrazioni">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumber number="04" label="CONNESSIONI" />
          <h2 className="font-serif text-ink-900 max-w-xl">
            Parla con tutto quello che già usi.
          </h2>
          <p className="mt-6 text-lg text-ink-700 max-w-2xl">
            Ecosystem UltraDivine non ti chiede di abbandonare i tuoi strumenti.
            Si integra con oltre 200 sistemi esterni attraverso API native,
            connettori certificati e middleware personalizzabili.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INTEGRATIONS.slice(0, 32).map((integration, i) => (
            <Reveal key={integration.id} delay={i * 30}>
              <div className="flex flex-col items-center justify-center p-4 bg-paper border border-line rounded-lg hover:border-line-strong transition-colors text-center h-24">
                <span className="text-sm font-medium text-ink-700">
                  {integration.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-500 mt-1">
                  {integration.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Button href="/integrazioni" variant="secondary">
              Vedi tutte le integrazioni
              <span aria-hidden="true"> →</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
