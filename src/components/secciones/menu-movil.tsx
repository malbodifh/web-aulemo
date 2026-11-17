"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu as IconoMenu } from "lucide-react";
import { Boton } from "@/components/ui/boton";
import { Icono } from "@/components/ui/icono";
import { whatsapp } from "@/lib/sitio";

type PropiedadesMenuMovil = {
  enlaces: readonly { texto: string; href: string }[];
  urlApp?: string;
};

const clasesEnlace =
  "rounded-xl px-4 py-3.5 text-base leading-none font-medium transition-opacity hover:opacity-70";

export function MenuMovil({ enlaces, urlApp }: PropiedadesMenuMovil) {
  const [abierto, setAbierto] = useState(false);
  const boton = useRef<HTMLButtonElement>(null);
  const ruta = usePathname();

  useEffect(() => {
    if (!abierto) return;

    function alPulsar(evento: KeyboardEvent) {
      if (evento.key === "Escape") {
        setAbierto(false);
        boton.current?.focus();
      }
    }

    document.addEventListener("keydown", alPulsar);
    return () => document.removeEventListener("keydown", alPulsar);
  }, [abierto]);

  return (
    <>
      <button
        ref={boton}
        type="button"
        aria-expanded={abierto}
        aria-controls="menu-movil"
        aria-label="Abrir menú"
        onClick={() => setAbierto((valor) => !valor)}
        className="ml-auto hidden h-10 w-10 items-center justify-center rounded-full text-tinta medio:flex"
      >
        <Icono icono={IconoMenu} />
      </button>
      <div
        id="menu-movil"
        data-abierto={abierto}
        onClick={(evento) => {
          if ((evento.target as HTMLElement).closest("a")) setAbierto(false);
        }}
        className="menu-panel absolute top-[72px] right-0 left-0 hidden flex-col gap-0.5 border-b border-linea p-3 movil:px-2 medio:data-[abierto=true]:flex"
      >
        {enlaces.map((enlace) => (
          <a
            key={enlace.href}
            href={enlace.href}
            aria-current={enlace.href === ruta ? "page" : undefined}
            className={clasesEnlace}
          >
            {enlace.texto}
          </a>
        ))}
        {urlApp ? (
          <a href={urlApp} className={clasesEnlace}>
            Ingresar
          </a>
        ) : null}
        <Boton href={whatsapp.enlace} variante="vidrio" className="mt-2">
          Contáctenos
        </Boton>
        <Boton href="/contacto">Solicitar demo</Boton>
      </div>
    </>
  );
}
