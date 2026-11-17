import { Boton } from "@/components/ui/boton";
import { revelar } from "@/lib/revelar";

const incluye = [
  {
    titulo: "Soporte los 365 días del año",
    texto:
      "De 7 a. m. a 5 p. m., incluso en vacaciones, feriados y fines de semana.",
  },
  {
    titulo: "Errores corregidos en 30 minutos a 48 horas",
    texto: "El plazo depende de la complejidad de cada caso.",
  },
  {
    titulo: "Adaptación a cada profesor",
    texto:
      "La plataforma se ajusta al flujo de trabajo de cada profesor, que sigue evaluando como siempre lo ha hecho.",
  },
  {
    titulo: "Capacitación de cada funcionario",
    texto: "Para las funciones que realiza dentro del colegio.",
  },
  {
    titulo: "Acceso para todos los roles",
    texto: "Profesor, profesor guía, encargado, auxiliar y coordinación.",
  },
  {
    titulo: "Funciona sin internet",
    texto: "Lo registrado se envía solo cuando vuelve la conexión.",
  },
  {
    titulo: "Actualizaciones",
    texto: "Las mejoras de la plataforma llegan sin costo adicional.",
  },
] as const;

export function PrecioIncluye() {
  return (
    <section className="pt-14 pb-[100px] movil:pb-16">
      <div className="contenedor grid grid-cols-[.85fr_1.15fr] items-start gap-16 medio:grid-cols-1 medio:gap-12">
        <article
          {...revelar()}
          className="sticky top-[120px] medio:static"
        >
          <p className="text-[length:clamp(56px,7vw,88px)] leading-none font-bold tracking-[-.05em]">
            ₡15 000
          </p>
          <p className="mt-4 text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
            por estudiante al año
          </p>
          <p className="mt-2 text-[17px] leading-[1.5] text-tinta-suave">
            IVA incluido
          </p>
          <p className="mt-7 border-t border-linea pt-6 text-[17px] leading-[1.5] font-medium">
            Lo paga el encargado · El colegio no paga nada
          </p>
          <div className="mt-8">
            <Boton href="/contacto" tamano="grande">
              Solicitar demo
            </Boton>
          </div>
        </article>
        <article
          {...revelar(1)}
          className="min-w-0"
        >
          <h2 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
            Qué incluye
          </h2>
          <ul className="mt-5 grid">
            {incluye.map((item) => (
              <li key={item.titulo} className="border-t border-linea py-4">
                <b className="block text-[16px] leading-[1.35] font-semibold">
                  {item.titulo}
                </b>
                <span className="mt-1.5 block text-[15px] leading-[1.55] text-tinta-suave">
                  {item.texto}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
