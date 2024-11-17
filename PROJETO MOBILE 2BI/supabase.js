import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bnvtoeoywbtvdzdjavbd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudnRvZW95d2J0dmR6ZGphdmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODkwNDEsImV4cCI6MjA0MjY2NTA0MX0.Nk77U0RPDQCpYcWwrF17efnyCM9p8GRqBjFt17gv3Go'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
