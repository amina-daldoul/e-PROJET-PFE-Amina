import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://uhipejbctrgcnwxedwxf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoaXBlamJjdHJnY253eGVkd3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMDc0NjksImV4cCI6MjA0NzU4MzQ2OX0.RlFm8Goi9TLoq1CrlNI9IVVM2Eh76PSXnH_qCgrxosM'
)
export { supabase }
