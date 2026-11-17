import type { Metadata } from "next";
import { CuerpoContacto } from "@/components/contacto/cuerpo-contacto";
import { PortadaContacto } from "@/components/contacto/portada-contacto";
import { ProveedorCotizacion } from "@/components/cotizacion/contexto-cotizacion";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";

const descripcionPagina =
  "Solicite una demo de Aulemo: le mostramos la plataforma con los procesos de su colegio y resolvemos sus dudas en una sola reunión.";

export const metadata: Metadata = {
  title: "Solicitar demo",
  description: descripcionPagina,
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Solicitar demo · Aulemo",
    description: descripcionPagina,
    url: "/contacto",
  },
};

export default function Contacto() {
  return (
    <>
      <TemaPagina />
      <Menu />
      <ProveedorCotizacion>
        <main>
          <PortadaContacto />
          <CuerpoContacto />
        </main>
      </ProveedorCotizacion>
      <Pie />
      <Revelador />
    </>
  );
}
