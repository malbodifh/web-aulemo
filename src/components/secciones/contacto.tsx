import { Boton } from "@/components/ui/boton";
import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { FormularioDemo } from "@/components/cotizacion/formulario-demo";
import { revelar } from "@/lib/revelar";
import { whatsapp } from "@/lib/sitio";

export function Contacto() {
  return (
    <section id="contacto" className="relative pt-10 pb-[140px] movil:pb-24">
      <div className="contenedor grid grid-cols-[.9fr_1.1fr] items-start gap-14 medio:grid-cols-1 medio:gap-10">
        <div>
          <CabeceraSeccion
            titulo={
              <>
                Conozca Aulemo{" "}
                <span className="text-primario">
                  en su colegio<span className="punto">.</span>
                </span>
              </>
            }
            descripcion="Le mostramos la plataforma con los procesos de su institución y resolvemos sus dudas en una sola reunión."
          />
          <div {...revelar()} className="mt-9">
            <Boton href={whatsapp.enlace} variante="vidrio" tamano="grande">
              Contáctenos
            </Boton>
          </div>
        </div>
        <div {...revelar(1)}>
          <FormularioDemo />
        </div>
      </div>
    </section>
  );
}
