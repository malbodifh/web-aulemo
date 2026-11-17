import { ArrowDown } from "lucide-react";
import { Icono } from "@/components/ui/icono";
import { ParallaxDeclaracion } from "@/components/ui/parallax-declaracion";

export function Declaracion() {
  return (
    <ParallaxDeclaracion>
      <div className="declaracion-escena">
        <div className="contenedor">
          <h2 className="mx-auto max-w-[1000px] text-[length:clamp(34px,5.4vw,72px)] leading-[1.06] font-bold tracking-[-.045em]">
            <span className="declaracion-linea-1 block">
              El centro educativo no se adapta a{" "}
              <span className="declaracion-acento-1">Aulemo</span>
            </span>
            <span className="declaracion-linea-2 block">
              Aulemo se adapta al{" "}
              <span className="text-primario">
                centro educativo
              </span>
            </span>
          </h2>
          <p className="declaracion-parrafo mx-auto mt-7 max-w-[600px] text-[length:clamp(16px,1.4vw,19px)] text-tinta-suave">
            Aulemo se adapta al flujo de trabajo de cada profesor. Su personal
            sigue evaluando como siempre lo ha hecho, solo que más rápido.
          </p>
        </div>
        <span aria-hidden="true" className="declaracion-flecha">
          <Icono icono={ArrowDown} tamano={34} grosor={1.5} className="animate-bajar reducido:animate-none" />
        </span>
      </div>
    </ParallaxDeclaracion>
  );
}
