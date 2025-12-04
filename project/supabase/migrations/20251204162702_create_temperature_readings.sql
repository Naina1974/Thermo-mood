/*
  # Thermo Mood Cube Temperature Logging

  1. New Tables
    - `temperature_readings`
      - `id` (uuid, primary key)
      - `temperature` (numeric) - Temperature in Celsius
      - `color_r` (integer) - Red component (0-255)
      - `color_g` (integer) - Green component (0-255)
      - `color_b` (integer) - Blue component (0-255)
      - `device_id` (text) - Identifier for the cube device
      - `created_at` (timestamptz) - Timestamp of reading
    
  2. Security
    - Enable RLS on `temperature_readings` table
    - Add policy for public read access (for dashboard display)
    - Add policy for authenticated insert (for devices to submit readings)
    
  3. Indexes
    - Index on `created_at` for efficient time-based queries
    - Index on `device_id` for device-specific queries
*/

CREATE TABLE IF NOT EXISTS temperature_readings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  temperature numeric NOT NULL,
  color_r integer NOT NULL CHECK (color_r >= 0 AND color_r <= 255),
  color_g integer NOT NULL CHECK (color_g >= 0 AND color_g <= 255),
  color_b integer NOT NULL CHECK (color_b >= 0 AND color_b <= 255),
  device_id text NOT NULL DEFAULT 'default',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE temperature_readings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read temperature readings"
  ON temperature_readings FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert readings"
  ON temperature_readings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_temperature_readings_created_at 
  ON temperature_readings(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_temperature_readings_device_id 
  ON temperature_readings(device_id);