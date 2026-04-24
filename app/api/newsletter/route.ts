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
    const { email, source } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 });
    }

    const supabase = getSupabase();
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: email.toLowerCase().trim(), source: source || 'website', confirmed: false })
      .select()
      .single();

    if (error?.code === '23505') {
      return NextResponse.json(
        { success: true, message: 'Email già iscritta' },
        { status: 200 }
      );
    }

    if (error) throw error;

    return NextResponse.json(
      { success: true, message: 'Iscrizione ricevuta. Controlla la email per confermare.' },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Errore server';
    console.error('[newsletter]', message);
    return NextResponse.json({ error: 'Errore server. Riprova.' }, { status: 500 });
  }
}
