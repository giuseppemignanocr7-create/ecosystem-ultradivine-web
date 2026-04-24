"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

export function HeroParallaxStack() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const yFront = useTransform(scrollY, [0, 400], [0, -40]);
  const yMid = useTransform(scrollY, [0, 400], [0, 20]);
  const yBack = useTransform(scrollY, [0, 400], [0, 40]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!container.current || prefersReducedMotion) return;
    const rect = container.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  if (prefersReducedMotion) {
    return (
      <div className="relative h-full flex items-center justify-center">
        <div className="w-[400px] h-[280px] bg-white rounded-xl border border-line shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs font-mono text-ink-300">BuildSuite</span>
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
      </div>
    );
  }

  return (
    <div
      ref={container}
      onMouseMove={handleMouseMove}
      style={{ perspective: 2000 }}
      className="relative h-full flex items-center justify-center"
    >
      <motion.div
        style={{ y: yBack, rotateX, rotateY, rotate: -2 }}
        initial={{ opacity: 0, x: -40, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute w-[320px] h-[220px] z-10 -translate-x-16 translate-y-12"
      >
        <div className="w-full h-full bg-white rounded-xl border border-line shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-brass" />
            <span className="ml-2 text-xs font-mono text-ink-300">RetailSuite</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 bg-paper-2 rounded" />
            <div className="h-12 bg-paper-2 rounded" />
            <div className="h-12 bg-brass/10 rounded" />
            <div className="h-12 bg-brass/10 rounded" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yMid, rotateX, rotateY, rotate: 1.5 }}
        initial={{ opacity: 0, x: 40, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 1.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute w-[360px] h-[250px] z-20 translate-x-12 -translate-y-4"
      >
        <div className="w-full h-full bg-ink-2 rounded-xl border border-white/10 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-tech" />
            <span className="ml-2 text-xs font-mono text-ink-300">CoreMind</span>
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
      </motion.div>

      <motion.div
        style={{ y: yFront, rotateX, rotateY, rotate: -1 }}
        initial={{ opacity: 0, y: 40, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-[400px] h-[280px] z-30 -translate-x-4 -translate-y-16"
      >
        <div className="w-full h-full bg-white rounded-xl border border-line shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs font-mono text-ink-300">BuildSuite</span>
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
      </motion.div>
    </div>
  );
}
