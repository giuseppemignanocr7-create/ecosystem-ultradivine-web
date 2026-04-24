'use client';

import { useState, useRef, useEffect } from 'react';
import { SectionNumber } from '@/components/ui/SectionNumber';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { PinnedCapabilities } from '@/components/motion/PinnedCapabilities';

const capabilities = [
  { title: 'Gestione cantieri tramite voce', desc: '"Crea un SAL per il cantiere di Via Roma e invialo al committente" — CoreMind esegue.' },
  { title: 'Generazione documenti legali', desc: 'Memorie, contratti, pareri: strutturati, citati, pronti per la firma.' },
  { title: 'Query fatturato complesse', desc: '"Fatturato Q3 vs Q2 per cliente, con margine e trend" — tabella e grafico istantanei.' },
  { title: 'Analisi food cost con suggerimenti', desc: 'Calcola il costo reale di ogni piatto e suggerisce alternative più profittevoli.' },
  { title: 'Assegnazione task a personale', desc: 'Crea task, assegna, imposta scadenze, verifica completamento — tutto via chat.' },
  { title: 'Export report personalizzati', desc: 'PDF, Excel, CSV generati in tempo reale con i dati richiesti.' },
  { title: 'Alert anomalie automatici', desc: 'CoreMind sorveglia i tuoi dati e ti avvisa prima che diventi un problema.' },
  { title: 'Onboarding clienti guidato', desc: 'Check-list smart, documenti raccolti automaticamente, pratiche avviate senza intervento umano.' },
  { title: 'Revisione contratti', desc: 'Analisi semantica di clausole a rischio, confronto con standard di settore.' },
  { title: 'Pianificazione fornitori', desc: 'Ordini automatici da par stock, previsioni da trend, confronto prezzi.' },
  { title: 'Diagnostica tecnica IT', desc: 'Analisi log, identificazione bug, suggerimenti fix — integrato con TechSuite.' },
  { title: 'Comunicazione clienti automatica', desc: 'Recall, scadenze, promozioni: messaggi personalizzati via email, SMS, WhatsApp.' },
];

const securityPoints = [
  { title: 'Zero-retention contracts', desc: 'Contratti firmati con ogni provider AI: i tuoi dati non vengono mai conservati per training.' },
  { title: 'GDPR by design', desc: 'Pseudonimizzazione, data minimization, diritto all\'oblio automatizzato, DPO dedicato.' },
  { title: 'AI Act compliant', desc: 'Audit trail completo sulle decisioni AI, human oversight, risk classification.' },
  { title: 'Audit log completo', desc: 'Ogni azione di CoreMind è tracciata, firmata, reversibile. Retention 7 anni su Enterprise.' },
  { title: 'Modelli on-premise opzionali', desc: 'Enterprise: scegli modelli locali che non escono mai dai tuoi server.' },
];

