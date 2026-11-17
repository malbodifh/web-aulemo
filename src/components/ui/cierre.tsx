import { ArrowRight } from "lucide-react";
import { Az, Pt } from "@/components/funciones/titulo";
import { Boton } from "@/components/ui/boton";
import { Icono } from "@/components/ui/icono";
import { revelar } from "@/lib/revelar";
import { whatsapp } from "@/lib/sitio";

export function Cierre() {
  return (
    <section className="mt-[72px] border-t border-linea pt-24 pb-[120px] text-center movil:pb-20">
      <div {...revelar()} className="contenedor">
        <h2 className="text-[length:clamp(32px,4.2vw,56px)] leading-[1.04] font-semibold tracking-[-.04em]">
          Conozca Aulemo{" "}
          <Az>
            en su colegio<Pt>.</Pt>
          </Az>
        </h2>
        <p className="mx-auto mt-[18px] max-w-[560px] text-lg text-tinta-suave">
          Le mostramos la plataforma con los procesos de su institución y
          resolvemos sus dudas en una sola reunión.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <Boton href={whatsapp.enlace} variante="vidrio">
            Contáctenos
          </Boton>
          <Boton href="/contacto">
            Solicitar demo
            <Icono icono={ArrowRight} tamano="sm" />
          </Boton>
        </div>
      </div>
    </section>
  );
}
