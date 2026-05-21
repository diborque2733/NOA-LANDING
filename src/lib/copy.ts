// ───────────────────────────────────────────────────────────────────
// NOA — Source of truth for site copy.
// Restructured to align with /components/sections naming.
// Buyer-facing: HSE, Personas, Operaciones, Sostenibilidad de gran minería.
// ───────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'NOA',
  parent: 'NOACORE',
  legalName: 'NOACORE SPA',
  tagline: 'Infraestructura de recuperación neuro-sensorial para minería',
  url: 'https://noa-core.com',
  description:
    'Sistema de recuperación neuro-sensorial diseñado para mujeres en minería. Micro-pausas efectivas, recuperación funcional y medible dentro del turno.',
  locale: 'es-CL',
  ogImage: '/opengraph-image',
} as const

/** Pre-filled mailto for "Solicitar piloto" — opens user's mail client */
export const PILOT_MAILTO =
  'mailto:rfuentes@noa-core.com,lpualuan@noa-core.com' +
  '?subject=' + encodeURIComponent('Solicitud de piloto NOA — [Compañía]') +
  '&body=' + encodeURIComponent(
    'Hola Rebeca y Lara,\n\n' +
    'Mi nombre es [Nombre] y trabajo en [Compañía / Operación] como [Rol HSE · Operaciones · RRHH · ESG].\n\n' +
    'Nos interesa evaluar el piloto NOA para un nodo crítico de nuestra faena. ' +
    'Específicamente, quisiéramos discutir:\n' +
    '· Contexto operacional: [breve descripción del turno / rol crítico]\n' +
    '· Timeline tentativo: [Q2 / Q3 / Q4 2026]\n' +
    '· Necesidades de procurement: [NDA · RFI · Safety Dossier]\n\n' +
    '¿Cuándo podríamos agendar una reunión técnica de 30 minutos?\n\n' +
    'Saludos cordiales,\n' +
    '[Nombre + cargo + teléfono]'
  )