const stack = ['Anthropic Claude', 'OpenAI GPT', 'Google Gemini', 'Mistral', 'Ollama local', 'PostgreSQL vector', 'pgvector RAG', 'Redis cache'];

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function CoreMindPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setError(null);
    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/coremind-playground', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId.current,
          history: messages.slice(-6),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Errore di connessione');
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply },
        ]);
      }
    } catch {
      setError('CoreMind temporaneamente non disponibile. Riprova tra poco.');
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    'Mostrami una query sul fatturato',
    'Genera un contratto NDA',
    'Pianifica un cantiere da 500k€',
    'Analizza il food cost di un menu',
  ];

  return (
    <>
      {/* Hero dark */}
      <section className="relative bg-ink pt-32 pb-24 overflow-hidden" aria-label="Hero CoreMind">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 30% 50%, rgba(45,91,255,0.15), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-site px-4 md:px-6">
          <h1 className="font-serif text-white max-w-3xl">
            CoreMind.
            <br />
            <em className="text-tech not-italic">
              L&apos;intelligenza che lavora per te.
            </em>
          </h1>
          <p className="mt-6 text-lg text-ink-300 max-w-xl">
            Il cervello di Ecosystem UltraDivine. Conversazione naturale,
            azioni cross-module, reporting avanzato, orchestrazione multi-agente.
            Scegli tu il motore — CoreMind resta identico.
          </p>
          <div className="mt-8">
            <Button href="#playground" variant="primary" className="bg-tech hover:bg-tech-2">
              Prova subito
              <span aria-hidden="true"> →</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding bg-ink-2" aria-label="Architettura">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <SectionNumber number="01" label="ARCHITETTURA" dark />
            <h2 className="font-serif text-white max-w-xl mb-12">
              Come funziona
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="px-4 py-3 bg-ink border border-white/10 rounded-lg text-white font-medium">Utente</div>
              <span className="text-ink-500">→</span>
              <div className="px-4 py-3 bg-tech/20 border border-tech/30 rounded-lg text-tech font-medium">Interfaccia</div>
              <span className="text-ink-500">→</span>
              <div className="px-4 py-3 bg-brass/20 border border-brass/30 rounded-lg text-brass font-medium">Router</div>
              <span className="text-ink-500">→</span>
              <div className="flex gap-2">
                {['Claude', 'GPT', 'Gemini', 'Local'].map((m) => (
                  <div key={m} className="px-3 py-2 bg-white/5 border border-white/10 rounded text-white/80 text-xs">{m}</div>
                ))}
              </div>
              <span className="text-ink-500">→</span>
              <div className="px-4 py-3 bg-success/20 border border-success/30 rounded-lg text-success font-medium">Tool-calling</div>
              <span className="text-ink-500">→</span>
              <div className="px-4 py-3 bg-ink border border-white/10 rounded-lg text-white font-medium">Database + Cross-module</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <PinnedCapabilities />

      {/* Playground */}
      <section id="playground" className="section-padding bg-paper" aria-label="Playground">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-ink-900 mb-4">
              Prova CoreMind adesso
            </h2>
            <p className="text-ink-700 mb-8 max-w-xl">
              Scrivi un messaggio. CoreMind risponderà in tempo reale. Limite di
              10 messaggi all&apos;ora per sessione.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-sm text-ink-500 mb-4">
                        Prova una delle domande suggerite:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {suggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => send(s)}
                            className="px-3 py-2 bg-paper-2 border border-line rounded-lg text-sm text-ink-700 hover:border-tech hover:text-tech transition-colors"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${m.role === 'user' ? 'flex-row' : 'flex-row'}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono shrink-0 ${
                          m.role === 'user'
                            ? 'bg-brass/20 text-brass'
                            : 'bg-tech/20 text-tech'
                        }`}
                      >
                        {m.role === 'user' ? 'Tu' : 'AI'}
                      </div>
                      <div
                        className={`flex-1 rounded-lg p-3 text-sm leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-paper-2 text-ink-900'
                            : 'bg-ink-2 text-white'
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-tech/20 flex items-center justify-center text-xs font-mono text-tech shrink-0">
                        AI
                      </div>
                      <div className="flex items-center gap-1 py-2">
                        <span className="w-2 h-2 bg-tech rounded-full animate-typing" />
                        <span className="w-2 h-2 bg-tech rounded-full animate-typing" style={{ animationDelay: '0.2s' }} />
                        <span className="w-2 h-2 bg-tech rounded-full animate-typing" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="text-sm text-danger bg-danger/10 rounded-lg p-3">
                      {error}
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="border-t border-line p-4 flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send(input)}
                    placeholder="Chiedi qualsiasi cosa a CoreMind..."
                    className="flex-1 bg-paper-2 border border-line rounded-lg px-4 py-2 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-tech"
                    aria-label="Messaggio per CoreMind"
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={loading || !input.trim()}
                    className="px-4 py-2 bg-ink-900 text-white text-sm font-medium rounded-lg hover:bg-ink-2 disabled:opacity-50 transition-colors"
                  >
                    Invia
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-ink" aria-label="Sicurezza">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <SectionNumber number="03" label="SICUREZZA" dark />
            <h2 className="font-serif text-white max-w-xl mb-12">
              Privacy e sicurezza by design
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPoints.map((sp, i) => (
              <Reveal key={sp.title} delay={i * 80}>
                <div className="bg-ink-2 border border-white/10 rounded-xl p-6">
                  <h3 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-2">
                    {sp.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {sp.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section-padding bg-ink-2" aria-label="Stack tecnologico">
        <div className="mx-auto max-w-site px-4 md:px-6">
          <Reveal>
            <h2 className="font-serif text-white mb-8">Stack tecnologico</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-ink border border-white/10 rounded-lg text-sm text-ink-300 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24" aria-label="Call to action">
        <div className="mx-auto max-w-site px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-white">
              Richiedi una demo con CoreMind{' '}
              <em className="text-tech not-italic">sui tuoi dati</em>
            </h2>
            <div className="mt-8">
              <Button
                href="/contatti"
                variant="primary"
                className="bg-tech hover:bg-tech-2"
              >
                Prenota ora
                <span aria-hidden="true"> →</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
