import { ProveedorCotizacion } from "@/components/cotizacion/contexto-cotizacion";
import { Contacto } from "@/components/secciones/contacto";
import { Declaracion } from "@/components/secciones/declaracion";
import { Garantias } from "@/components/secciones/garantias";
import { Menu } from "@/components/secciones/menu";
import { Personalizacion } from "@/components/secciones/personalizacion";
import { Pie } from "@/components/secciones/pie";
import { Portada } from "@/components/secciones/portada";
import { Preguntas } from "@/components/secciones/preguntas";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";
import {
  descripcion,
  nombreSitio,
  urlSitio,
} from "@/lib/sitio";

const datosEstructurados = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${urlSitio}/#noren`,
      name: "Noren",
      url: urlSitio,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${urlSitio}/#aulemo`,
      name: nombreSitio,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web, Android, iOS",
      description: descripcion,
      inLanguage: "es-CR",
      url: urlSitio,
      publisher: { "@id": `${urlSitio}/#noren` },
      offers: {
        "@type": "Offer",
        price: 15000,
        priceCurrency: "CRC",
        description:
          "Pago anual por estudiante. Incluye soporte los 365 días del año y la personalización de la plataforma.",
      },
    },
  ],
};

export default function Inicio() {
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
      <ProveedorCotizacion>
        <main>
          <Portada />
          <Declaracion />
          <Personalizacion />
          <Garantias />
          <Preguntas />
          <Contacto />
        </main>
      </ProveedorCotizacion>
      <Pie />
      <Revelador />
    </>
  );
}
