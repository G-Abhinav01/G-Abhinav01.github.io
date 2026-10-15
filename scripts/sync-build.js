import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distHtml = path.resolve(distDir, 'index.dev.html');
const targetDistHtml = path.resolve(distDir, 'index.html');
const rootHtml = path.resolve(rootDir, 'index.html');
const distAssets = path.resolve(distDir, 'assets');
const rootAssets = path.resolve(rootDir, 'assets');

console.log('[sync-build] Synchronizing production assets for dual-mode GitHub Pages deployment...');

// 1. Ensure dist/index.html exists from dist/index.dev.html
if (fs.existsSync(distHtml)) {
  fs.copyFileSync(distHtml, targetDistHtml);
  console.log('[sync-build] Created dist/index.html');
  
  // 2. Synchronize root index.html
  fs.copyFileSync(distHtml, rootHtml);
  console.log('[sync-build] Synchronized root index.html');
}

// 3. Synchronize root assets directory
if (fs.existsSync(distAssets)) {
  if (!fs.existsSync(rootAssets)) {
    fs.mkdirSync(rootAssets, { recursive: true });
  }
  
  // Clean old bundles from root assets
  const existingFiles = fs.readdirSync(rootAssets);
  for (const file of existingFiles) {
    if (file.startsWith('main-') || file.startsWith('index-')) {
      fs.unlinkSync(path.join(rootAssets, file));
    }
  }

  // Copy fresh built assets
  const files = fs.readdirSync(distAssets);
  for (const file of files) {
    fs.copyFileSync(path.join(distAssets, file), path.join(rootAssets, file));
    console.log(`[sync-build] Copied asset: ${file} -> ./assets/`);
  }
}

// 4. Ensure .nojekyll in root and dist
fs.writeFileSync(path.resolve(rootDir, '.nojekyll'), '');
fs.writeFileSync(path.resolve(distDir, '.nojekyll'), '');
console.log('[sync-build] .nojekyll written to root and dist.');

console.log('[sync-build] All deployment targets ready!');
