export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
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
          jornada: string | null
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
          jornada?: string | null
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
          jornada?: string | null
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_centro: {
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
      maestrillo_concurso_anexo_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_ctr: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_etapa_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_etapa_nombre_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_extraescolar: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_plan: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_proyecto: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      maestrillo_query_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_centro: {
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
      profesillo_concurso_anexo_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_ctr: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_etapa_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_etapa_nombre_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_extraescolar: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_plan: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_proyecto: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
      profesillo_query_centro: {
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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
            referencedRelation: "maestrillo_centro"
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
            referencedRelation: "profesillo_centro"
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
