import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export default function PiattaformaPage() {
  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero piattaforma">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h1 className="font-serif text-ink-900 max-w-2xl">
              Architettura.
              <br />
              <em className="text-tech not-italic">Sicurezza. Compliance.</em>
            </h1>
            <p className="mt-6 text-lg text-ink-700 max-w-xl">
              Tecnologie moderne, hosting italiano, conformità normativa
              completa. Costruito per scalare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="section-padding bg-paper-2/50" aria-label="Stack">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Stack tecnologico
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Next.js 14 App Router',
              'React 18',
              'TypeScript 5.4',
              'TailwindCSS 3.4',
              'PostgreSQL 15',
              'pgvector (RAG)',
              'Redis 7',
              'Framer Motion',
              'Kubernetes',
              'Docker',
              'Nginx',
              'CI/CD GitHub Actions',
            ].map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <div className="bg-paper border border-line rounded-lg p-4 text-sm font-mono text-ink-700 text-center">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding" aria-label="Sicurezza">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Sicurezza
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: 'Crittografia AES-256', desc: 'Dati a riposo cifrati con AES-256. Chiavi gestite in HSM.' },
              { title: 'TLS 1.3', desc: 'Tutte le comunicazioni in transito con TLS 1.3 e certificate pinning.' },
              { title: 'ISO 27001', desc: 'Data center certificati ISO 27001, ISO 22301, Tier IV.' },
              { title: 'Penetration testing', desc: 'Test di penetrazione trimestrali da terze parti indipendenti.' },
              { title: 'Backup ogni 4 ore', desc: 'Backup incrementali ogni 4 ore, replica geografica, retention 30 giorni.' },
              { title: 'SOC 2 Type II track', desc: 'In corso di certificazione SOC 2 Type II.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="border-l-2 border-tech pl-6 py-2">
                  <h3 className="font-sans text-base font-semibold text-ink-900">{s.title}</h3>
                  <p className="text-sm text-ink-600 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-paper-2/50" aria-label="Compliance">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              Compliance
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'GDPR', desc: 'By design: data minimization, pseudonimizzazione, diritto all\'oblio, DPO dedicato.' },
              { title: 'AI Act', desc: 'Ready: audit trail, human oversight, risk classification, trasparenza.' },
              { title: 'HACCP', desc: 'Pronti per tracciabilità alimentare, temperature IoT, registri digitali.' },
              { title: 'CEI 64-8', desc: 'Conforme per sicurezza elettrica nei cantieri (BuildSuite).' },
              { title: 'Codice deontologico forense', desc: 'Conforme per gestione dati sensibili studi legali (LegalMind).' },
              { title: 'Data residency Italia', desc: 'Tutti i dati dei clienti italiani restano in Italia.' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-6">
                  <h3 className="font-sans text-sm font-semibold text-ink-900 uppercase tracking-wider">
                    {c.title}
                  </h3>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="section-padding" aria-label="SLA">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">
              SLA garantiti
            </h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-paper-2 border-b border-line">
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Tier</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Uptime</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Risposta supporto</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Reperibilità</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: 'Starter', uptime: '99.5%', response: 'Email: 24h', rep: 'Orari lavorativi' },
                  { tier: 'Professional', uptime: '99.9%', response: 'Chat: istantanea, Email: 2h', rep: '24/7 chat + telefono H24' },
                  { tier: 'Enterprise', uptime: '99.95%', response: 'Account manager: 15min', rep: 'H24 con escalation' },
                ].map((row) => (
                  <tr key={row.tier} className="border-b border-line hover:bg-paper-2/30">
                    <td className="px-4 py-3 font-medium text-ink-900">{row.tier}</td>
                    <td className="px-4 py-3 text-ink-700">{row.uptime}</td>
                    <td className="px-4 py-3 text-ink-700">{row.response}</td>
                    <td className="px-4 py-3 text-ink-700">{row.rep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24" aria-label="Call to action">
        <div className="mx-auto max-w-site px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-white">
              Vuoi la documentazione tecnica completa?
            </h2>
            <div className="mt-8">
              <Button href="/contatti" variant="primary" className="bg-tech hover:bg-tech-2">
                Contatta l&apos;engineering team
                <span aria-hidden="true"> →</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
