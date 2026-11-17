import type { ReactNode } from "react";
import { revelar } from "@/lib/revelar";

type PropiedadesFila = {
  id: string;
  titulo: ReactNode;
  texto: string;
  datos: ReactNode[];
  ilustracion: ReactNode;
  invertida?: boolean;
};

export function FilaFuncion({
  id,
  titulo,
  texto,
  datos,
  ilustracion,
  invertida = false,
}: PropiedadesFila) {
  return (
    <section id={id} className="py-14">
      <div
        {...revelar()}
        className="contenedor grid grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-center gap-16 medio:grid-cols-[minmax(0,1fr)] medio:gap-8"
      >
        <div className={invertida ? "order-2 medio:order-none" : undefined}>
          <h2 className="text-[length:clamp(30px,3.2vw,42px)] leading-[1.08] font-semibold tracking-[-.04em]">
            {titulo}
          </h2>
          <p className="mt-[18px] max-w-[500px] text-[17px] leading-[1.6] text-tinta-suave">
            {texto}
          </p>
          <ul className="mt-[26px] grid max-w-[500px] list-none p-0">
            {datos.map((dato, indice) => (
              <li
                key={indice}
                className="border-t border-linea py-[13px] text-[15px] leading-[1.45] text-tinta-suave [&_b]:font-semibold [&_b]:text-tinta"
              >
                {dato}
              </li>
            ))}
          </ul>
        </div>
        {ilustracion}
      </div>
    </section>
  );
}
