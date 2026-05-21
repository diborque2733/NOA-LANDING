#!/usr/bin/env node
import fs from 'node:fs/promises'
import sharp from 'sharp'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const MODEL = 'gemini-3-pro-image-preview'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

const PROMPTS = [
  {
    name: 'pod-isolated-front',
    aspect: '1:1',
    prompt: `Cinematic studio product photograph of a single modern reclining wellness pod chair, FRONT-FACING three-quarter view. Premium industrial-luxury design for high-end mining wellness infrastructure. Champagne/sand cream upholstery, brushed brass mechanical details visible at the base, integrated speaker grilles in headrest. Zero-gravity recline mechanism partially visible. Lit from above with soft diffused warm key light. PURE WHITE STUDIO BACKGROUND, no environment, no other objects, no people, no text. Sharp focus, photorealistic, premium product photography. Subtle floor shadow for grounding. Square 1:1.`,
  },
  {
    name: 'pod-isolated-side',
    aspect: '1:1',
    prompt: `Cinematic studio product photograph of the same modern reclining wellness pod chair in PURE SIDE PROFILE (90° view). Showing the full ergonomic shell curvature from the side, articulated leg rest extended, headrest tilted back slightly. Champagne/sand upholstery, brushed brass base. Lit with single soft warm key light from left. PURE WHITE BACKGROUND, no environment. Photorealistic premium product photography, square 1:1.`,
  },
  {
    name: 'pod-with-operator',
    aspect: '4:3',
    prompt: `Cinematic editorial photograph: Latin American female mining operator (30s, professional, dignified) reclining in a premium champagne wellness pod chair during her shift. She wears industrial mining safety coveralls (orange high-vis with reflective stripes) and white hard hat resting beside her. Eyes closed, peaceful, recovering. Soft warm directional lighting suggesting calibrated wellness lighting (cool blue tones reflecting on her face from above). Out-of-focus blurred industrial wellness cabin interior background (neutral cream walls, plants). Shot on medium format camera, shallow depth of field, slight film grain. Composed, respectful, documentary style. NO text, NO logos. 4:3 aspect.`,
  },
  {
    name: 'pod-layers-diagram',
    aspect: '1:1',
    prompt: `Premium isometric infographic illustration of a single wellness pod chair from three-quarter front angle, surrounded by FOUR distinct sensory layer rings emanating outward — each layer represented by an elegant abstract icon in copper/brass tone arranged in a perfect circular orbit around the chair: TOP shows soft sun/light rays icon labeled "LUZ", RIGHT shows sound wave concentric arcs icon labeled "ACÚSTICA", BOTTOM shows minimal flowing aroma curves icon labeled "AROMA", LEFT shows ergonomic body silhouette icon labeled "ERGONOMÍA". The chair is champagne color. Background is warm cream #F5F3EE. Labels in clean uppercase sans-serif copper-colored text. Style: editorial, premium, technical-aesthetic, sophisticated infographic. The orbital rings are thin elegant copper hairlines. NO logos, NO clutter. 1:1 square.`,
  },
]

async function generate({ name, prompt }) {
  console.log(`→ ${name}…`)
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  })
  if (!res.ok) {
    const t = await res.text()
    throw new Error(`HTTP ${res.status}: ${t.slice(0, 300)}`)
  }
  const data = await res.json()
  if (data.error) throw new Error(data.error.message)
  for (const cand of data.candidates ?? []) {
    for (const part of cand.content?.parts ?? []) {
      const d = part.inlineData ?? part.inline_data
      if (d?.data) {
        const buf = Buffer.from(d.data, 'base64')
        const srcPath = `/tmp/ai-${name}.png`
        await fs.writeFile(srcPath, buf)
        // Also save optimized WebP for landing use
        const outPath = `/Users/diborque/NOA-LANDING/public/images/ai-${name}.webp`
        await sharp(srcPath).webp({ quality: 88 }).toFile(outPath)
        const stat = await fs.stat(outPath)
        console.log(`  ✓ ${outPath} — ${(stat.size / 1024).toFixed(0)} KB`)
        return
      }
    }
  }
  throw new Error(`No image in ${name}`)
}

for (const p of PROMPTS) {
  try {
    await generate(p)
    await new Promise((r) => setTimeout(r, 1500))
  } catch (e) {
    console.error(`✗ ${p.name}: ${e.message}`)
  }
}
console.log('Done.')
