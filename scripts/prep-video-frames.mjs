import sharp from 'sharp'
const scenes = [
  { in: 'public/images/ai-andes-mining.webp',   out: '/tmp/noa-video-frames/01.jpg' },
  { in: 'public/images/ai-woman-operator.webp', out: '/tmp/noa-video-frames/02.jpg' },
  { in: 'public/images/render-01.webp',         out: '/tmp/noa-video-frames/03.jpg' },
  { in: 'public/images/render-03.webp',         out: '/tmp/noa-video-frames/04.jpg' },
  { in: 'public/images/render-02.webp',         out: '/tmp/noa-video-frames/05.jpg' },
  { in: 'public/images/ai-mine-pano.webp',      out: '/tmp/noa-video-frames/06.jpg' },
]
for (const { in: src, out } of scenes) {
  await sharp(src)
    .resize({ width: 1920, height: 1080, fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.97, saturation: 1.10 })
    .linear(1.06, -10)
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(out)
  console.log('✓', out)
}
