import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { Boton } from "@/components/ui/boton";
import { revelar } from "@/lib/revelar";
import { ListaPreguntas } from "./lista-preguntas";
import { whatsapp } from "@/lib/sitio";

export function Preguntas() {
  return (
    <section id="preguntas" className="relative pt-[60px] pb-[140px] movil:pb-24">
      <div className="contenedor grid grid-cols-[.8fr_1.2fr] items-start gap-16 medio:grid-cols-1 medio:gap-10">
        <div className="sticky top-[120px] medio:static">
          <CabeceraSeccion
            titulo={
              <>
                Lo que suelen{" "}
                <span>
                  preguntarnos<span className="punto">.</span>
                </span>
              </>
            }
            descripcion="¿Tiene otra duda? Contáctenos y le respondemos directamente."
          />
          <div {...revelar(3)} className="mt-[30px] w-fit">
            <Boton href={whatsapp.enlace}>Contáctenos</Boton>
          </div>
        </div>
        <ListaPreguntas />
      </div>
    </section>
  );
}
