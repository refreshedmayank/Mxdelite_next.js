import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jxylacwfhaxnubparxst.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eWxhY3dmaGF4bnVicGFyeHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzQxNDgsImV4cCI6MjA5MTkxMDE0OH0.Zf2mt3uGbw1PrG0va9IaLeekhKuNDPQjJShti8uGO60'

export const supabase = createClient(supabaseUrl, supabaseKey)