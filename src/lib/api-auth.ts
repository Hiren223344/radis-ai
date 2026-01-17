import { NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export type AuthResult =
    | { isValid: true; userId: string }
    | { isValid: false; response: NextResponse };

export async function validateApiKey(req: Request): Promise<AuthResult> {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return {
            isValid: false,
            response: NextResponse.json({
                error: {
                    message: 'Unauthorized: Missing or invalid API Key',
                    type: 'invalid_request_error',
                    code: 'invalid_api_key'
                }
            }, { status: 401 })
        };
    }

    const apiKey = authHeader.split(" ")[1];
    const supabase = createServiceClient();

    const { data: keyData, error: keyError } = await supabase
        .from('api_keys')
        .select('id, user_id')
        .eq('api_key', apiKey)
        .single();

    if (keyError || !keyData) {
        return {
            isValid: false,
            response: NextResponse.json({
                error: {
                    message: 'Unauthorized: Invalid API Key',
                    type: 'invalid_request_error',
                    code: 'invalid_api_key'
                }
            }, { status: 401 })
        };
    }

    return { isValid: true, userId: keyData.user_id };
}
