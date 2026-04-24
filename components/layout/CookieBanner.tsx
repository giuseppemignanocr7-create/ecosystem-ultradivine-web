'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-paper border-t border-line shadow-lg"
    >
      <div className="mx-auto max-w-site px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-700">
          Usiamo cookie tecnici e, con il tuo consenso, cookie analitici per
          migliorare l&apos;esperienza.{' '}
          <a href="/privacy" className="text-tech underline">
            Privacy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-ink-700 border border-line rounded-md hover:bg-paper-2 transition-colors"
          >
            Solo necessari
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-ink-900 rounded-md hover:bg-ink-2 transition-colors"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
