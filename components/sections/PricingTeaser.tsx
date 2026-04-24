'use client';

import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { PLANS } from '@/content/pricing';
import { cn } from '@/lib/utils';

export function PricingTeaser() {
  return (
    <section className="section-padding bg-paper-2/50" aria-label="Prezzi">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumber number="05" label="INVESTIMENTO" />
          <h2 className="font-serif text-ink-900 max-w-xl">
            Prezzi trasparenti.
            <br />
            <em className="text-tech not-italic">Calcolati sull&apos;uso reale.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              <div
                className={cn(
                  'relative bg-paper border rounded-xl p-8 flex flex-col',
                  plan.highlighted
                    ? 'border-brass shadow-lg'
                    : 'border-line'
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block px-3 py-1 bg-brass text-white text-xs font-mono uppercase tracking-wider rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-sans text-lg font-semibold text-ink-900 uppercase tracking-wider">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-ink-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-ink-500">{plan.subtitle}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="text-success mt-0.5 shrink-0">✓</span>
                      {feat}
                    </li>
                  ))}
                  {plan.notIncluded?.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-ink-300"
                    >
                      <span className="mt-0.5 shrink-0">—</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/pricing"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="mt-8 w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <Button href="/pricing" variant="ghost" className="text-tech">
              Calcola il tuo ROI
              <span aria-hidden="true"> →</span>
            </Button>
            <p className="mt-3 text-sm text-ink-500">
              Nessun costo nascosto. Nessun vendor lock-in. Dati esportabili
              sempre.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
