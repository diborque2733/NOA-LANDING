import sharp from 'sharp'
// Use render-02 (cabin interior) — best cinematic frame
const src = '/Users/diborque/NOA-LANDING/public/images/render-02.webp'
const out = '/Users/diborque/NOA-LANDING/public/media/hero-poster.jpg'

await sharp(src)
  .resize({ width: 1920, height: 1080, fit: 'cover', position: 'center' })
  // Cinematic grading: slight contrast + warm tone
  .modulate({ brightness: 0.98, saturation: 1.08 })
  .linear(1.05, -8)  // slight contrast bump
  .jpeg({ quality: 88, progressive: true, mozjpeg: true })
  .toFile(out)

const stat = await import('node:fs').then(fs => fs.statSync(out))
console.log(`✓ ${out} — ${(stat.size/1024).toFixed(0)} KB`)
