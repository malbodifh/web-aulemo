import { Lienzo } from "../lienzo";

const roles = [
  { nombre: "Profesor", items: ["Asistencia", "Notas", "Agenda", "Boletas"] },
  { nombre: "Encargado", items: ["Notas", "Ausencias", "Boletas"] },
  { nombre: "Coordinación", items: ["Alertas", "Grupos", "Reportes"] },
] as const;

export function IlustracionRoles() {
  return (
    <Lienzo>
      <div className="absolute inset-[34px] grid grid-cols-3 gap-2.5 movil:inset-[18px] movil:grid-cols-1">
        {roles.map((rol, indice) => (
          <div
            key={rol.nombre}
            className={`flex min-w-0 flex-col justify-between rounded-xl border border-linea bg-elevada p-3.5 ${indice === 2 ? "movil:hidden" : ""}`}
          >
            <b className="text-sm">{rol.nombre}</b>
            <span className="grid gap-1.5">
              {rol.items.map((item) => (
                <span
                  key={item}
                  className="flex h-[30px] items-center overflow-hidden rounded-lg bg-[rgba(82,102,235,.16)] px-2.5 text-xs font-semibold whitespace-nowrap text-primario-fuerte"
                >
                  {item}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </Lienzo>
  );
}
