import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://inaxdsfjlcihtuybmtyr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYXhkc2ZqbGNpaHR1eWJtdHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjQ4OTEsImV4cCI6MjA2Mjg0MDg5MX0.pBFSobPwiVD1braIm0ibqZWJXZep5Q53RkFfQrGQFkU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
