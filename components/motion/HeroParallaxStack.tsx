"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

export function HeroParallaxStack() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Parallax dallo scroll
  const yFront = useTransform(scrollY, [0, 800], [0, -120]);
  const yMid = useTransform(scrollY, [0, 800], [0, 60]);
  const yBack = useTransform(scrollY, [0, 800], [0, 160]);

  // Parallax dal mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!container.current || prefersReducedMotion) return;
    const rect = container.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  if (prefersReducedMotion) {
    return (
      <div className="relative h-[720px]">
        <div className="absolute left-20 top-10 w-[840px] h-[540px] z-30">
          {/* BuildSuite dashboard window */}
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
        </div>
      </div>
    );
  }

  return (
    <div
      ref={container}
      onMouseMove={handleMouseMove}
      style={{ perspective: 2400 }}
      className="relative h-[720px]"
    >
      <motion.div
        style={{ y: yBack, rotateX, rotateY, rotate: -3 }}
        initial={{ opacity: 0, x: -60, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute left-5 bottom-5 w-[520px] h-[360px] z-10"
      >
        {/* RetailSuite POS window */}
        <div className="w-full h-full bg-white rounded-xl border border-line shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-brass" />
            <span className="ml-2 text-xs font-mono text-ink-300">RetailSuite</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 bg-paper-2 rounded" />
            <div className="h-16 bg-paper-2 rounded" />
            <div className="h-16 bg-brass/10 rounded" />
            <div className="h-16 bg-brass/10 rounded" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yMid, rotateX, rotateY, rotate: 2.5 }}
        initial={{ opacity: 0, x: 60, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 2.5 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute right-5 top-[180px] w-[640px] h-[440px] z-20"
      >
        {/* CoreMind chat window */}
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
        style={{ y: yFront, rotateX, rotateY, rotate: -1.5 }}
        initial={{ opacity: 0, y: 80, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-20 top-10 w-[840px] h-[540px] z-30"
      >
        {/* BuildSuite dashboard window */}
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
