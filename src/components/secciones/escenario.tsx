import {
  BookOpen,
  Calendar,
  CircleCheck,
  FileSpreadsheet,
  House,
  Lock,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Simbolo } from "@/components/marca/logo";
import { Avatar } from "@/components/ui/avatar";
import { Icono } from "@/components/ui/icono";
import { Pildora } from "@/components/ui/pildora";

const bordeSuave = "border-[rgba(11,16,32,.07)]";
const sombraSegmento = "bg-white shadow-[0_1px_2px_rgba(11,16,32,.12)]";

const menuLateral = [
  { texto: "Inicio", icono: House, activo: false },
  { texto: "Mis grupos", icono: Users, activo: true },
  { texto: "Calificaciones", icono: BookOpen, activo: false },
  { texto: "Agenda", icono: Calendar, activo: false },
  { texto: "Conducta", icono: ShieldCheck, activo: false },
] as const;

const estadisticas = [
  { texto: "Presentes", valor: 29, color: "text-exito" },
  { texto: "Tardías", valor: 2, color: "text-aviso" },
  { texto: "Ausentes", valor: 1, color: "text-peligro" },
  { texto: "Justificadas", valor: 1, color: "text-info" },
] as const;

const estudiantes = [
  { iniciales: "AC", nombre: "Andrés Calderón Vega", marca: "P" },
  { iniciales: "VM", nombre: "Valeria Mora Jiménez", marca: "P" },
  { iniciales: "JS", nombre: "José Pablo Solano Rojas", marca: "T" },
  { iniciales: "MF", nombre: "María Fernanda Quesada", marca: "P" },
  { iniciales: "DA", nombre: "Daniel Araya Brenes", marca: "A" },
] as const;

const opcionesAsistencia = ["P", "T", "A", "J"] as const;

const colorMarca = {
  P: "text-exito",
  T: "text-aviso",
  A: "text-peligro",
  J: "text-info",
} as const;

function Segmento({ marca }: { marca: "P" | "T" | "A" | "J" }) {
  return (
    <span className="flex gap-[3px] rounded-[10px] bg-hundida p-[3px]">
      {opcionesAsistencia.map((opcion) => (
        <span
          key={opcion}
          className={`grid h-6 w-[26px] place-items-center rounded-[7px] text-[11px] leading-none font-bold ${
            opcion === marca
              ? `${sombraSegmento} ${colorMarca[opcion]}`
              : "text-tinta-suave"
          }`}
        >
          {opcion}
        </span>
      ))}
    </span>
  );
}

const claseFlotante =
  "vidrio absolute flex animate-flotar items-center gap-3 rounded-[18px] py-3 pr-4 pl-3 text-[13.5px] leading-[1.25] font-semibold reducido:animate-none";
const claseIconoFlotante =
  "grid h-[38px] w-[38px] shrink-0 place-items-center rounded-xl movil:h-[30px] movil:w-[30px] movil:rounded-[10px]";
const claseSubtituloFlotante =
  "mt-0.5 block text-xs leading-[1.3] font-medium text-tinta-suave";

