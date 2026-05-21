import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Manifiesto',
  description:
    'La industria gasta millones en detectar fatiga. NOA cierra la brecha entre la alerta y la recuperación funcional para mujeres en minería.',
}

export default function ManifestoPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen px-6 md:px-10 py-32"
        style={{ background: 'var(--color-bg-dark)', color: 'var(--color-on-dark)' }}
      >
        <div className="mx-auto w-full max-w-3xl">
          <p
            className="text-[11px] uppercase tracking-[0.12em] mb-8"
            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}
          >
            01 · Manifiesto
          </p>
          <h1
            className="text-4xl md:text-6xl mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            Por mujeres, <em style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>para mujeres</em>.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Contenido en desarrollo. Versión completa del manifiesto NOA disponible próximamente.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
