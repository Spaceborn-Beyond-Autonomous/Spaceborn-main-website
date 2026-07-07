import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const replacementText = await fs.readFile(path.resolve(__dirname, '../cloudinary_replacement.txt'), 'utf-8');
  const oldUrls = [];
  for (const line of replacementText.split('\n')) {
    if (line.startsWith('http') && line.includes('=')) {
      const parts = line.split('=');
      oldUrls.push(parts[0]);
    }
  }

  const mappingFile = await fs.readFile(path.resolve(__dirname, 'cloudinary-mapping.json'), 'utf-8');
  const newMapping = JSON.parse(mappingFile);
  
  const urlMap = new Map();
  for (const oldUrl of oldUrls) {
    // some old urls have /mobile/ in them
    let searchKey = oldUrl.substring(oldUrl.lastIndexOf('/') + 1);
    if (oldUrl.includes('/mobile/')) {
        searchKey = 'mobile/' + searchKey;
    }
    
    let matchedNew = null;
    for (const [key, newUrl] of Object.entries(newMapping)) {
      if (key.endsWith(searchKey)) {
        matchedNew = newUrl;
        break;
      }
    }
    if (matchedNew) {
      urlMap.set(oldUrl, matchedNew);
    }
  }
  
  async function replaceInDir(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await replaceInDir(fullPath);
      } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.json'))) {
        let content = await fs.readFile(fullPath, 'utf-8');
        let modified = false;
        for (const [oldUrl, newUrl] of urlMap.entries()) {
          if (content.includes(oldUrl)) {
            content = content.split(oldUrl).join(newUrl);
            modified = true;
          }
        }
        if (modified) {
          await fs.writeFile(fullPath, content);
          console.log(`Updated ${fullPath}`);
        }
      }
    }
  }
  
  await replaceInDir(path.resolve(__dirname, '../components'));
  await replaceInDir(path.resolve(__dirname, '../app'));
  await replaceInDir(path.resolve(__dirname, '../scripts'));
  console.log("Global URL replacement complete!");
}
main();
