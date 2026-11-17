import Link from "next/link";
import { Logo, LogoNoren } from "@/components/marca/logo";
import { Boton } from "@/components/ui/boton";
import { urlApp, whatsapp } from "@/lib/sitio";
import { MenuEnlaces } from "./menu-enlaces";
import { MenuMovil } from "./menu-movil";

export const enlacesMenu = [
  { texto: "Funciones", href: "/funciones" },
  { texto: "Personalización", href: "/personalizacion" },
  { texto: "Precio", href: "/precio" },
  { texto: "Nosotros", href: "/nosotros" },
  { texto: "Preguntas", href: "/preguntas" },
] as const;

export function Menu() {
  return (
    <header data-menu className="fixed top-0 right-0 left-0 z-50">
      <div
        data-menu-barra
        className="menu-barra grid h-[72px] grid-cols-[1fr_auto_1fr] items-center px-8 movil:px-4 medio:flex medio:justify-between"
      >
        <Link
          href="/"
          aria-label="Aulemo, inicio"
          className="flex items-center justify-self-start"
        >
          <Logo tamano={22} tono="auto" />
          <small className="ml-3 flex items-center gap-1.5 border-l border-linea pl-2.5 text-xs leading-none font-medium tracking-normal text-tinta movil:hidden">
            por
            <LogoNoren alto={15} className="text-tinta" />
          </small>
        </Link>
        <MenuEnlaces enlaces={enlacesMenu} />
        <div className="flex items-center gap-5 justify-self-end medio:hidden">
          {urlApp ? (
            <a
              href={urlApp}
              className="text-[15px] leading-none font-medium text-tinta transition-opacity hover:opacity-70"
            >
              Ingresar
            </a>
          ) : null}
          <div className="flex items-center gap-2">
            <Boton href={whatsapp.enlace} variante="vidrio" tamano="chico">
              Contáctenos
            </Boton>
            <Boton href="/contacto" tamano="chico">
              Solicitar demo
            </Boton>
          </div>
        </div>
        <MenuMovil enlaces={enlacesMenu} urlApp={urlApp} />
      </div>
    </header>
  );
}
