'use client';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { EditorialReveal } from '@/components/motion/EditorialReveal';

export function DemoPreview() {
  return (
    <section className="section-padding" aria-label="Demo interattiva">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <div className="bg-paper-2 rounded-2xl border border-line p-8 md:p-16 text-center max-w-4xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
              NON È UN VIDEO
            </p>
            <EditorialReveal as="h2" className="font-serif text-ink-900">
              È il prodotto vero.
              <br />
              <em className="text-tech not-italic">Che lo tocchi tu.</em>
            </EditorialReveal>
            <p className="mt-6 text-lg text-ink-700 max-w-xl mx-auto">
              Accedi alla sandbox interattiva. Quattro suite in versione demo,
              dati finti ma funzioni reali. CoreMind attivo. Cinque minuti e
              capisci esattamente cosa fa questa piattaforma.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/demo" variant="primary" className="text-base px-8 py-4">
                Entra nella demo
                <span aria-hidden="true"> →</span>
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              Nessuna registrazione. Nessun download. Apri e prova.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
