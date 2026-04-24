'use client';

import { useState } from 'react';
import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { FAQS } from '@/content/faq';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="section-padding" aria-label="Domande frequenti">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <Reveal>
          <SectionNumber number="06" label="DOMANDE FREQUENTI" />
          <h2 className="font-serif text-ink-900 max-w-xl">
            Tutto quello che devi sapere.
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-4">
          {FAQS.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <div className="border border-line rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-paper-2/50 transition-colors"
                  aria-expanded={open === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-sans text-base font-medium text-ink-900 pr-4">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      'shrink-0 text-ink-500 transition-transform duration-300',
                      open === item.id ? 'rotate-45' : ''
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-out-expo',
                    open === item.id ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-5 pb-5 text-sm text-ink-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
