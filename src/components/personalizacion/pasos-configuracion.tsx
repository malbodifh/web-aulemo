import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { revelar } from "@/lib/revelar";

const pasos = [
  {
    titulo: "Reunión inicial",
    texto:
      "Nos reunimos para conocer cómo trabajan y evalúan sus profesores.",
  },
  {
    titulo: "Configuración",
    texto:
      "Adaptamos la plataforma a esa forma de trabajar: rúbricas, materias, alertas y roles.",
  },
  {
    titulo: "Capacitación",
    texto:
      "Capacitamos a cada funcionario para las funciones que realiza en la plataforma.",
  },
  {
    titulo: "Acompañamiento",
    texto:
      "Le damos soporte todo el año, de 7 a. m. a 5 p. m., incluso en vacaciones y feriados.",
  },
] as const;

export function PasosConfiguracion() {
  return (
    <section className="py-[100px] movil:py-16">
      <div className="contenedor">
        <CabeceraSeccion
          titulo={
            <>
              Cómo lo configuramos<span className="punto">.</span>
            </>
          }
          descripcion="Cuatro pasos, siempre en el mismo orden, y con el mismo equipo de principio a fin."
        />
        <ol className="mt-16 grid list-none grid-cols-4 gap-4 p-0 medio:grid-cols-2 movil:mt-11 movil:grid-cols-1 movil:gap-3">
          {pasos.map((paso, indice) => (
            <li
              key={paso.titulo}
              {...revelar(indice === 1 || indice === 3 ? 1 : undefined)}
              className="vidrio flex min-h-[240px] flex-col rounded-[14px] p-[30px] movil:min-h-0 movil:rounded-xl movil:p-6"
            >
              <span className="text-[44px] leading-none font-bold tracking-[-.03em] text-tinta-suave">
                {indice + 1}
              </span>
              <h3 className="mt-auto pt-8 text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
                {paso.titulo}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.55] text-tinta-suave">
                {paso.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
