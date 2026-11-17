"use client";

import Link from "next/link";
import { useActionState, type ReactNode } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { solicitarDemo } from "@/app/acciones/solicitar-demo";
import { Boton } from "@/components/ui/boton";
import { Icono } from "@/components/ui/icono";
import {
  cargos,
  estadoInicialDemo,
  type CampoDemo,
  type EstadoDemo,
} from "@/lib/esquemas";
import { useCotizacion } from "./contexto-cotizacion";

const claseCampo =
  "h-12 w-full rounded-[14px] border border-[rgba(138,143,158,.55)] bg-white/85 px-3.5 text-[15px] transition-[border-color,box-shadow] duration-200 focus:border-primario focus:shadow-[0_0_0_4px_rgba(82,102,235,.14)] focus:outline-none aria-[invalid=true]:border-peligro";

type PropiedadesCampo = {
  campo: CampoDemo;
  etiqueta: string;
  completo?: boolean;
  error?: string;
  children: (propiedades: {
    id: string;
    name: CampoDemo;
    "aria-invalid": true | undefined;
    "aria-describedby": string | undefined;
  }) => ReactNode;
};

function Campo({ campo, etiqueta, completo, error, children }: PropiedadesCampo) {
  const id = `campo-${campo}`;
  const idError = `error-${campo}`;

  return (
    <div className={`flex flex-col gap-[7px] ${completo ? "col-span-full" : ""}`}>
      <label htmlFor={id} className="text-[13.5px] leading-none font-semibold">
        {etiqueta}
      </label>
      {children({
        id,
        name: campo,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? idError : undefined,
      })}
      {error ? (
        <p id={idError} className="text-[12.5px] leading-[1.3] font-medium text-peligro">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormularioDemo() {
  const cotizacion = useCotizacion();

  const enviar = async (
    previo: EstadoDemo,
    datos: FormData,
  ): Promise<EstadoDemo> => {
    const resultado = await solicitarDemo(previo, datos);
    if (resultado.estado === "exito") cotizacion.reiniciar();
    return resultado;
  };

  const [estado, accion, pendiente] = useActionState(enviar, estadoInicialDemo);
  const errores = estado.errores;
  const valores = estado.valores;

  return (
    <form
      action={accion}
      noValidate
      className="vidrio rounded-[16px] p-9 movil:rounded-[14px] movil:px-[18px] movil:py-6"
    >
      <h3 className="text-2xl leading-[1.2] font-bold tracking-[-.02em]">
        Solicitar demo
      </h3>
      <p className="mt-2 text-[15px] text-tinta-suave">
        Complete el formulario y le contactamos para coordinar.
      </p>
      <div className="mt-[26px] grid grid-cols-2 gap-3.5 movil:grid-cols-1">
        <Campo campo="nombre" etiqueta="Nombre completo" error={errores.nombre}>
          {(propiedades) => (
            <input
              {...propiedades}
              autoComplete="name"
              required
              defaultValue={valores.nombre ?? ""}
              className={claseCampo}
            />
          )}
        </Campo>
        <Campo campo="cargo" etiqueta="Cargo" error={errores.cargo}>
          {(propiedades) => (
            <select
              {...propiedades}
              required
              defaultValue={valores.cargo ?? ""}
              className={`${claseCampo} campo-select`}
            >
              <option value="">Seleccione</option>
              {cargos.map((cargo) => (
                <option key={cargo} value={cargo}>
                  {cargo}
                </option>
              ))}
            </select>
          )}
        </Campo>
        <Campo
          campo="colegio"
          etiqueta="Centro educativo"
          completo
          error={errores.colegio}
        >
          {(propiedades) => (
            <input
              {...propiedades}
              required
              defaultValue={valores.colegio ?? ""}
              className={claseCampo}
            />
          )}
        </Campo>
        <Campo
          campo="estudiantes"
          etiqueta="Cantidad de estudiantes"
          error={errores.estudiantes}
        >
          {(propiedades) => (
            <input
              {...propiedades}
              type="number"
              inputMode="numeric"
              min={0}
              value={cotizacion.estudiantes}
              onChange={(evento) =>
                cotizacion.cambiar("estudiantes", evento.target.value)
              }
              className={claseCampo}
            />
          )}
        </Campo>
        <Campo
          campo="profesores"
          etiqueta="Cantidad de profesores"
          error={errores.profesores}
        >
          {(propiedades) => (
            <input
              {...propiedades}
              type="number"
              inputMode="numeric"
              min={0}
              value={cotizacion.profesores}
              onChange={(evento) =>
                cotizacion.cambiar("profesores", evento.target.value)
              }
              className={claseCampo}
            />
          )}
        </Campo>
        <Campo campo="correo" etiqueta="Correo" error={errores.correo}>
          {(propiedades) => (
            <input
              {...propiedades}
              type="email"
              autoComplete="email"
              required
              defaultValue={valores.correo ?? ""}
              className={claseCampo}
            />
          )}
        </Campo>
        <Campo campo="telefono" etiqueta="Teléfono" error={errores.telefono}>
          {(propiedades) => (
            <input
              {...propiedades}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              defaultValue={valores.telefono ?? ""}
              className={claseCampo}
            />
          )}
        </Campo>
        <Campo
          campo="mensaje"
          etiqueta="Mensaje (opcional)"
          completo
          error={errores.mensaje}
        >
          {(propiedades) => (
            <textarea
              {...propiedades}
              defaultValue={valores.mensaje ?? ""}
              className={`${claseCampo} h-24 resize-y py-3`}
            />
          )}
        </Campo>
      </div>
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="campo-sitio-web">Sitio web</label>
        <input
          id="campo-sitio-web"
          name="sitio_web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <Boton type="submit" tamano="grande" ancho disabled={pendiente} className="mt-[22px]">
        {pendiente ? "Enviando…" : "Solicitar demo"}
        {pendiente ? null : <Icono icono={ArrowRight} tamano="sm" />}
      </Boton>
      {estado.estado === "exito" ? (
        <div
          role="status"
          className="mt-[22px] flex items-center gap-2.5 rounded-2xl bg-[#E3F3E8] px-[18px] py-4 text-[14.5px] leading-[1.4] font-semibold text-exito"
        >
          <Icono icono={CircleCheck} />
          Recibimos su solicitud. Le contactaremos pronto.
        </div>
      ) : null}
      {estado.estado === "error" && estado.mensaje ? (
        <div
          role="alert"
          className="mt-[22px] rounded-2xl bg-[#FBE6E3] px-[18px] py-4 text-[14.5px] leading-[1.4] font-semibold text-peligro"
        >
          {estado.mensaje}
        </div>
      ) : null}
      <p className="mt-3.5 text-center text-[12.5px] text-tinta-suave">
        Al enviar, acepta que usemos estos datos para responder su solicitud,
        según nuestra{" "}
        <Link href="/privacidad" className="underline underline-offset-2">
          Política de privacidad
        </Link>
        .
      </p>
    </form>
  );
}
