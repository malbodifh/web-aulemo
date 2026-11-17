import { IsotipoAulemo, IsotipoNoren } from "@/components/marca/logo";
import { MarcaSupabase, MarcaVercel } from "@/components/marca/proveedores";
import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";
import { Tesela } from "@/components/ui/tesela";

export function Garantias() {
  return (
    <section id="garantias" className="relative py-[140px] movil:py-24">
      <div className="contenedor">
        <CabeceraSeccion
          titulo={
            <>
              Respaldado por Noren
              <span className="punto">,</span>{" "}
              <span>
                todos los días del año<span className="punto">.</span>
              </span>
            </>
          }
          descripcion="Aulemo es desarrollado y mantenido por Noren, agencia de desarrollo de software. Usted trata directamente con el equipo que construye la plataforma."
        />
        <div className="mt-16 grid grid-cols-6 gap-4 medio:grid-cols-2 movil:mt-11 movil:grid-cols-1 movil:gap-3">
          <Tesela
            ancho="s4"
            titulo="Soporte todo el año"
            texto="Noren le brinda soporte constante los 365 días del año, de 7 a. m. a 5 p. m., incluidas vacaciones, feriados y fines de semana. En caso de identificar un error, contáctenos y lo corregimos en un plazo de 30 minutos a 48 horas, según su complejidad."
          >
            <div className="mt-auto pt-7">
              <div className="rounded-[10px] border border-linea bg-hundida p-6 movil:p-4">
                <div
                  className="flex items-center justify-center gap-5 py-2"
                  aria-label="Aulemo y Noren"
                >
                  <IsotipoAulemo className="h-10 w-[38px] text-tinta movil:h-8 movil:w-[30px]" />
                  <span className="text-xl leading-none font-medium text-tinta-suave">
                    ×
                  </span>
                  <IsotipoNoren className="-mx-2.5 h-[64px] w-[64px] text-tinta movil:h-[52px] movil:w-[52px]" />
                </div>
                <div className="mt-7">
                  <div className="relative ml-[14%] flex movil:ml-[30%] justify-center text-[13px] leading-none font-semibold text-primario">
                    Ventana de corrección
                  </div>
                  <div className="relative mt-3 h-3 rounded-full bg-primario/[.14]">
                    <span className="absolute inset-y-0 right-0 left-[14%] rounded-full movil:left-[30%] bg-primario/[.7]" />
                    <span className="absolute top-1/2 left-0 h-[18px] w-[18px] -translate-y-1/2 rounded-full border-[3px] border-primario bg-[#A9B3F7]" />
                  </div>
                  <div className="relative mt-3 h-4 text-[13px] leading-none font-semibold text-tinta-suave">
                    <span className="absolute left-0">Reporte</span>
                    <span className="absolute left-[14%] -translate-x-1/2 text-tinta movil:left-[30%]">
                      30 min
                    </span>
                    <span className="absolute right-0 text-tinta">48 h</span>
                  </div>
                </div>
              </div>
            </div>
          </Tesela>

          <Tesela
            ancho="s2"
            retraso={1}
            titulo="Capacitación para su personal"
            texto="Cada funcionario es capacitado para las funciones que debe realizar en la plataforma, en una sesión de unos 45 minutos con espacio para dudas y comentarios."
          />

          <Tesela
            ancho="s3"
            titulo="Sin conexión, sin pausas"
            texto="Si un profesor se queda sin internet, todo lo que registre se guarda en su dispositivo hasta que vuelva la conexión, y se envía solo para que nada se pierda."
          />

          <Tesela
            ancho="s3"
            retraso={1}
            titulo="Infraestructura de primer nivel"
            texto="La plataforma corre sobre servicios usados por miles de empresas en el mundo, para hosting, base de datos e inicio de sesión."
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
