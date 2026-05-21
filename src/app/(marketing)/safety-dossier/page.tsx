import type { Metadata } from 'next'
import { LegalShell, LegalSection } from '@/components/layout/LegalShell'
import { PILOT_MAILTO } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Safety Dossier — Resumen',
  description:
    'Resumen del Safety Dossier de NOA. Marco de cumplimiento HSEC para faenas mineras. Versión completa disponible bajo NDA.',
  robots: { index: true, follow: true },
}

export default function SafetyDossierPage() {
  return (
    <LegalShell
      eyebrow="HSEC · Cumplimiento"
      title="Safety Dossier"
      updated="Mayo 2026 · v1.0 (resumen)"
      intro="Este es el resumen público del Safety Dossier de NOA. La versión completa —con matriz de riesgos por control, planos certificados, certificados estructurales y eléctricos, y especificaciones de pólizas— se entrega a los comités de gestión integrada bajo acuerdo de confidencialidad (NDA)."
    >
      <LegalSection n="01" title="Marco regulatorio">
        <p>El módulo NOA está diseñado para operar conforme a la normativa minera y de salud ocupacional chilena:</p>
        <ul style={{ margin: '0.75rem 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li><strong>DS 594</strong> — Condiciones sanitarias y ambientales básicas en lugares de trabajo (iluminación, ventilación, ruido, temperatura).</li>
          <li><strong>Ley 16.744</strong> — Seguro social contra accidentes del trabajo y enfermedades profesionales.</li>
          <li><strong>DS 132</strong> — Reglamento de Seguridad Minera (criterios aplicables según corresponda).</li>
          <li><strong>Ley 21.643 (Karin)</strong> — Prevención del acoso laboral y promoción de ambientes de trabajo sanos.</li>
          <li><strong>ISO 45001</strong> — Sistema de gestión de seguridad y salud en el trabajo (en proceso de certificación, H2 2026).</li>
        </ul>
      </LegalSection>

      <LegalSection n="02" title="Matriz de riesgos (estructura)">
        <p>
          El Safety Dossier completo incluye una matriz de riesgos por control que identifica, para cada peligro
          potencial, el control aplicado y el responsable. Las categorías cubiertas incluyen:
        </p>
        <ul style={{ margin: '0.75rem 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li><strong>Riesgo eléctrico</strong> — certificación SEC, protecciones diferenciales, puesta a tierra.</li>
          <li><strong>Riesgo estructural</strong> — cálculo de estabilidad, anclaje, resistencia al transporte y a condiciones de faena.</li>
          <li><strong>Riesgo de incendio</strong> — materiales ignífugos, detección y vías de evacuación.</li>
          <li><strong>Riesgo ergonómico y sanitario</strong> — higienización de pods, calidad de aire, control de aforo.</li>
          <li><strong>Riesgo operacional</strong> — protocolo de uso, inducción a usuarias, mantenimiento preventivo.</li>
        </ul>
      </LegalSection>

      <LegalSection n="03" title="Certificaciones técnicas">
        <p>
          Cada cabina se entrega con la documentación de certificación vigente: estructural, eléctrica (SEC),
          compatibilidad electromagnética cuando aplica, y certificados de los materiales y equipos integrados. El
          módulo se transporta como contenedor ISO 20′ o 40′ HC y se instala sin requerir permisos de carga
          sobredimensionada.
        </p>
      </LegalSection>

      <LegalSection n="04" title="Integración TI/OT y datos">
        <p>
          NOA opera bajo un modelo <em>offline-first</em>: no depende de las redes críticas de la faena. La
          telemetría se exporta vía CSV o API liviana según los protocolos de ciberseguridad del mandante, sin abrir
          flancos en los sistemas TI/OT. El manejo de datos se rige por la{' '}
          <a href="/privacidad" style={{ color: 'var(--color-tertiary)' }}>Política de Privacidad</a> (Ley 19.628).
        </p>
      </LegalSection>

      <LegalSection n="05" title="Seguros y responsabilidad civil">
        <p>
          NOACORE SPA mantiene cobertura de responsabilidad civil general, póliza de producto/operaciones y cobertura
          de equipos en faena. La documentación detallada de pólizas, con montos y condiciones, se incluye en el
          Safety Dossier completo y se entrega bajo NDA a los comités de procurement y gestión integrada del mandante.
        </p>
      </LegalSection>

      <LegalSection n="06" title="Continuidad operacional">
        <p>
          Todos los contratos incluyen cláusula de continuidad. En modelo CAPEX, la infraestructura física queda como
          activo del cliente con derechos de uso del protocolo licenciado. En modelo OPEX, el contrato asegura
          continuidad mínima, con opción de adquisición a valor residual y el código del protocolo en escrow ante
          notario.
        </p>
      </LegalSection>

      {/* CTA — request full dossier */}
      <div
        className="mt-12 rounded-2xl p-8"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-container))',
          color: 'var(--color-on-primary)',
        }}
      >
        <p
          className="text-[10px] uppercase mb-3"
          style={{
            color: 'var(--color-tertiary-light)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.15em',
          }}
        >
          Versión completa
        </p>
        <h2
          className="display"
          style={{ fontSize: '1.6rem', color: 'var(--color-on-primary)', marginBottom: '0.75rem' }}
        >
          Solicitá el Safety Dossier completo bajo NDA
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
          }}
        >
          La versión completa incluye matriz de riesgos detallada, planos certificados, certificados estructurales y
          eléctricos, y especificaciones de pólizas. Respondemos en menos de 10 días hábiles.
        </p>
        <a
          href={PILOT_MAILTO}
          className="btn-primary"
          style={{ background: 'var(--color-tertiary)', color: 'var(--color-on-primary)' }}
        >
          Solicitar Safety Dossier completo
        </a>
      </div>

      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--color-on-surface-muted)',
          fontStyle: 'italic',
          marginTop: '2rem',
          lineHeight: 1.6,
        }}
      >
        Nota: este resumen describe la estructura del Safety Dossier. El contenido técnico detallado (cálculos,
        certificados, pólizas) debe ser validado y firmado por los profesionales responsables (ingeniería estructural,
        prevención de riesgos, asesoría legal) antes de su entrega formal a un mandante.
      </p>
    </LegalShell>
  )
}
