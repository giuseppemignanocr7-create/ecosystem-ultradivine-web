'use client';

import { useState, useMemo } from 'react';
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from '@/content/integrations';
import { Reveal } from '@/components/ui/Reveal';

export default function IntegrazioniPage() {
  const [category, setCategory] = useState<string>('Tutte');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return INTEGRATIONS.filter((i) => {
      const matchCat = category === 'Tutte' || i.category === category;
      const matchQuery =
        !query ||
        i.name.toLowerCase().includes(query.toLowerCase()) ||
        i.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero integrazioni">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h1 className="font-serif text-ink-900 max-w-2xl">
              Integrazioni
            </h1>
            <p className="mt-6 text-lg text-ink-700 max-w-xl">
              Ecosystem UltraDivine si connette con oltre 200 sistemi esterni.
              Se non c&apos;è, la costruiamo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" aria-label="Directory integrazioni">
        <div className="mx-auto max-w-site px-4 md:px-6">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca integrazione..."
                className="w-full sm:w-72 bg-white border border-line rounded-lg px-4 py-2 text-sm text-ink-900 focus:outline-none focus:border-tech"
              />
              <div className="flex flex-wrap gap-2">
                {['Tutte', ...INTEGRATION_CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      category === cat
                        ? 'bg-ink-900 text-white border-ink-900'
                        : 'bg-paper text-ink-700 border-line hover:border-line-strong'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((integration, i) => (
              <Reveal key={integration.id} delay={(i % 8) * 50}>
                <div className="bg-paper border border-line rounded-xl p-5 hover:border-line-strong transition-colors h-full flex flex-col">
                  <h3 className="font-sans text-base font-semibold text-ink-900">
                    {integration.name}
                  </h3>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-paper-2 rounded text-[10px] font-mono uppercase tracking-wider text-ink-500 self-start">
                    {integration.category}
                  </span>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
                    {integration.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-ink-500 py-12">
              Nessuna integrazione trovata.{' '}
              <a href="/contatti" className="text-tech hover:underline">
                Richiedine una
              </a>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
