"use client";
import { motion } from "motion/react";
import { HeroStack } from "./HeroStack";

export function Hero() {
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-screen flex items-center py-24 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-brass mb-6">
              LA PIATTAFORMA · AI-NATIVE · MADE IN ITALY
            </div>
            <h1 className="font-serif font-normal text-[clamp(48px,7vw,96px)] leading-[0.95] tracking-[-0.03em] max-w-[900px] mb-8">
              Un'unica piattaforma.
              <br />
              <em className="italic text-tech">Tutti i tuoi settori.</em>
              <br />
              Zero compromessi.
            </h1>
            <p className="text-lg text-ink-700 max-w-[540px] mb-10 leading-relaxed">
              Ecosystem UltraDivine è il sistema operativo aziendale costruito
              intorno a CoreMind, l'intelligenza nativa che capisce la tua azienda
              e la fa lavorare per te. Tredici verticali. Un unico database.
              Un solo login. Nessun limite.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/contatti" className="bg-ink-900 text-white px-6 py-3.5 rounded text-sm font-medium hover:bg-ink-700 transition-colors">
                Richiedi una demo →
              </a>
              <a href="/demo" className="border border-line px-6 py-3.5 rounded text-sm font-medium hover:bg-paper-2 transition-colors">
                Prova la piattaforma
              </a>
            </div>
          </div>
          <HeroStack />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center py-24 px-8 overflow-hidden">
      {/* SHUTTER OPENING — due bande paper che si aprono in verticale */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.7, 0, 0.84, 0], delay: 0.2 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-paper z-50 pointer-events-none"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.9, ease: [0.7, 0, 0.84, 0], delay: 0.2 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-paper z-50 pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* SINISTRA — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-brass mb-6"
          >
            LA PIATTAFORMA · AI-NATIVE · MADE IN ITALY
          </motion.div>

          {/* HEADLINE CON EDITORIAL REVEAL */}
          <h1 className="font-serif font-normal text-[clamp(48px,7vw,96px)] leading-[0.95] tracking-[-0.03em] max-w-[900px] mb-8">
            <RevealLine delay={1.3}>Un'unica piattaforma.</RevealLine>
            <RevealLine delay={1.5} italic>
              <em className="italic text-tech">Tutti i tuoi settori.</em>
            </RevealLine>
            <RevealLine delay={1.7}>Zero compromessi.</RevealLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="text-lg text-ink-700 max-w-[540px] mb-10 leading-relaxed"
          >
            Ecosystem UltraDivine è il sistema operativo aziendale costruito
            intorno a CoreMind, l'intelligenza nativa che capisce la tua azienda
            e la fa lavorare per te. Tredici verticali. Un unico database.
            Un solo login. Nessun limite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="flex flex-wrap gap-3"
          >
            <a href="/contatti" className="bg-ink-900 text-white px-6 py-3.5 rounded text-sm font-medium hover:bg-ink-700 transition-colors">
              Richiedi una demo →
            </a>
            <a href="/demo" className="border border-line px-6 py-3.5 rounded text-sm font-medium hover:bg-paper-2 transition-colors">
              Prova la piattaforma
            </a>
          </motion.div>
        </div>

        {/* DESTRA — hero stack animato */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <HeroStack />
        </motion.div>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0, italic = false }: { children: React.ReactNode; delay?: number; italic?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ display: "block" }}
    >
      {children}
    </motion.span>
  );
}
