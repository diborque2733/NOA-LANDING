#!/usr/bin/env node
import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const ops = JSON.parse(await fs.readFile('/tmp/veo3-ops.json', 'utf8'))

for (const [name, opName] of Object.entries(ops)) {
  const URL = `https://generativelanguage.googleapis.com/v1beta/${opName}?key=${API_KEY}`
  const res = await fetch(URL)
  if (!res.ok) {
    console.error(`[${name}] HTTP ${res.status}`)
    continue
  }
  const data = await res.json()
  if (!data.done) {
    console.log(`[${name}] ⏳ processing`)
    continue
  }
  if (data.error) {
    console.error(`[${name}] error:`, data.error.message?.slice(0, 200))
    continue
  }
  const resp = data.response ?? {}
  const videos = resp.generateVideoResponse?.generatedSamples ?? resp.generatedVideos ?? []
  for (let i = 0; i < videos.length; i++) {
    const v = videos[i]
    const uri = v.video?.uri
    const bytes = v.video?.videoBytes ?? v.bytesBase64Encoded
    const out = `/Users/diborque/NOA-LANDING/public/media/veo3-${name}.mp4`
    if (bytes) {
      await fs.writeFile(out, Buffer.from(bytes, 'base64'))
      console.log(`[${name}] ✓ saved ${out}`)
    } else if (uri) {
      const dlRes = await fetch(`${uri}&key=${API_KEY}`)
      const arr = await dlRes.arrayBuffer()
      await fs.writeFile(out, Buffer.from(arr))
      const stat = await fs.stat(out)
      console.log(`[${name}] ✓ downloaded ${out} (${(stat.size / 1024).toFixed(0)} KB)`)
    }
  }
}
