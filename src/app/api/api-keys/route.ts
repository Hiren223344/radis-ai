import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import crypto from 'crypto'

function generateApiKey() {
  return `sk_${crypto.randomBytes(32).toString('hex')}`
}

async function handler(req: Request) {
  const method = req.method;

  if (method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      },
    });
  }

  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()

  if (method === 'GET') {
    const { data, error } = await supabase
      .from('api_keys')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error && error.code !== 'PGRST116') {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ apiKey: data || null })
  }

  if (method === 'POST') {
    const { data: existing } = await supabase
      .from('api_keys')
      .select('id')
      .eq('user_id', userId)
      .single()

    if (existing) {
      return NextResponse.json({ error: 'API key already exists. You can only have one API key.' }, { status: 400 })
    }

    const apiKey = generateApiKey()

    const { data, error } = await supabase
      .from('api_keys')
      .insert({
        user_id: userId,
        api_key: apiKey,
        name: 'Default API Key'
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ apiKey: data })
  }

  if (method === 'DELETE') {
    const { error } = await supabase
      .from('api_keys')
      .delete()
      .eq('user_id', userId)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({
    message: `Method ${method} is not implemented for this endpoint, but it is supported to avoid 405.`,
    available_methods: ['GET', 'POST', 'DELETE', 'OPTIONS']
  }, { status: 200 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;

