'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { EditorialReveal } from '@/components/motion/EditorialReveal';
import { HeroParallaxStack } from '@/components/motion/HeroParallaxStack';

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brass/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-tech/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brass/3 rounded-full blur-2xl" />
      </div>

      <div className="mx-auto max-w-site w-full px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Text */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
            LA PIATTAFORMA · AI-NATIVE · MADE IN ITALY
          </p>
          <EditorialReveal as="h1" className="font-serif text-ink-900 mb-6" delay={0.2}>
            Un&apos;unica piattaforma.
            <br />
            <em className="text-tech not-italic">Tutti i tuoi settori.</em>
            <br />
            Zero compromessi.
          </EditorialReveal>
          <p className="text-lg text-ink-700 leading-relaxed max-w-xl">
            Ecosystem UltraDivine è il sistema operativo aziendale costruito
            intorno a CoreMind, l&apos;intelligenza nativa che capisce la tua
            azienda e la fa lavorare per te. Tredici verticali. Un unico
            database. Un solo login. Nessun limite.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contatti" variant="primary">
              Richiedi una demo
              <span aria-hidden="true"> →</span>
            </Button>
            <Button href="/demo" variant="secondary">
              Prova la piattaforma
            </Button>
          </div>
        </div>

        {/* Visual mockup */}
        <div className="hidden lg:block relative h-[500px]">
          <HeroParallaxStack />
        </div>
      </div>
    </section>
  );
}
