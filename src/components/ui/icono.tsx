import type { LucideIcon } from "lucide-react";

const tamanos = { sm: 16, md: 20, lg: 24 } as const;

type PropiedadesIcono = {
  icono: LucideIcon;
  tamano?: keyof typeof tamanos | number;
  grosor?: number;
  className?: string;
};

export function Icono({
  icono: Componente,
  tamano = "md",
  grosor = 1.8,
  className,
}: PropiedadesIcono) {
  const lado = typeof tamano === "number" ? tamano : tamanos[tamano];
  return (
    <Componente
      size={lado}
      strokeWidth={grosor}
      aria-hidden="true"
      className={`shrink-0 ${className ?? ""}`}
    />
  );
}
