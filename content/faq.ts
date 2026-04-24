export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'modular-start',
    question: 'Posso iniziare con una sola suite e aggiungerne altre dopo?',
    answer:
      "Sì. L'architettura modulare ti permette di attivare una suite alla volta. I dati sono subito disponibili quando ne aggiungi un'altra — non serve migrazione.",
  },
  {
    id: 'support-247',
    question: 'Come funziona il supporto 24/7?',
    answer:
      'I piani Professional ed Enterprise includono supporto tramite chat CoreMind (risposta immediata), email (SLA 2h) e telefono diretto negli orari lavorativi. Per Enterprise è incluso un account manager dedicato con reperibilità H24.',
  },
  {
    id: 'data-ownership',
    question: 'I miei dati dove stanno e di chi sono?',
    answer:
      'I tuoi dati sono tuoi, sempre. Hosting su cluster PostgreSQL dedicati in data center italiani (certificazione ISO 27001, ISO 22301, Tier IV). Export completo in formato standard disponibile in qualsiasi momento, nessun lock-in.',
  },
  {
    id: 'coremind-privacy',
    question: 'CoreMind manda i miei dati a OpenAI o Anthropic?',
    answer:
      'Solo se tu lo scegli. Il piano Professional usa modelli commerciali con contratti zero-retention firmati. Il piano Enterprise può usare modelli on-premise o privati che non escono mai dai tuoi server.',
  },
  {
    id: 'time-to-value',
    question: 'Quanto tempo serve per essere operativi?',
    answer:
      'Mediamente 2–4 settimane. La prima settimana è diagnosi, le successive 1–3 sono migrazione dati e formazione. Dal giorno zero hai una piattaforma funzionante con dati reali.',
  },
  {
    id: 'legacy-compat',
    question: 'Funziona con il mio gestionale attuale?',
    answer:
      'Sì, quasi sempre. Abbiamo connettori nativi per 200+ sistemi e un middleware per sistemi proprietari o legacy. Nella fase di diagnosi verifichiamo compatibilità e tempi.',
  },
  {
    id: 'compliance',
    question: 'È conforme a GDPR, AI Act e normative di settore?',
    answer:
      'Sì, by design. Siamo GDPR-compliant, AI Act ready (audit trail completo sulle decisioni AI), pronti per HACCP (FoodSuite), CEI 64-8 (BuildSuite), codice deontologico forense (LegalMind).',
  },
  {
    id: 'cancellation',
    question: 'Posso cancellarmi quando voglio?',
    answer:
      'Sì. Contratti mensili senza penali. Esportazione dati completa in formato standard al momento della disdetta. Zero trattenute.',
  },
];
