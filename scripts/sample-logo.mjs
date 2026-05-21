import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

const buf = await readFile('/Users/diborque/NOA-LANDING/public/brand/logo.png')
const { data, info } = await sharp(buf).resize(60, 60).raw().toBuffer({ resolveWithObject: true })

// Sample colors from specific regions of the logo
const samples = []
const regions = [
  { name: 'top-arc-light',    x: 30, y: 8 },
  { name: 'top-arc-mid',      x: 30, y: 14 },
  { name: 'side-arc-darker',  x: 15, y: 30 },
  { name: 'sphere-light',     x: 38, y: 26 },
  { name: 'sphere-mid',       x: 38, y: 32 },
  { name: 'sphere-dark',      x: 38, y: 40 },
  { name: 'bottom-arc-dark',  x: 18, y: 48 },
  { name: 'inner-arc',        x: 24, y: 35 },
]

for (const { name, x, y } of regions) {
  const i = (y * info.width + x) * info.channels
  const r = data[i], g = data[i + 1], b = data[i + 2]
  const hex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('').toUpperCase()
  samples.push({ name, rgb: `rgb(${r},${g},${b})`, hex })
}
console.log(JSON.stringify(samples, null, 2))
