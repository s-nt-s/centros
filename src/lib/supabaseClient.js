import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://xlrdvrcjntdcrgfzmtaq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscmR2cmNqbnRkY3JnZnptdGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDI2MjEsImV4cCI6MjAxNzYxODYyMX0.xgbmhobSUnqailUi8PSZVZD2Jyj3XpWghYoJx4OYzU8'
)
