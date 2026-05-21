# BACKLOG — NOA Landing

Tareas pendientes ordenadas por prioridad. Mover a `CHANGELOG.md` cuando se completen.

## P0 — Crítico para v1 (en curso)

- [x] Setup base Next.js 15 + Tailwind v4 + TS (manual, sin create-next-app por nombre con caps)
- [x] Estructura de carpetas `src/{app,components,content,lib,types}`
- [x] Descargar logo del Drive → `public/brand/logo.png`
- [x] `.env.example` con keys de Resend + multi-LLM (Anthropic / OpenAI / Gemini)
- [x] `docs/dev-stack.md` — guía de routing multi-LLM por costo
- [x] `CLAUDE.md`, `PROJECT.md`, `BACKLOG.md`, `CHANGELOG.md` (gobernanza)
- [ ] `src/app/globals.css` con `@theme` Industrial Atelier (tokens completos)
- [ ] `src/lib/fonts.ts` — Cormorant Garamond + DM Sans + DM Mono
- [ ] `src/lib/cn.ts` utility (clsx + tailwind-merge)
- [ ] `src/content/landing.ts` — copy completo extraído del pitch deck
- [ ] `src/app/layout.tsx` — metadata, OG, JSON-LD Organization
- [ ] UI primitives: `Button`, `Eyebrow`, `AtelierTray`, `Section`, `Accordion`
- [ ] Layout: `Navbar` (glass), `Footer` (primary BG)
- [ ] 13 secciones del landing (Hero → Footer)
- [ ] API route `/api/contact` con Resend → fundadoras
- [ ] SEO: `sitemap.ts`, `robots.ts`
- [ ] `vercel.json` con región `gru1`
- [ ] Verificar repo privado en GitHub (vía MCP)
- [ ] Commit + push a `claude/setup-noa-landing-To6nw`

## P1 — Necesario antes de salir a producción

- [ ] Descargar renders 3D del Drive (4 jpgs, MCP session se cortó — reintentar)
- [ ] Optimizar renders a webp (1600px max, quality 80) → `public/images/`
- [ ] Descargar marks alternativos `7.png`, `8.png` para favicon + OG
- [ ] Generar OG image (1200×630) con logo + tagline
- [ ] Configurar `RESEND_API_KEY` en Vercel
- [ ] Configurar dominio `noa-core.com` apuntando a Vercel
- [ ] Test del form de contacto end-to-end
- [ ] Lighthouse audit (target Performance ≥ 90, SEO 100, A11y ≥ 90)

## P2 — Polish post-launch

- [ ] Animaciones Framer Motion finas (stagger, scroll-triggered)
- [ ] Hover states con `surface-tint`
- [ ] Embedding del pitch video `NOA Final 2.mp4` (validar peso antes)
- [ ] Page transitions
- [ ] Dark mode? (no en v1, evaluar después)
- [ ] Migrar de DM Sans a Nexa cuando NOACORE compre licencia

## P3 — Roadmap futuro (v1.1+)

- [ ] Página `/casos/[mina]` con resultados de pilotos
- [ ] Blog `/notas` para SEO y content marketing
- [ ] Versión inglés `/en` para Australia/Europa
- [ ] Dashboard de cliente / telemetría compartida
- [ ] Calculadora ROI ("¿cuánto ahorra tu faena?")
- [ ] Integración con CRM (HubSpot / Pipedrive)

## Backlog técnico / deuda

- [ ] Investigar si `gemini-3.5-pro` y `gemini-omni` nombres exactos en API (verificar al setear `.env.local`)
- [ ] Considerar tipografía Nexa real (post-compra licencia) — swap simple en `globals.css`
- [ ] Logo SVG — pedir a Lara la versión vectorial (actualmente solo tenemos PNG 1.5MB)
- [ ] Brandbook formal en PDF — no existe en Drive, generar uno con los tokens actuales si se necesita
