"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

export function HeroStack() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yFront = useTransform(scrollY, [0, 800], [0, -80]);
  const yMid = useTransform(scrollY, [0, 800], [0, 40]);
  const yBack = useTransform(scrollY, [0, 800], [0, 120]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { stiffness: 100, damping: 20 });

  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleMouseMove(e: React.MouseEvent) {
    if (!container.current || prefersReducedMotion) return;
    const rect = container.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  const ease = [0.16, 1, 0.3, 1] as const;

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full h-[560px] lg:h-[640px] flex items-center justify-center">
        <Window title="BuildSuite — Cantieri">
          <div className="p-5 h-[280px] lg:h-[340px]">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-serif text-xl">Portfolio attivo</h3>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-400">12 cantieri · 14:32</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                ["Valore", "€4.82M", "↑ 12.4%"],
                ["SAL mese", "€312K", "↑ 8.1%"],
                ["Margine", "18.6%", "↓ 1.2pp", true],
                ["Ritardi", "2", "giorni"],
              ].map(([lbl, val, delta, down], i) => (
                <div key={i} className="p-2.5 border border-line rounded">
                  <div className="font-mono text-[8px] tracking-[0.14em] uppercase text-ink-400 mb-1.5">{lbl}</div>
                  <div className="font-serif text-xl leading-none">{val}</div>
                  <div className={`font-mono text-[9px] mt-1 ${down ? "text-danger" : "text-success"}`}>{delta}</div>
                </div>
              ))}
            </div>
            <div className="border border-line rounded overflow-hidden">
              <div className="bg-paper-2 grid grid-cols-[1fr_auto_auto] px-3 py-2 font-mono text-[8px] tracking-[0.14em] uppercase text-ink-400 font-medium">
                <span>CANTIERE</span><span className="px-4">AVANZ.</span><span>STATO</span>
              </div>
              {[
                ["Via Roma 42", "74%", "IN CORSO", "success"],
                ["Residenza Pineta", "42%", "IN CORSO", "success"],
                ["Biogas Caserta", "91%", "REVISIONE", "warning"],
              ].map(([name, prog, status, color], i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center px-3 py-2 text-xs border-t border-line">
                  <span>{name}</span>
                  <div className="flex items-center gap-2 px-4 min-w-[80px]">
                    <div className="w-10 h-1 bg-ink-50 rounded overflow-hidden">
                      <div className="h-full bg-tech" style={{ width: prog }} />
                    </div>
                    <span className="font-mono text-[10px]">{prog}</span>
                  </div>
                  <span className={`font-mono text-[8px] tracking-wider px-2 py-0.5 rounded ${
                    color === "success" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </Window>
      </div>
    );
  }

  return (
    <div
      ref={container}
      onMouseMove={handleMouseMove}
      style={{ perspective: 2400 }}
      className="relative w-full h-[560px] lg:h-[640px]"
    >
      {/* BACK — RetailSuite POS */}
      <motion.div
        style={{ y: yBack, rotateX, rotateY }}
        initial={{ opacity: 0, x: -60, rotate: -8 }}
        animate={{ opacity: 0.92, x: 0, rotate: -3 }}
        transition={{ duration: 1.2, ease, delay: 0.5 }}
        className="absolute left-0 bottom-0 w-[300px] lg:w-[420px] z-10"
      >
        <Window title="RetailSuite — POS">
          <div className="p-4 grid grid-cols-[1fr_auto] gap-3 h-[260px] lg:h-[300px]">
            <div className="space-y-2 text-xs">
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-ink-400">SCONTRINO #04821</div>
              {[
                ["Pasta Gragnano IGP", "×2 · €4.80"],
                ["Olio EVO Coratina", "×1 · €12.50"],
                ["Parmigiano 24 mesi", "×1 · €8.90"],
                ["Vino Falanghina", "×2 · €19.60"],
                ["Pane Altamura", "×1 · €3.20"],
              ].map(([item, q], i) => (
                <div key={i} className="flex justify-between border-b border-line pb-1.5">
                  <span>{item}</span>
                  <span className="text-ink-400 font-mono">{q}</span>
                </div>
              ))}
            </div>
            <div className="w-[130px] bg-paper-2 rounded p-3 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-400">TOTALE</div>
                <div className="font-serif text-4xl leading-none mt-1">€49,00</div>
              </div>
              <div className="bg-tech text-white text-center py-2 rounded text-[10px] font-semibold tracking-wider">
                INCASSA →
              </div>
            </div>
          </div>
        </Window>
      </motion.div>

      {/* MID — CoreMind chat (DARK) */}
      <motion.div
        style={{ y: yMid, rotateX, rotateY }}
        initial={{ opacity: 0, x: 60, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 2.5 }}
        transition={{ duration: 1.1, ease, delay: 0.25 }}
        className="absolute right-0 top-[100px] lg:top-[140px] w-[320px] lg:w-[440px] z-20"
      >
        <Window title="CoreMind — Assistente" dark>
          <div className="relative p-4 h-[240px] lg:h-[280px] overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 20% 30%, rgba(45,91,255,0.2), transparent 60%), radial-gradient(circle at 80% 80%, rgba(184,147,95,0.18), transparent 60%)"
              }}
            />
            <div className="relative z-10 flex justify-between items-baseline border-b border-white/10 pb-2.5 mb-3">
              <div className="font-serif text-lg text-white">CoreMind</div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-brass">SONNET 4.5</div>
            </div>
            <div className="relative z-10 space-y-3">
              <div className="text-xs">
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-tech mb-1">GIUSEPPE · 14:32</div>
                <div className="p-2.5 rounded border border-white/10 bg-white/5 text-white/90 leading-snug">
                  Crea ordine fornitore per i materiali mancanti del cantiere Via Roma.
                </div>
              </div>
              <div className="text-xs">
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-brass mb-1">COREMIND · 14:32</div>
                <div className="p-2.5 rounded border border-white/10 bg-white/5 text-white/90 leading-snug">
                  Fatto. 40 sacchi R32.5, 12 barre Ø16, 3 fusti. Ordine Edilizia Marra · €2.847 · 48h.
                </div>
              </div>
              <div className="flex gap-1 pl-2">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-brass"
                    animate={{ y: [0, -3, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Window>
      </motion.div>

      {/* FRONT — BuildSuite dashboard */}
      <motion.div
        style={{ y: yFront, rotateX, rotateY }}
        initial={{ opacity: 0, y: 60, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 1.3, ease, delay: 0 }}
        className="absolute left-[30px] lg:left-[60px] top-0 w-[340px] lg:w-[520px] z-30"
      >
        <Window title="BuildSuite — Cantieri">
          <div className="p-5 h-[280px] lg:h-[340px]">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-serif text-xl">Portfolio attivo</h3>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-400">12 cantieri · 14:32</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                ["Valore", "€4.82M", "↑ 12.4%"],
                ["SAL mese", "€312K", "↑ 8.1%"],
                ["Margine", "18.6%", "↓ 1.2pp", true],
                ["Ritardi", "2", "giorni"],
              ].map(([lbl, val, delta, down], i) => (
                <div key={i} className="p-2.5 border border-line rounded">
                  <div className="font-mono text-[8px] tracking-[0.14em] uppercase text-ink-400 mb-1.5">{lbl}</div>
                  <div className="font-serif text-xl leading-none">{val}</div>
                  <div className={`font-mono text-[9px] mt-1 ${down ? "text-danger" : "text-success"}`}>{delta}</div>
                </div>
              ))}
            </div>
            <div className="border border-line rounded overflow-hidden">
              <div className="bg-paper-2 grid grid-cols-[1fr_auto_auto] px-3 py-2 font-mono text-[8px] tracking-[0.14em] uppercase text-ink-400 font-medium">
                <span>CANTIERE</span><span className="px-4">AVANZ.</span><span>STATO</span>
              </div>
              {[
                ["Via Roma 42", "74%", "IN CORSO", "success"],
                ["Residenza Pineta", "42%", "IN CORSO", "success"],
                ["Biogas Caserta", "91%", "REVISIONE", "warning"],
              ].map(([name, prog, status, color], i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center px-3 py-2 text-xs border-t border-line">
                  <span>{name}</span>
                  <div className="flex items-center gap-2 px-4 min-w-[80px]">
                    <div className="w-10 h-1 bg-ink-50 rounded overflow-hidden">
                      <div className="h-full bg-tech" style={{ width: prog }} />
                    </div>
                    <span className="font-mono text-[10px]">{prog}</span>
                  </div>
                  <span className={`font-mono text-[8px] tracking-wider px-2 py-0.5 rounded ${
                    color === "success" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </Window>
      </motion.div>
    </div>
  );
}

function Window({ title, dark, children }: { title: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div className={`rounded-lg overflow-hidden border ${dark ? "bg-ink border-white/10" : "bg-white border-line"}`}
         style={{ boxShadow: "0 30px 60px -20px rgba(11,11,13,0.18), 0 18px 36px -18px rgba(11,11,13,0.12)" }}>
      <div className={`flex items-center gap-2 px-3 py-2.5 border-b ${dark ? "bg-ink-2 border-white/10" : "bg-paper-2 border-line"}`}>
        <span className="w-2 h-2 rounded-full bg-ink-100" />
        <span className="w-2 h-2 rounded-full bg-ink-100" />
        <span className="w-2 h-2 rounded-full bg-ink-100" />
        <span className={`ml-2 font-mono text-[9px] tracking-[0.12em] uppercase ${dark ? "text-ink-300" : "text-ink-400"}`}>{title}</span>
      </div>
      {children}
    </div>
  );
}
