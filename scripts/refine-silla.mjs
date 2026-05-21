#!/usr/bin/env node
// Refine silla-noa-primary using Gemini 3 Pro Image (image-to-image)
import fs from 'node:fs/promises'
import sharp from 'sharp'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const MODEL = 'gemini-3-pro-image-preview'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

const SRC = '/Users/diborque/NOA-LANDING/public/images/silla-noa-primary.webp'

// Encode source as base64 PNG (Gemini handles PNG/JPEG/WEBP)
const srcBuf = await fs.readFile(SRC)
const b64 = srcBuf.toString('base64')

const PROMPT = `Refine this product image into a premium tier-1 industrial product photograph while PRESERVING all NOA branding (the NOA logo on the side, the cream/champagne color, the overall chair shape and identity).

CRITICAL: Keep the chair's identity intact — same silhouette, same NOA logo placement, same champagne/cream upholstery, same dual-tone (cream + soft sage-green panel accents).

REFINE these aspects:
- Pure clean studio white background, soft floor reflection only
- Remove or soften any awkward visible mechanical brackets at the base
- Smooth out any 3D render artifacts (jaggies, plastic-looking edges)
- Add subtle premium product photography lighting (soft warm key light from upper-left, gentle fill, dimensional shadows)
- Ensure the NOA logo is sharp and clearly readable
- Make the materials look photo-real: brushed metal base, premium upholstery texture, subtle leather/fabric grain
- Center the chair, 3/4 front-facing angle (same as input)
- Square 1:1 composition with generous whitespace around the chair

DO NOT:
- Change the chair design or silhouette
- Remove the NOA logo
- Add any text, people, or other objects
- Change the color palette (must stay champagne + soft sage green accents)
- Add busy backgrounds

Output: clean editorial product photograph suitable for premium B2B mining industry website.`

const res = await fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          { inlineData: { mimeType: 'image/webp', data: b64 } },
          { text: PROMPT },
        ],
      },
    ],
  }),
})

const text = await res.text()
if (!res.ok) {
  console.error('HTTP', res.status, text.slice(0, 600))
  process.exit(1)
}

const data = JSON.parse(text)
if (data.error) {
  console.error('API ERROR:', data.error.message?.slice(0, 400))
  process.exit(1)
}

for (const cand of data.candidates ?? []) {
  for (const part of cand.content?.parts ?? []) {
    const d = part.inlineData ?? part.inline_data
    if (d?.data) {
      const buf = Buffer.from(d.data, 'base64')
      const rawOut = '/tmp/silla-refined.png'
      await fs.writeFile(rawOut, buf)
      console.log(`Raw: ${rawOut} — ${(buf.length / 1024).toFixed(0)} KB (${d.mimeType ?? d.mime_type})`)

      // Optimize to WebP, save as new primary
      const webpOut = '/Users/diborque/NOA-LANDING/public/images/silla-noa-refined.webp'
      await sharp(rawOut)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 90 })
        .toFile(webpOut)
      const stat = await fs.stat(webpOut)
      console.log(`✓ Refined: ${webpOut} — ${(stat.size / 1024).toFixed(0)} KB`)
      process.exit(0)
    }
    if (part.text) console.log('TEXT:', part.text.slice(0, 300))
  }
}
console.error('No image in response')
console.error(JSON.stringify(data, null, 2).slice(0, 800))
process.exit(1)
