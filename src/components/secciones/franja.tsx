import {
  FileSpreadsheet,
  LifeBuoy,
  MonitorSmartphone,
  WifiOff,
} from "lucide-react";
import { Icono } from "@/components/ui/icono";
import { revelar } from "@/lib/revelar";

const elementos = [
  {
    icono: WifiOff,
    titulo: "Funciona sin internet",
    texto: "Se sincroniza solo al volver",
    retraso: undefined,
    bordes: "",
  },
  {
    icono: MonitorSmartphone,
    titulo: "Celular y computadora",
    texto: "Se instala como app, sin tiendas",
    retraso: 1,
    bordes: "border-l movil:border-t movil:border-l-0",
  },
  {
    icono: FileSpreadsheet,
    titulo: "Notas listas para el SEA",
    texto: "Un Excel por grupo",
    retraso: 2,
    bordes: "border-l medio:border-t medio:border-l-0 movil:border-t",
  },
  {
    icono: LifeBuoy,
    titulo: "Soporte 365 días",
    texto: "Directo con el equipo de Noren",
    retraso: 3,
    bordes: "border-l medio:border-t movil:border-t movil:border-l-0",
  },
] as const;

export function Franja() {
  return (
    <div id="ventajas" className="border-y border-[rgba(11,16,32,.07)] bg-white/45">
      <ul className="contenedor grid grid-cols-4 medio:grid-cols-2 movil:grid-cols-1">
        {elementos.map((elemento) => (
          <li
            key={elemento.titulo}
            {...revelar(elemento.retraso)}
            className={`flex items-center gap-3.5 border-[rgba(11,16,32,.07)] px-6 py-7 text-[15px] leading-[1.3] font-semibold movil:px-1 movil:py-5 ${elemento.bordes}`}
          >
            <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[13px] bg-hundida text-tinta">
              <Icono icono={elemento.icono} />
            </span>
            <div>
              {elemento.titulo}
              <span className="mt-[3px] block text-[13.5px] leading-[1.4] font-normal text-tinta-suave">
                {elemento.texto}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
