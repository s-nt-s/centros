export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "11.2.2 (f884da7)"
  }
  public: {
    Tables: {
      alumnado: {
        Row: {
          alumnado: number
          centro: number
          curso: number
          etapa: string
        }
        Insert: {
          alumnado: number
          centro: number
          curso: number
          etapa: string
        }
        Update: {
          alumnado?: number
          centro?: number
          curso?: number
          etapa?: string
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      area: {
        Row: {
          id: string
          txt: string
        }
        Insert: {
          id: string
          txt: string
        }
        Update: {
          id?: string
          txt?: string
        }
        Relationships: []
      }
      centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number
          jornada: string
          latitud: number
          longitud: number
          municipio: string
          nombre: string
          telefono: string | null
          tipo: string
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id: number
          jornada: string
          latitud: number
          longitud: number
          municipio: string
          nombre: string
          telefono?: string | null
          tipo: string
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number
          jornada?: string
          latitud?: number
          longitud?: number
          municipio?: string
          nombre?: string
          telefono?: string | null
          tipo?: string
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      concurso: {
        Row: {
          convocatoria: string
          cuerpo: string
          id: string
          tipo: string
          txt: string
          url: string
        }
        Insert: {
          convocatoria: string
          cuerpo: string
          id: string
          tipo: string
          txt: string
          url: string
        }
        Update: {
          convocatoria?: string
          cuerpo?: string
          id?: string
          tipo?: string
          txt?: string
          url?: string
        }
        Relationships: []
      }
      concurso_anexo: {
        Row: {
          anexo: number
          concurso: string
          txt: string
          url: string
        }
        Insert: {
          anexo: number
          concurso: string
          txt: string
          url: string
        }
        Update: {
          anexo?: number
          concurso?: string
          txt?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_concurso_fkey"
            columns: ["concurso"]
            isOneToOne: false
            referencedRelation: "concurso"
            referencedColumns: ["id"]
          },
        ]
      }
      concurso_anexo_centro: {
        Row: {
          anexo: number
          centro: number
          concurso: string
        }
        Insert: {
          anexo: number
          centro: number
          concurso: string
        }
        Update: {
          anexo?: number
          centro?: number
          concurso?: string
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      etapa: {
        Row: {
          id: string
          txt: string
        }
        Insert: {
          id: string
          txt: string
        }
        Update: {
          id?: string
          txt?: string
        }
        Relationships: []
      }
      etapa_centro: {
        Row: {
          centro: number
          etapa: string
          hoja: number
          inferido: number
        }
        Insert: {
          centro: number
          etapa: string
          hoja?: number
          inferido?: number
        }
        Update: {
          centro?: number
          etapa?: string
          hoja?: number
          inferido?: number
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      etapa_nombre_centro: {
        Row: {
          centro: number
          hoja: number
          nombre: string
          tipo: string | null
        }
        Insert: {
          centro: number
          hoja?: number
          nombre: string
          tipo?: string | null
        }
        Update: {
          centro?: number
          hoja?: number
          nombre?: string
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      extraescolar: {
        Row: {
          centro: number
          nombre: string
        }
        Insert: {
          centro: number
          nombre: string
        }
        Update: {
          centro?: number
          nombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      jornada: {
        Row: {
          id: string
          txt: string
        }
        Insert: {
          id: string
          txt: string
        }
        Update: {
          id?: string
          txt?: string
        }
        Relationships: []
      }
      macro_etapa: {
        Row: {
          cuerpo: string | null
          familia: string
          id: number
          txt: string
        }
        Insert: {
          cuerpo?: string | null
          familia: string
          id: number
          txt: string
        }
        Update: {
          cuerpo?: string | null
          familia?: string
          id?: number
          txt?: string
        }
        Relationships: []
      }
      macro_etapa_centro: {
        Row: {
          centro: number
          etapa: number
        }
        Insert: {
          centro: number
          etapa: number
        }
        Update: {
          centro?: number
          etapa?: number
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      macro_etapa_sub: {
        Row: {
          etapa: number
          subetapa: string
        }
        Insert: {
          etapa: number
          subetapa: string
        }
        Update: {
          etapa?: number
          subetapa?: string
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_sub_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      plan: {
        Row: {
          centro: number
          nombre: string
        }
        Insert: {
          centro: number
          nombre: string
        }
        Update: {
          centro?: number
          nombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      proyecto: {
        Row: {
          centro: number
          nombre: string
        }
        Insert: {
          centro: number
          nombre: string
        }
        Update: {
          centro?: number
          nombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      query: {
        Row: {
          id: string
          txt: string | null
        }
        Insert: {
          id: string
          txt?: string | null
        }
        Update: {
          id?: string
          txt?: string | null
        }
        Relationships: []
      }
      query_centro: {
        Row: {
          centro: number
          query: string
        }
        Insert: {
          centro: number
          query: string
        }
        Update: {
          centro?: number
          query?: string
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      tipo: {
        Row: {
          abr: string
          id: string
          txt: string
        }
        Insert: {
          abr: string
          id: string
          txt: string
        }
        Update: {
          abr?: string
          id?: string
          txt?: string
        }
        Relationships: []
      }
    }
    Views: {
      concursillo_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      concursillo_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      concursillo_diseno_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_diseno_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      concursillo_eoi_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_eoi_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      concursillo_magisterio_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_magisterio_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      concursillo_musica_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_musica_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      concursillo_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      diseno_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      diseno_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      eoi_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      eoi_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      fp_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      magisterio_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      magisterio_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      musica_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      musica_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_alumnado: {
        Row: {
          alumnado: number | null
          centro: number | null
          curso: number | null
          etapa: string | null
        }
        Insert: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Update: {
          alumnado?: number | null
          centro?: number | null
          curso?: number | null
          etapa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alumnado_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number | null
          jornada: string | null
          latitud: number | null
          longitud: number | null
          municipio: string | null
          nombre: string | null
          telefono: string | null
          tipo: string | null
          titular: string | null
          web: string | null
        }
        Insert: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Update: {
          area?: string | null
          cp?: number | null
          dificultad?: number | null
          distrito?: string | null
          domicilio?: string | null
          email?: string | null
          id?: number | null
          jornada?: string | null
          latitud?: number | null
          longitud?: number | null
          municipio?: string | null
          nombre?: string | null
          telefono?: string | null
          tipo?: string | null
          titular?: string | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "centro_area_fkey"
            columns: ["area"]
            isOneToOne: false
            referencedRelation: "area"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_jornada_fkey"
            columns: ["jornada"]
            isOneToOne: false
            referencedRelation: "jornada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centro_tipo_fkey"
            columns: ["tipo"]
            isOneToOne: false
            referencedRelation: "tipo"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_concurso_anexo_centro: {
        Row: {
          anexo: number | null
          centro: number | null
          concurso: string | null
        }
        Insert: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Update: {
          anexo?: number | null
          centro?: number | null
          concurso?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          },
        ]
      }
      secundaria_ctr: {
        Row: {
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concurso_anexo_centro_centro_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_etapa_centro: {
        Row: {
          centro: number | null
          etapa: string | null
          hoja: number | null
          inferido: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: string | null
          hoja?: number | null
          inferido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_etapa_nombre_centro: {
        Row: {
          centro: number | null
          hoja: number | null
          nombre: string | null
          tipo: string | null
        }
        Insert: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Update: {
          centro?: number | null
          hoja?: number | null
          nombre?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "etapa_nombre_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_extraescolar: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extraescolar_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_macro_etapa_centro: {
        Row: {
          centro: number | null
          etapa: number | null
        }
        Insert: {
          centro?: number | null
          etapa?: number | null
        }
        Update: {
          centro?: number | null
          etapa?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "macro_etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "macro_etapa"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_plan: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_proyecto: {
        Row: {
          centro: number | null
          nombre: string | null
        }
        Insert: {
          centro?: number | null
          nombre?: string | null
        }
        Update: {
          centro?: number | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
        ]
      }
      secundaria_query_centro: {
        Row: {
          centro: number | null
          query: string | null
        }
        Insert: {
          centro?: number | null
          query?: string | null
        }
        Update: {
          centro?: number | null
          query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "concursillo_musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "diseno_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "eoi_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "fp_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "magisterio_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "musica_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_centro_fkey"
            columns: ["centro"]
            isOneToOne: false
            referencedRelation: "secundaria_centro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
