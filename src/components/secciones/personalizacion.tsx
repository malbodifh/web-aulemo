import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { revelar } from "@/lib/revelar";

const ajustes = [
  {
    titulo: "Horario de timbres",
    texto: "Lecciones, bloques, recreos y almuerzo tal como suenan en su colegio.",
  },
  {
    titulo: "Rúbricas",
    texto: "Los porcentajes de cada componente, con o sin pruebas.",
  },
  {
    titulo: "Materias",
    texto: "Académicas, técnicas y formativas, cada una con su forma de evaluar.",
  },
  {
    titulo: "Alertas de ausencia",
    texto: "Avisos al encargado, al profesor guía y al auxiliar según su reglamento.",
  },
  {
    titulo: "Roles",
    texto: "Cada persona ve solo lo que le corresponde, con una interfaz simple.",
  },
] as const;

export function Personalizacion() {
  return (
    <section
      id="personalizacion"
      className="relative"
    >
      <div className="contenedor py-[140px] movil:py-24">
        <CabeceraSeccion
          titulo={
            <>
              Hecho a la medida de su institución<span className="punto">.</span>
            </>
          }
          descripcion="Cada profesor tiene su forma de trabajar y de evaluar. Aulemo se adapta a ella, no al revés."
        />
        <article
          {...revelar()}
          className="vidrio mt-16 grid grid-cols-[1.15fr_1fr] gap-12 rounded-[14px] p-10 medio:grid-cols-1 medio:gap-10 movil:mt-11 movil:p-6"
        >
          <div>
            <h3 className="text-[28px] leading-[1.15] font-semibold tracking-[-.025em] movil:text-[23px]">
              Aulemo se adapta a su colegio, no al revés.
            </h3>
            <p className="mt-4 text-base leading-[1.6] text-tinta-suave">
              Aulemo se adapta al flujo de trabajo de cada profesor. Cada uno
              sigue evaluando como siempre lo ha hecho, sin cambiar su rutina
              para ajustarse al sistema.
            </p>
            <ul className="mt-8 flex flex-col">
              {ajustes.map((ajuste) => (
                <li
                  key={ajuste.titulo}
                  className="grid grid-cols-[170px_1fr] gap-6 border-t border-linea py-4 last:pb-0 movil:grid-cols-1 movil:gap-1.5"
                >
                  <b className="text-[15px] leading-[1.4] font-semibold">
                    {ajuste.titulo}
                  </b>
                  <span className="text-[15px] leading-[1.5] text-tinta-suave">
                    {ajuste.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative isolate min-h-[420px] overflow-hidden rounded-[10px] border border-linea bg-hundida p-8 transition-colors duration-[600ms] movil:min-h-[340px] movil:p-6">
            <p className="relative z-10 max-w-[340px] text-xl leading-[1.4] font-semibold tracking-[-.015em] movil:text-lg">
              «El centro educativo no se adapta a Aulemo, Aulemo se adapta al
              centro educativo.»
            </p>
            <svg
              viewBox="0 0 400 320"
              aria-hidden="true"
              className="absolute right-0 bottom-0 -z-10 w-full max-w-[460px]"
              fill="none"
            >
              <path
                d="M60 320V175a140 140 0 0 1 280 0v145"
                stroke="#5266EB"
                strokeOpacity=".16"
                strokeWidth="18"
              />
              <path
                d="M108 320V175a92 92 0 0 1 184 0v145"
                stroke="#5266EB"
                strokeOpacity=".22"
                strokeWidth="18"
              />
              <path
                d="M158 320V175a42 42 0 0 1 84 0v145"
                stroke="#5266EB"
                strokeOpacity=".7"
                strokeWidth="20"
              />
              <circle cx="200" cy="252" r="10" fill="#A9B3F7" />
            </svg>
          </div>
        </article>
      </div>
    </section>
  );
}
