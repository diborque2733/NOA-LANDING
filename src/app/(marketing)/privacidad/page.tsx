import type { Metadata } from 'next'
import { LegalShell, LegalSection } from '@/components/layout/LegalShell'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de NOACORE SPA conforme a la Ley 19.628 sobre Protección de la Vida Privada de Chile.',
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <LegalShell
      eyebrow="Documento legal"
      title="Política de Privacidad"
      updated="Mayo 2026 · v1.0"
      intro="En NOACORE SPA tratamos los datos personales con el estándar de rigor que exige la operación en gran minería. Esta política describe qué datos recolectamos, cómo los usamos y los derechos que te asisten bajo la Ley 19.628 sobre Protección de la Vida Privada de Chile."
    >
      <LegalSection n="01" title="Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos personales es <strong>NOACORE SPA</strong>, sociedad
          constituida en Chile, con domicilio en Santiago, Región Metropolitana. Para cualquier consulta
          relativa a esta política o al ejercicio de tus derechos, podés escribir a{' '}
          <a href="mailto:contacto@noa-core.com" style={{ color: 'var(--color-tertiary)' }}>contacto@noa-core.com</a>.
        </p>
      </LegalSection>

      <LegalSection n="02" title="Datos que recolectamos">
        <p>Recolectamos únicamente los datos necesarios para responder solicitudes comerciales y operar el piloto:</p>
        <ul style={{ margin: '0.75rem 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li><strong>Datos de contacto comercial</strong>: nombre, cargo, empresa, correo corporativo, teléfono — provistos voluntariamente mediante el formulario de contacto o correo directo.</li>
          <li><strong>Telemetría de uso del módulo NOA</strong> (durante pilotos): métricas agregadas de adopción, frecuencia y duración de uso por turno. <strong>Esta telemetría se anonimiza en origen</strong> — no se asocia a la identidad individual de las usuarias sin consentimiento explícito.</li>
          <li><strong>Datos de navegación del sitio</strong>: información técnica básica (tipo de navegador, páginas visitadas) si se habilitan herramientas de analítica, siempre de forma agregada y no identificable.</li>
        </ul>
        <p><strong>No recolectamos</strong> información biométrica identificable, datos de salud individualizados, ni categorías especiales de datos sensibles sin consentimiento expreso y un fundamento legal específico.</p>
      </LegalSection>

      <LegalSection n="03" title="Finalidad del tratamiento">
        <p>Los datos se utilizan exclusivamente para:</p>
        <ul style={{ margin: '0.75rem 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li>Responder solicitudes de información, coordinar reuniones técnicas y gestionar pilotos.</li>
          <li>Generar informes ejecutivos agregados sobre el desempeño del piloto para el mandante.</li>
          <li>Cumplir obligaciones legales, contractuales y de los sistemas integrados de gestión del cliente.</li>
        </ul>
        <p>No utilizamos los datos para perfilamiento publicitario ni decisiones automatizadas con efectos jurídicos sobre las personas.</p>
      </LegalSection>

      <LegalSection n="04" title="Base de licitud y consentimiento">
        <p>
          El tratamiento se funda en el consentimiento del titular (al enviar el formulario o contactarnos),
          en la ejecución de relaciones contractuales con clientes, y en el cumplimiento de obligaciones legales.
          El consentimiento puede revocarse en cualquier momento sin efecto retroactivo.
        </p>
      </LegalSection>

      <LegalSection n="05" title="Almacenamiento y seguridad">
        <p>
          Los datos se alojan en infraestructura ubicada en Chile o en proveedores con estándares equivalentes de
          seguridad. Aplicamos medidas técnicas y organizativas razonables para proteger los datos contra acceso no
          autorizado, pérdida o alteración. La telemetría de los pilotos opera bajo un modelo <em>offline-first</em>:
          NOA no depende de las redes críticas de la faena y la exportación de datos se realiza según los protocolos
          de ciberseguridad del mandante.
        </p>
      </LegalSection>

      <LegalSection n="06" title="Comunicación a terceros">
        <p>
          No vendemos ni cedemos datos personales a terceros con fines comerciales. Podemos compartir datos con
          proveedores que nos prestan servicios (correo transaccional, hosting), siempre bajo acuerdos de
          tratamiento de datos (DPA) que garantizan confidencialidad y uso limitado. Los informes a clientes se
          entregan de forma agregada y anonimizada.
        </p>
      </LegalSection>

      <LegalSection n="07" title="Derechos del titular (ARCO)">
        <p>Conforme a la Ley 19.628, podés ejercer en cualquier momento tus derechos de:</p>
        <ul style={{ margin: '0.75rem 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li><strong>Acceso</strong> — saber qué datos tuyos tratamos.</li>
          <li><strong>Rectificación</strong> — corregir datos inexactos o desactualizados.</li>
          <li><strong>Cancelación</strong> — solicitar la eliminación de tus datos cuando proceda.</li>
          <li><strong>Oposición</strong> — oponerte al tratamiento por motivos legítimos.</li>
        </ul>
        <p>
          Para ejercerlos, escribí a{' '}
          <a href="mailto:contacto@noa-core.com" style={{ color: 'var(--color-tertiary)' }}>contacto@noa-core.com</a>{' '}
          indicando tu solicitud. Responderemos dentro de los plazos legales.
        </p>
      </LegalSection>

      <LegalSection n="08" title="Conservación de datos">
        <p>
          Conservamos los datos de contacto mientras exista una relación comercial activa o interés legítimo, y los
          datos de pilotos según lo acordado contractualmente con cada mandante. Vencidos esos plazos, los datos se
          eliminan o anonimizan de forma irreversible.
        </p>
      </LegalSection>

      <LegalSection n="09" title="Cambios a esta política">
        <p>
          Podemos actualizar esta política para reflejar cambios legales o de nuestras prácticas. La versión vigente
          siempre estará publicada en esta página con su fecha de actualización.
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
        Nota: este documento es una política base alineada a la Ley 19.628 vigente. Recomendamos su revisión por
        asesoría legal antes de su uso definitivo, especialmente ante la entrada en vigencia de la nueva Ley 21.719
        de Protección de Datos Personales.
      </p>
    </LegalShell>
  )
}
