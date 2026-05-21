# CHANGELOG — NOA Landing

Historial de cambios significativos. Formato inspirado en [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — 2026-05-21

### Sesión 1: Discovery + Setup inicial

**Contexto recuperado:**
- Drive de Lara/Rebeca analizado vía MCP Google Drive
- Identificado: NOACORE SPA es la compañía, NOA el producto
- Brandbook (`DESIGN.md`) extraído — Industrial Atelier design system
- Pitch Deck B2B + Pitch 45min + Postulación BIG12 procesados
- Quotes founders recuperados verbatim
- Stats clave validadas (SUSESO 38%, DIPRES 11.1%, 60K mujeres en minería Chile)
- Pivote estratégico identificado: "protocolo licenciable" > cabina física

**Plan aprobado por el usuario:**
- Archivo: `/root/.claude/plans/debemos-armar-el-landing-glowing-hare.md`
- 13 secciones del landing definidas
- Stack: Next.js 15 + Tailwind v4 + TS + Framer Motion + Radix + Resend
- Deploy: Vercel gru1
- Repo: privado

**Setup técnico:**
- Estructura de carpetas creada (`src/{app,components,content,lib,types}`)
- `package.json` armado manualmente (create-next-app rechaza nombre con caps)
- `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`
- Dependencies instaladas (`npm install` → 479MB node_modules)
- Logo PNG descargado a `public/brand/logo.png` (1.46 MB)

**Gobernanza del proyecto creada:**
- `CLAUDE.md` — context para sesiones futuras (continuidad)
- `docs/PROJECT.md` — overview, stakeholders, métricas
- `docs/BACKLOG.md` — tareas pendientes priorizadas P0-P3
- `docs/CHANGELOG.md` — este archivo
- `docs/dev-stack.md` — estrategia multi-LLM (Anthropic + OpenAI + Gemini con GPT-5.4/5.5, Gemini 3.5, Omni)
- `.env.example` — template de variables (Resend + 3 providers IA)

**Pendientes detectados:**
- Drive MCP session expiró durante descarga en background — reintentar para renders 3D
- Verificar visibilidad del repo en GitHub (debe ser privado)
- Falta logo SVG (solo tenemos PNG)

### Sesión 1 (cont.): Implementación del landing

**Design system implementado:**
- `globals.css` con `@theme` completo (paleta + tipografía + radii + ambient shadow)
- Tokens del brandbook NOACORE aplicados exactos (`#003633`, `#8F4D1A`, `#FBF9F3`, etc.)
- Fuentes Cormorant Garamond + DM Sans + DM Mono cargadas vía `next/font`
- Utility classes: `.eyebrow`, `.display`, `.atelier-tray`, `.atelier-tray-alt`, `.copper-bullet`, `.glass`, `.machined-primary`

**Contenido (`src/content/landing.ts`):**
- Copy real extraído del Pitch Deck B2B, Pitch 45min y Postulación BIG12
- Quote verbatim de Rebeca sobre SmartCap/Optalert
- Intro de NOACORE verbatim de Propuestas Piloto
- Stats validados (SUSESO 38%, DIPRES 11.1%, 60K+ mujeres, WIM-PwC 48%)
- 6 FAQs respondidas con contenido real

**Componentes UI primitivos:**
- `Button` (pill, primary/secondary/ghost)
- `Eyebrow` (DM Mono UPPERCASE)
- `Section` (tonal wrapper con 6 superficies)
- `SectionHeader` (eyebrow + display + subline)
- `AtelierTray` (asimétrico, 2 variants × 4 surfaces)
- `Accordion` (Radix con `+`/× animado)

**Layout:**
- `Navbar` glass + backdrop-blur al scroll, menú mobile
- `Footer` BG primary con 3 columnas + tagline editorial

**13 secciones implementadas:**
1. Hero — eyebrow + headline italic + 2 CTAs + visual SVG concéntrico
2. Manifesto — quote Cormorant 5xl + atribución
3. Problem — 4 stats grid + bullets copper
4. Solution — 4 capas sensoriales + NOT list + closing
5. HowItWorks — 3 fases + Atelier Tray con KPIs piloto
6. Differentiators — 3 cards + tabla comparativa vs competidores
7. UseCases — 3 cards asimétricos (CAEX, salas, supervisión)
8. Pricing — 3 modelos (Piloto / OPEX highlighted / CAPEX)
9. Team — Rebeca + Lara + ecosistema técnico
10. Trust — 6 cards de cumplimiento normativo
11. Faq — Accordion Radix con 6 preguntas
12. Contact — Form con Resend (machined-primary BG)
13. Footer

**Backend:**
- `/api/contact` route con Resend → fundadoras (fallback log-only sin API key)
- `sitemap.ts` + `robots.ts` dinámicos
- JSON-LD: Organization + WebSite schemas
- `next.config.ts` con security headers + image formats avif/webp
- `vercel.json` con región `gru1` (São Paulo)

**Build result:**
- `npm run build` exitoso en primer intento (después de fix de TS en Pricing)
- Bundle: **23.3 kB página** + **129 kB First Load JS** (target < 150 kB ✓)
- Static prerendering activo en `/`
- API route dynamic en `/api/contact`

---

## Convenciones

- **Versionado:** `[major.minor.patch]` semver una vez que esté en producción
- **Formato de entradas:** agrupar por sesión de trabajo + tema
- **Tipos de cambio:**
  - `Added` — funcionalidad nueva
  - `Changed` — cambios en funcionalidad existente
  - `Deprecated` — pronto a removerse
  - `Removed` — eliminado
  - `Fixed` — bugs corregidos
  - `Security` — vulnerabilidades parcheadas
- **Cada commit:** referenciar la entry de changelog donde aplique
