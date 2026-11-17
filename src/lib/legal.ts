export type TipoCedula = "jurídica" | "física";

type DatosLegales = {
  razonSocial: string | null;
  tipoCedula: TipoCedula | null;
  cedula: string | null;
  domicilio: string | null;
  provincia: string | null;
  correoPrivacidad: string | null;
  correoLegal: string | null;
  fechaVigencia: string;
  inscripcionProdhab: string | null;
  regionDatos: string | null;
};

export const legal: DatosLegales = {
  razonSocial: null,
  tipoCedula: null,
  cedula: null,
  domicilio: null,
  provincia: null,
  correoPrivacidad: null,
  correoLegal: null,
  fechaVigencia: "13 de noviembre de 2026",
  inscripcionProdhab: null,
  regionDatos: null,
};

export function identificacionNoren(): string {
  const razon = legal.razonSocial ? `, ${legal.razonSocial}` : "";
  const cedula = legal.cedula
    ? `, cédula ${legal.tipoCedula ? `${legal.tipoCedula} ` : ""}${legal.cedula}`
    : "";
  return `Noren${razon}${cedula}`;
}

export function jurisdiccion(): string {
  return legal.provincia
    ? `los tribunales competentes de la provincia de ${legal.provincia}, República de Costa Rica`
    : "los tribunales competentes de la República de Costa Rica";
}
