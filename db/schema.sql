-- Certificate storage schema.
-- Run this once against the target Postgres database before first use:
--   psql "$DATABASE_URL" -f db/schema.sql

CREATE TABLE IF NOT EXISTS certificates (
  certificate_id VARCHAR(32) PRIMARY KEY,
  name           VARCHAR(120) NOT NULL,
  designation    VARCHAR(200) NOT NULL,
  department     VARCHAR(200) NOT NULL,
  start_date     VARCHAR(200) NOT NULL,
  end_date       VARCHAR(200) NOT NULL,
  experience     VARCHAR(200) NOT NULL,
  description    VARCHAR(2000) NOT NULL,
  cert_date      VARCHAR(200) NOT NULL,
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Deny access via any auto-generated public API (e.g. Supabase's PostgREST
-- layer, reachable with the project's anon key) — no policies are added, so
-- this defaults to deny-all for that path. The app's own DATABASE_URL
-- connection is unaffected: it connects as the table owner, and table
-- owners bypass RLS regardless of policies.
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
