import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { revelar } from "@/lib/revelar";

const valores = [
  {
    titulo: "Adaptación",
    texto:
      "La plataforma se adapta al flujo de trabajo de cada profesor, no al revés.",
  },
  {
    titulo: "Compromiso con el resultado",
    texto:
      "Medimos nuestro trabajo en que el problema se resuelva, no en ofrecer el precio más bajo.",
  },
  {
    titulo: "Cercanía",
    texto:
      "Cada institución trata directamente con el equipo que construye y mantiene Aulemo.",
  },
  {
    titulo: "Confiabilidad",
    texto:
      "Soporte los 365 días del año y correcciones en plazos que cumplimos.",
  },
  {
    titulo: "Confidencialidad",
    texto:
      "La información de cada estudiante se protege y no se comparte con nadie.",
  },
] as const;

const claseTarjeta = "vidrio rounded-[14px] p-[30px] movil:p-6";

export function MisionNosotros() {
  return (
    <section className="py-[100px] movil:py-16">
      <div className="contenedor">
        <CabeceraSeccion
          titulo={
            <>
              Misión, visión y valores<span className="punto">.</span>
            </>
          }
          descripcion="Lo que guía cada decisión que tomamos al construir y acompañar Aulemo."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 medio:grid-cols-1 movil:mt-11 movil:gap-3">
          <article {...revelar()} className={claseTarjeta}>
            <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
              Misión
            </h3>
            <p className="mt-3 text-[17px] leading-[1.6] text-tinta-suave">
              Que cada colegio cuente con una plataforma que sus profesores sí
              usen, configurada con sus reglas y procesos, para que la
              información de cada estudiante llegue completa y a tiempo al
              hogar.
            </p>
          </article>
          <article {...revelar(1)} className={claseTarjeta}>
            <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
              Visión
            </h3>
            <p className="mt-3 text-[17px] leading-[1.6] text-tinta-suave">
              Ser la plataforma en la que confían los colegios de Costa Rica
              porque resuelve de verdad la comunicación entre el centro
              educativo y el hogar.
            </p>
          </article>
          <article
            {...revelar(2)}
            className={`${claseTarjeta} col-span-2 medio:col-span-1`}
          >
            <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
              Valores
            </h3>
            <ul className="mt-5 grid grid-cols-5 gap-6 compacto:grid-cols-3 medio:grid-cols-2 movil:grid-cols-1 movil:gap-0">
              {valores.map((valor) => (
                <li
                  key={valor.titulo}
                  className="border-t border-linea pt-4 movil:pb-4"
                >
                  <b className="block text-[15px] leading-[1.35] font-semibold">
                    {valor.titulo}
                  </b>
                  <span className="mt-1.5 block text-[14.5px] leading-[1.55] text-tinta-suave">
                    {valor.texto}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
