import { FormularioDemo } from "@/components/cotizacion/formulario-demo";
import { Boton } from "@/components/ui/boton";
import { revelar } from "@/lib/revelar";
import { whatsapp } from "@/lib/sitio";

export function CuerpoContacto() {
  return (
    <section className="pb-[120px] movil:pb-20">
      <div className="contenedor grid grid-cols-[1.1fr_.9fr] items-start gap-14 medio:grid-cols-1 medio:gap-10">
        <div {...revelar()}>
          <FormularioDemo />
        </div>
        <aside
          {...revelar(1)}
          className="vidrio rounded-[14px] p-[30px] movil:p-6"
        >
          <h2 className="text-[22px] leading-[1.2] font-bold tracking-[-.02em]">
            ¿Prefiere hablar con nosotros?
          </h2>
          <p className="mt-3 text-[17px] leading-[1.6] text-tinta-suave">
            Escríbanos y le respondemos directamente, sin intermediarios.
          </p>
          <div className="mt-6">
            <Boton href={whatsapp.enlace} variante="vidrio" tamano="grande">
              Contáctenos
            </Boton>
          </div>
        </aside>
      </div>
    </section>
  );
}
