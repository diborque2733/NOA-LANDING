// ───────────────────────────────────────────────────────────────────
// /v2 — copy overrides según feedback Lara + Rebeca (24 mayo 2026)
// - "INDUSTRIAL RECOVERY TECH" en eyebrow
// - Sin "recuperación funcional"
// - "15 minutos de recuperación"
// - Sin em-dashes (guión IA)
// - Statement de piloto con data biométrica
// ───────────────────────────────────────────────────────────────────

import { PILOT_MAILTO } from '@/lib/copy'

export const HERO_V2 = {
  eyebrow: 'INDUSTRIAL RECOVERY TECH · DS 594 · LEY 16.744',
  headline: 'Recuperación dentro del turno. Sin sacar a tu gente de faena.',
  subline:
    'Estación autónoma de recuperación neurosensorial para faenas mineras. Diseñada, desarrollada y comercializada para personas que operan en condiciones extremas.',
  primaryCta:   { label: 'Solicitar piloto por correo', href: PILOT_MAILTO },
  secondaryCta: { label: 'Ver ficha técnica',           href: '/one-pager', meta: '2 páginas · imprimible' },
  videoCta:     { label: 'Ver el módulo (24s)',         glyph: '▷' },
  microLine: 'RESPUESTA DIRECTA FUNDADORAS · NDA DISPONIBLE · VIDEO ILUSTRATIVO',
  kpis: [
    { value: '24%',   label: 'Participación femenina en la gran minería chilena',   source: 'Consejo Minero · récord mundial 2do sem 2025' },
    { value: '44K+',  label: 'Mujeres trabajando en minería en Chile',              source: 'Consejo Minero · Cochilco' },
    { value: '48%',   label: 'Reporta agotamiento físico o mental por faena',       source: 'WIM · PwC' },
    { value: '31,7%', label: 'Licencias médicas en Chile por trastornos mentales',  source: 'SUSESO 2025' },
  ],
  video: {
    poster: '/media/hero-poster.jpg',
    loopSrc: '/media/hero-loop.mp4',
    modalSrc: '/media/video-60s.mp4',
  },
} as const

export const SYSTEM_V2 = {
  eyebrow: 'Qué es NOA',
  headlinePre: 'NOA. ',
  headlineEm: 'Interfaz de recuperación industrial',
  headlinePost: '.',
  description:
    'Es una estación autónoma de recuperación neurosensorial diseñada para faenas. Opera sin obra civil, en altitud, con datos trazables y respaldo científico.',
  pillStatement: '15 minutos de recuperación dentro del flujo operacional',
  pillars: [
    { eyebrow: 'Foco',      detail: 'Una pausa neurosensorial bien diseñada restituye atención antes del microsueño.' },
    { eyebrow: 'Salud',     detail: 'Micro-recuperaciones reducen carga fisiológica acumulada por altitud y turno.' },
    { eyebrow: 'Operación', detail: 'Un trabajador recuperado toma mejores decisiones. Las decisiones son el activo.' },
  ],
} as const

export const TEAM_V2 = {
  eyebrow: 'Equipo',
  headline: 'Diecinueve años en minería. Diez en diseño espacial europeo.',
  description:
    'NOA es el cruce de ambas trayectorias. Ventas industriales complejas y diseño espacial de precisión convergen en un sistema diseñado para escalar.',
} as const

export const USE_CASES_V2 = {
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

export const PILOT_DATA_V2 = {
  eyebrow: 'El piloto',
  headlinePre: 'El piloto entrega ',
  headlineEm: 'data biométrica y gestionable',
  headlinePost: ' para programas de salud ocupacional y riesgos.',
  description:
    'La nueva frontera de la productividad no es hacer más. Es recuperarse mejor. Cada despliegue NOA reporta métricas anónimas y comparables que alimentan tus sistemas integrados de gestión, sin abrir flancos TI/OT y sin identificación individual.',
  metrics: [
    { label: 'Uso y adopción',          detail: 'Frecuencia y duración por turno · agregada' },
    { label: 'Carga fisiológica',       detail: 'Variabilidad de fatiga pre/post sesión' },
    { label: 'Cumplimiento protocolo',  detail: 'Adherencia a la secuencia neuro-sensorial' },
    { label: 'Reportabilidad HSEC',     detail: 'Export CSV / API liviana · compatible SIGA' },
  ],
} as const

export const MANIFESTO_V2 = {
  eyebrow: 'Manifiesto',
  quote:
    'La industria gasta millones en detectar fatiga. SmartCap, Optalert, Cat MineStar. La tecnología de alerta existe y es buena. Pero cuando esa alerta se activa… ¿qué hace el operador? Se le dice que descanse. Y no hay dónde. Esa brecha es lo que venimos a cerrar.',
  attribution: 'Rebeca Fuentes',
  attributionRole: 'Co-fundadora NOACORE · 19 años en minería',
  closer:
    'En NOACORE integramos diseño espacial, neurociencia aplicada y criterio operacional para crear soluciones de recuperación, seguridad y eficiencia en entornos industriales.',
} as const

export const NUMBERS_V2 = {
  eyebrow: 'La realidad que no podemos ignorar',
  headlinePre: 'La infraestructura minera no fue pensada ',
  headlineEm: 'para la realidad actual de sus trabajadoras',
  headlinePost: '.',
  paragraphs: [
    'Miles de mujeres operan en turnos de 12 hrs, en altitud y aislamiento, sin espacios de recuperación estructurada.',
    'La fatiga es uno de los factores humanos más costosos y más subestimados de la minería. Los espacios actuales son genéricos. No producen recuperación.',
  ],
  stressors: {
    eyebrow: 'El riesgo fisiológico',
    items: [
      'Hipoxia hipobárica · trabajo sostenido sobre 2.500 msnm.',
      'Fatiga cognitiva · turnos rotativos de 8 a 12 hrs.',
      'Trastornos del sueño · rotación horaria nocturna.',
      'Estrés psicosocial · presión sostenida y aislamiento.',
    ],
  },
  stats: [
    { value: '24%',     label: 'Participación femenina en la gran minería chilena. Récord mundial (12.239 mujeres, 2do semestre 2025)', source: 'Consejo Minero' },
    { value: '44K+',    label: 'Mujeres trabajando en minería en Chile, sumando dotación propia y empresas contratistas',                source: 'Consejo Minero · Cochilco' },
    { value: '48%',     label: 'De las mujeres en minería reporta agotamiento físico o mental por condiciones de faena',                 source: 'WIM · PwC' },
    { value: '31,7%',   label: 'De las licencias médicas emitidas en Chile (2025) corresponde a trastornos mentales. Principal causa',   source: 'SUSESO 2025' },
  ],
} as const

export const NAV_V2 = {
  links: [
    { label: 'Sistema',     href: '#system' },
    { label: 'Casos de uso', href: '#use-cases' },
    { label: 'Piloto',      href: '#pilot-data' },
    { label: 'Equipo',      href: '#team' },
  ],
  cta: { label: 'Solicitar piloto', href: PILOT_MAILTO },
} as const
