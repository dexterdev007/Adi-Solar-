-- Create the leads table in Supabase
-- Go to the SQL Editor in your Supabase dashboard and run this script

CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    service TEXT,
    message TEXT,
    source TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Enable full read/write for standard anon/authenticated users (if using anon key and RLS is enabled)
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public insert" ON leads FOR INSERT WITH CHECK (true);
