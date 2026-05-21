#!/usr/bin/env node
import fs from 'node:fs/promises'
import sharp from 'sharp'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY not set')

const MODEL = 'gemini-2.5-flash-image'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

const PROMPTS = [
  {
    name: 'mine-pano',
    prompt: `Cinematic ultra-wide aerial photograph of vast Chilean copper mine pit at golden hour. Massive terraced earth in warm copper, ochre, and sandstone tones. Dramatic sky with soft clouds catching the last sunlight. Distant haul trucks tiny like ants showing immense scale. Professional documentary photography, shallow depth of field, slight cinematic film grain. No people in foreground, no text, no logos, no machinery in foreground. Mood: vast, serene, industrial-poetic, premium tier-1 mining publication aesthetic. Color grading: warm earth tones, slightly desaturated. Aspect ratio 21:9 panoramic.`,
  },
  {
    name: 'woman-operator',
    prompt: `Cinematic portrait photograph: Latin American female mining operator in her 30s wearing high-visibility orange-and-grey safety coverall, white hard hat with reflective stripes, safety glasses, standing thoughtfully in a clean mining control room. Three large monitors with operational dashboards softly visible behind her, out of focus. Warm key light from screens reflecting on her face, professional documentary photography, shallow depth of field, slight film grain. Composed, dignified, capable expression. No text or logos visible. Aspect ratio 3:4 vertical. Mood: respectful, professional, grounded.`,
  },
  {
    name: 'andes-mining',
    prompt: `Cinematic wide-angle photograph at dawn: snow-capped Andes mountains in background, vast copper mining operation in mid-ground, geometric terraced pit excavations with warm earth tones. Soft pink-blue sky with morning mist. Professional documentary photography, slight cinematic film grain, premium publication aesthetic. No people, no text, no logos. Mood: vast scale, harsh beauty, contemplative. Color: cool blue sky transitioning to warm copper earth. Aspect ratio 16:9.`,
  },
  {
    name: 'industrial-pattern',
    prompt: `Abstract macro photograph: oxidized copper and brushed steel industrial surface, warm patina, scratches and wear marks creating organic texture. Lit from a single warm side light producing dramatic shadows and highlights. Earth tones: copper, ochre, deep teal patina, beige. Professional product photography, shallow depth of field, slight grain. No text, no logos, no recognizable objects. Mood: tactile, premium, industrial-poetic. Aspect ratio 16:9.`,
  },
]

async function generate(promptObj) {
  const { name, prompt } = promptObj
  console.log(`[generate] ${name}…`)
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`${name}: HTTP ${res.status} - ${text.slice(0, 300)}`)
  }
  const data = await res.json()
  if (data.error) throw new Error(`${name}: ${data.error.message}`)
  for (const cand of data.candidates ?? []) {
    for (const part of cand.content?.parts ?? []) {
      const d = part.inlineData ?? part.inline_data
      if (d?.data) {
        const buf = Buffer.from(d.data, 'base64')
        const srcPath = `/tmp/ai-${name}.png`
        await fs.writeFile(srcPath, buf)
        const outPath = `/Users/diborque/NOA-LANDING/public/images/ai-${name}.webp`
        const outMdPath = `/Users/diborque/NOA-LANDING/public/images/ai-${name}-md.webp`
        await sharp(srcPath).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 86 }).toFile(outPath)
        await sharp(srcPath).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 82 }).toFile(outMdPath)
        const stat = await fs.stat(outPath)
        const statMd = await fs.stat(outMdPath)
        console.log(`  ✓ ${outPath} (${(stat.size / 1024).toFixed(0)} KB) + ${outMdPath} (${(statMd.size / 1024).toFixed(0)} KB)`)
        await fs.unlink(srcPath).catch(() => {})
        return
      }
    }
  }
  throw new Error(`${name}: no image in response`)
}

for (const p of PROMPTS) {
  try {
    await generate(p)
    await new Promise((r) => setTimeout(r, 1500))
  } catch (e) {
    console.error(`[skip] ${p.name}: ${e.message}`)
  }
}
console.log('Done.')
