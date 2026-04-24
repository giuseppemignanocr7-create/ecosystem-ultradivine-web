'use client';

import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionNumberReveal } from '@/components/motion/SectionNumberReveal';
import { EditorialReveal } from '@/components/motion/EditorialReveal';
import { CoreMindChatAnimated } from '@/components/motion/CoreMindChatAnimated';
import { motion } from 'motion/react';

const features = [
  {
    num: 'i.',
    title: 'CONVERSAZIONE NATURALE',
    desc: 'Parla in italiano con il tuo gestionale. Zero comandi da imparare, zero menù da navigare. CoreMind capisce il contesto aziendale e ricorda ogni interazione.',
  },
  {
    num: 'ii.',
    title: 'CRUD CROSS-MODULE',
    desc: 'Create, read, update, delete su qualsiasi entità — clienti, fatture, cantieri, ordini, pratiche, cartelle cliniche — attraversando più moduli in una sola istruzione.',
  },
  {
    num: 'iii.',
    title: 'QUERY COMPLESSE & REPORTING',
    desc: '"Confronta il fatturato Q3 vs Q2 per cliente", "chi sono i 5 clienti con più insoluti": risposte strutturate con grafici, tabelle, export PDF/Excel generati in tempo reale.',
  },
  {
    num: 'iv.',
    title: 'ORCHESTRAZIONE MULTI-AGENTE',
    desc: 'CoreMind coordina catene di azioni attraverso gestionale, cantieri, HR, contabilità, documenti. Ogni passaggio è auditabile, reversibile, firmato.',
  },
  {
    num: 'v.',
    title: 'PROVIDER-AGNOSTIC',
    desc: 'Costruito su Claude, GPT, Gemini o modelli locali self-hosted. Scegli tu il motore — CoreMind resta identico nella logica e nel comportamento.',
  },
];

export function CoreMindFlagship() {
  return (
    <section
      className="relative bg-ink overflow-hidden section-padding"
      aria-label="CoreMind"
    >
      {/* Glow */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(45,91,255,0.15), transparent 60%), radial-gradient(circle at 70% 20%, rgba(184,147,95,0.08), transparent 50%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          background: [
            'radial-gradient(circle at 30% 50%, rgba(45,91,255,0.15), transparent 60%), radial-gradient(circle at 70% 20%, rgba(184,147,95,0.08), transparent 50%)',
            'radial-gradient(circle at 35% 55%, rgba(45,91,255,0.2), transparent 60%), radial-gradient(circle at 65% 25%, rgba(184,147,95,0.12), transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(45,91,255,0.15), transparent 60%), radial-gradient(circle at 70% 20%, rgba(184,147,95,0.08), transparent 50%)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumberReveal number="01" label="INTELLIGENCE" />
          <EditorialReveal as="h2" className="font-serif text-white max-w-2xl">
            Un cervello.
            <br />
            Che conosce la tua azienda
            <br />
            meglio di te.
          </EditorialReveal>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Chat mockup */}
          <Reveal delay={100}>
            <div className="bg-ink-2 rounded-2xl border border-white/10 p-6 max-w-md mx-auto lg:mx-0">
              <CoreMindChatAnimated />
            </div>
          </Reveal>

          {/* Features list */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <Reveal key={f.num} delay={100 + i * 80}>
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-brass shrink-0">
                    {f.num}
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-2">
                      {f.title}
                    </h4>
                    <p className="text-sm text-ink-300 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={500}>
              <Button href="/coremind" variant="secondary" className="mt-4">
                Scopri CoreMind
                <span aria-hidden="true"> →</span>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