export function Escenario() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[1240px] shrink-0 origin-top text-left scale-(--escena-escala) movil:scale-100 animate-entrada pb-[110px] [animation-delay:.32s] reducido:animate-none movil:pb-0"
    >
      <div className="vidrio w-[84%] movil:hidden overflow-hidden rounded-[22px] compacto:w-[88%] movil:w-full movil:rounded-[18px]">
        <div className={`flex h-11 items-center gap-[7px] border-b px-4 ${bordeSuave}`}>
          <span className="h-[11px] w-[11px] rounded-full bg-[rgba(11,16,32,.13)]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[rgba(11,16,32,.13)]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[rgba(11,16,32,.13)]" />
          <span className="mx-auto flex h-[26px] items-center gap-1.5 rounded-full bg-white/70 px-3.5 text-xs leading-[26px] font-medium text-tinta-suave movil:text-[11px]">
            <Icono icono={Lock} tamano={12} />
            app.aulemo.cr
          </span>
        </div>
        <div className="grid min-h-[420px] grid-cols-[200px_1fr] bg-white/55 movil:min-h-0 movil:grid-cols-1">
          <div
            className={`flex flex-col gap-0.5 border-r bg-[rgba(247,247,246,.6)] px-3 py-[18px] movil:hidden ${bordeSuave}`}
          >
            <span className="inline-flex items-center gap-2.5 px-2 pb-4 text-[15px] leading-none font-bold tracking-[-.02em]">
              <Simbolo className="h-6 w-6" />
              Aulemo
            </span>
            {menuLateral.map((item) => (
              <span
                key={item.texto}
                className={`flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-[13px] leading-none ${
                  item.activo
                    ? "bg-hundida font-semibold text-tinta"
                    : "font-medium text-tinta-suave"
                }`}
              >
                <Icono icono={item.icono} tamano={16} />
                {item.texto}
              </span>
            ))}
          </div>
          <div className="px-6 py-[22px] movil:px-3.5 movil:pt-4 movil:pb-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <span className="text-[11px] leading-none font-semibold tracking-[.06em] text-tinta-suave uppercase">
                  Lección 4 · 9:20 a. m.
                </span>
                <h4 className="mt-2 text-[22px] leading-[1.2] font-bold tracking-[-.02em] movil:text-lg">
                  Asistencia · 10-3
                </h4>
              </div>
              <Pildora tono="ok" icono={CircleCheck}>
                Guardado
              </Pildora>
            </div>
            <div className="mt-[18px] grid grid-cols-4 gap-2.5 movil:grid-cols-2">
              {estadisticas.map((estadistica, indice) => (
                <div
                  key={estadistica.texto}
                  className={`rounded-[14px] border bg-white px-3.5 py-3 ${bordeSuave} ${
                    indice >= 2 ? "movil:hidden" : ""
                  }`}
                >
                  <span className="block text-[10.5px] leading-none font-semibold tracking-[.06em] text-tinta-suave uppercase">
                    {estadistica.texto}
                  </span>
                  <b
                    className={`mt-2 block text-2xl leading-none font-bold tracking-[-.02em] tabular-nums ${estadistica.color}`}
                  >
                    {estadistica.valor}
                  </b>
                </div>
              ))}
            </div>
            <ul
              className={`mt-3.5 overflow-hidden rounded-[14px] border bg-white movil:mr-[110px] ${bordeSuave}`}
            >
              {estudiantes.map((estudiante, indice) => (
                <li
                  key={estudiante.iniciales}
                  className={`flex items-center gap-3 border-t border-[rgba(11,16,32,.06)] px-3.5 py-2.5 text-[13.5px] leading-[1.2] font-semibold first:border-t-0 ${
                    indice >= 3 ? "movil:hidden" : ""
                  }`}
                >
                  <Avatar iniciales={estudiante.iniciales} />
                  <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {estudiante.nombre}
                  </span>
                  <Segmento marca={estudiante.marca} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-[30px] w-[262px] movil:relative movil:right-auto movil:bottom-auto movil:mx-auto movil:w-[250px] rounded-[44px] bg-[#0A0B0F] p-2.5 shadow-[0_50px_80px_-30px_rgba(11,16,32,.55),inset_0_0_0_1px_rgba(255,255,255,.08)] compacto:w-[230px]">
        <div className="relative h-[520px] overflow-hidden rounded-[35px] bg-superficie compacto:h-[470px]">
          <span className="absolute top-2.5 left-1/2 z-[2] h-6 w-[84px] -translate-x-1/2 rounded-full bg-[#0A0B0F]" />
          <div className="bg-[#171A23] px-[18px] pt-[46px] pb-[18px] text-white">
            <small className="text-[11.5px] leading-none font-medium text-white/70">
              Encargado
            </small>
            <h5 className="mt-1.5 text-lg leading-[1.2] font-bold tracking-[-.01em]">
              Hola, Andrea
            </h5>
            <div className="mt-3.5 flex items-center gap-2.5 rounded-2xl border border-white/[.14] bg-white/10 p-2.5">
              <Avatar iniciales="VM" oscuro />
              <div>
                <b className="block text-[13px] leading-[1.2] font-semibold">
                  Valeria Mora
                </b>
                <span className="text-[11.5px] leading-[1.2] font-normal text-white/70">
                  Décimo · 10-3
                </span>
              </div>
            </div>
          </div>
          <div className="p-3.5">
            <div
              className={`rounded-2xl border bg-white p-3.5 ${bordeSuave}`}
            >
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10.5px] leading-none font-semibold tracking-[.06em] text-tinta-suave uppercase">
                    Química · I periodo
                  </span>
                  <p className="mt-1.5 text-sm leading-[1.3] font-semibold">
                    Promedio actual
                  </p>
                </div>
                <b className="text-[40px] leading-none font-bold tracking-[-.03em] text-tinta tabular-nums">
                  92
                </b>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-hundida">
                <i className="block h-full w-[92%] rounded-[inherit] bg-tinta" />
              </div>
            </div>
            <div
              className={`mt-2.5 rounded-2xl border bg-white p-3.5 ${bordeSuave}`}
            >
              <div className="flex items-center justify-between gap-2 pb-2 text-[12.5px] leading-[1.3] font-medium">
                <span>Cotidiano 3</span>
                <Pildora tono="ok" alto="chico">
                  Entregado
                </Pildora>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-[rgba(11,16,32,.06)] py-2 text-[12.5px] leading-[1.3] font-medium">
                <span>Prueba parcial 1</span>
                <b className="font-bold tabular-nums">88</b>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-[rgba(11,16,32,.06)] py-2 text-[12.5px] leading-[1.3] font-medium">
                <span>Ausencias</span>
                <Pildora tono="info" alto="chico">
                  2 justificadas
                </Pildora>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${claseFlotante} top-[250px] -left-7 [animation-delay:-2.3s] movil:hidden`}
      >
        <span className={`${claseIconoFlotante} bg-hundida text-tinta`}>
          <Icono icono={RefreshCw} />
        </span>
        <div>
          Conexión recuperada
          <small className={claseSubtituloFlotante}>
            12 cambios enviados automáticamente
          </small>
        </div>
      </div>
      <div
        className={`${claseFlotante} top-[280px] right-[300px] [animation-delay:-4.6s] compacto:hidden`}
      >
        <span className={`${claseIconoFlotante} bg-[#E3F3E8] text-exito`}>
          <Icono icono={FileSpreadsheet} />
        </span>
        <div>
          Notas_10-3.xlsx
          <small className={claseSubtituloFlotante}>Listo para el SEA</small>
        </div>
      </div>
    </div>
  );
}
