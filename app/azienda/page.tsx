import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Azienda',
  description:
    'Global Consulting S.R.L.S. — ingegneria di precisione, software di precisione. Track record, team, valori.',
};

export default function AziendaPage() {
  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero azienda">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
              {COMPANY.shortName.toUpperCase()}
            </p>
            <h1 className="font-serif text-ink-900 max-w-2xl">
              Ingegneria di precisione.
              <br />
              <em className="text-tech not-italic">Software di precisione.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-paper-2/50" aria-label="Missione">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-8">Missione</h2>
            <p className="text-lg text-ink-700 max-w-2xl leading-relaxed">
              Costruiamo software che funziona esattamente come promesso. Nessun
              marketing vuoto, nessuna funzione che non esiste, nessuna scadenza
              che slitta. Ingegneria pura: analisi, progettazione,
              implementazione, collaudo. Ogni linea di codice è una promessa
              mantenuta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding" aria-label="Track record">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Track record
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: `€${(COMPANY.projectsValue / 1_000_000).toFixed(0)}M+`, label: 'Valore gestito' },
              { value: `${COMPANY.plantsCount}`, label: 'Impianti realizzati' },
              { value: `${COMPANY.yearsExperience}+`, label: 'Anni di esperienza' },
              { value: '13', label: 'Verticali attivi' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <div className="font-serif text-4xl text-ink-900">{stat.value}</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-500">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-paper-2/50" aria-label="Team">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">Team</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Salvatore Brancaccio', role: 'Amministratore Unico', desc: 'Visione strategica, ingegneria di processo, governance aziendale.' },
              { name: 'Giuseppe Mignano', role: 'CTO', desc: 'Architettura software, AI/ML, infrastrutture scalabili.' },
              { name: 'Danilo Mastrocola', role: 'Chief Software Architect', desc: 'Design pattern, quality gates, mentoring tecnico.' },
            ].map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="bg-paper border border-line rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-brass/20 flex items-center justify-center text-brass font-serif text-xl mb-4">
                    {member.name[0]}
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-ink-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-tech font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-ink-600 mt-3 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Valori">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">Valori</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {[
              { title: 'Ingegneria pura', desc: 'Misuriamo il successo in funzionalità funzionanti, non in slide presentate.' },
              { title: 'Trasparenza totale', desc: 'Prezzi chiari, contratti mensili, dati esportabili, nessun lock-in.' },
              { title: 'AI etica', desc: 'Audit trail completo, human oversight, zero-retention contracts con ogni provider.' },
              { title: 'Made in Italy', desc: 'Hosting in data center italiani, team italiano, normativa italiana.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="border-l-2 border-brass pl-6 py-2">
                  <h3 className="font-sans text-base font-semibold text-ink-900 uppercase tracking-wider">
                    {v.title}
                  </h3>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-paper-2/50" aria-label="Dati societari">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-8">
              Dati societari
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-base text-ink-700">
              <div>
                <p className="text-sm text-ink-500 mb-1">Ragione sociale</p>
                <p className="font-medium text-ink-900">{COMPANY.name}</p>
              </div>
              <div>
                <p className="text-sm text-ink-500 mb-1">P.IVA</p>
                <p className="font-medium text-ink-900">{COMPANY.piva}</p>
              </div>
              <div>
                <p className="text-sm text-ink-500 mb-1">REA</p>
                <p className="font-medium text-ink-900">{COMPANY.rea}</p>
              </div>
              <div>
                <p className="text-sm text-ink-500 mb-1">PEC</p>
                <p className="font-medium text-ink-900">{COMPANY.pec}</p>
              </div>
              <div>
                <p className="text-sm text-ink-500 mb-1">Sede legale</p>
                <p className="font-medium text-ink-900">{COMPANY.addressLegal}</p>
              </div>
              <div>
                <p className="text-sm text-ink-500 mb-1">Sede operativa</p>
                <p className="font-medium text-ink-900">{COMPANY.addressOperative}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
