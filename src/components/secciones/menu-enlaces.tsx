"use client";

import { usePathname } from "next/navigation";

type PropiedadesEnlaces = {
  enlaces: readonly { texto: string; href: string }[];
};

export function MenuEnlaces({ enlaces }: PropiedadesEnlaces) {
  const ruta = usePathname();

  return (
    <nav aria-label="Principal" className="flex gap-9 medio:hidden">
      {enlaces.map((enlace) => {
        const activo = enlace.href === ruta;
        return (
          <a
            key={enlace.href}
            href={enlace.href}
            aria-current={activo ? "page" : undefined}
            className={`text-[15px] leading-none font-medium transition-opacity hover:opacity-70 text-tinta`}
          >
            {enlace.texto}
          </a>
        );
      })}
    </nav>
  );
}
