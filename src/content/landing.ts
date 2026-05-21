// ───────────────────────────────────────────────────────────────────
// NOA Landing — Single source of truth for all copy.
// Copy extraído verbatim del Pitch Deck B2B, Pitch 45min, Propuestas Piloto
// y la postulación Start-Up Chile BIG12 BUILD 2026.
// ───────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'NOA',
  parent: 'NOACORE',
  legalName: 'NOACORE SPA',
  tagline: 'Tecnología de bienestar para la industria',
  url: 'https://noa-core.com',
  description:
    'Sistema de recuperación neuro-sensorial industrial diseñado para mujeres en minería. Micro-pausas efectivas, recuperación funcional y medible dentro del turno.',
  locale: 'es_CL',
  ogImage: '/opengraph-image',
} as const

export const NAV = {
  links: [
    { label: 'Sistema',       href: '#solucion' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Casos de uso',  href: '#casos' },
    { label: 'Modelos',       href: '#modelos' },
    { label: 'Equipo',        href: '#equipo' },
    { label: 'FAQ',           href: '#faq' },
  ],
  cta: { label: 'Solicitar piloto', href: '#contacto' },
} as const

export const HERO = {
  eyebrow: 'INDUSTRIAL WELLNESS TECH · CHILE',
  headlinePre: 'Recuperación neuro-sensorial industrial para ',
  headlineEm: 'mujeres en minería',
  headlinePost: '.',
  subline:
    'NOA convierte pausas en recuperación funcional y medible dentro del turno. Micro-pausas efectivas → recuperación real → foco al volver.',
  primaryCta:   { label: 'Solicitar piloto',  href: '#contacto' },
  secondaryCta: { label: 'Conocer el sistema', href: '#solucion' },
  trustLine: 'TRL 5 · Diseñado bajo DS 594 + Ley 16.744 · Disponible para piloto',
} as const

export const MANIFESTO = {
  eyebrow: '01 / MANIFIESTO',
  quote:
    '“La industria gasta millones en detectar fatiga. SmartCap, Optalert, Cat MineStar — la tecnología de alerta existe y es buena. Pero cuando esa alerta se activa… ¿qué hace el operador? Se le dice que descanse. Y no hay dónde. Esa brecha es lo que venimos a cerrar.”',
  attribution: 'Rebeca Fuentes · Co-fundadora NOACORE · 19 años en minería',
  closer:
    'En NOACORE integramos diseño espacial, neurociencia aplicada y criterio operacional para crear soluciones de recuperación, seguridad y eficiencia en entornos industriales.',
} as const

export const PROBLEM = {
  eyebrow: '02 / EL PROBLEMA',
  headlinePre: 'La minería opera con infraestructura diseñada ',
  headlineEm: 'históricamente para hombres',
  headlinePost: '.',
  paragraphs: [
    'En faenas remotas, muchas trabajadoras pasan más de ocho horas sentadas operando sistemas de control, monitoreo o tareas administrativas con alta demanda cognitiva — y sin espacios privados para aliviar tensión o regular carga sensorial.',
    'Los espacios actuales son genéricos. No producen recuperación funcional.',
  ],
  stressors: {
    eyebrow: 'ESTRESORES IDENTIFICADOS',
    items: [
      'Fatiga cognitiva por monitoreo prolongado.',
      'Saturación sensorial (ruido / luz).',
      'Sedentarismo en puestos fijos.',
    ],
  },
  stats: [
    { value: '60.000+', label: 'Mujeres en minería en Chile (13–15% del sector)', source: 'WIM Chile' },
    { value: '48%',     label: 'Reporta agotamiento físico o mental',              source: 'WIM–PwC' },
    { value: '38%',     label: 'Licencias mineras = fatiga / musculoesqueléticas', source: 'SUSESO 2023' },
    { value: '11,1%',   label: 'Ausentismo femenino (casi 2× del masculino)',      source: 'DIPRES 2024' },
  ],
} as const

export const SOLUTION = {
  eyebrow: '03 / EL SISTEMA',
  headlinePre: 'NOA no es una cabina bonita. Es un ',
  headlineEm: 'sistema',
  headlinePost: '.',
  description:
    'Módulo transportable + pods interiores + protocolo de regulación sensorial guiada. Una estación de recalibración neurofisiológica que opera como tecnología de bienestar crítico en zonas de alta demanda cognitiva.',
  layers: {
    eyebrow: 'CUATRO CAPAS SENSORIALES CALIBRADAS',
    items: [
      {
        icon: 'Sun',
        title: 'Luz',
        description: 'Iluminación terapéutica con perfiles calibrados por rol y turno.',
      },
      {
        icon: 'Waves',
        title: 'Acústica',
        description: 'Acústica de baja frecuencia que descarga la saturación sensorial.',
      },
      {
        icon: 'Sparkles',
        title: 'Aroma',
        description: 'Estimulación olfativa funcional, perfiles seguros y replicables.',
      },
      {
        icon: 'Armchair',
        title: 'Ergonomía',
        description: 'Diseño de descarga corporal contra sedentarismo en roles críticos.',
      },
    ],
  },
  not: {
    eyebrow: 'NO ES',
    items: ['Dormitorio', 'Refugio de emergencia', 'Pod recreativo', 'Bienestar blando'],
  },
  closing:
    'El diferencial no es la cabina. Es el protocolo — replicable, exportable y licenciable a escala global.',
} as const

export const HOW_IT_WORKS = {
  eyebrow: '04 / CÓMO FUNCIONA',
  headline: 'Entramos por la vía de menor fricción operativa y escalamos.',
  steps: [
    {
      number: '01',
      eyebrow: 'T+0',
      title: 'Site Check',
      description: 'Preparación del punto eléctrico y espacio físico en faena. Validación de cumplimiento DS 594.',
    },
    {
      number: '02',
      eyebrow: 'T+1 SEMANA',
      title: 'Despliegue',
      description: 'Instalación modular del módulo NOA + inducción guiada a usuarias críticas.',
    },
    {
      number: '03',
      eyebrow: 'T+2 — T+8 SEMANAS',
      title: 'Operación',
      description: 'Soporte continuo, telemetría de uso, mantenimiento preventivo y reporte ejecutivo.',
    },
  ],
  pilot: {
    eyebrow: 'PILOTO · 6–8 SEMANAS',
    title: 'El piloto entrega evidencia para la decisión de escalamiento.',
    flow: 'Baseline → Instalación → Adopción guiada → Medición → Informe',
    kpis: ['Uso y adopción por turno', 'Cumplimiento del protocolo', 'Fatiga percibida pre/post', 'Satisfacción de usuarias'],
  },
} as const

export const DIFFERENTIATORS = {
  eyebrow: '05 / DIFERENCIADORES',
  headline: 'Tres atributos que hacen a NOA aprobable, operable y escalable.',
  items: [
    {
      icon: 'Lock',
      title: 'Privacidad',
      description: 'Descarga real sin interrupciones del entorno extremo. Espacio íntimo dentro de la faena.',
    },
    {
      icon: 'RefreshCcw',
      title: 'Consistencia',
      description: 'Experiencia estandarizada y repetible en cada turno, independiente del clima o ubicación.',
    },
    {
      icon: 'LineChart',
      title: 'Datos',
      description: 'Telemetría de uso, adopción y feedback. Gestión objetiva del riesgo de fatiga.',
    },
  ],
  vs: {
    eyebrow: 'NOA NO ES',
    rows: [
      { other: 'SmartCap / Optalert / Cat MineStar',  noa: 'La respuesta, no la alarma.' },
      { other: 'Pods urbanos (RelaxSpace / Zen Pods)', noa: 'Diseñado para faena, no oficina.' },
      { other: 'Recharge Rooms hospitalarios',         noa: 'Industrial, modular, transportable.' },
      { other: 'Bienestar corporativo blando',          noa: 'Tecnología de recuperación funcional medible.' },
    ],
  },
} as const

export const USE_CASES = {
  eyebrow: '06 / CASOS DE USO',
  headline: 'Partimos por los nodos críticos.',
  description:
    'Focalizar el despliegue en roles de alta demanda cognitiva acelera la evidencia de retorno.',
  items: [
    {
      eyebrow: 'NODO 01',
      title: 'Sala de control y centro de monitoreo',
      description: 'Operadoras en jornadas extensas sosteniendo atención sobre múltiples sistemas críticos.',
    },
    {
      eyebrow: 'NODO 02',
      title: 'Operación de equipos CAEX',
      description: 'Conductoras de equipos pesados en turnos rotativos con alta carga vibratoria y sensorial.',
    },
    {
      eyebrow: 'NODO 03',
      title: 'Supervisión post-tarea crítica',
      description: 'Recalibración cognitiva antes de reanudar tareas de alta vigilancia o decisiones operacionales.',
    },
  ],
} as const

export const PRICING = {
  eyebrow: '07 / MODELOS DE COLABORACIÓN',
  headline: 'Tres caminos hacia el despliegue. Alcance económico a medida.',
  subline:
    'Estructuramos la inversión según el modelo de procurement de cada faena — piloto pagado, arriendo operacional o adquisición CAPEX.',
  models: [
    {
      eyebrow: 'PILOTO',
      title: 'Validación pagada',
      description: 'Despliegue de 6–8 semanas con baseline, instalación, operación e informe ejecutivo. Marco contractual breve.',
      bullets: [
        'Site check + instalación + operación llave en mano',
        'Telemetría completa y métricas pre/post',
        'Informe ejecutivo con datos comparables',
        'Cláusula de continuidad opcional',
      ],
      highlight: false,
      cta: 'Coordinar piloto',
    },
    {
      eyebrow: 'OPEX · ARRIENDO',
      title: 'Operación continua',
      description: 'Cabina operada bajo contrato mensual o por turno. Escalamiento ágil entre activos, soporte y mantenimiento incluidos.',
      bullets: [
        'Sin CAPEX para el operador',
        'Soporte y mantenimiento incluidos',
        'Escalamiento ágil entre faenas',
        'Actualización del protocolo continua',
      ],
      highlight: true,
      cta: 'Solicitar propuesta',
    },
    {
      eyebrow: 'CAPEX · VENTA',
      title: 'Adquisición del activo',
      description: 'Compra de la cabina como infraestructura permanente del cliente. Customización del módulo y opción de licenciamiento del protocolo.',
      bullets: [
        'Infraestructura permanente en faena',
        'Customización ±30% sobre la base',
        'Licenciamiento del protocolo opcional',
        'Mantenimiento bajo contrato anual',
      ],
      highlight: false,
      cta: 'Solicitar cotización',
    },
  ],
  procurement: {
    eyebrow: 'LISTOS PARA PROCUREMENT',
    title: 'Diseñados para entrar a tu vendor master sin fricción.',
    items: [
      { label: 'Safety Dossier', detail: 'Matriz de riesgos por control' },
      { label: 'DS 594 + Ley 16.744', detail: 'Diseñado bajo normativa chilena' },
      { label: 'NDA + RFI/RFQ', detail: 'Respuesta en menos de 10 días hábiles' },
      { label: 'Vendor onboarding', detail: 'SAP · Ariba · Coupa · ServiceNow' },
    ],
  },
} as const

export const TEAM = {
  eyebrow: '08 / EQUIPO',
  headline: 'Founder–market fit por diseño.',
  description:
    'Diecinueve años en minería más diez años en diseño espacial europeo. NOA es el cruce de ambas trayectorias.',
  members: [
    {
      name: 'Rebeca Fuentes',
      role: 'Co-fundadora · Team Leader',
      bio: '+19 años con grandes mineras e integradores tecnológicos en faenas críticas. Ventas complejas, adopción industrial y relacionamiento con Sistemas Integrados de Gestión.',
      highlight: 'Universidad Adolfo Ibáñez · Business Administration',
    },
    {
      name: 'Lara Pualuan',
      role: 'Co-fundadora · Diseño & Producto',
      bio: 'Trayectoria en Alemania en diseño espacial, ergonomía y ensamblaje de precisión (Partner Ship Design). Transforma el concepto en producto modular replicable con estándar europeo.',
      highlight: 'Diseño espacial · Industria naval · Ergonomía',
    },
  ],
  ecosystem: {
    eyebrow: 'ECOSISTEMA TÉCNICO',
    items: [
      'Salud Ocupacional · Ley 16.744 · DS 594',
      'Ingeniería estructural · estabilidad y transporte',
      'Arquitectura · ergonomía e iluminación',
      'Tecnologías sensoriales · luz, acústica y aroma',
      'Cardiología · límites seguros de exposición',
      'Logística y fabricación modular',
    ],
  },
} as const

export const TRUST = {
  eyebrow: '09 / CUMPLIMIENTO',
  headline: 'Diseñado para entrar a faena.',
  items: [
    { eyebrow: 'NORMATIVA',  title: 'DS 594',         sub: 'Iluminación, ventilación, ruido, temperatura' },
    { eyebrow: 'NORMATIVA',  title: 'Ley 16.744',     sub: 'Salud ocupacional y prevención de riesgos' },
    { eyebrow: 'HSEC',       title: 'Safety Dossier', sub: 'Matriz de riesgos + responsable por control' },
    { eyebrow: 'ESCALADO',   title: 'TRL 5',          sub: 'Tecnología validada en entorno relevante' },
    { eyebrow: 'ALINEACIÓN', title: 'SDG 3 · 5 · 8 · 9 · 10', sub: 'Bienestar, equidad, trabajo digno, innovación' },
    { eyebrow: 'INNOVACIÓN', title: 'Start-Up Chile · BIG12', sub: 'BUILD 2026 · NOACORE SPA' },
  ],
} as const

export const FAQ: { question: string; answer: string }[] = [
  {
    question: '¿NOA es un dormitorio o refugio de emergencia?',
    answer:
      'No. NOA es un sistema de recuperación neuro-sensorial. No reemplaza espacios de descanso ni refugios — es una estación de recalibración cognitiva diseñada para micro-pausas efectivas dentro del turno.',
  },
  {
    question: '¿Cumple con la normativa minera chilena?',
    answer:
      'Sí. NOA está diseñado bajo Ley 16.744 y DS 594, con aplicación de criterios del DS 132 cuando corresponde. Entregamos un Safety Dossier completo para los comités de gestión integrada del mandante.',
  },
  {
    question: '¿Cómo se integra a los sistemas de TI/OT de la faena?',
    answer:
      'Operación offline-first: NOA no depende de redes críticas. La telemetría se exporta vía CSV o API liviana según los protocolos de ciberseguridad del mandante. Nunca abrimos flancos TI/OT.',
  },
  {
    question: '¿Cuánto tiempo toma instalar una cabina?',
    answer:
      'Site Check en T+0, Despliegue en T+1 semana, Operación desde T+2. La cabina se transporta como contenedor ISO 20′ o 40′ HC y se instala sin permisos de carga sobredimensionada.',
  },
  {
    question: '¿Qué KPIs entrega el piloto?',
    answer:
      'Uso y adopción por turno, cumplimiento del protocolo, fatiga percibida pre/post mediante mediciones directas, y satisfacción de usuarias finales. Los targets exactos se definen en la etapa de Baseline junto al mandante.',
  },
  {
    question: '¿Cómo se estructura el alcance económico?',
    answer:
      'Compatible con los modelos de procurement de gran minería: piloto pagado (6–8 semanas con KPIs), arriendo OPEX (mensual o por turno) o adquisición CAPEX con licenciamiento del protocolo opcional. La cotización se ajusta a la faena, escala y duración del contrato. Respondemos RFI/RFQ en menos de 10 días hábiles.',
  },
] as const

export const CTA = {
  eyebrow: '10 / COORDINAR PILOTO',
  headlinePre: 'Conversemos sobre tu ',
  headlineEm: 'faena crítica',
  headlinePost: '.',
  subline:
    'Te respondemos directamente las fundadoras. Sin formularios genéricos ni call-centers.',
  form: {
    name:    { label: 'Nombre',       placeholder: 'Tu nombre completo' },
    company: { label: 'Compañía',     placeholder: 'Mina / operación' },
    role:    { label: 'Rol',          placeholder: 'HSEC · Salud Ocupacional · Operaciones · RRHH' },
    email:   { label: 'Email',        placeholder: 'tu@empresa.cl' },
    message: { label: 'Contexto',     placeholder: '¿Qué nodo crítico te gustaría evaluar?' },
    submit:  'Coordinar visita técnica',
    success: 'Gracias. Las fundadoras te van a contactar en menos de 48 horas.',
    error:   'Algo falló al enviar. Escribinos directo a rfuentes@noa-core.com mientras lo revisamos.',
  },
} as const

export const FOOTER = {
  tagline: 'Por mujeres, para mujeres.',
  legal: 'NOACORE SPA · Santiago, Chile',
  groups: [
    {
      title: 'Producto',
      links: [
        { label: 'El sistema',     href: '#solucion' },
        { label: 'Cómo funciona',  href: '#como-funciona' },
        { label: 'Casos de uso',   href: '#casos' },
        { label: 'Modelos',        href: '#modelos' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Equipo',         href: '#equipo' },
        { label: 'Cumplimiento',   href: '#trust' },
        { label: 'FAQ',            href: '#faq' },
        { label: 'Contacto',       href: '#contacto' },
      ],
    },
    {
      title: 'Contacto directo',
      links: [
        { label: 'rfuentes@noa-core.com', href: 'mailto:rfuentes@noa-core.com' },
        { label: 'lpualuan@noa-core.com', href: 'mailto:lpualuan@noa-core.com' },
        { label: 'LinkedIn',              href: 'https://www.linkedin.com/in/rebeca-fuentes-gonzalez-07a8935a/' },
      ],
    },
  ],
  corfo: 'NOACORE SPA · Innovación en bienestar industrial · Chile',
  copyright: `© ${new Date().getFullYear()} NOACORE SPA. Todos los derechos reservados.`,
} as const
