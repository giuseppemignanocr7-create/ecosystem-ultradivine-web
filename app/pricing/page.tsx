'use client';

import { useState, useMemo } from 'react';
import { PLANS, ADDONS } from '@/content/pricing';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SUITES } from '@/content/suites';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const [users, setUsers] = useState(5);
  const [suites, setSuites] = useState(1);
  const plan = users <= 5 && suites === 1 ? 'starter' : users <= 15 && suites <= 3 ? 'professional' : 'enterprise';

  const estimate = useMemo(() => {
    const base = users * (plan === 'starter' ? 49 : plan === 'professional' ? 129 : 0);
    return { plan, monthly: base };
  }, [users, suites, plan]);

  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero pricing">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h1 className="font-serif text-ink-900 max-w-2xl">
              Prezzi trasparenti.
              <br />
              <em className="text-tech not-italic">Calcolati sull&apos;uso reale.</em>
            </h1>
            <p className="mt-6 text-lg text-ink-700 max-w-xl">
              Nessun costo nascosto. Nessun vendor lock-in. Scalabilità reale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-paper-2/50" aria-label="Piani">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Scegli il piano
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <div className={cn(
                  'relative bg-paper border rounded-xl p-6 flex flex-col',
                  p.highlighted ? 'border-brass shadow-lg' : 'border-line'
                )}>
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block px-3 py-1 bg-brass text-white text-xs font-mono uppercase tracking-wider rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="font-sans text-lg font-semibold text-ink-900 uppercase tracking-wider">
                    {p.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-serif text-4xl text-ink-900">{p.price}</span>
                    <span className="text-sm text-ink-500">{p.subtitle}</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                        <span className="text-success mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                    {p.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-300">
                        <span className="mt-0.5 shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contatti" variant={p.highlighted ? 'primary' : 'secondary'} className="mt-8 w-full justify-center">
                    {p.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding" aria-label="Calcolatore ROI">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-8">
              Calcola il tuo investimento
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-paper-2 rounded-xl border border-line p-6 md:p-8 max-w-3xl">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    Numero utenti
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="w-full"
                    aria-label="Numero utenti"
                  />
                  <div className="mt-2 font-serif text-2xl text-ink-900">{users}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    Suite necessarie
                  </label>
                  <select
                    value={suites}
                    onChange={(e) => setSuites(Number(e.target.value))}
                    className="w-full bg-white border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-tech"
                    aria-label="Suite necessarie"
                  >
                    <option value={1}>1 suite</option>
                    <option value={2}>2 suite</option>
                    <option value={3}>3 suite</option>
                    <option value={4}>4+ suite (Enterprise)</option>
                  </select>
                  <div className="mt-2 font-serif text-2xl text-ink-900">{suites}</div>
                </div>
              </div>
              <div className="bg-white border border-line rounded-lg p-6">
                <p className="text-sm text-ink-500">Piano consigliato</p>
                <p className="font-serif text-3xl text-ink-900 capitalize mt-1">
                  {estimate.plan === 'enterprise' ? 'Enterprise (su preventivo)' : estimate.plan}
                </p>
                {estimate.monthly > 0 && (
                  <p className="mt-2 text-lg text-ink-700">
                    Stima:{' '}
                    <span className="font-medium text-ink-900">
                      €{estimate.monthly.toLocaleString('it-IT')}
                    </span>
                    /mese
                  </p>
                )}
                <Button href="/contatti" variant="primary" className="mt-4">
                  Richiedi preventivo personalizzato
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-paper-2/50" aria-label="Add-on">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-8">
              Add-on disponibili
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((addon, i) => (
              <Reveal key={addon.id} delay={i * 50}>
                <div className="bg-paper border border-line rounded-lg p-5">
                  <h3 className="font-sans text-sm font-semibold text-ink-900">{addon.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{addon.description}</p>
                  <p className="mt-3 text-sm font-medium text-tech">{addon.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
