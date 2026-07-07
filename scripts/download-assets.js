import fs from 'fs/promises';
import { createWriteStream } from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAPPING_FILE = path.resolve(__dirname, 'cloudinary-mapping.json');
const DOWNLOAD_DIR = path.resolve(__dirname, '../downloaded_assets');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect if any
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
        return;
      }

      const file = createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(dest).catch(() => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function startDownload() {
  try {
    const data = await fs.readFile(MAPPING_FILE, 'utf-8');
    const mapping = JSON.parse(data);

    await fs.mkdir(DOWNLOAD_DIR, { recursive: true });

    console.log(`Starting download of ${Object.keys(mapping).length} files...`);

    for (const [localPath, cloudinaryUrl] of Object.entries(mapping)) {
      // localPath is like '/assets/ansa-digital-twin.jpg' or '/assets/mobile/asset-1.mp3'
      const relativePath = localPath.replace(/^\/assets\//, ''); // 'ansa-digital-twin.jpg'
      const destPath = path.join(DOWNLOAD_DIR, relativePath);

      // Ensure directory exists
      await fs.mkdir(path.dirname(destPath), { recursive: true });

      console.log(`Downloading ${cloudinaryUrl} -> ${destPath}...`);
      try {
        await downloadFile(cloudinaryUrl, destPath);
        console.log(`Successfully downloaded: ${relativePath}`);
      } catch (err) {
        console.error(`Error downloading ${relativePath}:`, err.message);
      }
    }

    console.log(`\nAll downloads completed! The files are saved in: ${DOWNLOAD_DIR}`);
  } catch (err) {
    console.error('Download process failed:', err);
  }
}

startDownload();
