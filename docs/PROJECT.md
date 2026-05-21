# NOA Landing — Project Overview

## Misión del proyecto

Construir el landing page institucional de **NOACORE SPA** para su producto **NOA**, alineado al pivote estratégico de BIG12 BUILD 2026: posicionar el negocio como **protocolo neuro-sensorial licenciable**, no como manufactura de cabinas.

## Objetivos

1. **Posicionamiento B2B premium** — comunicar credibilidad técnica frente a áreas HSEC/Salud Ocupacional/Operaciones de grandes mineras (Codelco, BHP, AMSA, Thiess, Anglo, etc.)
2. **Lead generation calificado** — capturar solicitudes de piloto con formulario directo a las fundadoras
3. **Soporte a postulación CORFO / Start-Up Chile** — el landing es parte del paquete BIG12 (presencia web requerida)
4. **Diferenciación clara** vs SmartCap/Optalert (alerta), pods urbanos (RelaxSpace), y Recharge Rooms hospitalarios
5. **Escalabilidad** del mensaje — preparado para LATAM (Perú, México) y luego Australia/Europa

## Audiencia primaria

- **Compradores B2B:** Salud Ocupacional, HSEC, RRHH, Operaciones, Innovación de mineras
- **Sponsors internos:** Gerentes de Operaciones, Tecnología, Innovación
- **Stakeholders CORFO / Start-Up Chile:** evaluadores BIG12, ZENTI IN3, partners
- **Talento técnico:** futuros colaboradores (cardiólogo, sensorial, estructural, etc.)

## Roadmap de alto nivel

| Fase | Hito | Entregable |
|------|------|------------|
| **v1.0** (ahora) | Landing en línea con copy del pitch | 13 secciones, deploy Vercel, repo privado |
| **v1.1** | Optimización SEO + OG dinámico | Lighthouse 95+, OG generado, sitemap |
| **v1.2** | Casos de éxito (post primer piloto) | Página `/casos/[mina]` con resultados |
| **v1.3** | Versión inglés para Australia/Europa | i18n `/en` + traducciones |
| **v2.0** | Portal de cliente / dashboard piloto | Login + telemetría compartida con cliente |

## Stakeholders

| Persona | Rol | Contacto |
|---------|-----|----------|
| **Rebeca Fuentes** | Co-fundadora, Sales, Team Leader CORFO | rfuentes@noa-core.com |
| **Lara Pualuan** | Co-fundadora, Diseño espacial / Producto | lpualuan@noa-core.com |
| **Diego Borque** | Owner del repo + AI dev workflow | diborque@gmail.com |
| **ZENTI IN3** | Asesoría CORFO / BIG12 | (vía Drive) |

## Restricciones / decisiones tomadas

- ✅ **Stack:** Next.js 15 + Tailwind v4 + TypeScript (decidido, no se discute)
- ✅ **Design system:** Industrial Atelier (del `BRANDING/DESIGN.md` de Lara, source of truth)
- ✅ **Hosting:** Vercel `gru1` (São Paulo) — más cerca de Chile
- ✅ **Email form:** Resend (no SMTP propio)
- ✅ **Repo:** privado, GitHub `diborque2733/noa-landing`
- ✅ **i18n v1:** solo español (LATAM-first). Inglés en v1.3+
- ⚠️ **Fuente comercial Nexa:** sustituida por DM Sans hasta que se compre licencia
- ⚠️ **Video pitch en hero:** validar peso de `NOA Final 2.mp4` antes de incluir

## Métricas de éxito

| Métrica | Target v1 |
|---------|-----------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | ≥ 90 |
| Bundle JS inicial | < 150 kB gzipped |
| LCP | < 2.5s |
| Formulario contacto submit rate | tracked vía Resend logs |
