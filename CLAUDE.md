# CLAUDE.md — Context para sesiones futuras

> Este archivo le da contexto a Claude (o cualquier IA) cuando arranca una sesión nueva en este repo. **Leerlo siempre antes de hacer cambios.**

## Qué es NOA

**NOA** es el producto insignia de **NOACORE SPA** (Neo Pacific Solutions): un **Sistema de Recuperación Neuro-Sensorial Industrial para Mujeres en Minería** — cabina modular B2B para faenas mineras chilenas.

- **Status:** Postulando a Start-Up Chile **BIG12 BUILD 2026** (BIG11 rechazada, nota 5.18 — pivote a "protocolo licenciable" para mejorar escalabilidad)
- **Domain:** `noa-core.com`
- **Founders:** Rebeca Fuentes (rfuentes@noa-core.com) + Lara Pualuan (lpualuan@noa-core.com)
- **Pitch en 7 palabras:** *"Solución Neuro-Sensorial Especializada para Mujeres en Minería"*

## Repo

- **Path local:** `/home/user/NOA-LANDING`
- **GitHub:** `diborque2733/noa-landing` (**privado**)
- **Branch de desarrollo:** `claude/setup-noa-landing-To6nw`
- **Plan original:** `/root/.claude/plans/debemos-armar-el-landing-glowing-hare.md`

## Stack

| Capa        | Tecnología                                  |
|-------------|---------------------------------------------|
| Framework   | Next.js 15 (App Router, RSC default)        |
| Estilos     | Tailwind CSS v4 (`@theme` en `globals.css`) |
| Lenguaje    | TypeScript estricto                         |
| Animaciones | Framer Motion 12                            |
| Iconos      | Lucide React                                |
| Fuentes     | next/font/google                            |
| FAQ         | @radix-ui/react-accordion                   |
| Email form  | API route + Resend                          |
| Deploy      | Vercel `gru1` (São Paulo)                   |

## Design System: "Industrial Atelier" — *The Curated Laboratory*

**Source of truth:** `src/app/globals.css` (`@theme` block).

**Paleta clave:**
- `--surface` `#FBF9F3` (cream)
- `--primary` `#003633` (dark green, ancla de marca)
- `--secondary` `#8F4D1A` (copper, micro-accent)

**Tipografía:**
- Display: **Cormorant Garamond Light** (italic emphasis en nouns clave)
- Body: **DM Sans** (sustituto de Nexa, que es comercial)
- Mono / eyebrows: **DM Mono** UPPERCASE + 0.1em letter-spacing

**Reglas inviolables:**
- ❌ NO `border: 1px solid` para separar secciones — usar transiciones tonales
- ❌ NO drop-shadows pesados — solo ambient (4-6% opacity, 40-60px blur)
- ❌ NO center long-form body — siempre left-align
- ✅ Pill buttons (`rounded-full`)
- ✅ Glass nav: 70% opacity + 20px backdrop-blur
- ✅ Bullets en copper, 4px circular
- ✅ Layouts asimétricos ("Editorial Flow")
- ✅ Atelier Tray: signature card con corner radius solo en 2 esquinas opuestas

## Material fuente (Drive)

Todo el copy y assets vienen del Drive de Lara/Rebeca. Carpeta padre: `1au95B5GCyKaD5o4s6ZSG6jQL02bnQHE7`.

| File | Drive ID | Uso |
|------|----------|-----|
| `BRANDING/DESIGN.md` | `1oiJjAm5S8fZZEjaVixd-oBUynomLNq8i` | Design system completo |
| `BRANDING/LOGO/LOGO.png` | `1wN-Da7QG5-6XHCUW9Q14Nq_LYZAbmxif` | Logo principal (en `public/brand/logo.png`) |
| Pitch Deck B2B `.pptx` | `1OG9ZW9sZVwPg0UdQ3nNzvmMYah4pBFsf` | Copy primario |
| Pitch 45min `.docx` | `1jMwoWskOMZ4TFux_ptNk3i9C6i5yZbTR` | Quotes founders verbatim |
| Textos Finales R2 BIG12 | `1L2I_I_S28-b8h1hlGP1qg50yle7SfXlB_UHZw2dxPD4` | Copy más reciente |
| Formulario PROSA v2 ZENTI | `1g9hB6RNTF7xnLlwGOMGmAK-JkMH1l2G-FdjxljxPoFI` | Stats + escalabilidad |
| Renders 3D (4 jpg) | folder `1yXaUO5rVY9Un4ocuX5wp430CtcgsH1lE` | Hero + visuales |

**Acceso al Drive:** vía MCP `mcp__Google_Drive__*`. Si la sesión expira, hacer `/mcp` para re-autenticar.

## Workflow

1. **Antes de cambios grandes:** leer este archivo + `docs/BACKLOG.md` + el plan
2. **Después de cambios:** actualizar `docs/CHANGELOG.md` con el delta
3. **Si surgen tareas:** agregar a `docs/BACKLOG.md`
4. **Commit messages:** convencionales (`feat:`, `fix:`, `chore:`, `docs:`)
5. **Branch:** seguir trabajando en `claude/setup-noa-landing-To6nw` hasta que se mergee a `main`
6. **No commits a `main` directo** sin PR review

## Multi-LLM dev stack

Las API keys (Anthropic, OpenAI, Gemini) están en `.env.local` (gitignored). Estrategia de routing por costo está en `docs/dev-stack.md`. Estos keys son solo para el dev workflow — **el landing en sí no usa ninguna API de LLM en runtime.**

## Cosas importantes que no son obvias

- El nombre del repo es `noa-landing` (lowercase). La carpeta local es `NOA-LANDING` (caps, por motivos legacy). `create-next-app` rechaza nombres con caps — por eso el setup inicial fue manual.
- Tailwind v4 NO usa `tailwind.config.js`. Todo está en `globals.css` vía `@theme`. Si ves alguien creando un `tailwind.config.js`, está equivocado.
- "Nexa" es la fuente original del brandbook pero es comercial. Usamos `DM Sans` como sustituto free. Si NOACORE compra Nexa, se swapea la variable `--font-body` en `globals.css`.
- El contenido del landing NO es placeholder — es copy real del pitch deck. No reemplazar con lorem ipsum.
- NOACORE ≠ NOA. NOACORE es la empresa (SPA). NOA es el producto (cabina).
- Pivote estratégico de BIG12: *"El negocio no es la cabina, sino el protocolo sensorial licenciable"*. El landing debe reforzar esto.
