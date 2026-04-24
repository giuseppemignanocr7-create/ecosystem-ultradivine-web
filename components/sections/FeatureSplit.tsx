'use client';

import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  {
    num: '01',
    title: 'DIAGNOSI',
    time: '1 settimana',
    desc: 'Analizziamo i tuoi flussi, i tuoi software attuali, i tuoi dati. Identifichiamo quali suite servono e in che ordine attivarle.',
  },
  {
    num: '02',
    title: 'MIGRAZIONE',
    time: '2–4 settimane',
    desc: 'Importiamo tutti i dati dai sistemi legacy (gestionali, Excel, documenti). CoreMind impara la tua azienda. Tu continui a lavorare.',
  },
  {
    num: '03',
    title: 'OPERATIVITÀ',
    time: 'da subito',
    desc: 'Dashboard operativa. Formazione team. Supporto 24/7 il primo mese. SLA garantito. Nessun vendor lock-in.',
  },
];

export function FeatureSplit() {
  return (
    <section className="section-padding bg-paper-2/50" aria-label="Metodo">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumber number="03" label="METODO" />
          <h2 className="font-serif text-ink-900 max-w-xl">
            Tre passi.
            <br />
            <em className="text-tech not-italic">Per farti partire domani.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div className="relative">
                <div className="font-mono text-5xl text-brass/20 font-bold mb-4">
                  {step.num}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-sans text-lg font-semibold text-ink-900 uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-500 bg-paper border border-line px-2 py-1 rounded">
                    {step.time}
                  </span>
                </div>
                <p className="text-base text-ink-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
