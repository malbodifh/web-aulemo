import { Az, Pt } from "@/components/funciones/titulo";
import { revelar } from "@/lib/revelar";
import { IlustracionAdaptacion } from "./ilustracion-adaptacion";

export function ProblemaNosotros() {
  return (
    <section className="py-14">
      <div className="contenedor">
        <h2
          {...revelar()}
          className="max-w-[760px] text-[length:clamp(32px,4.2vw,56px)] leading-[1.04] font-semibold tracking-[-.04em]"
        >
          Las plataformas existían<Pt>,</Pt>{" "}
          <Az>
            los profesores no las usaban<Pt>.</Pt>
          </Az>
        </h2>
        <div
          {...revelar(1)}
          className="mt-14 grid grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-center gap-16 medio:grid-cols-[minmax(0,1fr)] medio:gap-8 movil:mt-10"
        >
          <div className="grid gap-9">
            <div>
              <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
                El problema
              </h3>
              <p className="mt-2.5 text-[17px] leading-[1.6] text-tinta-suave">
                Ya existen plataformas para gestionar la comunicación entre el
                centro educativo y el hogar. Pero en muchas instituciones donde
                se implementaron, los profesores no las utilizaron, y el
                problema siguió ahí.
              </p>
              <p className="mt-3 text-[17px] leading-[1.6] text-tinta-suave">
                No las usaban porque les faltaba personalización y los
                obligaban a adaptar su forma de trabajar a la plataforma.
              </p>
            </div>
            <div>
              <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
                Lo que cambiamos
              </h3>
              <p className="mt-2.5 text-[17px] leading-[1.6] text-tinta-suave">
                Aulemo invierte la lógica. Se adapta al flujo de trabajo de cada
                profesor, para que siga evaluando como siempre lo ha hecho.
              </p>
              <p className="mt-3 text-[17px] leading-[1.6] font-semibold text-tinta">
                «El centro educativo no se adapta a Aulemo, Aulemo se adapta al
                centro educativo.»
              </p>
            </div>
          </div>
          <IlustracionAdaptacion />
        </div>
      </div>
    </section>
  );
}
