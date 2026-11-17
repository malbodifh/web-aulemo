import { ArrowDown, ArrowRight } from "lucide-react";
import { Boton } from "@/components/ui/boton";
import { Icono } from "@/components/ui/icono";
import { whatsapp } from "@/lib/sitio";
import { Escenario } from "./escenario";
import { Franja } from "./franja";

export function Portada() {
  return (
    <>
      <section className="relative flex min-h-svh flex-col overflow-clip pt-[calc(72px+clamp(40px,7svh,76px))] pb-[clamp(28px,5svh,56px)] movil:min-h-0 movil:pt-[calc(72px+56px)] movil:pb-20">
        <div className="contenedor relative z-10 flex flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col text-center">
            <h1 className="relative z-10 animate-entrada text-[length:clamp(40px,5.4vw,80px)] leading-[1.02] font-bold tracking-[-.045em] reducido:animate-none">
              Asistencia y notas
              <br />
              de su colegio<span className="ml-[-0.13em]">,</span>{" "}
              <span className="whitespace-nowrap text-primario">
                al día<span className="punto">.</span>
              </span>
            </h1>
            <p className="relative z-10 mx-auto mt-5 max-w-[940px] animate-entrada text-[length:clamp(17px,1.35vw,20px)] leading-[1.5] text-tinta-suave [animation-delay:.08s] reducido:animate-none">
              Aulemo es la plataforma educativa para colegios de Costa Rica. Los
              profesores registran asistencia, calificaciones y boletas desde el
              celular, incluso sin internet, y los encargados las ven al
              momento.
            </p>
            <div className="relative h-[calc(586px*var(--escena-escala)+4px)] shrink-0 movil:hidden">
              <div aria-hidden="true" className="escena-fondo">
                <Escenario />
              </div>
            </div>
            <div className="relative z-10 mt-auto flex animate-entrada flex-wrap justify-center gap-2.5 [animation-delay:.16s] reducido:animate-none movil:mx-auto movil:mt-8 movil:max-w-[340px] movil:flex-col movil:items-stretch">
              <Boton href={whatsapp.enlace} variante="vidrio">
                Contáctenos
              </Boton>
              <Boton href="/contacto" className="movil:order-first">
                Solicitar demo
                <Icono icono={ArrowRight} tamano="sm" />
              </Boton>
            </div>
            <a
              href="#ventajas"
              aria-label="Ver más"
              className="relative z-10 mx-auto mt-4 grid h-9 w-9 animate-entrada place-items-center rounded-full text-tinta-suave transition-colors [animation-delay:.24s] hover:text-tinta reducido:animate-none movil:hidden"
            >
              <Icono icono={ArrowDown} tamano="sm" className="animate-bajar reducido:animate-none" />
            </a>
          </div>
        </div>
      </section>
      <Franja />
    </>
  );
}
