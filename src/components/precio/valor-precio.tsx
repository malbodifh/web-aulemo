import { CabeceraSeccion } from "@/components/ui/cabecera-seccion";

export function ValorPrecio() {
  return (
    <section className="py-[60px] movil:py-10">
      <div className="contenedor">
        <CabeceraSeccion
          titulo={
            <>
              Que el problema se resuelva<span className="punto">.</span>
            </>
          }
          descripcion="No competimos por ser la opción más barata. Nuestro objetivo es que los profesores usen la plataforma porque se adapta a su forma de trabajar, y que el colegio tenga la información al día. Ese es el resultado que cuidamos, con el soporte que lo respalda cada día del año."
        />
      </div>
    </section>
  );
}
