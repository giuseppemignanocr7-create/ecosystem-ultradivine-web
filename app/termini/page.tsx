import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Termini e condizioni',
  description: 'Termini di utilizzo di Ecosystem UltraDivine.',
};

export default function TerminiPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-site px-4 md:px-6 max-w-3xl">
        <h1 className="font-serif text-ink-900 mb-8">Termini e condizioni</h1>
        <div className="space-y-6 text-ink-700">
          <p>
            L&apos;utilizzo del sito ecosystemultradivine.com implica
            l&apos;accettazione dei seguenti termini.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Proprietà intellettuale
          </h2>
          <p>
            Tutti i contenuti del sito (testi, immagini, codice, marchi) sono
            proprietà di {COMPANY.name} e sono protetti dalle leggi sul
            diritto d&apos;autore. È vietata la riproduzione senza autorizzazione
            scritta.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Limitazione di responsabilità
          </h2>
          <p>
            Il sito e i suoi contenuti sono forniti &ldquo;così come sono&rdquo;.
            Non garantiamo che il sito sia sempre disponibile o privo di errori.
            Non siamo responsabili per danni derivanti dall&apos;uso o
            dall&apos;impossibilità di uso del sito.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Link esterni
          </h2>
          <p>
            Il sito può contenere link a siti terzi. Non siamo responsabili dei
            contenuti o delle pratiche privacy di tali siti.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Modifiche
          </h2>
          <p>
            Ci riserviamo il diritto di modificare i termini in qualsiasi
            momento. Le modifiche sono efficaci dalla data di pubblicazione.
          </p>
          <h2 className="font-sans text-lg font-semibold text-ink-900 mt-8">
            Legge applicabile
          </h2>
          <p>
            I termini sono regolati dalla legge italiana. Per qualsiasi
            controversia è competente il foro di Caserta.
          </p>
          <p className="text-sm text-ink-500 mt-12">
            Ultimo aggiornamento: aprile 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
