"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const capabilities = [
  { title: "Conversazione naturale", desc: "Parla in italiano, zero comandi da imparare" },
  { title: "CRUD cross-module", desc: "Crea, leggi, aggiorna, cancella su qualsiasi entità" },
  { title: "Query complesse", desc: "Confronti, filtri, aggregazioni con linguaggio naturale" },
  { title: "Reporting avanzato", desc: "Grafici, tabelle, export PDF/Excel in tempo reale" },
  { title: "Orchestrazione multi-agente", desc: "Coordina catene di azioni tra più moduli" },
  { title: "Audit trail completo", desc: "Ogni azione è tracciata e reversibile" },
  { title: "Provider-agnostic", desc: "Claude, GPT, Gemini o modelli locali" },
  { title: "Sicurezza enterprise", desc: "RBAC, encryption, compliance" },
  { title: "Integrazioni native", desc: "ERP, CRM, e-commerce, pagamenti" },
  { title: "Self-hosting option", desc: "Deploy on-prem o su tua infrastruttura" },
  { title: "API programmatica", desc: "Automazioni, webhooks, SDK" },
  { title: "SLA garantito", desc: "99.9% uptime, supporto 24/7" }
];

export function PinnedCapabilities() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  if (prefersReducedMotion) {
    return (
      <section className="section-padding bg-ink-2" aria-label="Capabilities">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-ink border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-base font-semibold text-white uppercase tracking-wider mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={container} className="section-padding bg-ink-2 relative" aria-label="Capabilities">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              style={{ y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="bg-ink border border-white/10 rounded-lg p-6 hover:border-tech/50 transition-colors"
            >
              <h3 className="font-sans text-base font-semibold text-white uppercase tracking-wider mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
