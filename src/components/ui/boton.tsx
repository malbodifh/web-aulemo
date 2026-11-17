import type { ReactNode } from "react";

type Variante = "primario" | "vidrio" | "fantasma";
type Tamano = "chico" | "normal" | "grande";

type PropiedadesComunes = {
  variante?: Variante;
  tamano?: Tamano;
  ancho?: boolean;
  className?: string;
  children: ReactNode;
};

type PropiedadesEnlace = PropiedadesComunes & {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
};

type PropiedadesBoton = PropiedadesComunes & {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const clasesBase =
  "inline-flex items-center justify-center gap-2 rounded-full leading-none font-semibold whitespace-nowrap transition-[transform,background,box-shadow] duration-[250ms] ease-aulemo active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-70";

const clasesVariante: Record<Variante, string> = {
  primario:
    "bg-primario text-sobre-primario shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_10px_24px_-12px_rgba(10,11,15,.35)] hover:bg-primario-fuerte [&>svg]:transition-transform [&>svg]:duration-[250ms] [&>svg]:ease-aulemo hover:[&>svg]:translate-x-[3px]",
  vidrio: "vidrio text-tinta hover:bg-[rgba(255,255,255,.74)]",
  fantasma: "text-tinta hover:bg-[rgba(255,255,255,.74)]",
};

const clasesTamano: Record<Tamano, string> = {
  chico: "h-[38px] px-4 text-sm",
  normal: "h-11 px-[22px] text-[15px]",
  grande: "h-[54px] px-[22px] text-base",
};

export function Boton(props: PropiedadesEnlace | PropiedadesBoton) {
  const {
    variante = "primario",
    tamano = "normal",
    ancho = false,
    className,
    children,
  } = props;

  const clases = [
    clasesBase,
    clasesVariante[variante],
    clasesTamano[tamano],
    ancho ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    return (
      <a href={props.href} className={clases}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={clases}
    >
      {children}
    </button>
  );
}
