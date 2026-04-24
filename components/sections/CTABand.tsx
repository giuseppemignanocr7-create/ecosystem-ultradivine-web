'use client';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { COMPANY } from '@/lib/constants';

export function CTABand() {
  return (
    <section className="bg-ink py-24 md:py-32" aria-label="Call to action">
      <div className="mx-auto max-w-site px-4 md:px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-white">
            Prenota 30 minuti.
            <br />
            <em className="text-tech not-italic">Ti mostriamo tutto.</em>
          </h2>
          <p className="mt-6 text-lg text-ink-300 max-w-xl mx-auto">
            Demo personalizzata sui tuoi dati. Con noi, non con un commerciale.
            Tecnica, diretta, senza slide inutili.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contatti"
              variant="primary"
              className="text-base px-8 py-4 bg-white text-ink-900 hover:bg-paper"
            >
              Prenota ora
              <span aria-hidden="true"> →</span>
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            O chiama{' '}
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-ink-300 hover:text-white transition-colors"
            >
              {COMPANY.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
