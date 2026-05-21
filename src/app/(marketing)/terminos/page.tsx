import type { Metadata } from 'next'
import { LegalShell, LegalSection } from '@/components/layout/LegalShell'

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description:
    'Términos y condiciones de uso del sitio web y de los servicios de NOACORE SPA.',
  robots: { index: true, follow: true },
}

export default function TerminosPage() {
  return (
    <LegalShell
      eyebrow="Documento legal"
      title="Términos de Servicio"
      updated="Mayo 2026 · v1.0"
      intro="Estos términos rigen el uso del sitio web noa-core.com y la relación comercial preliminar con NOACORE SPA. El uso de este sitio implica la aceptación de estos términos."
    >
      <LegalSection n="01" title="Identificación">
        <p>
          El sitio <strong>noa-core.com</strong> es operado por <strong>NOACORE SPA</strong>, sociedad por
          acciones constituida en Chile, dedicada al desarrollo de infraestructura de recuperación neuro-sensorial
          para la industria minera. Su producto insignia es NOA, un módulo industrial transportable con protocolo
          sensorial calibrado.
        </p>
      </LegalSection>

      <LegalSection n="02" title="Naturaleza de la información del sitio">
        <p>
          El contenido de este sitio tiene fines informativos y comerciales. Las imágenes, renders y videos del
          módulo NOA son <strong>representaciones ilustrativas y conceptuales</strong> — el producto se encuentra en
          fase de validación industrial (TRL 5). Las especificaciones técnicas, métricas y modelos comerciales
          definitivos se establecen en propuestas formales y contratos específicos para cada operación.
        </p>
      </LegalSection>

      <LegalSection n="03" title="Cifras y fuentes">
        <p>
          Las estadísticas presentadas (agotamiento, ausentismo, licencias) provienen de fuentes públicas citadas
          (WIM Chile, WIM–PwC, SUSESO, DIPRES). NOACORE no garantiza la exactitud de datos de terceros y los presenta
          de buena fe como contexto del problema que aborda. Cualquier proyección o estimación propia se identifica
          como tal y su metodología está disponible bajo solicitud.
        </p>
      </LegalSection>

      <LegalSection n="04" title="Propiedad intelectual">
        <p>
          Todo el contenido del sitio —marca NOA, logotipo, diseño, textos, el protocolo sensorial y la
          documentación técnica— es propiedad de NOACORE SPA o de sus licenciantes, y está protegido por la
          legislación de propiedad intelectual e industrial vigente. No se permite su reproducción, distribución o
          uso comercial sin autorización escrita previa.
        </p>
      </LegalSection>

      <LegalSection n="05" title="Solicitudes de piloto y propuestas">
        <p>
          El envío de una solicitud de piloto o de información no constituye una oferta vinculante ni genera
          obligación contractual alguna para NOACORE. Toda relación comercial se formaliza mediante propuesta escrita
          y contrato suscrito por ambas partes, sujeto a los procesos de procurement del mandante (RFI, RFQ, vendor
          onboarding, NDA).
        </p>
      </LegalSection>

      <LegalSection n="06" title="Confidencialidad">
        <p>
          La documentación técnica detallada (Safety Dossier completo, matrices de riesgo, planos, especificaciones
          de pólizas) se entrega exclusivamente bajo acuerdo de confidencialidad (NDA). El acceso a esta información
          implica el compromiso de no divulgarla a terceros sin autorización.
        </p>
      </LegalSection>

      <LegalSection n="07" title="Limitación de responsabilidad">
        <p>
          NOACORE no será responsable por daños indirectos, lucro cesante o perjuicios derivados del uso de la
          información de este sitio. El sitio se ofrece &ldquo;tal cual&rdquo;, sin garantías implícitas sobre disponibilidad
          continua. Los compromisos de servicio se rigen exclusivamente por los contratos de piloto u operación
          suscritos.
        </p>
      </LegalSection>

      <LegalSection n="08" title="Enlaces a terceros">
        <p>
          El sitio puede contener enlaces a fuentes externas (organismos, estudios). NOACORE no controla ni se
          responsabiliza por el contenido de sitios de terceros.
        </p>
      </LegalSection>

      <LegalSection n="09" title="Protección de datos">
        <p>
          El tratamiento de datos personales se rige por nuestra{' '}
          <a href="/privacidad" style={{ color: 'var(--color-tertiary)' }}>Política de Privacidad</a>, conforme a la
          Ley 19.628 sobre Protección de la Vida Privada.
        </p>
      </LegalSection>

      <LegalSection n="10" title="Legislación aplicable y jurisdicción">
        <p>
          Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a la
          jurisdicción de los tribunales ordinarios de justicia con asiento en Santiago, sin perjuicio de las
          cláusulas de resolución de disputas que se acuerden en contratos específicos.
        </p>
      </LegalSection>

      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--color-on-surface-muted)',
          fontStyle: 'italic',
          marginTop: '2rem',
          lineHeight: 1.6,
        }}
      >
        Nota: estos términos son una base legal estándar. Recomendamos su revisión por asesoría legal antes de su
        uso definitivo.
      </p>
    </LegalShell>
  )
}
