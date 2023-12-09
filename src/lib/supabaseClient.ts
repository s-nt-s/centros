import { createClient } from '@supabase/supabase-js'
import type { Database, Tables } from './database.types'

export class DB {
  public static supabase = createClient<Database>(
    'https://xlrdvrcjntdcrgfzmtaq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscmR2cmNqbnRkY3JnZnptdGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDI2MjEsImV4cCI6MjAxNzYxODYyMX0.xgbmhobSUnqailUi8PSZVZD2Jyj3XpWghYoJx4OYzU8'
  )

  static async concursos() {
    const { data, error } = await DB.supabase.from('concurso').select();
    if (error) throw error;
    return data;
  }
  static async anexos() {
    const { data, error } = await DB.supabase.from('concurso_anexo').select();
    if (error) throw error;
    return data;
  }
}