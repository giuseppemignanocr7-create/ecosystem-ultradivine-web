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
    const body = await req.json();
    const {
      full_name,
      company,
      email,
      phone,
      suite_interest,
      company_size,
      message,
      source,
    } = body;

    if (!full_name || !company || !email) {
      return NextResponse.json(
        { error: 'Nome, azienda e email sono obbligatori' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('demo_requests')
      .insert({
        full_name,
        company,
        email,
        phone: phone || null,
        suite_interest: suite_interest || null,
        company_size: company_size || null,
        message: message || null,
        source: source || 'website',
        status: 'new',
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Errore server';
    console.error('[demo-request]', message);
    return NextResponse.json({ error: 'Errore server. Riprova.' }, { status: 500 });
  }
}
