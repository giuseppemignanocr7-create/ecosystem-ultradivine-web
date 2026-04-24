import Link from 'next/link';
import { COMPANY } from '@/lib/constants';
import { SUITES } from '@/content/suites';

export function Footer() {
  return (
    <footer className="bg-ink-2 text-ink-100" role="contentinfo">
      <div className="mx-auto max-w-site px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-2xl tracking-tight text-white"
            >
              Ecosystem <em className="text-tech">UltraDivine</em>
            </Link>
            <p className="mt-4 text-sm text-ink-300 max-w-xs">
              La piattaforma AI-native multi-verticale di{' '}
              <span className="text-brass">{COMPANY.shortName}</span>. Un unico
              ecosistema. Tredici verticali di settore. Made in Italy.
            </p>
            <p className="mt-4 text-sm text-ink-300">
              <span className="text-ink-100 font-medium">Telefono:</span>{' '}
              <a
                href={`tel:${COMPANY.phone}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-ink-300">
              <span className="text-ink-100 font-medium">PEC:</span>{' '}
              <a
                href={`mailto:${COMPANY.pec}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY.pec}
              </a>
            </p>
          </div>

          {/* Suite */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
              Suite
            </h4>
            <ul className="space-y-2">
              {SUITES.slice(0, 6).map((suite) => (
                <li key={suite.id}>
                  <Link
                    href={`/suite/${suite.id}`}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {suite.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/suite"
                  className="text-sm text-tech hover:text-tech-2 transition-colors"
                >
                  Tutte le suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Piattaforma */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
              Piattaforma
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'CoreMind', href: '/coremind' },
                { label: 'Demo interattiva', href: '/demo' },
                { label: 'Integrazioni', href: '/integrazioni' },
                { label: 'Prezzi', href: '/pricing' },
                { label: 'Piattaforma tecnica', href: '/piattaforma' },
                { label: 'Supporto', href: '/supporto' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
              Azienda
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Chi siamo', href: '/azienda' },
                { label: 'Contatti', href: '/contatti' },
                { label: 'Blog', href: '/blog' },
                { label: 'Lavora con noi', href: '/contatti' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-ink-300">
                P.IVA {COMPANY.piva}
                <br />
                REA {COMPANY.rea}
                <br />
                Sede legale: {COMPANY.addressLegal}
                <br />
                Sede operativa: {COMPANY.addressOperative}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-300">
            © {new Date().getFullYear()} {COMPANY.name} — Tutti i diritti
            riservati.
          </p>
          <div className="flex gap-6 text-xs text-ink-300">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie
            </Link>
            <Link href="/termini" className="hover:text-white transition-colors">
              Termini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
