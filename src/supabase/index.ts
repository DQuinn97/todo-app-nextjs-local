import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";
const supabaseUrl = "https://jegwxnhpinsvialqonbr.supabase.co";
const supabaseKey = process.env.NEXT_SUPABASE_KEY as string;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
