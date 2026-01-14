import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import crypto from 'crypto'

function generateApiKey() {
  return `rds_${crypto.randomBytes(32).toString('hex')}`
}

export async function GET() {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  
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

export async function POST() {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  
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

export async function DELETE() {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceClient()
  
  const { error } = await supabase
    .from('api_keys')
    .delete()
    .eq('user_id', userId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
