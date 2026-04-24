export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  highlighted?: boolean;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: string;
}

export const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '€49',
    subtitle: '/mese per utente',
    features: [
      '1 suite a scelta',
      'CoreMind base',
      '5 utenti inclusi',
      'Supporto email',
      'Backup giornaliero',
      'Export dati standard',
    ],
    notIncluded: [
      'Supporto 24/7',
      'Onboarding dedicato',
      'API access',
      'SSO',
    ],
    cta: 'Inizia ora',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '€129',
    subtitle: '/mese per utente',
    badge: 'Più popolare',
    highlighted: true,
    features: [
      'Fino a 3 suite',
      'CoreMind full + voice',
      '15 utenti inclusi',
      'Supporto 24/7',
      'Onboarding dedicato',
      'API access',
      'Backup ogni 4 ore',
      'Export dati avanzato',
      'Integrazioni native',
    ],
    notIncluded: ['SSO', 'Audit log avanzato'],
    cta: 'Richiedi una demo',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Su preventivo',
    subtitle: '',
    features: [
      'Suite illimitate',
      'CoreMind con modelli privati',
      'Utenti illimitati',
      'SSO + audit log avanzato',
      'SLA 99.9%',
      'Account manager dedicato',
      'Reperibilità H24',
      'Modelli on-premise opzionali',
      'Custom integrations',
      'Training dedicato',
    ],
    cta: 'Contatta vendite',
  },
];

export const ADDONS: AddOn[] = [
  {
    id: 'coremind-voice',
    name: 'CoreMind Voice',
    description: 'Interazione vocale hands-free con CoreMind',
    price: '€19/mese per utente',
  },
  {
    id: 'sso',
    name: 'SSO Enterprise',
    description: 'Single Sign-On con SAML 2.0 / OIDC',
    price: '€49/mese per tenant',
  },
  {
    id: 'audit-log',
    name: 'Audit Log Avanzato',
    description: 'Log completo di tutte le azioni con retention 7 anni',
    price: '€29/mese per tenant',
  },
  {
    id: 'extra-storage',
    name: 'Storage Aggiuntivo',
    description: '500 GB storage aggiuntivo per documenti e allegati',
    price: '€39/mese',
  },
  {
    id: 'dedicated-hosting',
    name: 'Hosting Dedicato',
    description: 'Cluster dedicato in data center italiano',
    price: '€199/mese',
  },
];
