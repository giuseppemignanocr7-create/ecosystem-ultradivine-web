'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SUITES } from '@/content/suites';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [suiteMenuOpen, setSuiteMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-site flex items-center justify-between h-16 px-4 md:px-6"
        aria-label="Navigazione principale"
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink-900"
          aria-label="Ecosystem UltraDivine — torna alla home"
        >
          Ecosystem <em className="text-tech">UltraDivine</em>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.label === 'Suite' ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setSuiteMenuOpen(true)}
                onMouseLeave={() => setSuiteMenuOpen(false)}
              >
                <button
                  className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                  aria-expanded={suiteMenuOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                </button>
                {suiteMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-paper border border-line rounded-lg shadow-lg p-4 grid gap-2">
                    {SUITES.slice(0, 6).map((suite) => (
                      <Link
                        key={suite.id}
                        href={`/suite/${suite.id}`}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-paper-2 transition-colors"
                      >
                        <span className="font-mono text-xs text-brass">
                          {suite.number}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-ink-900">
                            {suite.name}
                          </div>
                          <div className="text-xs text-ink-500">{suite.tag}</div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/suite"
                      className="text-center text-sm text-tech font-medium py-2 border-t border-line mt-1"
                    >
                      Vedi tutte le 13 suite
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contatti"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-ink-900 rounded-md hover:bg-ink-2 transition-colors"
          >
            Richiedi demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-ink-700 hover:bg-paper-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-b border-line px-4 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink-700 hover:text-ink-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-ink-900 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Richiedi demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
