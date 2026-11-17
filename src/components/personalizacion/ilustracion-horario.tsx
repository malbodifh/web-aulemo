import { Lienzo } from "@/components/funciones/lienzo";

const segmentos = [
  { tipo: "leccion", etiqueta: "1", opacidad: "opacity-70" },
  { tipo: "leccion", etiqueta: "2", opacidad: "opacity-70" },
  { tipo: "pausa", etiqueta: "Recreo", ancho: "w-6" },
  { tipo: "leccion", etiqueta: "3", opacidad: "opacity-40" },
  { tipo: "leccion", etiqueta: "4", opacidad: "opacity-40" },
  { tipo: "pausa", etiqueta: "Almuerzo", ancho: "w-10" },
  { tipo: "leccion", etiqueta: "5", opacidad: "opacity-[.22]" },
  { tipo: "leccion", etiqueta: "6", opacidad: "opacity-[.16]" },
] as const;

const estados = ["Presente", "Tardía", "Ausente"] as const;

export function IlustracionHorario() {
  return (
    <Lienzo>
      <div className="absolute inset-x-[34px] top-[46px] movil:inset-x-[18px] movil:top-[30px]">
        <div className="flex h-12 gap-1">
          {segmentos.map((segmento) =>
            segmento.tipo === "leccion" ? (
              <span
                key={segmento.etiqueta}
                className={`relative min-w-0 flex-1 rounded-lg bg-primario ${segmento.opacidad}`}
              />
            ) : (
              <span
                key={segmento.etiqueta}
                className={`relative flex-none ${segmento.ancho}`}
              />
            ),
          )}
        </div>
        <div className="mt-2.5 flex gap-1 text-xs font-semibold text-tinta-suave">
          {segmentos.map((segmento) =>
            segmento.tipo === "leccion" ? (
              <span key={segmento.etiqueta} className="min-w-0 flex-1 text-center">
                {segmento.etiqueta}
              </span>
            ) : (
              <span
                key={segmento.etiqueta}
                className={`relative flex-none ${segmento.ancho}`}
              >
                <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-tinta">
                  {segmento.etiqueta}
                </span>
              </span>
            ),
          )}
        </div>
      </div>
      <div className="absolute right-[34px] bottom-[30px] left-[34px] rounded-xl border border-linea bg-elevada p-[18px] movil:right-[18px] movil:bottom-[18px] movil:left-[18px] movil:p-4">
        <small className="block text-[13px] font-semibold text-tinta-suave">
          Lección 3 · Asistencia
        </small>
        <div className="mt-3 flex flex-wrap gap-2">
          {estados.map((estado) => (
            <span
              key={estado}
              className="inline-flex h-8 items-center rounded-full border border-linea bg-hundida px-[13px] text-[13px] font-semibold"
            >
              {estado}
            </span>
          ))}
        </div>
      </div>
    </Lienzo>
  );
}
