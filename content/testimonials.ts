export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  suite: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'Con BuildSuite abbiamo ridotto del 60% il tempo dedicato ai SAL. CoreMind genera i computi in minuti, non in giorni. Il margine di ogni cantiere è visibile in tempo reale.',
    author: 'Marco Bianchi',
    role: 'Direttore Tecnico',
    company: 'Costruzioni Lombardi S.p.A.',
    suite: 'BuildSuite',
  },
  {
    id: '2',
    quote:
      "LegalMind ha trasformato il nostro studio. Non perdiamo più scadenze processuali, la parcellazione è precisa al centesimo e l'analisi documentale ci fa risparmiare ore ogni giorno.",
    author: 'Avv. Laura Rossi',
    role: 'Managing Partner',
    company: 'Rossi & Partners Studio Legale',
    suite: 'LegalMind',
  },
  {
    id: '3',
    quote:
      "FoodSuite ci ha fatto scoprire che il 30% dei nostri piatti aveva margine negativo. Ora sappiamo esattamente cosa cucinare, quando ordinare e quanto guadagnare. L'HACCP digitale è un toccasana.",
    author: 'Chef Davide Romano',
    role: 'Titolare',
    company: 'Trattoria da Davide',
    suite: 'FoodSuite',
  },
];
