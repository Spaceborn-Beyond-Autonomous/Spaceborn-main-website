import { Pool } from 'pg';

// One shared connection pool per server process, reused across requests.
// Set DATABASE_URL to a standard Postgres connection string, e.g.:
//   postgres://user:password@host:5432/spaceborn
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not configured on this server.');
    }
    // Hosted Postgres providers (Supabase, Neon, RDS, etc.) require TLS but
    // commonly present certificates not in Node's default trust store, so we
    // accept the connection without verifying the chain. Local databases
    // (localhost/127.0.0.1) don't use TLS at all.
    const isLocal = /^(localhost|127\.0\.0\.1)$/.test(new URL(connectionString).hostname);
    pool = new Pool({
      connectionString,
      ssl: isLocal ? undefined : { rejectUnauthorized: false },
    });
  }
  return pool;
}
