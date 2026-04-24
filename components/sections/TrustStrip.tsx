'use client';

import { Reveal } from '@/components/ui/Reveal';
import { MetricCountUp } from '@/components/motion/MetricCountUp';

const stats = [
  { value: 50, suffix: 'M+', prefix: '€', label: 'VALORE GESTITO', sub: 'IN PROGETTI' },
  { value: 13, suffix: '', prefix: '', label: 'VERTICALI', sub: 'ATTIVI' },
  { value: 393, suffix: '', prefix: '', label: 'TABELLE DB', sub: 'PRODUTTIVE' },
  { value: 100, suffix: '%', prefix: '', label: 'AI-NATIVE', sub: 'BY DESIGN' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper-2/50" aria-label="Metriche">
      <Reveal>
        <div className="mx-auto max-w-site px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center md:text-left relative"
              >
                <div className="font-serif text-4xl md:text-5xl text-ink-900 tracking-tight">
                  <MetricCountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={1.2}
                  />
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-brass">
                  {stat.label}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 mt-1">
                  {stat.sub}
                </div>
                {/* Separator */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-brass/30" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
