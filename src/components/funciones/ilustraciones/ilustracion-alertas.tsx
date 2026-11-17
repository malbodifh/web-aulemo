import { Lienzo } from "../lienzo";

const alertas = [
  {
    titulo: "Alerta amarilla",
    detalle: "6 lecciones de ausencia · Matemáticas",
    punto: "bg-[#E6A740] shadow-[0_0_0_5px_rgba(230,167,64,.18)]",
  },
  {
    titulo: "Alerta roja",
    detalle: "12 lecciones de ausencia · Inglés",
    punto: "bg-[#F27D70] shadow-[0_0_0_5px_rgba(242,125,112,.18)]",
  },
] as const;

const destinos = ["Encargado", "Profesor guía", "Auxiliar"] as const;

export function IlustracionAlertas() {
  return (
    <Lienzo>
      <div className="absolute inset-x-[34px] top-[34px] grid gap-3 movil:inset-x-[18px] movil:top-[18px]">
        {alertas.map((alerta) => (
          <div
            key={alerta.titulo}
            className="flex items-center gap-3.5 rounded-xl border border-linea bg-elevada p-4"
          >
            <span className={`h-3.5 w-3.5 flex-none rounded-full ${alerta.punto}`} />
            <div className="min-w-0">
              <b className="block text-[15px]">{alerta.titulo}</b>
              <small className="block text-[13px] text-tinta-suave">{alerta.detalle}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-[34px] bottom-[34px] left-[34px] flex flex-wrap gap-2 movil:right-[18px] movil:bottom-[18px] movil:left-[18px]">
        {destinos.map((destino) => (
          <span
            key={destino}
            className="inline-flex h-8 items-center rounded-full border border-linea bg-elevada px-[13px] text-[13px] font-semibold"
          >
            {destino}
          </span>
        ))}
      </div>
    </Lienzo>
  );
}
