import sharp from 'sharp'
import fs from 'node:fs'

const [src, out] = process.argv.slice(2)
await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 88 }).toFile(out)
const stat = fs.statSync(out)
console.log(`${out} ${(stat.size / 1024).toFixed(0)} KB`)
