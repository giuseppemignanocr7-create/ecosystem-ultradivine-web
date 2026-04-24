export const COMPANY = {
  name: 'Global Consulting S.R.L.S.',
  shortName: 'Global Consulting',
  piva: '04910300617',
  rea: 'CE-365391',
  pec: 'globaling@pec.it',
  email: 'giuseppe.mignano@pec.it',
  phone: '+39 327 160 4592',
  addressLegal: 'Sessa Aurunca (CE)',
  addressOperative: 'Santi Cosma e Damiano (LT)',
  founded: 2017,
  projectsValue: 50_000_000,
  plantsCount: 37,
  yearsExperience: 7,
} as const;

export const SITE = {
  name: 'Ecosystem UltraDivine',
  url: 'https://ecosystemultradivine.com',
  tagline: 'La piattaforma AI-native multi-verticale',
} as const;

export const NAV_LINKS = [
  { label: 'Piattaforma', href: '/piattaforma' },
  { label: 'Suite', href: '/suite' },
  { label: 'CoreMind', href: '/coremind' },
  { label: 'Demo', href: '/demo' },
  { label: 'Prezzi', href: '/pricing' },
  { label: 'Azienda', href: '/azienda' },
  { label: 'Contatti', href: '/contatti' },
] as const;
