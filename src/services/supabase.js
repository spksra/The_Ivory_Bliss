import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://orthicauocdyhdogbpon.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydGhpY2F1b2NkeWhkb2dicG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NzUxNzMsImV4cCI6MjAxNDM1MTE3M30.EWs978eEVQ2oAq0YngWNWB_v8yiVe-K6NXdf3kI49Vk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
