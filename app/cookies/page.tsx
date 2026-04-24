import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie di Ecosystem UltraDivine.',
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-site px-4 md:px-6 max-w-3xl">
        <h1 className="font-serif text-ink-900 mb-8">Cookie Policy</h1>
        <div className="space-y-6 text-ink-700">
          <p>
            Questo sito utilizza cookie per migliorare l&apos;esperienza di
            navigazione. Di seguito l&apos;elenco dei cookie utilizzati.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Cookie tecnici (necessari)
          </h2>
          <p>
            Questi cookie sono essenziali per il funzionamento del sito e non
            possono essere disattivati. Non richiedono consenso.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>cookie-consent</strong> — memorizza la preferenza sul
              consenso cookie (durata: 1 anno)
            </li>
          </ul>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Cookie analitici
          </h2>
          <p>
            Vengono utilizzati solo se accetti tutti i cookie dal banner. Sono
            anonimizzati e non tracciano singoli utenti.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Come gestire i cookie
          </h2>
          <p>
            Puoi gestire le preferenze tramite il banner cookie in fondo alla
            pagina, o tramite le impostazioni del tuo browser. Disabilitare i
            cookie tecnici potrebbe compromettere il funzionamento del sito.
          </p>
          <p className="text-sm text-ink-500 mt-12">
            Ultimo aggiornamento: aprile 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
