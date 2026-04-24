import { MetadataRoute } from 'next';
import { SUITES } from '@/content/suites';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ecosystemultradivine.com';

  const staticPages = [
    '',
    'coremind',
    'demo',
    'suite',
    'integrazioni',
    'pricing',
    'piattaforma',
    'supporto',
    'azienda',
    'contatti',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}/${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...SUITES.map((suite) => ({
      url: `${base}/suite/${suite.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
