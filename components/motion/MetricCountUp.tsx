"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

interface MetricCountUpProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export function MetricCountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.2
}: MetricCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(value);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v)
    });
    return () => controls.stop();
  }, [inView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString("it-IT", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      })}
      {prefersReducedMotion ? (
        <span>{suffix}</span>
      ) : (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: duration * 0.7 }}
          style={{ display: "inline-block" }}
        >
          {suffix}
        </motion.span>
      )}
    </span>
  );
}
