"use server";

import {
  camposDemo,
  esquemaDemo,
  type CampoDemo,
  type DatosDemo,
  type EstadoDemo,
} from "@/lib/esquemas";

const mensajeErrorGeneral =
  "No pudimos enviar su solicitud. Contáctenos al 8505-5556.";

function leerTexto(datos: FormData, campo: string) {
  const valor = datos.get(campo);
  return typeof valor === "string" ? valor : "";
}

function construirTexto(datos: DatosDemo) {
  const indicado = (valor: string | number | undefined) =>
    valor === undefined ? "No indicado" : String(valor);

  return [
    `Nombre: ${datos.nombre}`,
    `Cargo: ${datos.cargo}`,
    `Centro educativo: ${datos.colegio}`,
    `Cantidad de estudiantes: ${indicado(datos.estudiantes)}`,
    `Cantidad de profesores: ${indicado(datos.profesores)}`,
    `Correo: ${datos.correo}`,
    `Teléfono: ${indicado(datos.telefono)}`,
    `Mensaje: ${indicado(datos.mensaje)}`,
  ].join("\n");
}

export async function solicitarDemo(
  _previo: EstadoDemo,
  datos: FormData,
): Promise<EstadoDemo> {
  if (leerTexto(datos, "sitio_web").trim() !== "") {
    return { estado: "exito", errores: {}, valores: {} };
  }

  const valores: Partial<Record<CampoDemo, string>> = {};
  for (const campo of camposDemo) {
    valores[campo] = leerTexto(datos, campo);
  }

  const resultado = esquemaDemo.safeParse(valores);

  if (!resultado.success) {
    const errores: Partial<Record<CampoDemo, string>> = {};
    for (const problema of resultado.error.issues) {
      const campo = problema.path[0];
      if (typeof campo === "string" && !(campo in errores)) {
        errores[campo as CampoDemo] = problema.message;
      }
    }
    return { estado: "error", errores, valores };
  }

  const solicitud = resultado.data;
  const claveApi = process.env.BREVO_API_KEY;
  const correoRemitente = process.env.BREVO_SENDER_EMAIL;
  const correoDestino = process.env.CONTACTO_DESTINO;

  if (!claveApi || !correoRemitente || !correoDestino) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "Envío de correo no configurado: se omite el envío de la solicitud de demo.",
      );
      return { estado: "exito", errores: {}, valores: {} };
    }
    return {
      estado: "error",
      mensaje: mensajeErrorGeneral,
      errores: {},
      valores,
    };
  }

  try {
    const respuesta = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": claveApi,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: correoRemitente, name: "Aulemo" },
        to: [{ email: correoDestino }],
        replyTo: { email: solicitud.correo, name: solicitud.nombre },
        subject: `Solicitud de demo · ${solicitud.colegio.replace(/\s+/g, " ")}`,
        textContent: construirTexto(solicitud),
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!respuesta.ok) {
      return {
        estado: "error",
        mensaje: mensajeErrorGeneral,
        errores: {},
        valores,
      };
    }
  } catch {
    return {
      estado: "error",
      mensaje: mensajeErrorGeneral,
      errores: {},
      valores,
    };
  }

  return { estado: "exito", errores: {}, valores: {} };
}
