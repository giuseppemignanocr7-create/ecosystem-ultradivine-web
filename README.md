# Ecosystem UltraDivine

Sito web ufficiale di Ecosystem UltraDivine — la piattaforma AI-native multi-verticale di Global Consulting S.R.L.S.

## Stack

- Next.js 14 (App Router)
- TypeScript 5.4
- TailwindCSS 3.4
- Framer Motion 11
- Supabase
- Anthropic Claude (CoreMind playground)

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Variabili d'ambiente

Copia `.env.local.example` in `.env.local` e valorizza le chiavi:

- `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` — database
- `ANTHROPIC_API_KEY` — playground CoreMind
- `RESEND_API_KEY` — email transazionali

## Deploy

```bash
npm run build
```

Deploy ottimizzato per Vercel.

## Licenza

© Global Consulting S.R.L.S. — Tutti i diritti riservati.
