import sharp from 'sharp'
const [src, basename] = process.argv.slice(2)
const out = `/Users/diborque/NOA-LANDING/public/images/${basename}.webp`
const outMd = `/Users/diborque/NOA-LANDING/public/images/${basename}-md.webp`
await sharp(src).resize({width:1600, withoutEnlargement:true}).webp({quality:82}).toFile(out)
await sharp(src).resize({width:800, withoutEnlargement:true}).webp({quality:82}).toFile(outMd)
console.log('done', out)
