import type { Metadata } from "next";
import { DocumentoLegal } from "@/components/legal/documento-legal";
import { seccionesTerminos } from "@/components/legal/contenido-terminos";

const descripcionPagina =
  "Términos y condiciones de uso de Aulemo: servicio, cuentas, pago, soporte, propiedad intelectual, protección de datos, responsabilidad y ley aplicable.";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: descripcionPagina,
  alternates: { canonical: "/terminos" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Términos y condiciones · Aulemo",
    description: descripcionPagina,
    url: "/terminos",
  },
};

export default function Terminos() {
  return (
    <DocumentoLegal
      titulo="Términos y condiciones"
      introduccion={
        <p>
          Estas son las reglas que aplican al uso de Aulemo por parte de los
          centros educativos, su personal y los encargados. Léalas con
          detenimiento antes de usar el servicio.
        </p>
      }
      secciones={seccionesTerminos}
    />
  );
}
