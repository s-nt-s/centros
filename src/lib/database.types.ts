export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      area: {
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
      centro: {
        Row: {
          area: string | null
          cp: number | null
          dificultad: number | null
          distrito: string | null
          domicilio: string | null
          email: string | null
          id: number
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
          id: number
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
          id?: number
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
          }
        ]
      }
      concurso: {
        Row: {
          id: string
          txt: string | null
          url: string | null
        }
        Insert: {
          id: string
          txt?: string | null
          url?: string | null
        }
        Update: {
          id?: string
          txt?: string | null
          url?: string | null
        }
        Relationships: []
      }
      concurso_anexo: {
        Row: {
          anexo: number
          concurso: string
          txt: string | null
          url: string | null
        }
        Insert: {
          anexo: number
          concurso: string
          txt?: string | null
          url?: string | null
        }
        Update: {
          anexo?: number
          concurso?: string
          txt?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concurso_anexo_concurso_fkey"
            columns: ["concurso"]
            isOneToOne: false
            referencedRelation: "concurso"
            referencedColumns: ["id"]
          }
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
            foreignKeyName: "concurso_anexo_centro_concurso_anexo_fkey"
            columns: ["concurso", "anexo"]
            isOneToOne: false
            referencedRelation: "concurso_anexo"
            referencedColumns: ["concurso", "anexo"]
          }
        ]
      }
      etapa: {
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
      etapa_centro: {
        Row: {
          centro: number
          etapa: string
          inferido: number | null
        }
        Insert: {
          centro: number
          etapa: string
          inferido?: number | null
        }
        Update: {
          centro?: number
          etapa?: string
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
            foreignKeyName: "etapa_centro_etapa_fkey"
            columns: ["etapa"]
            isOneToOne: false
            referencedRelation: "etapa"
            referencedColumns: ["id"]
          }
        ]
      }
      etapa_nombre_centro: {
        Row: {
          centro: number
          nombre: string
          tipo: string | null
        }
        Insert: {
          centro: number
          nombre: string
          tipo?: string | null
        }
        Update: {
          centro?: number
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
          }
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
          }
        ]
      }
      jornada: {
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
          }
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
          }
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
            foreignKeyName: "query_centro_query_fkey"
            columns: ["query"]
            isOneToOne: false
            referencedRelation: "query"
            referencedColumns: ["id"]
          }
        ]
      }
      tipo: {
        Row: {
          abr: string | null
          id: string
          txt: string | null
        }
        Insert: {
          abr?: string | null
          id: string
          txt?: string | null
        }
        Update: {
          abr?: string | null
          id?: string
          txt?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
