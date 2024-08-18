import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oaeemifugqebuzqibiwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hZWVtaWZ1Z3FlYnV6cWliaXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MTg0NTYsImV4cCI6MjAzOTQ5NDQ1Nn0.BUAVWc1LNzdrT5lOkSwh5ITbeOcQNxD-NK9nKPet1g8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
