# Stack de desarrollo multi-LLM — NOA Landing

Estrategia de routing por costo y capacidad para minimizar gasto de tokens durante el desarrollo.

## Modelos disponibles (en `.env.local`)

| Provider   | Modelo recomendado         | Sweet spot |
|------------|----------------------------|------------|
| Anthropic  | `claude-opus-4-7`          | Razonamiento más profundo, arquitectura, debugs sutiles |
| Anthropic  | `claude-sonnet-4-6`        | Default productivo: código nuevo, refactors, sesiones largas |
| Anthropic  | `claude-haiku-4-5`         | Edits puntuales, fixes pequeños, validaciones |
| OpenAI     | `gpt-5` (frontera)         | Tool-use complejo, agentes, debugging difícil |
| OpenAI     | `gpt-5.5` / `gpt-5.4`      | Versiones más baratas con buena performance — default OpenAI |
| OpenAI     | `gpt-5-mini`               | Edits rápidos OpenAI, integración tools liviana |
| Google     | `gemini-3.5-pro`           | Frontera Google: razonamiento + context ultra-largo |
| Google     | `gemini-omni`              | Multimodal nativo (image / video / audio), análisis de renders |
| Google     | `gemini-2.5-pro`           | Backup estable, context 1M tokens |
| Google     | `gemini-2.5-flash`         | Volumen alto, summaries, drafts baratos |

> **Nota:** Gemini 3.5 y Gemini Omni son los modelos más recientes de Google. Verificá el modelo exacto al llamar a la API ya que los nombres pueden variar entre `gemini-3.5-pro-latest`, `gemini-3.5-pro-002`, etc.

## Reglas de routing por tarea

### Usá **Gemini Flash 2.5** (más barato) para:
- Resúmenes de documentos largos (briefs, postulación CORFO)
- Drafts iniciales de copy en español
- Análisis de PDFs del Drive
- Transcripción/limpieza de pitch deck

### Usá **Gemini Omni** (multimodal nativo) para:
- Analizar los renders 3D de la cabina NOA (descripción visual, generación de alt-text)
- Procesar el pitch video `NOA Final 2.mp4` (transcripción + análisis de framing)
- Generar variaciones de OG image / hero visual
- Audio → texto si hay grabaciones de pitch

### Usá **Haiku / GPT-5-mini** para:
- Pequeños fixes de TypeScript
- Renombrar variables / componentes
- Agregar props a interfaces existentes
- Validar accesibilidad de un componente puntual

### Usá **Claude Sonnet / GPT-5** para:
- Diseñar/refactorizar la arquitectura de secciones
- Crear componentes complejos (Atelier Tray, glass navbar)
- Debug de issues sutiles (SSR, hidratación, Tailwind v4)
- Escribir el contenido final con tono de marca

### Usá **Gemini 3.5 Pro** (frontera Google) para:
- Cuando necesités analizar todo el repo + Drive + brandbook en un solo prompt (context ultra-largo)
- Razonamiento profundo cuando Claude está rate-limited
- Cross-check de decisiones arquitectónicas (comparar contra otro modelo frontier)

## Setup local

```bash
# Copiar template
cp .env.example .env.local

# Editar con tus keys
$EDITOR .env.local
```

Los keys quedan en `.env.local` (gitignored). El landing **no usa estas APIs en runtime** — son solo para tu workflow de desarrollo.

## Tools recomendadas para CLI/IDE

- **Cursor** — multi-model, switch rápido entre Claude/GPT/Gemini
- **Cline** (VS Code extension) — agéntico, soporta los 3 providers
- **aider** — CLI, excelente para edits en bulk con Gemini Flash
- **Claude Code** — esta sesión, optimizada para tareas largas

## Anti-patrón a evitar

❌ Usar Claude Sonnet para tareas que Haiku/Gemini Flash resuelven igual
❌ Mandar todo el contexto del repo cuando solo necesitás 1 archivo
❌ Pedir refactors masivos en un solo prompt sin descomponer
