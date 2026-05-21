import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NOA — Recuperación neuro-sensorial industrial para mujeres en minería'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#FAFAF8',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 540,
            height: 540,
            background: 'radial-gradient(circle at center, rgba(81,118,90,0.18) 0%, rgba(81,118,90,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            left: -120,
            width: 380,
            height: 380,
            background: 'radial-gradient(circle at center, rgba(196,168,130,0.22) 0%, rgba(196,168,130,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: '#51765A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FAFAF8',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            N
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: '#1A1A1A' }}>NOA</div>
            <div
              style={{
                fontSize: 12,
                color: '#51765A',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginTop: 4,
              }}
            >
              NOACORE SPA
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 14,
              color: '#51765A',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontWeight: 500,
            }}
          >
            Industrial Wellness Tech · Chile
          </div>
          <div
            style={{
              fontSize: 64,
              color: '#1A1A1A',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              fontWeight: 500,
              maxWidth: 1000,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Recuperación neuro-sensorial industrial para{' '}
            <span style={{ color: '#51765A', fontStyle: 'italic', fontWeight: 600 }}>
              mujeres en minería
            </span>
            .
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #D4C9BC',
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 32,
              fontSize: 16,
              color: '#505050',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 22, fontWeight: 600, color: '#1A1A1A' }}>60.000+</span>
              <span style={{ fontSize: 12, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Mujeres en minería · Chile
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 22, fontWeight: 600, color: '#1A1A1A' }}>48%</span>
              <span style={{ fontSize: 12, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Reporta agotamiento
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 22, fontWeight: 600, color: '#1A1A1A' }}>TRL 5</span>
              <span style={{ fontSize: 12, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Disponible para piloto
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              color: '#808080',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            noa-core.com
          </div>
        </div>
      </div>
    ),
    size
  )
}
