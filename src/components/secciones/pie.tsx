import Link from "next/link";
import { Logo, LogoNoren } from "@/components/marca/logo";
import { urlApp, whatsapp } from "@/lib/sitio";

const enlacesProducto = [
  { texto: "Funciones", href: "/funciones" },
  { texto: "Personalización", href: "/personalizacion" },
  { texto: "Precio", href: "/precio" },
  { texto: "Nosotros", href: "/nosotros" },
] as const;

const claseTitulo =
  "text-[13px] leading-none font-bold tracking-[.06em] text-tinta-suave uppercase";
const claseLista = "mt-[18px] grid gap-3 text-[14.5px]";
const claseEnlace = "hover:text-tinta";

export function Pie() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-[rgba(11,16,32,.07)] pt-[90px]">
      <div className="contenedor relative z-10">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-10 medio:grid-cols-2 movil:grid-cols-1">
          <div className="medio:col-span-full">
            <Link href="/" aria-label="Aulemo, inicio" className="flex">
              <Logo tamano={24} />
            </Link>
            <p className="mt-4 max-w-[320px] text-[14.5px] text-tinta-suave">
              La plataforma de control estudiantil para colegios de Costa Rica.
              Asistencia, calificaciones, boletas y comunicados en un solo lugar.
            </p>
            <span className="mt-[22px] inline-flex items-center gap-2.5 text-[15px] leading-none font-medium text-tinta">
              Un producto de
              <LogoNoren alto={22} className="text-tinta" />
            </span>
          </div>
          <div>
            <h4 className={claseTitulo}>Producto</h4>
            <ul className={claseLista}>
              {enlacesProducto.map((enlace) => (
                <li key={enlace.href}>
                  <a href={enlace.href} className={claseEnlace}>
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={claseTitulo}>Contacto</h4>
            <ul className={claseLista}>
              <li>
                <Link href="/contacto" className={claseEnlace}>
                  Solicitar demo
                </Link>
              </li>
              <li>
                <Link href="/preguntas" className={claseEnlace}>
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <a href={whatsapp.enlace} className={claseEnlace}>
                  WhatsApp {whatsapp.texto}
                </a>
              </li>
              {urlApp ? (
                <li>
                  <a href={urlApp} className={claseEnlace}>
                    Ingresar a Aulemo
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-16 bg-superficie">
        <div className="contenedor">
          <div className="flex flex-wrap justify-between gap-4 border-t border-[rgba(11,16,32,.07)] py-6 text-[13.5px] text-tinta-suave">
            <span>© 2026 Noren. Todos los derechos reservados.</span>
            <span className="flex gap-5">
              <Link href="/privacidad" className={claseEnlace}>
                Privacidad
              </Link>
              <Link href="/terminos" className={claseEnlace}>
                Términos
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="gigante">
        Aulemo
      </div>
    </footer>
  );
}
