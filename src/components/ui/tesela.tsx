import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { revelar } from "@/lib/revelar";
import { CajaIcono } from "./caja-icono";

type Ancho = "s2" | "s3" | "s4";

const clasesAncho: Record<Ancho, string> = {
  s2: "col-span-2 medio:col-span-1 movil:col-auto",
  s3: "col-span-3 medio:col-span-1 movil:col-auto",
  s4: "col-span-4 medio:col-span-2 movil:col-auto",
};

type PropiedadesTesela = {
  ancho: Ancho;
  retraso?: 1 | 2 | 3;
  icono?: LucideIcon;
  titulo: string;
  texto: string;
  oscura?: boolean;
  children?: ReactNode;
};

export function Tesela({
  ancho,
  retraso,
  icono,
  titulo,
  texto,
  oscura = false,
  children,
}: PropiedadesTesela) {
  return (
    <article
      {...revelar(retraso)}
      className={`relative flex flex-col overflow-hidden rounded-[14px] p-[30px] movil:min-h-0 movil:rounded-xl movil:p-6 ${
        oscura ? "vidrio-oscuro min-h-[260px]" : "vidrio min-h-[240px]"
      } ${clasesAncho[ancho]}`}
    >
      {icono ? <CajaIcono icono={icono} oscura={oscura} /> : null}
      <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
        {titulo}
      </h3>
      <p
        className={`mt-2.5 text-[15px] leading-[1.55] ${
          oscura ? "text-dk-suave" : "text-tinta-suave"
        }`}
      >
        {texto}
      </p>
      {children}
    </article>
  );
}
