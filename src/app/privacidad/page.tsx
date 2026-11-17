import type { Metadata } from "next";
import { DocumentoLegal } from "@/components/legal/documento-legal";
import { seccionesPrivacidad } from "@/components/legal/contenido-privacidad";

const descripcionPagina =
  "Cómo Aulemo trata los datos personales de colegios, estudiantes, encargados y personal: qué datos, para qué, con quién se comparten y cómo ejercer sus derechos.";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: descripcionPagina,
  alternates: { canonical: "/privacidad" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Política de privacidad · Aulemo",
    description: descripcionPagina,
    url: "/privacidad",
  },
};

export default function Privacidad() {
  return (
    <DocumentoLegal
      titulo="Política de privacidad"
      introduccion={
        <p>
          Su privacidad y la de los estudiantes es parte central de Aulemo. Esta
          política explica, en lenguaje claro, qué datos tratamos y cómo los
          protegemos.
        </p>
      }
      secciones={seccionesPrivacidad}
    />
  );
}
