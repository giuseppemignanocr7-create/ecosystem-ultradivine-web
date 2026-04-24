import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase not configured');
  return createClient(url, key);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, subject, message } = await req.json();

    if (!name || !email || !message || !topic) {
      return NextResponse.json(
        { error: 'Nome, email, argomento e messaggio sono obbligatori' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('contact_messages')
      .insert({ name, email, topic, subject: subject || null, message, status: 'new' })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Errore server';
    console.error('[contact]', message);
    return NextResponse.json({ error: 'Errore server. Riprova.' }, { status: 500 });
  }
}
