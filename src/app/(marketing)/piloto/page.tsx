import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Piloto',
  description:
    'Modelo de piloto NOA: 6–8 semanas con baseline, instalación, operación e informe ejecutivo. Compatible con procurement de gran minería.',
}

export default function PilotoPage() {
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
            04 · Piloto
          </p>
          <h1
            className="text-4xl md:text-6xl mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            6 a 8 semanas para <em style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>decidir escalamiento</em>.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Detalle completo del piloto NOA disponible próximamente.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
