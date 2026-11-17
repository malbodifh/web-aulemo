import { Lienzo } from "../lienzo";

const registros = [
  { titulo: "Asistencia · 10-3", detalle: "Lección 4", enviado: true },
  { titulo: "Notas · Prueba parcial", detalle: "Química", enviado: false },
  { titulo: "Boleta · Valeria Mora", detalle: "Uniforme", enviado: false },
] as const;

const claseTexto = "font-semibold";

export function IlustracionSinConexion() {
  return (
    <Lienzo alto="muy-alto">
      <div className="absolute inset-x-[34px] top-[30px] grid gap-3">
        {registros.map((registro) => (
          <div
            key={registro.titulo}
            className="flex items-center gap-3.5 rounded-xl border border-linea bg-elevada px-4 py-3"
          >
            <div className="min-w-0 flex-1">
              <b className="block text-[15px]">{registro.titulo}</b>
              <small className="block text-[13px] text-tinta-suave">{registro.detalle}</small>
            </div>
            <span
              className={`inline-flex h-7 flex-none items-center rounded-full px-[11px] text-xs font-semibold whitespace-nowrap ${
                registro.enviado
                  ? "bg-primario text-sobre-primario"
                  : "bg-[rgba(82,102,235,.16)] text-primario-fuerte"
              }`}
            >
              {registro.enviado ? "Enviado" : "En el dispositivo"}
            </span>
          </div>
        ))}
      </div>
      <svg
        viewBox="0 0 400 80"
        aria-hidden="true"
        className="absolute right-[34px] bottom-[26px] left-[34px]"
      >
        <rect x="0" y="34" width="400" height="12" rx="6" fill="#5266EB" fillOpacity=".14" />
        <rect x="150" y="34" width="250" height="12" rx="6" fill="#5266EB" fillOpacity=".7" />
        <circle cx="9" cy="40" r="7.5" fill="#A9B3F7" stroke="#5266EB" strokeWidth="3" />
        <text x="0" y="74" fontSize="13" className={claseTexto} fill="#5A5F6E">
          Sin señal
        </text>
        <text x="150" y="20" fontSize="13" className={claseTexto} fill="#3F51D6">
          Vuelve la conexión
        </text>
        <text x="400" y="74" textAnchor="end" fontSize="13" className={claseTexto} fill="#0A0B0F">
          Enviado
        </text>
      </svg>
    </Lienzo>
  );
}
