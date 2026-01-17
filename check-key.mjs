import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkKey() {
    const apiKey = "sk_3be7dd20e3fb4825bd7e1aad88d7ae0ab84386dd518e1fb3c53e6fdf35b64fa4"
    console.log(`Checking key: ${apiKey}`)
    const { data, error } = await supabase
        .from('api_keys')
        .select('id, user_id')
        .eq('api_key', apiKey)
        .single()

    if (error) {
        console.error("Key check error:", error)
    } else {
        console.log("Key found:", data)
    }
}

checkKey()
