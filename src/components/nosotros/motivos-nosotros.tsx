import { MarcaSupabase, MarcaVercel } from "@/components/marca/proveedores";
import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { Tesela } from "@/components/ui/tesela";

export function MotivosNosotros() {
  return (
    <section className="py-[100px] movil:py-16">
      <div className="contenedor">
        <CabeceraSeccion
          titulo={
            <>
              Por qué escoger Aulemo<span className="punto">.</span>
            </>
          }
          descripcion="Una plataforma pensada para que los profesores la usen, respaldada por el equipo que la construye."
        />
        <div className="mt-16 grid grid-cols-6 gap-4 medio:grid-cols-2 movil:mt-11 movil:grid-cols-1 movil:gap-3">
          <Tesela
            ancho="s4"
            titulo="Soporte 365 días del año"
            texto="De 7 a. m. a 5 p. m., incluidas vacaciones, feriados y fines de semana. Si identifica un error, lo corregimos en un plazo de 30 minutos a 48 horas, según su complejidad."
          />
          <Tesela
            ancho="s2"
            retraso={1}
            titulo="Hecha a su medida"
            texto="Se adapta al flujo de trabajo de cada profesor, que sigue evaluando como siempre lo ha hecho."
          />
          <Tesela
            ancho="s3"
            titulo="Trato directo con el equipo"
            texto="Usted habla con las mismas personas que construyen y mantienen la plataforma, sin intermediarios."
          />
          <Tesela
            ancho="s3"
            retraso={1}
            titulo="Capacitación por funciones"
            texto="Cada funcionario es capacitado para las funciones que realiza en la plataforma."
          />
          <Tesela
            ancho="s3"
            titulo="Compromiso con el resultado"
            texto="No buscamos ser la opción más barata. Buscamos que el problema se resuelva: que los profesores usen la plataforma y la información llegue a tiempo al hogar."
          />
          <Tesela
            ancho="s3"
            retraso={1}
            titulo="Infraestructura de primer nivel"
            texto="Funciona sin conexión y corre sobre servicios usados por miles de empresas en el mundo."
          >
            <div className="mt-auto flex items-center gap-8 pt-10 movil:gap-5 movil:pt-8">
              <MarcaVercel />
              <span
                aria-hidden="true"
                className="h-7 w-px bg-linea movil:h-6"
              />
              <MarcaSupabase />
            </div>
          </Tesela>
        </div>
      </div>
    </section>
  );
}
