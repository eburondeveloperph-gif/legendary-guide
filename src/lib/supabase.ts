import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://crynxtqmltbcpwscxoda.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 'sb_publishable_-A7Q26SEflqesOHfzOCz5A_15no1EU-'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
