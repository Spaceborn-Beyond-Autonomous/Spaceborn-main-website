import { Pool } from 'pg';

// One shared connection pool per server process, reused across requests.
// Set DATABASE_URL to a standard Postgres connection string, e.g.:
//   postgres://user:password@host:5432/spaceborn?sslmode=require
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not configured on this server.');
    }
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('sslmode=require') ? { rejectUnauthorized: false } : undefined,
    });
  }
  return pool;
}
