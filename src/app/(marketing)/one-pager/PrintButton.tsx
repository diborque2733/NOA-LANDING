'use client'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      style={{
        background:
          'radial-gradient(ellipse at 40% 40%, var(--color-primary-container), var(--color-primary))',
        color: 'var(--color-on-primary)',
        padding: '10px 22px',
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '0.85rem',
        boxShadow: 'var(--shadow-cta)',
      }}
    >
      Imprimir / Guardar como PDF
    </button>
  )
}
