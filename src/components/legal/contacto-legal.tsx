import { legal } from "@/lib/legal";
import { whatsapp } from "@/lib/sitio";

type Propiedades = {
  tipo?: "privacidad" | "legal";
};

export function ContactoLegal({ tipo = "privacidad" }: Propiedades) {
  const correo =
    tipo === "privacidad"
      ? (legal.correoPrivacidad ?? legal.correoLegal)
      : (legal.correoLegal ?? legal.correoPrivacidad);

  if (correo) {
    return <a href={`mailto:${correo}`}>{correo}</a>;
  }

  return (
    <a href={whatsapp.enlace} rel="noopener">
      Contáctenos
    </a>
  );
}

export function Domicilio() {
  return legal.domicilio ? <> con domicilio en {legal.domicilio}</> : null;
}
