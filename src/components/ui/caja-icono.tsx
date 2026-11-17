import type { LucideIcon } from "lucide-react";
import { Icono } from "./icono";

type PropiedadesCajaIcono = {
  icono: LucideIcon;
  oscura?: boolean;
  chica?: boolean;
  sinMargen?: boolean;
  className?: string;
};

export function CajaIcono({
  icono,
  oscura = false,
  chica = false,
  sinMargen = false,
  className,
}: PropiedadesCajaIcono) {
  const tamano = chica
    ? "h-[42px] w-[42px] rounded-[13px]"
    : "h-11 w-11 rounded-[14px]";
  const tono = oscura
    ? "border border-white/10 bg-white/[.06] text-dk-tinta"
    : "bg-hundida text-tinta";

  return (
    <span
      className={`grid shrink-0 place-items-center ${tamano} ${tono} ${
        sinMargen ? "" : "mb-[22px]"
      } ${className ?? ""}`}
    >
      <Icono icono={icono} />
    </span>
  );
}
