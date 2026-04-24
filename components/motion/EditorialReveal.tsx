"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface EditorialRevealProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}

export function EditorialReveal({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0
}: EditorialRevealProps) {
  // Converte il testo in array di parole (conserva em, strong)
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <Tag className={className} aria-label={text}>{children}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ staggerChildren: 0.04, delayChildren: delay }}
        aria-hidden
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
