import type { Metadata } from "next";
import { FundadorNosotros } from "@/components/nosotros/fundador-nosotros";
import { MisionNosotros } from "@/components/nosotros/mision-nosotros";
import { MotivosNosotros } from "@/components/nosotros/motivos-nosotros";
import { PortadaNosotros } from "@/components/nosotros/portada-nosotros";
import { ProblemaNosotros } from "@/components/nosotros/problema-nosotros";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Cierre } from "@/components/ui/cierre";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";
import { urlSitio } from "@/lib/sitio";

const descripcionPagina =
  "Noren, agencia de desarrollo de software fundada en 2025, creó Aulemo para que los profesores sí usen la plataforma: se adapta al colegio, con soporte los 365 días del año.";

export const metadata: Metadata = {
  title: "Nosotros",
  description: descripcionPagina,
  alternates: { canonical: "/nosotros" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Nosotros · Aulemo",
    description: descripcionPagina,
    url: "/nosotros",
  },
};

const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${urlSitio}/#noren`,
  name: "Noren",
  url: urlSitio,
  foundingDate: "2025",
  description:
    "Agencia de desarrollo de software que desarrolla y mantiene Aulemo, la plataforma educativa para colegios de Costa Rica.",
  founder: { "@type": "Person", name: "David Arias Esquivel" },
};

export default function Nosotros() {
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
        <PortadaNosotros />
        <ProblemaNosotros />
        <MisionNosotros />
        <MotivosNosotros />
        <FundadorNosotros />
        <Cierre />
      </main>
      <Pie />
      <Revelador />
    </>
  );
}
