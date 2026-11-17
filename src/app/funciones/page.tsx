import type { Metadata } from "next";
import { funciones } from "@/components/funciones/datos-funciones";
import { FilaFuncion } from "@/components/funciones/fila-funcion";
import { PortadaFunciones } from "@/components/funciones/portada-funciones";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Cierre } from "@/components/ui/cierre";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";

const descripcionPagina =
  "Conozca las funciones de Aulemo para colegios de Costa Rica: asistencia por lección, calificaciones con sus rúbricas, alertas de ausencia, avisos a encargados y funcionamiento sin internet.";

export const metadata: Metadata = {
  title: "Funciones",
  description: descripcionPagina,
  alternates: { canonical: "/funciones" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Funciones · Aulemo",
    description: descripcionPagina,
    url: "/funciones",
  },
};

export default function Funciones() {
  return (
    <>
      <TemaPagina />
      <Menu />
      <main>
        <PortadaFunciones />
        {funciones.map((funcion) => (
          <FilaFuncion
            key={funcion.id}
            id={funcion.id}
            titulo={funcion.titulo}
            texto={funcion.texto}
            datos={funcion.datos}
            ilustracion={funcion.ilustracion}
            invertida={funcion.invertida}
          />
        ))}
        <Cierre />
      </main>
      <Pie />
      <Revelador />
    </>
  );
}
