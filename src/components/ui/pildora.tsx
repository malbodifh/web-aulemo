import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Icono } from "./icono";

type Tono = "ok" | "aviso" | "malo" | "info";
type Alto = "chico" | "normal" | "grande";

const clasesTono: Record<Tono, string> = {
  ok: "bg-[#E3F3E8] text-exito",
  aviso: "bg-[#FBF0D9] text-aviso",
  malo: "bg-[#FBE6E3] text-peligro",
  info: "bg-[#E2ECF8] text-info",
};

const clasesAlto: Record<Alto, string> = {
  chico: "h-[22px] px-2.5",
  normal: "h-[26px] px-2.5",
  grande: "h-[30px] px-3",
};

type PropiedadesPildora = {
  tono: Tono;
  alto?: Alto;
  icono?: LucideIcon;
  children: ReactNode;
};

export function Pildora({
  tono,
  alto = "normal",
  icono,
  children,
}: PropiedadesPildora) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full text-xs leading-none font-semibold ${clasesTono[tono]} ${clasesAlto[alto]}`}
    >
      {icono ? <Icono icono={icono} tamano={14} /> : null}
      {children}
    </span>
  );
}
