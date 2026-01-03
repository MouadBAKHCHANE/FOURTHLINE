import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageExtensions = ['.png', '.jpg', '.jpeg'];
let totalOriginalSize = 0;
let totalWebPSize = 0;
let convertedCount = 0;

async function convertImageToWebP(filePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        if (!imageExtensions.includes(ext)) {
            return;
        }

        const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

        // Get original file size
        const originalStats = fs.statSync(filePath);
        const originalSize = originalStats.size;

        // Convert to WebP
        await sharp(filePath)
            .webp({ quality: 90 })
            .toFile(webpPath);

        // Get WebP file size
        const webpStats = fs.statSync(webpPath);
        const webpSize = webpStats.size;

        totalOriginalSize += originalSize;
        totalWebPSize += webpSize;
        convertedCount++;

        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
        console.log(`✓ Converted: ${path.basename(filePath)} (${(originalSize / 1024).toFixed(2)}KB → ${(webpSize / 1024).toFixed(2)}KB, saved ${savings}%)`);
    } catch (error) {
        console.error(`✗ Error converting ${filePath}:`, error.message);
    }
}

async function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Skip node_modules and .git directories
            if (entry.name !== 'node_modules' && entry.name !== '.git') {
                await processDirectory(fullPath);
            }
        } else if (entry.isFile()) {
            await convertImageToWebP(fullPath);
        }
    }
}

async function main() {
    console.log('🚀 Starting WebP conversion...\n');

    // Process public directory
    const publicDir = path.join(__dirname, 'public');
    if (fs.existsSync(publicDir)) {
        console.log('📁 Processing public directory...');
        await processDirectory(publicDir);
    }

    // Process src/assets directory
    const srcAssetsDir = path.join(__dirname, 'src', 'assets');
    if (fs.existsSync(srcAssetsDir)) {
        console.log('\n📁 Processing src/assets directory...');
        await processDirectory(srcAssetsDir);
    }

    console.log('\n✨ Conversion complete!');
    console.log(`📊 Converted ${convertedCount} images`);
    console.log(`💾 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Total WebP size: ${(totalWebPSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`🎉 Total savings: ${((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2)} MB (${((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(2)}%)`);
}

main().catch(console.error);
