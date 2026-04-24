'use client';

import { Reveal } from '@/components/ui/Reveal';

export function ManifestoQuote() {
  return (
    <section className="section-padding bg-paper" aria-label="Manifesto">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="font-serif text-3xl md:text-5xl text-ink-900 leading-tight">
              &ldquo;Non abbiamo costruito un altro gestionale.
              <br />
              Abbiamo costruito il modo in cui il software
              <br />
              aziendale funzionerà nel prossimo decennio.&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic font-mono text-sm text-brass uppercase tracking-wider">
                — Giuseppe Mignano, Fondatore
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
