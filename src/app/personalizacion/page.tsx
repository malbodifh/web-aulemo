import type { Metadata } from "next";
import { FilaFuncion } from "@/components/funciones/fila-funcion";
import { areas } from "@/components/personalizacion/datos-areas";
import { PasosConfiguracion } from "@/components/personalizacion/pasos-configuracion";
import { PortadaPersonalizacion } from "@/components/personalizacion/portada-personalizacion";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Cierre } from "@/components/ui/cierre";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";

const descripcionPagina =
  "Aulemo se adapta al flujo de trabajo de cada profesor para que siga evaluando como siempre lo ha hecho: rúbricas, materias, alertas de ausencia y roles.";

export const metadata: Metadata = {
  title: "Personalización",
  description: descripcionPagina,
  alternates: { canonical: "/personalizacion" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Personalización · Aulemo",
    description: descripcionPagina,
    url: "/personalizacion",
  },
};

export default function Personalizacion() {
  return (
    <>
      <TemaPagina />
      <Menu />
      <main>
        <PortadaPersonalizacion />
        {areas.map((area) => (
          <FilaFuncion
            key={area.id}
            id={area.id}
            titulo={area.titulo}
            texto={area.texto}
            datos={area.datos}
            ilustracion={area.ilustracion}
            invertida={area.invertida}
          />
        ))}
        <PasosConfiguracion />
        <Cierre />
      </main>
      <Pie />
      <Revelador />
    </>
  );
}
