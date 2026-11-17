import type { Metadata } from "next";
import { PortadaPrecio } from "@/components/precio/portada-precio";
import { PrecioIncluye } from "@/components/precio/precio-incluye";
import { ValorPrecio } from "@/components/precio/valor-precio";
import { VentajasEncargados } from "@/components/precio/ventajas-encargados";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Cierre } from "@/components/ui/cierre";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";
import { nombreSitio, urlSitio } from "@/lib/sitio";

const descripcionPagina =
  "Aulemo cuesta ₡15 000 por estudiante al año, con IVA incluido. Lo paga el encargado y el colegio no paga nada. Incluye soporte los 365 días y adaptación a cada profesor.";

export const metadata: Metadata = {
  title: "Precio",
  description: descripcionPagina,
  alternates: { canonical: "/precio" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Precio · Aulemo",
    description: descripcionPagina,
    url: "/precio",
  },
};

const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${urlSitio}/#aulemo`,
  name: nombreSitio,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web, Android, iOS",
  offers: {
    "@type": "Offer",
    price: 15000,
    priceCurrency: "CRC",
    description: "Pago anual por estudiante, IVA incluido",
  },
};

export default function Precio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datosEstructurados).replace(/</g, "\\u003c"),
        }}
      />
      <TemaPagina />
      <Menu />
      <main>
        <PortadaPrecio />
        <VentajasEncargados />
        <ValorPrecio />
        <PrecioIncluye />
        <Cierre />
      </main>
      <Pie />
      <Revelador />
    </>
  );
}
