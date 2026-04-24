'use client';

import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

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
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(45,91,255,0.15), transparent 60%), radial-gradient(circle at 70% 20%, rgba(184,147,95,0.08), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumber number="01" label="INTELLIGENCE" dark />
          <h2 className="font-serif text-white max-w-2xl">
            Un cervello.
            <br />
            Che conosce la tua azienda
            <br />
            meglio di te.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Chat mockup */}
          <Reveal delay={100}>
            <div className="bg-ink-2 rounded-2xl border border-white/10 p-6 max-w-md mx-auto lg:mx-0">
              {/* User msg */}
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brass/20 flex items-center justify-center text-xs font-mono text-brass shrink-0">
                  G
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-ink-300">Giuseppe</span>
                    <span className="text-[10px] text-ink-500">14:32</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Crea l&apos;ordine fornitore per i materiali mancanti nel
                    cantiere di Via Roma e avvisa il capocantiere.
                  </p>
                </div>
              </div>

              {/* CoreMind typing */}
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-tech/20 flex items-center justify-center text-xs font-mono text-tech shrink-0">
                  AI
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-tech">CoreMind</span>
                    <span className="text-[10px] text-ink-500">14:32</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Fatto. Ho incrociato il computo metrico con il magazzino:
                    mancano 40 sacchi di cemento R32.5, 12 barre Ø16 da 12m, 3
                    fusti di additivo fluidificante. Ordine generato verso
                    Edilizia Marra (fornitore abituale, consegna 48h) per{' '}
                    <span className="text-brass font-medium">€2.847</span>.
                    Notifica inviata a Carmine. Budget residuo cantiere:{" "}
                    <span className="text-brass font-medium">€12.180</span>.
                  </p>
                </div>
              </div>

              {/* User msg 2 */}
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brass/20 flex items-center justify-center text-xs font-mono text-brass shrink-0">
                  G
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-ink-300">Giuseppe</span>
                    <span className="text-[10px] text-ink-500">14:33</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Quali cantieri hanno margine sotto il 10% e scadenza entro 60
                    giorni?
                  </p>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-tech/20 flex items-center justify-center text-xs font-mono text-tech shrink-0">
                  AI
                </div>
                <div className="flex items-center gap-1 py-2">
                  <span className="w-2 h-2 bg-tech rounded-full animate-typing" />
                  <span className="w-2 h-2 bg-tech rounded-full animate-typing" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 bg-tech rounded-full animate-typing" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
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
