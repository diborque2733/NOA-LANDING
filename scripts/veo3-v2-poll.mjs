#!/usr/bin/env node
import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const ops = JSON.parse(await fs.readFile('/tmp/veo3-v2-ops.json', 'utf8'))
let allDone = true

for (const [name, opName] of Object.entries(ops)) {
  const URL = `https://generativelanguage.googleapis.com/v1beta/${opName}?key=${API_KEY}`
  const res = await fetch(URL)
  if (!res.ok) { console.error(`[${name}] HTTP ${res.status}`); allDone = false; continue }
  const data = await res.json()
  if (!data.done) { console.log(`[${name}] ⏳ processing`); allDone = false; continue }
  if (data.error) { console.error(`[${name}] error:`, data.error.message?.slice(0, 200)); continue }
  const resp = data.response ?? {}
  const videos = resp.generateVideoResponse?.generatedSamples ?? resp.generatedVideos ?? []
  for (let i = 0; i < videos.length; i++) {
    const v = videos[i]
    const uri = v.video?.uri
    const out = `/Users/diborque/NOA-LANDING/public/media/veo3-${name}.mp4`
    if (uri) {
      // Check if already downloaded
      try {
        const stat = await fs.stat(out)
        if (stat.size > 100000) {
          console.log(`[${name}] ✓ already downloaded ${out} (${(stat.size / 1024).toFixed(0)} KB)`)
          continue
        }
      } catch {}
      const dlRes = await fetch(`${uri}&key=${API_KEY}`)
      const arr = await dlRes.arrayBuffer()
      await fs.writeFile(out, Buffer.from(arr))
      const stat = await fs.stat(out)
      console.log(`[${name}] ✓ downloaded ${out} (${(stat.size / 1024).toFixed(0)} KB)`)
    }
  }
}

if (allDone) console.log('\n✅ All clips ready.')
else console.log('\n⏳ Some clips still processing. Re-run in 60s.')
