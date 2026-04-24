import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

function getAnthropic() {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('Anthropic not configured');
  return new Anthropic({ apiKey: key });
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase not configured');
  return createClient(url, key);
}

const SYSTEM_PROMPT = `Sei CoreMind, l'assistente AI di Ecosystem UltraDivine, la piattaforma gestionale multi-verticale di Global Consulting S.R.L.S.

Stai parlando con un visitatore del sito web che vuole capire cosa puoi fare. Sei in modalità playground pubblico: non hai accesso a dati reali, ma devi SIMULARE risposte realistiche su dati aziendali di esempio.

Regole:
1. Rispondi SEMPRE in italiano professionale.
2. Sii concreto, tecnico, denso di contenuto reale.
3. Quando l'utente chiede qualcosa di operativo ("crea un cantiere", "genera un contratto"), simula l'azione con dati realistici e mostra il risultato come se fosse stata eseguita davvero.
4. Usa terminologia italiana dei settori (SAL, POS, HACCP, ISEE, PCT, ecc.).
5. Se chiedono cose fuori scope (non business/gestionale), riportali gentilmente al prodotto.
6. Risposte medie 150-300 parole. Sii denso, non prolisso.
7. Quando ha senso, usa tabelle markdown o liste numerate.
8. Non inventare funzioni che non esistono nel sistema.
9. Chiudi spesso con un invito naturale a provare la demo o richiedere un appuntamento.`;

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId, history } = await req.json();

    // Rate limiting basico: 10 messaggi per IP per ora
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const ipHash = crypto.createHash('sha256').update(ip).digest('hex');

    const supabase = getSupabase();
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabase
      .from('coremind_playground_logs')
      .select('*', { count: 'exact', head: true })
      .eq('ip_hash', ipHash)
      .gte('created_at', oneHourAgo);

    if (countError) {
      console.error('[coremind-playground] count error:', countError);
    }

    if ((count || 0) >= 10) {
      return NextResponse.json(
        {
          error:
            "Hai raggiunto il limite di 10 messaggi all'ora. Prenota una demo per continuare.",
          limitReached: true,
        },
        { status: 429 }
      );
    }

    const anthropicClient = getAnthropic();
    const response = await anthropicClient.messages.create({
      model: 'claude-3-5-sonnet-latest',
      max_tokens: 800,
      system: SYSTEM_PROMPT,
      messages: [
        ...(history || []).slice(-6).map((h: { role: string; content: string }) => ({
          role: h.role === 'user' ? 'user' : 'assistant',
          content: h.content,
        })),
        { role: 'user', content: message },
      ],
    });

    const textBlocks = response.content.filter(
      (b: { type: string; text?: string }): b is { type: 'text'; text: string } => b.type === 'text'
    );
    const reply = textBlocks.map((b: { text: string }) => b.text).join('\n');

    await supabase.from('coremind_playground_logs').insert({
      session_id: sessionId,
      prompt_preview: message.slice(0, 100),
      response_length: reply.length,
      tokens_used:
        (response.usage?.input_tokens || 0) +
        (response.usage?.output_tokens || 0),
      ip_hash: ipHash,
      user_agent_hash: crypto
        .createHash('sha256')
        .update(req.headers.get('user-agent') || '')
        .digest('hex'),
    });

    return NextResponse.json(
      { reply, tokensUsed: response.usage },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[coremind-playground]', message);
    return NextResponse.json(
      {
        error: 'CoreMind temporaneamente non disponibile. Riprova tra poco.',
      },
      { status: 500 }
    );
  }
}
