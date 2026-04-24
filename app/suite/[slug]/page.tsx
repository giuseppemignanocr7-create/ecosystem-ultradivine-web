import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SUITES } from '@/content/suites';
import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SUITES.map((suite) => ({ slug: suite.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const suite = SUITES.find((s) => s.id === params.slug);
  if (!suite) return {};
  return {
    title: `${suite.name} — ${suite.tag}`,
    description: suite.description,
  };
}

export default function SuiteDetailPage({ params }: Props) {
  const suite = SUITES.find((s) => s.id === params.slug);
  if (!suite) return notFound();

  return (
    <>
      <section className="pt-32 pb-16" aria-label={`Hero ${suite.name}`}>
        <div className="mx-auto max-w-site px-4 md:px-6">
          <SectionNumber number={suite.number} label={suite.name.toUpperCase()} />
          <h1 className="font-serif text-ink-900 max-w-2xl">
            {suite.name}
          </h1>
          <p className="mt-6 text-lg text-ink-700 max-w-xl">
            {suite.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/demo" variant="primary">
              Prova la demo
              <span aria-hidden="true"> →</span>
            </Button>
            <Button href="/contatti" variant="secondary">
              Richiedi una demo
            </Button>
          </div>
        </div>
      </section>

      {/* Cosa risolve */}
      <section className="section-padding bg-paper-2/50" aria-label="Cosa risolve">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Cosa risolve
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {suite.painPoints.map((pp, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-paper border border-line rounded-xl p-6">
                  <p className="font-sans text-sm font-semibold text-danger uppercase tracking-wider mb-2">
                    Problema
                  </p>
                  <p className="text-base text-ink-700 mb-4">{pp.pain}</p>
                  <p className="font-sans text-sm font-semibold text-success uppercase tracking-wider mb-2">
                    Soluzione
                  </p>
                  <p className="text-base text-ink-900">{pp.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moduli */}
      <section className="section-padding" aria-label="Moduli inclusi">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Moduli inclusi
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suite.modules.map((mod, i) => (
              <Reveal key={mod} delay={i * 50}>
                <div className="bg-paper border border-line rounded-lg p-4 text-sm text-ink-700 font-medium">
                  {mod}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CoreMind use cases */}
      <section className="section-padding bg-ink" aria-label="CoreMind">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-white max-w-xl mb-12">
              CoreMind per {suite.name}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {suite.coremindUseCases.map((uc, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-ink-2 border border-white/10 rounded-xl p-6">
                  <p className="text-sm text-white/90 leading-relaxed">
                    &ldquo;{uc}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrazioni */}
      <section className="section-padding" aria-label="Integrazioni">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Integrazioni native
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {suite.integrations.map((int) => (
              <span
                key={int}
                className="px-4 py-2 bg-paper-2 border border-line rounded-lg text-sm text-ink-700 font-medium"
              >
                {int}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing specific */}
      <section className="section-padding bg-paper-2/50" aria-label="Prezzi">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-6">
              Investimento
            </h2>
            <p className="text-lg text-ink-700">{suite.pricingNote}</p>
            <div className="mt-8">
              <Button href="/pricing" variant="secondary">
                Vedi tutti i piani
                <span aria-hidden="true"> →</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24" aria-label="Call to action">
        <div className="mx-auto max-w-site px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-white">
              Prova {suite.name} sui tuoi dati
            </h2>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              Demo personalizzata, senza impegno. Ti mostriamo esattamente come
              {suite.name} funziona nel tuo settore.
            </p>
            <div className="mt-8">
              <Button
                href="/contatti"
                variant="primary"
                className="bg-tech hover:bg-tech-2"
              >
                Richiedi demo
                <span aria-hidden="true"> →</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
