import { z } from "zod";

export const cargos = [
  "Director(a)",
  "Coordinación académica",
  "Coordinación técnica",
  "Docente",
  "Junta administrativa",
  "Otro",
] as const;

export const camposDemo = [
  "nombre",
  "cargo",
  "colegio",
  "estudiantes",
  "profesores",
  "correo",
  "telefono",
  "mensaje",
] as const;

export type CampoDemo = (typeof camposDemo)[number];

const mensajeCantidad = "Ingrese un número entero entre 0 y 20000.";

const cantidadOpcional = z
  .string()
  .trim()
  .refine((valor) => valor === "" || /^\d{1,5}$/.test(valor), mensajeCantidad)
  .transform((valor) => (valor === "" ? undefined : Number(valor)))
  .refine((valor) => valor === undefined || valor <= 20000, mensajeCantidad);

export const esquemaDemo = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Ingrese su nombre completo.")
    .max(120, "El nombre no puede superar los 120 caracteres."),
  cargo: z.enum(cargos, { error: "Seleccione su cargo." }),
  colegio: z
    .string()
    .trim()
    .min(2, "Ingrese el nombre del centro educativo.")
    .max(160, "El nombre no puede superar los 160 caracteres."),
  estudiantes: cantidadOpcional,
  profesores: cantidadOpcional,
  correo: z
    .string()
    .trim()
    .min(1, "Ingrese su correo.")
    .pipe(
      z
        .email("Ingrese un correo válido.")
        .max(254, "El correo es demasiado largo."),
    ),
  telefono: z
    .string()
    .trim()
    .refine(
      (valor) =>
        valor === "" ||
        (valor.length >= 8 && valor.length <= 20 && /^[\d\s+-]+$/.test(valor)),
      "Ingrese un teléfono válido, de 8 a 20 caracteres (números, espacios, + o -).",
    )
    .transform((valor) => (valor === "" ? undefined : valor)),
  mensaje: z
    .string()
    .trim()
    .max(1000, "El mensaje no puede superar los 1000 caracteres.")
    .transform((valor) => (valor === "" ? undefined : valor)),
});

export type DatosDemo = z.output<typeof esquemaDemo>;

export type EstadoDemo = {
  estado: "inicial" | "exito" | "error";
  mensaje?: string;
  errores: Partial<Record<CampoDemo, string>>;
  valores: Partial<Record<CampoDemo, string>>;
};

export const estadoInicialDemo: EstadoDemo = {
  estado: "inicial",
  errores: {},
  valores: {},
};
