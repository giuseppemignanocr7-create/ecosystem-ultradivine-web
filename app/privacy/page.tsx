import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa privacy di Ecosystem UltraDivine.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-site px-4 md:px-6 max-w-3xl">
        <h1 className="font-serif text-ink-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-ink-700 space-y-6">
          <p>
            {COMPANY.name}, con sede legale in {COMPANY.addressLegal}, P.IVA{' '}
            {COMPANY.piva} (di seguito &ldquo;Titolare&rdquo;), gestisce il
            trattamento dei dati personali in conformità al GDPR 2016/679.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8 mb-4">
            Dati raccolti
          </h2>
          <p>
            Raccogliamo nome, email, telefono, ragione sociale e messaggi
            inviati tramite i form del sito. I dati sono forniti volontariamente
            dall&apos;utente.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8 mb-4">
            Finalità
          </h2>
          <p>
            I dati sono utilizzati esclusivamente per rispondere alle richieste
            di contatto, demo e informazioni commerciali. Non cediamo dati a
            terzi.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8 mb-4">
            Conservazione
          </h2>
          <p>
            I dati sono conservati su server PostgreSQL in data center italiani
            certificati ISO 27001. Retention massima: 7 anni per finalità
            contabili e legali.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8 mb-4">
            Diritti dell&apos;interessato
          </h2>
          <p>
            Puoi esercitare i diritti di accesso, retifica, cancellazione,
            limitazione, opposizione e portabilità scrivendo a{' '}
            <a href={`mailto:${COMPANY.pec}`} className="text-tech hover:underline">
              {COMPANY.pec}
            </a>
            .
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8 mb-4">
            Cookie
          </h2>
          <p>
            Utilizziamo solo cookie tecnici necessari al funzionamento del
            sito e cookie analitici anonimizzati (se accettati). Nessun cookie di
            profilazione.
          </p>
          <p className="text-sm text-ink-500 mt-12">
            Ultimo aggiornamento: aprile 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
