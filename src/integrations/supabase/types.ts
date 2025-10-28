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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      booking_services: {
        Row: {
          created_at: string
          description: string | null
          duration_minutes: number
          id: string
          is_active: boolean | null
          max_participants: number | null
          name: string
          price: number
          settings: Json | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_minutes: number
          id?: string
          is_active?: boolean | null
          max_participants?: number | null
          name: string
          price: number
          settings?: Json | null
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean | null
          max_participants?: number | null
          name?: string
          price?: number
          settings?: Json | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          created_at: string
          customer_email: string
          customer_name: string
          customer_phone: string | null
          id: string
          participant_count: number | null
          payment_status: string | null
          scheduled_date: string
          scheduled_time: string
          service_id: string | null
          special_requests: string | null
          status: string | null
          stripe_session_id: string | null
          total_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_email: string
          customer_name: string
          customer_phone?: string | null
          id?: string
          participant_count?: number | null
          payment_status?: string | null
          scheduled_date: string
          scheduled_time: string
          service_id?: string | null
          special_requests?: string | null
          status?: string | null
          stripe_session_id?: string | null
          total_amount: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_email?: string
          customer_name?: string
          customer_phone?: string | null
          id?: string
          participant_count?: number | null
          payment_status?: string | null
          scheduled_date?: string
          scheduled_time?: string
          service_id?: string | null
          special_requests?: string | null
          status?: string | null
          stripe_session_id?: string | null
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "booking_services"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          admin_notes: string | null
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string
          submitted_at: string
        }
        Insert: {
          admin_notes?: string | null
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject: string
          submitted_at?: string
        }
        Update: {
          admin_notes?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string
          submitted_at?: string
        }
        Relationships: []
      }
      digital_products: {
        Row: {
          created_at: string
          description: string | null
          download_limit: number | null
          file_path: string
          file_size: number | null
          id: string
          is_active: boolean | null
          is_free: boolean | null
          name: string
          price: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          download_limit?: number | null
          file_path: string
          file_size?: number | null
          id?: string
          is_active?: boolean | null
          is_free?: boolean | null
          name: string
          price?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          download_limit?: number | null
          file_path?: string
          file_size?: number | null
          id?: string
          is_active?: boolean | null
          is_free?: boolean | null
          name?: string
          price?: number | null
        }
        Relationships: []
      }
      download_links: {
        Row: {
          created_at: string
          digital_product_id: string | null
          download_count: number | null
          expires_at: string
          id: string
          is_active: boolean | null
          max_downloads: number | null
          resource_download_id: string | null
          secure_token: string
        }
        Insert: {
          created_at?: string
          digital_product_id?: string | null
          download_count?: number | null
          expires_at: string
          id?: string
          is_active?: boolean | null
          max_downloads?: number | null
          resource_download_id?: string | null
          secure_token: string
        }
        Update: {
          created_at?: string
          digital_product_id?: string | null
          download_count?: number | null
          expires_at?: string
          id?: string
          is_active?: boolean | null
          max_downloads?: number | null
          resource_download_id?: string | null
          secure_token?: string
        }
        Relationships: [
          {
            foreignKeyName: "download_links_digital_product_id_fkey"
            columns: ["digital_product_id"]
            isOneToOne: false
            referencedRelation: "digital_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "download_links_resource_download_id_fkey"
            columns: ["resource_download_id"]
            isOneToOne: false
            referencedRelation: "resource_downloads"
            referencedColumns: ["id"]
          },
        ]
      }
      email_subscriptions: {
        Row: {
          email: string
          id: string
          is_active: boolean | null
          name: string | null
          preferences: Json | null
          source: string | null
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean | null
          name?: string | null
          preferences?: Json | null
          source?: string | null
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean | null
          name?: string | null
          preferences?: Json | null
          source?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
      newsletter_campaigns: {
        Row: {
          click_rate: number | null
          content: string
          created_at: string
          id: string
          open_rate: number | null
          recipient_count: number | null
          scheduled_date: string | null
          sent_date: string | null
          status: string | null
          title: string
        }
        Insert: {
          click_rate?: number | null
          content: string
          created_at?: string
          id?: string
          open_rate?: number | null
          recipient_count?: number | null
          scheduled_date?: string | null
          sent_date?: string | null
          status?: string | null
          title: string
        }
        Update: {
          click_rate?: number | null
          content?: string
          created_at?: string
          id?: string
          open_rate?: number | null
          recipient_count?: number | null
          scheduled_date?: string | null
          sent_date?: string | null
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      resource_downloads: {
        Row: {
          download_url: string | null
          downloaded_at: string
          email: string
          email_sent: boolean | null
          id: string
          resource_name: string
        }
        Insert: {
          download_url?: string | null
          downloaded_at?: string
          email: string
          email_sent?: boolean | null
          id?: string
          resource_name: string
        }
        Update: {
          download_url?: string | null
          downloaded_at?: string
          email?: string
          email_sent?: boolean | null
          id?: string
          resource_name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_uuid: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
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
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
