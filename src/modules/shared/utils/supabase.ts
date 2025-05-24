import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vppqgrvpxgxygigomvyh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwcHFncnZweGd4eWdpZ29tdnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNDgwNjcsImV4cCI6MjA2MzYyNDA2N30.uNSEiy6QLjiR7TfInQwzLXVqNcqvbFgjWppKYXGqgJc'
)
export { supabase }
