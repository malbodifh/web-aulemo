import type { ReactNode } from "react";
import { revelar } from "@/lib/revelar";

type PropiedadesCabecera = {
  titulo: ReactNode;
  descripcion: string;
  descripcionClara?: boolean;
};

export function CabeceraSeccion({
  titulo,
  descripcion,
  descripcionClara = false,
}: PropiedadesCabecera) {
  return (
    <div className="max-w-[760px]">
      <h2
        {...revelar()}
        className="text-[length:clamp(32px,4.2vw,56px)] leading-[1.04] font-semibold tracking-[-.04em]"
      >
        {titulo}
      </h2>
      <p
        {...revelar(1)}
        className={`mt-[22px] text-[length:clamp(16px,1.4vw,19px)] leading-[1.6] ${descripcionClara ? "text-tinta" : "text-tinta-suave"}`}
      >
        {descripcion}
      </p>
    </div>
  );
}
