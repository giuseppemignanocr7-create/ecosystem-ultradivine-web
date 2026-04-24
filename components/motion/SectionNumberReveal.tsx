"use client";
import { motion } from "motion/react";

export function SectionNumberReveal({
  number,
  label
}: { number: string; label: string }) {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-500">
          {number}
        </span>
        <span className="h-px bg-ink-500 w-[60px]" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-700">
          {label}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      className="flex items-baseline gap-4 mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-500">
        {number}
      </span>
      <motion.span
        className="h-px bg-ink-500"
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      />
      <motion.span
        className="font-mono text-xs tracking-[0.2em] uppercase text-ink-700"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
