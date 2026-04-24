'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

const DEMOS = [
  {
    id: 'buildsuite',
    name: 'BuildSuite',
    tag: 'EDILIZIA',
    desc: 'Cantieri, SAL, computi, sicurezza. Demo con 3 cantieri attivi, materiali e ordini.',
    color: 'bg-brass/10 border-brass/30',
  },
  {
    id: 'legalmind',
    name: 'LegalMind',
    tag: 'STUDI LEGALI',
    desc: 'Fascicoli, scadenzario PCT, parcellazione. Demo con 5 fascicoli, 2 scadenze imminenti.',
    color: 'bg-tech/10 border-tech/30',
  },
  {
    id: 'foodsuite',
    name: 'FoodSuite',
    tag: 'RISTORAZIONE',
    desc: 'Menu, ordini, HACCP, food cost. Demo con menu 24 piatti, 4 fornitori, analytics.',
    color: 'bg-success/10 border-success/30',
  },
  {
    id: 'retailsuite',
    name: 'RetailSuite',
    tag: 'RETAIL',
    desc: 'POS, magazzino, e-commerce, CRM. Demo con 2 store, 150 SKU, ordini online.',
    color: 'bg-warning/10 border-warning/30',
  },
];

interface DemoItem {
  id: string;
  name: string;
  status: string;
  date: string;
  value: string;
}

const buildData: DemoItem[] = [
  { id: 'C-2024-01', name: 'Cantiere Via Roma 45', status: 'In corso', date: '2024-03-15', value: '€450.000' },
  { id: 'C-2024-02', name: 'Ristrutturazione Piazza Dante', status: 'In corso', date: '2024-05-20', value: '€180.000' },
  { id: 'C-2024-03', name: 'Nuovo edificio Via Napoli', status: 'Appalto', date: '2024-08-01', value: '€1.200.000' },
];

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [items, setItems] = useState<DemoItem[]>(buildData);
  const [newName, setNewName] = useState('');

  const startDemo = (id: string) => {
    setActiveDemo(id);
    if (id === 'buildsuite') setItems(buildData);
  };

  const addItem = () => {
    if (!newName.trim()) return;
    const next = [
      ...items,
      {
        id: `C-2024-${String(items.length + 1).padStart(2, '0')}`,
        name: newName,
        status: 'Nuovo',
        date: new Date().toISOString().slice(0, 10),
        value: '€0',
      },
    ];
    setItems(next);
    setNewName('');
  };

  if (!activeDemo) {
    return (
      <>
        <section className="pt-32 pb-16" aria-label="Hero demo">
          <div className="mx-auto max-w-site px-4 md:px-6 text-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-brass mb-4">
                SANDBOX INTERATTIVA
              </p>
              <h1 className="font-serif text-ink-900 max-w-2xl mx-auto">
                Quattro suite.
                <br />
                <em className="text-tech not-italic">
                  Dati finti. Funzioni reali. Provale.
                </em>
              </h1>
              <p className="mt-6 text-lg text-ink-700 max-w-xl mx-auto">
                Nessuna registrazione. Nessun download. Clicca una suite e prova
                le funzioni reali con dati di esempio.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-24" aria-label="Selettore suite">
          <div className="mx-auto max-w-site px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {DEMOS.map((demo, i) => (
                <Reveal key={demo.id} delay={i * 100}>
                  <button
                    onClick={() => startDemo(demo.id)}
                    className={`w-full text-left p-8 rounded-xl border ${demo.color} hover:shadow-md transition-all duration-300`}
                  >
                    <span className="inline-block px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-ink-500 bg-white/60 mb-4">
                      {demo.tag}
                    </span>
                    <h2 className="font-serif text-2xl text-ink-900">
                      {demo.name}
                    </h2>
                    <p className="mt-2 text-base text-ink-700">{demo.desc}</p>
                    <span className="mt-6 inline-block text-sm font-medium text-tech">
                      Avvia demo →
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="pt-24 pb-16 min-h-screen" aria-label="Demo attiva">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-brass uppercase tracking-wider">
              DEMO
            </span>
            <h1 className="font-serif text-2xl text-ink-900 mt-1">
              {DEMOS.find((d) => d.id === activeDemo)?.name}
            </h1>
          </div>
          <button
            onClick={() => setActiveDemo(null)}
            className="px-4 py-2 text-sm font-medium text-ink-700 border border-line rounded-lg hover:bg-paper-2 transition-colors"
          >
            Esci dalla demo
          </button>
        </div>

        {/* Sandbox */}
        <div className="bg-white border border-line rounded-xl overflow-hidden">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 p-4 border-b border-line bg-paper-2/50">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
              placeholder="Nome nuovo cantiere..."
              className="flex-1 min-w-[200px] bg-white border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-tech"
            />
            <button
              onClick={addItem}
              className="px-4 py-2 text-sm font-medium text-white bg-ink-900 rounded-lg hover:bg-ink-2 transition-colors"
            >
              Aggiungi
            </button>
            <button
              onClick={() => setItems(buildData)}
              className="px-4 py-2 text-sm font-medium text-ink-700 border border-line rounded-lg hover:bg-paper-2 transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-paper-2/30">
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-500">
                    ID
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-500">
                    Nome
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-500">
                    Stato
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-500">
                    Data
                  </th>
                  <th className="text-right px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-500">
                    Valore
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-line hover:bg-paper-2/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-ink-500">
                      {item.id}
                    </td>
                    <td className="px-4 py-3 text-ink-900 font-medium">
                      {item.name}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          item.status === 'In corso'
                            ? 'bg-success/10 text-success'
                            : item.status === 'Nuovo'
                            ? 'bg-tech/10 text-tech'
                            : 'bg-warning/10 text-warning'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-ink-700">{item.date}</td>
                    <td className="px-4 py-3 text-right font-medium text-ink-900">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 inset-x-0 bg-paper border-t border-line p-4 z-40">
          <div className="mx-auto max-w-site flex items-center justify-between gap-4">
            <p className="text-sm text-ink-700 hidden sm:block">
              Ti è piaciuta la demo? Provala con i tuoi dati reali.
            </p>
            <Button href="/contatti" variant="primary" className="w-full sm:w-auto justify-center">
              Prenota una demo sui tuoi dati →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
