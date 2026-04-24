'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { COMPANY } from '@/lib/constants';
import { SUITES } from '@/content/suites';

export default function ContattiPage() {
  const [form, setForm] = useState({
    full_name: '',
    company: '',
    email: '',
    phone: '',
    suite_interest: '',
    company_size: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contacts-page' }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({
          full_name: '',
          company: '',
          email: '',
          phone: '',
          suite_interest: '',
          company_size: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="pt-32 pb-16" aria-label="Hero contatti">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h1 className="font-serif text-ink-900 max-w-2xl">
              Contattaci.
              <br />
              <em className="text-tech not-italic">
                Ti rispondiamo in meno di 2 ore.
              </em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" aria-label="Form contatti">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <Reveal>
              <form onSubmit={submit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-ink-700 mb-2">
                      Nome e cognome *
                    </label>
                    <input
                      id="full_name"
                      required
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ink-700 mb-2">
                      Azienda *
                    </label>
                    <input
                      id="company"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech"
                      placeholder="Rossi Srl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech"
                      placeholder="mario@rossi.it"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-2">
                      Telefono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech"
                      placeholder="+39 333 123 4567"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="suite_interest" className="block text-sm font-medium text-ink-700 mb-2">
                      Suite di interesse
                    </label>
                    <select
                      id="suite_interest"
                      value={form.suite_interest}
                      onChange={(e) => setForm({ ...form, suite_interest: e.target.value })}
                      className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech"
                    >
                      <option value="">Seleziona una suite</option>
                      {SUITES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="company_size" className="block text-sm font-medium text-ink-700 mb-2">
                      Dimensione azienda
                    </label>
                    <select
                      id="company_size"
                      value={form.company_size}
                      onChange={(e) => setForm({ ...form, company_size: e.target.value })}
                      className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech"
                    >
                      <option value="">Seleziona</option>
                      <option value="1-10">1–10 dipendenti</option>
                      <option value="11-50">11–50 dipendenti</option>
                      <option value="51-200">51–200 dipendenti</option>
                      <option value="200+">200+ dipendenti</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-tech resize-none"
                    placeholder="Descrivi le tue esigenze..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white bg-ink-900 rounded-lg hover:bg-ink-2 disabled:opacity-50 transition-colors"
                >
                  {status === 'submitting' ? 'Invio in corso...' : 'Invia richiesta demo'}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-success">
                    Richiesta inviata con successo. Ti contattiamo entro 2 ore.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-danger">
                    Errore nell&apos;invio. Riprova o contattaci telefonicamente.
                  </p>
                )}
              </form>
            </Reveal>

            {/* Contacts */}
            <Reveal delay={100}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink-900 uppercase tracking-wider mb-4">
                    Contatti diretti
                  </h3>
                  <ul className="space-y-4 text-base text-ink-700">
                    <li>
                      <span className="block text-sm text-ink-500">Telefono</span>
                      <a href={`tel:${COMPANY.phone}`} className="text-tech hover:underline">
                        {COMPANY.phone}
                      </a>
                    </li>
                    <li>
                      <span className="block text-sm text-ink-500">PEC</span>
                      <a href={`mailto:${COMPANY.pec}`} className="text-tech hover:underline">
                        {COMPANY.pec}
                      </a>
                    </li>
                    <li>
                      <span className="block text-sm text-ink-500">Email diretta</span>
                      <a href={`mailto:${COMPANY.email}`} className="text-tech hover:underline">
                        {COMPANY.email}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink-900 uppercase tracking-wider mb-4">
                    Sedi
                  </h3>
                  <ul className="space-y-4 text-base text-ink-700">
                    <li>
                      <span className="block text-sm text-ink-500">Sede legale</span>
                      {COMPANY.addressLegal}
                    </li>
                    <li>
                      <span className="block text-sm text-ink-500">Sede operativa</span>
                      {COMPANY.addressOperative}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink-900 uppercase tracking-wider mb-4">
                    Orari supporto
                  </h3>
                  <p className="text-base text-ink-700">
                    Lun–Ven: 09:00–19:00
                    <br />
                    Professional ed Enterprise: 24/7 via chat CoreMind
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
