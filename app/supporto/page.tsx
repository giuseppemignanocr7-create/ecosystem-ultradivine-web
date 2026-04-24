import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';

export default function SupportoPage() {
  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero supporto">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
              24/7/365
            </p>
            <h1 className="font-serif text-ink-900 max-w-2xl">
              Supporto che
              <br />
              <em className="text-tech not-italic">non dorme mai.</em>
            </h1>
            <p className="mt-6 text-lg text-ink-700 max-w-xl">
              Chat CoreMind, email, telefono, account manager dedicato. Sempre.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Canali */}
      <section className="section-padding bg-paper-2/50" aria-label="Canali">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-12">Canali</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Chat CoreMind', desc: 'Risposta immediata, 24/7. Per tutti i piani.', tag: 'TUTTI' },
              { title: 'Email', desc: 'support@ecosystemultradivine.com. SLA 2h Professional, 24h Starter.', tag: 'TUTTI' },
              { title: 'Telefono', desc: `${COMPANY.phone}. Orari lavorativi per Starter, H24 Professional+.`, tag: 'PRO+' },
              { title: 'Account Manager', desc: 'Dedicato Enterprise. Reperibilità H24 con escalation.', tag: 'ENTERPRISE' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="bg-paper border border-line rounded-xl p-6">
                  <span className="inline-block px-2 py-0.5 bg-paper-2 rounded text-[10px] font-mono uppercase tracking-wider text-ink-500 mb-3">
                    {c.tag}
                  </span>
                  <h3 className="font-sans text-base font-semibold text-ink-900">{c.title}</h3>
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
              SLA per piano
            </h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-paper-2 border-b border-line">
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Piano</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Risposta chat</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Risposta email</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Telefono</th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase text-ink-500">Account manager</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { plan: 'Starter', chat: '24h', email: '24h', phone: '—', am: '—' },
                  { plan: 'Professional', chat: 'Istantanea', email: '2h', phone: 'H24', am: '—' },
                  { plan: 'Enterprise', chat: 'Istantanea', email: '30min', phone: 'H24', am: 'Dedicato' },
                ].map((row) => (
                  <tr key={row.plan} className="border-b border-line hover:bg-paper-2/30">
                    <td className="px-4 py-3 font-medium text-ink-900">{row.plan}</td>
                    <td className="px-4 py-3 text-ink-700">{row.chat}</td>
                    <td className="px-4 py-3 text-ink-700">{row.email}</td>
                    <td className="px-4 py-3 text-ink-700">{row.phone}</td>
                    <td className="px-4 py-3 text-ink-700">{row.am}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="section-padding bg-paper-2/50" aria-label="Status">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 max-w-xl mb-8">
              Status page
            </h2>
            <div className="bg-paper border border-line rounded-xl p-6 flex items-center justify-between max-w-lg">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-success animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-ink-900">Tutti i sistemi operativi</span>
              </div>
              <span className="text-sm text-ink-500">Uptime 30gg: 99.97%</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24" aria-label="Call to action">
        <div className="mx-auto max-w-site px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-white">
              Serve aiuto? Siamo qui.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contatti" variant="primary" className="bg-tech hover:bg-tech-2">
                Apri un ticket
              </Button>
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-ink-300 hover:text-white transition-colors text-sm"
              >
                {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
