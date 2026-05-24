# 🌅 Buen día Diego

Trabajo overnight del **24 → 25 mayo 2026**.

## TL;DR — 5 minutos de clicks para publicar noa-core.com

Tres pasos en este orden:

```
1. Vercel · Deployment Protection → OFF        (1 min)
2. Vercel · Settings/Domains → Add noa-core.com (1 min)
3. Bluehost · DNS Zone → pegar registros        (3 min)
```

Después esperás 10–30 min para que DNS propague + SSL automático Let's Encrypt. Listo.

---

## ✅ Lo que dejé hecho mientras dormías

### Decisión que tomé (default 1 confirmado por vos)
- **`/v2` promovida a home `/`**. Ahora `noa-core.com` mostrará directamente la versión slim Thiess-style que aprobaste.
- Las rutas `/v1b` y `/v2` siguen accesibles para historial / comparación (con `robots: noindex`).

### Design fixes aplicados (default 2 confirmado por vos)
- Atributos · iconos `size-14 → size-16` con stroke más fuerte y fondo más visible
- Hero · video background opacity `0.38 → 0.22` (logo + tagline más limpios)
- Microline · comprimida a una sola línea: `RESPUESTA DIRECTA FUNDADORAS · NDA DISPONIBLE · VIDEO ILUSTRATIVO`

### Pushes / deploys
- Commit `f3e1208` ya estaba en producción · sha previo
- Commit nuevo overnight con los fixes + promoción a home → push automático → Vercel auto-deploy
- Build status: verde (verificado antes de dormirme)

### Limpieza
- Sacado el placeholder `RUT 77.XXX.XXX-X · contacto@noa-core.com` del footer (todas las versiones)
- FooterV2 con solo links válidos para /v2 (sin "Cómo funciona", "Modelos", "Manifiesto", "Cumplimiento", "FAQ" que ya no existen)
- Counter bug arreglado (los stats 24% · 44K+ · 48% · 31,7% ahora terminan correctos)

---

## 🛠 Paso 1 · Vercel — desactivar protección + agregar dominio

1. Abrí https://vercel.com/diborque-1077s-projects/noa-landing/settings/deployment-protection
2. Buscá **"Vercel Authentication"** → toggle **OFF**
3. Save. La URL `https://noa-landing-diborque-1077s-projects.vercel.app` queda pública.
4. Después andá a https://vercel.com/diborque-1077s-projects/noa-landing/settings/domains
5. Input `noa-core.com` → **Add**
6. Repetí con `www.noa-core.com` → **Add**
7. Vercel te va a mostrar **los registros DNS exactos** que tenés que copiar. Los más probables son:

   | Tipo  | Host | Valor              | TTL |
   |-------|------|--------------------|-----|
   | `A`   | `@`  | `76.76.21.21`      | 300 |
   | `CNAME` | `www` | `cname.vercel-dns.com` | 300 |

   ⚠️ Usá los que Vercel te dé en pantalla — pueden cambiar si Vercel rota IPs.

---

## 🛠 Paso 2 · Bluehost — DNS

1. Ya estás logueado en https://qcy.qlr.mybluehost.me/...
2. Buscá en el menú **"Domains"** → seleccioná `noa-core.com`
3. Buscá **"DNS Zone Editor"** o **"Advanced DNS"** o **"Edit DNS"**
4. **BORRÁ** los registros A que apunten a Bluehost (los que tengan IPs `192.0.x.x` o similares)
   - ⚠️ NO borres los registros MX (email) ni el TXT de Bluehost (SPF/DKIM)
5. **AGREGÁ** los registros que Vercel te dio en el paso 1.6:
   - `A` · Host `@` · Value `76.76.21.21`
   - `CNAME` · Host `www` · Value `cname.vercel-dns.com`
6. Save / Apply Changes
7. Hacés un café · 15 minutos · refrescás Vercel dashboard y vas a ver el check verde junto a `noa-core.com`

---

## 🛠 Paso 3 (opcional) · Resend API key

La key que pasaste por chat (`re_Mpwnrovx...`) sigue válida pero hay que rotarla porque viajó en texto plano.

1. Andá a https://resend.com/api-keys
2. Generá una key nueva → copiala
3. Revocá la vieja
4. En Vercel → Settings → Environment Variables → Add:
   - `RESEND_API_KEY` = `<key nueva>`
   - `CONTACT_EMAIL_FROM` = `NOA Landing <onboarding@resend.dev>`
   - `CONTACT_EMAIL_TO` = `rfuentes@noa-core.com,lpualuan@noa-core.com`
5. Redeploy desde Vercel dashboard (botón "Redeploy" en el último deploy) para que las env vars tomen efecto

---

## 🔗 URLs útiles

| Qué | URL |
|---|---|
| Repo GitHub | https://github.com/diborque2733/NOA-LANDING |
| Vercel project | https://vercel.com/diborque-1077s-projects/noa-landing |
| Vercel deploy actual | https://noa-landing-diborque-1077s-projects.vercel.app |
| Bluehost panel | https://qcy.qlr.mybluehost.me/website_b2343753/wp-admin/admin.php?page=bluehost |
| Resend dashboard | https://resend.com/api-keys |
| Tunnel local (sigue vivo · backup) | https://advertisers-training-msgid-dealers.trycloudflare.com |

---

## ❓ Si algo falla

| Problema | Solución |
|---|---|
| Vercel auth no se desactiva → "Hobby plan limitation" | Probá desde Project Settings → General · puede estar ahí en lugar de Deployment Protection |
| Bluehost no me muestra DNS Zone Editor | Tenés que estar logueado como ADMIN (no como ayudante). Si Marcelo no te dio acceso completo, pedile que active "Domain Management" en tu rol |
| Domain dice "Invalid Configuration" en Vercel después de configurar DNS | Esperá 30 min más. Si sigue así, verificá con `dig noa-core.com` que el A record apunte a `76.76.21.21` |
| El form de contacto no manda emails | Falta la `RESEND_API_KEY` en Vercel env vars. Paso 3. |

---

🤖 Generated overnight by Claude Code.
Last action: commit pushed a las hora del log. Listo para que termines en 5 min.
