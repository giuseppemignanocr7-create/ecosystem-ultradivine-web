import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
          ERRORE 404
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink-900 mb-6">
          Pagina non trovata.
        </h1>
        <p className="text-lg text-ink-700 mb-8">
          La pagina che cerchi non esiste o è stata spostata. Torna alla home o
          esplora le suite.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-ink-900 rounded-md hover:bg-ink-2 transition-colors"
          >
            Torna alla home
          </Link>
          <Link
            href="/suite"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-ink-700 border border-line rounded-md hover:bg-paper-2 transition-colors"
          >
            Esplora le suite
          </Link>
        </div>
      </div>
    </div>
  );
}
