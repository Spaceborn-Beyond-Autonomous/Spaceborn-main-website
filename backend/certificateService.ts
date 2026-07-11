import { promises as fs } from 'fs';
import path from 'path';

export type CertificateRecord = {
  certificate_id: string;
  name: string;
  designation: string;
  department: string;
  start_date: string;
  end_date: string;
  experience: string;
  description: string;
  cert_date: string;
  updated_at: string;
};

const DATA_DIR = path.join(process.cwd(), 'uploads');
const DATA_FILE = path.join(DATA_DIR, 'certificates.json');

// Serialize writes so two concurrent syncs can't interleave read-modify-write
let writeChain: Promise<unknown> = Promise.resolve();

async function readStore(): Promise<Record<string, CertificateRecord>> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export async function getCertificate(certificateId: string): Promise<CertificateRecord | null> {
  const store = await readStore();
  return store[certificateId] ?? null;
}

export async function upsertCertificates(
  records: Omit<CertificateRecord, 'updated_at'>[]
): Promise<{ upserted: number; total: number }> {
  const result = writeChain.then(async () => {
    const store = await readStore();
    const now = new Date().toISOString();

    for (const record of records) {
      store[record.certificate_id] = { ...record, updated_at: now };
    }

    await fs.mkdir(DATA_DIR, { recursive: true });
    const tmpFile = `${DATA_FILE}.tmp`;
    await fs.writeFile(tmpFile, JSON.stringify(store, null, 2), 'utf-8');
    await fs.rename(tmpFile, DATA_FILE);

    return { upserted: records.length, total: Object.keys(store).length };
  });

  writeChain = result.catch(() => {});
  return result;
}