export const NAV = {
  links: [
    { label: 'Sistema',       href: '#system' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Casos de uso',  href: '#use-cases' },
    { label: 'Modelos',       href: '#commercial-models' },
    { label: 'Equipo',        href: '#team' },
    { label: 'FAQ',           href: '#faq' },
  ],
  cta: { label: 'Solicitar piloto', href: PILOT_MAILTO },
} as const

// ────── Hero ──────
export const HERO = {
  eyebrow: 'INDUSTRIAL WELLNESS INFRASTRUCTURE · DS 594 · LEY 16.744',
  headline: 'Recuperación funcional dentro del turno. Sin sacar a tu gente de faena.',
  subline:
    'NOA convierte la pausa de turno en recuperación neuro-sensorial medible — micro-pausas operadas dentro del flujo del turno, sin pérdida de horas-hombre.',
  primaryCta:    { label: 'Solicitar piloto por correo', href: PILOT_MAILTO },
  secondaryCta:  { label: 'Descargar one-pager',         href: '/media/noa-one-pager.pdf', meta: 'PDF · 2pp · sin formulario' },
  videoCta:      { label: 'Ver el módulo (24s)',         glyph: '▷' },
  microLine: 'Respuesta directa de las fundadoras < 10 días hábiles · NDA disponible · Video ilustrativo (renders + escenas conceptuales)',
  badge: 'TRL 5 · Disponible para piloto 2026',
  /** Stat band visible above-the-fold — sin USD inventado */
  kpis: [
    { value: '48%',   label: 'Reporta agotamiento físico o mental',        source: 'WIM–PwC' },
    { value: '38%',   label: 'Licencias mineras por fatiga / musculoesq.', source: 'SUSESO 2023' },
    { value: '11,1%', label: 'Ausentismo femenino (≈2× del masculino)',    source: 'DIPRES 2024' },
    { value: '60K+',  label: 'Mujeres en minería en Chile',                source: 'WIM Chile' },
  ],
  video: {
    poster: '/media/hero-poster.jpg',
    loopSrc: '/media/hero-loop.mp4',
    modalSrc: '/media/video-60s.mp4',
  },
} as const

// ────── Attributes (ex-Differentiators) ──────
export const ATTRIBUTES = {
  eyebrow: 'Atributos',
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
} as const

// ────── ForWhom — buyer personas (NEW) ──────
export const FOR_WHOM = {
  eyebrow: 'Para quién',
  headline: 'Pensado para los responsables de la decisión.',
  subline:
    'NOA habla el lenguaje técnico de cuatro áreas críticas que aprueban tecnología en faena.',
  personas: [
    {
      icon: 'ShieldCheck',
      area: 'HSE',
      benefit: 'Cumplimiento DS 594 + Ley 16.744',
      detail:
        'Safety Dossier completo, matriz de riesgos por control, reducción cuantificable del riesgo de fatiga cognitiva.',
    },
    {
      icon: 'Users',
      area: 'Personas / RRHH',
      benefit: 'Retención de talento femenino',
      detail:
        'Métricas de bienestar pre/post turno, evidencia para programas de diversidad y reportes de inclusión.',
    },
    {
      icon: 'Cog',
      area: 'Operaciones',
      benefit: 'Foco y productividad por turno',
      detail:
        'Micro-pausas de 8–12 minutos integrables al turno sin pérdida de horas-hombre. Telemetría de adopción.',
    },
    {
      icon: 'Leaf',
      area: 'Sostenibilidad / ESG',
      benefit: 'Métricas SDG 3 · 5 · 8 · 9 · 10',
      detail:
        'Evidencia documentada para reportes de gobernanza, diversidad e innovación. Alineado con ODS.',
    },
  ],
} as const

// ────── Manifesto ──────
export const MANIFESTO = {
  eyebrow: 'Manifiesto',
  quote:
    'La industria gasta millones en detectar fatiga. SmartCap, Optalert, Cat MineStar — la tecnología de alerta existe y es buena. Pero cuando esa alerta se activa… ¿qué hace el operador? Se le dice que descanse. Y no hay dónde. Esa brecha es lo que venimos a cerrar.',
  attribution: 'Rebeca Fuentes',
  attributionRole: 'Co-fundadora NOACORE · 19 años en minería',
  closer:
    'En NOACORE integramos diseño espacial, neurociencia aplicada y criterio operacional para crear soluciones de recuperación, seguridad y eficiencia en entornos industriales.',
} as const

// ────── Numbers (ex-Problem stats) ──────
export const NUMBERS = {
  eyebrow: 'El problema',
  headlinePre: 'La minería opera con infraestructura diseñada ',
  headlineEm: 'históricamente para hombres',
  headlinePost: '.',
  paragraphs: [
    'En faenas remotas, muchas trabajadoras pasan más de ocho horas sentadas operando sistemas de control, monitoreo o tareas administrativas con alta demanda cognitiva — y sin espacios privados para aliviar tensión o regular carga sensorial.',
    'Los espacios actuales son genéricos. No producen recuperación funcional.',
  ],
  stressors: {
    eyebrow: 'Estresores identificados',
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

// ────── System (ex-Solution) ──────
export const SYSTEM = {
  eyebrow: 'El sistema',
  headlinePre: 'Un ',
  headlineEm: 'protocolo neuro-sensorial',
  headlinePost: ' calibrado dentro de un módulo industrial transportable.',
  description:
    'NOA integra módulo, pods y protocolo de regulación sensorial guiada en una sola unidad — una estación de recalibración neurofisiológica que opera como tecnología de bienestar crítico en zonas de alta demanda cognitiva.',
  layers: {
    eyebrow: 'Cuatro capas sensoriales calibradas',
    items: [
      { icon: 'Sun',      title: 'Luz',       description: 'Iluminación terapéutica con perfiles calibrados por rol y turno.' },
      { icon: 'Waves',    title: 'Acústica',  description: 'Acústica de baja frecuencia que descarga la saturación sensorial.' },
      { icon: 'Sparkles', title: 'Aroma',     description: 'Estimulación olfativa funcional, perfiles seguros y replicables.' },
      { icon: 'Armchair', title: 'Ergonomía', description: 'Diseño de descarga corporal contra sedentarismo en roles críticos.' },
    ],
  },
  closing:
    'El diferencial no es la cabina. Es el protocolo — replicable, exportable y licenciable a escala global.',
} as const

// ────── NotIt (extracted from System) ──────
export const NOT_IT = {
  eyebrow: 'NOA no es',
  items: ['Dormitorio', 'Refugio de emergencia', 'Pod recreativo', 'Bienestar blando'],
} as const

// ────── HowItWorks ──────
export const HOW_IT_WORKS = {
  eyebrow: 'Cómo funciona',
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
      eyebrow: 'T+1 semana',
      title: 'Despliegue',
      description: 'Instalación modular del módulo NOA + inducción guiada a usuarias críticas.',
    },
    {
      number: '03',
      eyebrow: 'T+2 — T+8 semanas',
      title: 'Operación',
      description: 'Soporte continuo, telemetría de uso, mantenimiento preventivo y reporte ejecutivo.',
    },
  ],
  pilot: {
    eyebrow: 'Piloto · 6–8 semanas',
    title: 'El piloto entrega evidencia para la decisión de escalamiento.',
    flow: 'Baseline → Instalación → Adopción guiada → Medición → Informe',
    kpis: [
      'Uso y adopción por turno',
      'Cumplimiento del protocolo',
      'Fatiga percibida pre/post',
      'Satisfacción de usuarias',
    ],
  },
} as const

// ────── UseCases ──────
export const USE_CASES = {
  eyebrow: 'Casos de uso',
  headline: 'Partimos por los nodos críticos.',
  description:
    'Focalizar el despliegue en roles de alta demanda cognitiva acelera la evidencia de retorno.',
  items: [
    {
      eyebrow: 'Nodo 01',
      title: 'Sala de control y centro de monitoreo',
      description: 'Operadoras en jornadas extensas sosteniendo atención sobre múltiples sistemas críticos.',
    },
    {
      eyebrow: 'Nodo 02',
      title: 'Operación de equipos CAEX',
      description: 'Conductoras de equipos pesados en turnos rotativos con alta carga vibratoria y sensorial.',
    },
    {
      eyebrow: 'Nodo 03',
      title: 'Supervisión post-tarea crítica',
      description: 'Recalibración cognitiva antes de reanudar tareas de alta vigilancia o decisiones operacionales.',
    },
  ],
} as const

// ────── Compliance (ex-Trust) ──────
export const COMPLIANCE = {
  eyebrow: 'Cumplimiento',
  headline: 'Diseñado para entrar a faena.',
  items: [
    { eyebrow: 'Normativa',  title: 'DS 594',         sub: 'Iluminación, ventilación, ruido, temperatura' },
    { eyebrow: 'Normativa',  title: 'Ley 16.744',     sub: 'Salud ocupacional y prevención de riesgos' },
    { eyebrow: 'HSEC',       title: 'Safety Dossier', sub: 'Matriz de riesgos + responsable por control' },
    { eyebrow: 'Escalado',   title: 'TRL 5',          sub: 'Tecnología validada en entorno relevante' },
    { eyebrow: 'Alineación', title: 'SDG 3 · 5 · 8 · 9 · 10', sub: 'Bienestar, equidad, trabajo digno, innovación' },
    { eyebrow: 'Innovación', title: 'Start-Up Chile · BIG12', sub: 'BUILD 2026 · NOACORE SPA' },
  ],
} as const

// ────── Team ──────
export const TEAM = {
  eyebrow: 'Equipo',
  headline: 'Founder–market fit por diseño.',
  description:
    'Diecinueve años en minería más diez años en diseño espacial europeo. NOA es el cruce de ambas trayectorias.',
  members: [
    {
      name: 'Rebeca Fuentes',
      role: 'Co-fundadora · Team Leader',
      bio: '+19 años con grandes mineras e integradores tecnológicos en faenas críticas. Ventas complejas, adopción industrial y relacionamiento con Sistemas Integrados de Gestión.',
      highlight: 'Universidad Adolfo Ibáñez · Business Administration',
      linkedin: 'https://www.linkedin.com/in/rebeca-fuentes-gonzalez-07a8935a/',
    },
    {
      name: 'Lara Pualuan',
      role: 'Co-fundadora · Diseño & Producto',
      bio: 'Trayectoria en Alemania en diseño espacial, ergonomía y ensamblaje de precisión (Partner Ship Design). Transforma el concepto en producto modular replicable con estándar europeo.',
      highlight: 'Diseño espacial · Industria naval · Ergonomía',
      linkedin: null,
    },
  ],
  ecosystem: {
    eyebrow: 'Ecosistema técnico',
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

// ────── CommercialModels (ex-Pricing) ──────
export const COMMERCIAL_MODELS = {
  eyebrow: 'Modelos de colaboración',
  headline: 'Tres caminos hacia el despliegue. Alcance económico a medida.',
  subline:
    'Estructuramos la inversión según el modelo de procurement de cada faena — piloto pagado, arriendo operacional o adquisición CAPEX.',
  models: [
    {
      eyebrow: 'Piloto',
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
      eyebrow: 'OPEX · Arriendo',
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
      eyebrow: 'CAPEX · Venta',
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
    eyebrow: 'Listos para procurement',
    title: 'Diseñados para entrar a tu vendor master sin fricción.',
    items: [
      { label: 'Safety Dossier',     detail: 'Matriz de riesgos por control' },
      { label: 'DS 594 + Ley 16.744', detail: 'Diseñado bajo normativa chilena' },
      { label: 'NDA + RFI/RFQ',      detail: 'Respuesta en menos de 10 días hábiles' },
      { label: 'Vendor onboarding',  detail: 'SAP · Ariba · Coupa · ServiceNow' },
    ],
  },
  /** Drivers de precio explícitos — comunica rigor sin commoditizar */
  pricingDrivers: {
    eyebrow: 'Estructura del alcance económico',
    title: 'La inversión se estructura sobre cinco drivers acordados con tu equipo de procurement.',
    items: [
      { n: '01', label: 'Número de cabinas',          detail: 'Una sola unidad por nodo crítico o despliegue multi-cabina.' },
      { n: '02', label: 'Turnos cubiertos / día',     detail: 'Una operación 8h vs jornada 24/7 multi-turno.' },
      { n: '03', label: 'Duración del contrato',      detail: 'Piloto 6–8 semanas, OPEX desde 24 meses, CAPEX único.' },
      { n: '04', label: 'Nivel de customización',     detail: 'Configuración base o adaptación ±30% (eléctrica, branding, módulos).' },
      { n: '05', label: 'Licenciamiento del protocolo', detail: 'Opcional: derecho de uso del protocolo NOA en activos del cliente.' },
    ],
    footer: 'Cotización formal post RFI/RFQ. Para aproximación inicial, agendá una reunión técnica con las fundadoras.',
  },
} as const

// ────── FAQ ──────
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
      'Compatible con los modelos de procurement de gran minería: piloto pagado (6–8 semanas con KPIs), arriendo OPEX (mensual o por turno) o adquisición CAPEX con licenciamiento del protocolo opcional. La cotización se estructura sobre cinco drivers acordados con tu equipo de procurement: número de cabinas, turnos cubiertos por día, duración del contrato, nivel de customización y licenciamiento del protocolo. Respondemos RFI/RFQ en menos de 10 días hábiles.',
  },
  {
    question: '¿Qué cobertura de seguros y responsabilidad civil ofrece NOA?',
    answer:
      'NOACORE SPA mantiene póliza de responsabilidad civil general, póliza específica de producto/operaciones y cobertura de equipos en faena. Las cabinas se entregan con certificación estructural y eléctrica chilena vigente (SEC, RT, EMC). Documentación de pólizas, certificados de fabricante y matriz de riesgos por control disponibles bajo NDA para los comités de gestión integrada del mandante.',
  },
  {
    question: '¿Cómo se manejan los datos personales y de salud de las usuarias?',
    answer:
      'NOA opera bajo Ley 19.628 de Protección de Datos Personales (Chile). La telemetría se anonimiza en origen — el sistema reporta uso, adopción y métricas agregadas sin identificación biométrica individual. Datos hosteados en infraestructura chilena. DPA (Data Processing Agreement) disponible para clientes. Las usuarias pueden ejercer derechos ARCO en cualquier momento vía contacto directo con NOACORE SPA.',
  },
  {
    question: '¿Qué pasa si NOA deja de operar durante la vigencia del contrato?',
    answer:
      'Cláusula de continuidad operacional en todos los contratos. Modelo CAPEX: la infraestructura física queda como activo del cliente con derechos de uso del protocolo licenciado. Modelo OPEX: contrato de arriendo asegura continuidad mínima + opción de adquisición a valor residual y código del protocolo en escrow ante notario. Documentación de continuidad bajo NDA.',
  },
] as const

// ────── FinalCTA (ex-Contact) ──────
export const FINAL_CTA = {
  eyebrow: 'Coordinar piloto',
  headlinePre: 'Conversemos sobre tu ',
  headlineEm: 'faena crítica',
  headlinePost: '.',
  subline:
    'Te respondemos directamente las fundadoras. Sin formularios genéricos ni call-centers.',
  form: {
    name:    { label: 'Nombre',       placeholder: 'Tu nombre completo' },
    company: { label: 'Compañía',     placeholder: 'Mina / operación' },
    role:    { label: 'Rol',          placeholder: 'HSE · Salud Ocupacional · Operaciones · RRHH' },
    email:   { label: 'Email',        placeholder: 'tu@empresa.cl' },
    message: { label: 'Contexto',     placeholder: '¿Qué nodo crítico te gustaría evaluar?' },
    submit:  'Coordinar visita técnica',
    success: 'Gracias. Las fundadoras te van a contactar en menos de 48 horas.',
    error:   'Algo falló al enviar. Escribinos directo a rfuentes@noa-core.com mientras lo revisamos.',
  },
  trustSignals: [
    { icon: 'Clock',  text: 'Respuesta directa de las fundadoras en menos de 48 horas.' },
    { icon: 'Shield', text: 'NDA disponible antes de discutir datos operacionales.' },
  ],
  founders: [
    { initials: 'RF', name: 'Rebeca Fuentes', email: 'rfuentes@noa-core.com', role: 'Co-fundadora · Team Leader' },
    { initials: 'LP', name: 'Lara Pualuan',   email: 'lpualuan@noa-core.com', role: 'Co-fundadora · Diseño & Producto' },
  ],
} as const

// ────── Footer ──────
export const FOOTER = {
  tagline: 'Por mujeres, para mujeres.',
  legal: 'NOACORE SPA · Santiago, Chile',
  groups: [
    {
      title: 'Producto',
      links: [
        { label: 'El sistema',     href: '#system' },
        { label: 'Cómo funciona',  href: '#how-it-works' },
        { label: 'Casos de uso',   href: '#use-cases' },
        { label: 'Modelos',        href: '#commercial-models' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Manifiesto',     href: '/manifiesto' },
        { label: 'Equipo',         href: '#team' },
        { label: 'Cumplimiento',   href: '#compliance' },
        { label: 'FAQ',            href: '#faq' },
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
  /** Empresa real */
  company: {
    legalName: 'NOACORE SPA',
    rut: '77.XXX.XXX-X',  // Reemplazar con RUT real
    address: 'Santiago · Chile',  // Pendiente: dirección física confirmada
    email: 'contacto@noa-core.com',
    // Tel: pendiente
  },
  /** Documentos descargables */
  docs: [
    { label: 'One-pager ejecutivo',  href: '/media/noa-one-pager.pdf', meta: 'PDF · 2pp · abierto' },
    { label: 'Safety Dossier',       href: '#contacto',                meta: 'Bajo NDA' },
    { label: 'Política de privacidad', href: '/privacidad',            meta: 'Ley 19.628' },
    { label: 'Términos de servicio', href: '/terminos',                meta: '' },
  ],
  /** Compliance summary */
  compliance: [
    { label: 'DS 594',     status: 'Vigente' },
    { label: 'Ley 16.744', status: 'Compatible' },
    { label: 'ISO 45001',  status: 'En proceso H2 2026' },
    { label: 'TRL 5',      status: 'Validado en entorno relevante' },
  ],
  protocolVersion: 'NOA-CORE v1.0 · Q3 2026',
  copyright: `© ${new Date().getFullYear()} NOACORE SPA · Todos los derechos reservados.`,
} as const

// ────── Credibility Strip (split: regulación vs instituciones) ──────
export const CREDIBILITY_STRIP = {
  label: 'CONSTRUIDO BAJO Y EN DIÁLOGO CON',
  // Legacy mixed list (kept for backward compat — most consumers ignore)
  items: [
    { name: 'WIM Chile',        src: '/media/credibility/wim-chile.svg',     alt: 'WIM Chile' },
    { name: 'SUSESO',           src: '/media/credibility/suseso.svg',        alt: 'SUSESO' },
    { name: 'DS 594',           src: '/media/credibility/ds-594.svg',        alt: 'DS 594 — Condiciones sanitarias ambientales básicas' },
    { name: 'Ley 16.744',       src: '/media/credibility/ley-16744.svg',     alt: 'Ley 16.744 — Seguro accidentes y enfermedades profesionales' },
    { name: 'Consejo Minero',   src: '/media/credibility/consejo-minero.svg', alt: 'Consejo Minero' },
    { name: 'CORFO',            src: '/media/credibility/corfo.svg',         alt: 'CORFO' },
  ],
  // Two-row split — regulación primero, instituciones después
  regulatory: {
    label: 'MARCO REGULATORIO',
    items: [
      { name: 'DS 594',      detail: 'Condiciones sanitarias y ambientales en faena' },
      { name: 'Ley 16.744',  detail: 'Seguro contra accidentes y enfermedades profesionales' },
      { name: 'ISO 45001',   detail: 'Sistema de gestión SST (en proceso H2 2026)' },
      { name: 'Ley 21.643',  detail: 'Prevención del acoso laboral (Karin)' },
    ],
  },
  institutional: {
    label: 'DIÁLOGO INSTITUCIONAL Y PROGRAMAS',
    items: [
      { name: 'WIM Chile' },
      { name: 'SUSESO' },
      { name: 'Consejo Minero' },
      { name: 'CORFO' },
      { name: 'Start-Up Chile · BIG12' },
    ],
  },
  stageNote: 'NOA está en fase de validación industrial (TRL 5). Buscamos faenas piloto en Q3–Q4 2026.',
} as const
