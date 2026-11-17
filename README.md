# Aulemo web

Sitio comercial de **Aulemo**, la plataforma educativa para colegios de Costa Rica, un producto de **Noren**. Es una página de aterrizaje de una sola página, pensada para SEO y para captar solicitudes de demo y cotización. No incluye blog.

Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript estricto, Tailwind CSS v4, `lucide-react` y `zod`.

## Comandos

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # compilación de producción
pnpm lint       # ESLint
pnpm typecheck  # next typegen + tsc --noEmit
```

## Paleta

El sitio usa una paleta neutra. El azul `#5266EB` se reserva para las acciones primarias (botón primario), el foco y el punto del logo. La aplicación Aulemo (proyecto `guard`) sigue usando el manual de marca verde; la diferencia es intencional por ahora.

| Token | Valor |
| --- | --- |
| `superficie` | `#F7F7F9` |
| `elevada` | `#FFFFFF` |
| `hundida` | `#EEEFF3` |
| `linea` | `#E3E5EB` |
| `linea-fuerte` | `#8A8F9E` |
| `tinta` | `#0A0B0F` |
| `tinta-suave` | `#5A5F6E` |
| `primario` | `#5266EB` |
| `primario-fuerte` | `#3F51D6` |
| `sobre-primario` | `#FFFFFF` |
| `primario-suave` | `#ECEEFD` |
| `acento` | `#7B8BF2` |
| `acento-claro` | `#A9B3F7` |
| `profundo` | `#171A23` |
| `dk-tinta` | `#E8EAF2` |
| `dk-suave` | `#9AA1B8` |

Los colores de estado (`exito`, `aviso`, `peligro`, `info`) se conservan para las maquetas de la aplicación. No se usan degradados en fondos.

## Variables de entorno

Copie `.env.example` a `.env.local` y complete los valores.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio. Se usa en metadatos, canonical, sitemap, robots y datos estructurados. Por defecto `http://localhost:3000`. |
| `NEXT_PUBLIC_APP_URL` | URL de la aplicación Aulemo. Si está definida se muestran los enlaces «Ingresar» (menú, menú móvil y pie); si no, se ocultan. |
| `BREVO_API_KEY` | Clave de la API de Brevo. Solo servidor. |
| `BREVO_SENDER_EMAIL` | Remitente verificado en Brevo. Solo servidor. |
| `CONTACTO_DESTINO` | Correo que recibe las solicitudes de demo. Solo servidor. |

## Estructura

```
src/app/
  layout.tsx, page.tsx, globals.css
  icon.svg, opengraph-image.tsx, robots.ts, sitemap.ts
  acciones/solicitar-demo.ts     Server Action del formulario
src/lib/
  sitio.ts                       constantes del sitio y preguntas frecuentes
  esquemas.ts                    esquema zod del formulario
  revelar.ts                     atributos para las animaciones de aparición
src/components/
  marca/                         logo (símbolo solo con la palabra, un color) y símbolo en mosaico
  secciones/                     menú, portada, escenario, franja, declaración,
                                 personalización, garantías, preguntas,
                                 contacto y pie
  cotizacion/                    contexto de cotización, cotizador y formulario
  ui/                            botón, ícono, revelador y piezas compartidas
```

## Formulario de demo

- El cotizador (estudiantes y profesores) y el formulario comparten el mismo estado. «Solicitar cotización» desplaza la página al formulario y enfoca el primer campo.
- La Server Action valida todo en el servidor con `zod` y devuelve mensajes en español por campo.
- Honeypot: el campo oculto `sitio_web`. Si viene con contenido se responde éxito sin enviar nada.
- El envío usa la API transaccional de Brevo (`POST https://api.brevo.com/v3/smtp/email`) con las variables `BREVO_*` y `CONTACTO_DESTINO`.
- Si falta alguna de las tres variables: en desarrollo se responde éxito y se avisa por consola; en producción se muestra el error general. Ante un error de Brevo o de red también se muestra el error general con el contacto por WhatsApp.

## Pendientes

- Comprar el dominio y definir `NEXT_PUBLIC_SITE_URL`.
- Definir la URL de la app para «Ingresar» (`NEXT_PUBLIC_APP_URL`).
- Logo de Noren (hoy es una «N» simple).
- Páginas legales (privacidad y términos) cuando el abogado entregue el texto.
- Configurar Brevo (remitente verificado y correo destino).
- Conectar el proyecto con Vercel y GitHub.
