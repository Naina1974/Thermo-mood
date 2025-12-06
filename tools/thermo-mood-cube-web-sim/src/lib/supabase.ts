import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TemperatureReading {
  id: string;
  temperature: number;
  color_r: number;
  color_g: number;
  color_b: number;
  device_id: string;
  created_at: string;
}
