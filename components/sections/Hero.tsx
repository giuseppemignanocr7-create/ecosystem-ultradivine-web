'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="mx-auto max-w-site w-full px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-brass mb-6">
            LA PIATTAFORMA · AI-NATIVE · MADE IN ITALY
          </p>
          <h1 className="font-serif text-ink-900">
            Un&apos;unica piattaforma.
            <br />
            <em className="text-tech not-italic">Tutti i tuoi settori.</em>
            <br />
            Zero compromessi.
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed max-w-xl">
            Ecosystem UltraDivine è il sistema operativo aziendale costruito
            intorno a CoreMind, l&apos;intelligenza nativa che capisce la tua
            azienda e la fa lavorare per te. Tredici verticali. Un unico
            database. Un solo login. Nessun limite.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
        <div className="hidden lg:block relative h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Window 1 - BuildSuite */}
              <div className="absolute top-0 left-0 w-[340px] bg-white rounded-xl border border-line shadow-sm p-4 rotate-[-3deg] z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-mono text-ink-300">
                    BuildSuite
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-paper-2 rounded w-3/4" />
                  <div className="h-2 bg-paper-2 rounded w-1/2" />
                  <div className="h-2 bg-paper-2 rounded w-5/6" />
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="h-12 bg-tech/10 rounded" />
                    <div className="h-12 bg-tech/10 rounded" />
                    <div className="h-12 bg-tech/10 rounded" />
                  </div>
                </div>
              </div>
              {/* Window 2 - CoreMind */}
              <div className="absolute top-32 right-0 w-[300px] bg-ink-2 rounded-xl border border-white/10 shadow-sm p-4 rotate-[2deg] z-20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-tech" />
                  <span className="ml-2 text-xs font-mono text-ink-300">
                    CoreMind
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-brass/20" />
                    <div className="flex-1 bg-white/5 rounded-lg p-2">
                      <div className="h-2 bg-white/10 rounded w-4/5" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-tech/20" />
                    <div className="flex-1 bg-white/5 rounded-lg p-2">
                      <div className="h-2 bg-white/10 rounded w-3/4" />
                      <div className="h-2 bg-white/10 rounded w-1/2 mt-1" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Window 3 - RetailSuite */}
              <div className="absolute bottom-12 left-12 w-[280px] bg-white rounded-xl border border-line shadow-sm p-4 rotate-[1deg] z-30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-brass" />
                  <span className="ml-2 text-xs font-mono text-ink-300">
                    RetailSuite
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-paper-2 rounded" />
                  <div className="h-16 bg-paper-2 rounded" />
                  <div className="h-16 bg-brass/10 rounded" />
                  <div className="h-16 bg-brass/10 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
