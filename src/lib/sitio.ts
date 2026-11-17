export const nombreSitio = "Aulemo";

export const urlSitio = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export const urlApp = process.env.NEXT_PUBLIC_APP_URL || undefined;

export const whatsapp = {
  enlace: "https://wa.me/50685055556",
  texto: "8505-5556",
};

export const tituloPorDefecto =
  "Aulemo · Plataforma educativa para colegios de Costa Rica";

export const descripcion =
  "Asistencia, calificaciones, boletas y comunicados en una sola plataforma. Aulemo se adapta a su centro educativo y no tiene costo para la institución. Un producto de Noren.";

export const preguntasFrecuentes = [
  {
    pregunta: "¿El colegio tiene que pagar algo?",
    respuesta:
      "No. Aulemo no tiene costo para la institución. Cada encargado realiza un único pago anual por estudiante, con IVA incluido.",
  },
  {
    pregunta: "¿Funciona sin internet?",
    respuesta:
      "Sí. Todo lo que hace el profesor (asistencia, notas, evaluaciones, boletas y agenda) se guarda en su dispositivo y se envía automáticamente cuando vuelve la conexión.",
  },
  {
    pregunta: "¿Qué se necesita para usarlo?",
    respuesta:
      "Un celular, tablet o computadora con navegador. Aulemo se puede instalar como una app desde el navegador, sin pasar por tiendas de aplicaciones.",
  },
  {
    pregunta: "¿Sirve para pasar las notas al SEA?",
    respuesta:
      "Sí. Cada profesor descarga un Excel por grupo con los porcentajes calculados, listo para trasladar al SEA sin trabajo extra.",
  },
  {
    pregunta: "¿Qué pasa si encontramos un error?",
    respuesta:
      "Contáctenos cualquier día del año, de 7 a. m. a 5 p. m. Lo corregimos en un plazo de 30 minutos a 48 horas, según su complejidad.",
  },
  {
    pregunta: "¿Quién puede ver la información de los estudiantes?",
    respuesta:
      "Solo las personas autorizadas según su rol. Cada encargado ve únicamente la información de sus hijos, y no compartimos los datos con nadie.",
  },
] as const;
