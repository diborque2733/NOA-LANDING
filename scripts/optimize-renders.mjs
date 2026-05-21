import sharp from 'sharp'
import fs from 'fs'

const inputs = [
  { src: '/Users/diborque/NOA-LANDING/public/images/render-01.jpg', basename: 'render-01' },
  { src: '/Users/diborque/NOA-LANDING/public/images/render-02.png', basename: 'render-02' },
  { src: '/Users/diborque/NOA-LANDING/public/images/noa-cloud.png', basename: 'noa-cloud' },
]

for (const { src, basename } of inputs) {
  if (!fs.existsSync(src)) { console.log('skip', src); continue }
  const sizes = [
    { width: 1600, suffix: '' },
    { width: 800, suffix: '-md' },
  ]
  for (const { width, suffix } of sizes) {
    const out = `/Users/diborque/NOA-LANDING/public/images/${basename}${suffix}.webp`
    await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out)
    const stats = fs.statSync(out)
    console.log(`${out} → ${(stats.size / 1024).toFixed(0)} KB`)
  }
}
