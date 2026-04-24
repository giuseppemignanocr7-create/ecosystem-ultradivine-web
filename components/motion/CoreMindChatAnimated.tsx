"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const SCRIPT = [
  {
    role: "user",
    time: "14:32:11",
    author: "Giuseppe · Global Consulting",
    text: "Crea l'ordine fornitore per i materiali mancanti nel cantiere di Via Roma 42 e avvisa il capocantiere."
  },
  {
    role: "assistant",
    time: "14:32:14",
    author: "CoreMind",
    text: "Fatto. Ho incrociato il computo metrico con il magazzino: mancano 40 sacchi di cemento R32.5, 12 barre Ø16, 3 fusti di additivo. Ordine generato verso Edilizia Marra per €2.847. Notifica inviata a Carmine. Budget residuo: €12.180.",
    actions: ["Query magazzino", "Diff computo", "Ordine #4821", "Notifica inviata", "Budget aggiornato"]
  }
];

export function CoreMindChatAnimated() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [stage, setStage] = useState(0); // 0=niente, 1=user msg, 2=typing, 3=ai msg start, 4=actions

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      if (prefersReducedMotion) setStage(4); // Show all content immediately
      return;
    }
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1200);
    const t3 = setTimeout(() => setStage(3), 2000);
    const t4 = setTimeout(() => setStage(4), 6000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [inView, prefersReducedMotion]);

  return (
    <div ref={ref} className="coremind-chat">
      {stage >= 1 && (
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="msg-user flex gap-3 mb-4"
        >
          <div className="w-8 h-8 rounded-full bg-brass/20 flex items-center justify-center text-xs font-mono text-brass shrink-0">
            G
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xs text-ink-300">{SCRIPT[0].author}</span>
              <span className="text-[10px] text-ink-500">{SCRIPT[0].time}</span>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {SCRIPT[0].text}
            </p>
          </div>
        </motion.div>
      )}

      {stage === 2 && !prefersReducedMotion && <TypingIndicator />}

      {stage >= 3 && (
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="msg-ai flex gap-3 mb-4"
        >
          <div className="w-8 h-8 rounded-full bg-tech/20 flex items-center justify-center text-xs font-mono text-tech shrink-0">
            AI
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xs text-tech">{SCRIPT[1].author}</span>
              <span className="text-[10px] text-ink-500">{SCRIPT[1].time}</span>
            </div>
            <div className="text-sm text-white/90 leading-relaxed">
              {prefersReducedMotion ? SCRIPT[1].text : <TypewriterText text={SCRIPT[1].text} speed={40} />}
            </div>
            {stage >= 4 && (
              <motion.div className="actions flex flex-wrap gap-2 mt-3" initial={prefersReducedMotion ? {} : "hidden"} animate={prefersReducedMotion ? {} : "visible"} variants={prefersReducedMotion ? {} : { visible: { transition: { staggerChildren: 0.08 } } }}>
                {SCRIPT[1].actions?.map((a, i) => (
                  <motion.span
                    key={i}
                    variants={prefersReducedMotion ? {} : { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="action-chip inline-block px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-ink-300 border border-white/10"
                  >
                    ✓ {a}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function TypewriterText({ text, speed = 40 }: { text: string; speed?: number }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= text.length) { clearInterval(interval); return; }
      setShown(text.slice(0, ++i));
    }, 1000 / speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{shown}</span>;
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-tech/20 flex items-center justify-center text-xs font-mono text-tech shrink-0">
        AI
      </div>
      <div className="flex gap-1 py-2">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-tech"
            animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}
