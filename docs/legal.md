# Textos legales de Aulemo

Las páginas `/privacidad` (Política de privacidad) y `/terminos` (Términos y condiciones) se pueden publicar hoy con todos los datos de la empresa vacíos. Cuando Noren quede inscrita, solo hay que completar `src/lib/legal.ts`; no se toca ningún otro archivo.

## Campos de `src/lib/legal.ts`

| Campo | Qué es | Dónde aparece |
| --- | --- | --- |
| `razonSocial` | Nombre registrado, por ejemplo «Noren Sociedad Anónima». | Privacidad (sección 1) y Términos (sección 1, definiciones), junto a «Noren». |
| `tipoCedula` | `"jurídica"` o `"física"`. | Igual que `cedula`; solo se muestra si hay cédula. |
| `cedula` | Número de cédula de la persona física o jurídica. | Privacidad (sección 1) y Términos (sección 1): «Noren, razón social, cédula jurídica X». |
| `domicilio` | Provincia, cantón, distrito y señas. | Privacidad (sección 1), Términos (sección 1) y Términos (sección «Notificaciones y contacto»). |
| `provincia` | Provincia usada para la jurisdicción. | Términos, «Ley aplicable y jurisdicción»: con valor, «los tribunales competentes de la provincia de X»; sin valor, «los tribunales competentes de la República de Costa Rica». |
| `correoPrivacidad` | Correo para solicitudes de datos personales. | Privacidad (secciones «Cómo ejercer sus derechos» y «Contacto»). Si está vacío se usa `correoLegal`; si ambos faltan, el enlace «Contáctenos» de WhatsApp. |
| `correoLegal` | Correo para asuntos legales y contractuales. | Términos (cuentas y «Notificaciones y contacto»). Si está vacío se usa `correoPrivacidad`; si ambos faltan, el enlace de WhatsApp. |
| `fechaVigencia` | Fecha de última actualización, por ejemplo «13 de noviembre de 2026». | «Última actualización» al inicio de ambas páginas. Actualícela en cada cambio de texto. |
| `inscripcionProdhab` | Número de inscripción de la base de datos ante la PRODHAB. | Privacidad, «Cómo ejercer sus derechos»: el párrafo solo aparece si hay valor. |
| `regionDatos` | Región del proyecto de Supabase, por ejemplo «Estados Unidos (us-east-1)». | Privacidad, «Proveedores y transferencia internacional»: la frase solo aparece si hay valor. |

El teléfono de WhatsApp nunca se escribe en los textos: el enlace sale de `whatsapp.enlace` en `src/lib/sitio.ts`.

## Otros archivos

- `src/components/legal/contenido-privacidad.tsx` y `contenido-terminos.tsx`: el texto de cada sección.
- `src/components/legal/documento-legal.tsx`: el diseño (índice lateral, índice desplegable en móvil).
- Pie de página, aviso del formulario de demo y `sitemap.ts` ya enlazan ambas páginas.

## Revisión legal antes de publicar de forma definitiva

Se recomienda que un abogado costarricense revise ambos textos antes de la publicación final, en particular:

- Los plazos de respuesta a derechos de los titulares (hoy se remiten a «los plazos que establece la normativa»).
- Las cláusulas de pago, devoluciones, prorrateo y derechos del consumidor (Ley 7472), que hoy se remiten a la propuesta o acuerdo firmado con cada institución.
- La limitación de responsabilidad y la jurisdicción.
- La transferencia internacional de datos y el tratamiento de datos de menores.

## Registro de la base de datos ante la PRODHAB

Debe consultarse con el abogado si la base de datos de Aulemo debe inscribirse ante la PRODHAB (Ley 8968 y Decreto Ejecutivo 37554-JP), y quién debe hacerlo: la institución, por ser la responsable de la base de datos, o Noren por sus propias bases (formulario del sitio web y contactos comerciales). Si se inscribe, se coloca el número en `inscripcionProdhab`.
