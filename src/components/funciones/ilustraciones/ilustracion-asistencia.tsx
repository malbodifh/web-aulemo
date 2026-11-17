import { Lienzo } from "../lienzo";

const estudiantes = [
  { iniciales: "AC", nombre: "Andrés Calderón Vega", marca: "P" },
  { iniciales: "VM", nombre: "Valeria Mora Jiménez", marca: "P" },
  { iniciales: "JS", nombre: "José Pablo Solano Rojas", marca: "T" },
  { iniciales: "MF", nombre: "María Fernanda Quesada", marca: "P" },
  { iniciales: "DA", nombre: "Daniel Araya Brenes", marca: "A" },
] as const;

export function IlustracionAsistencia() {
  return (
    <Lienzo>
      <div className="absolute inset-x-[34px] top-[34px] grid gap-2.5 movil:inset-x-[18px] movil:top-[18px]">
        {estudiantes.map((estudiante) => (
          <div
            key={estudiante.iniciales}
            className="flex h-[54px] items-center gap-3 rounded-xl border border-linea bg-elevada px-3.5 text-sm font-semibold"
          >
            <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-hundida text-[11px] font-bold text-tinta-suave">
              {estudiante.iniciales}
            </span>
            <span className="min-w-0 truncate">{estudiante.nombre}</span>
            <span className="ml-auto flex flex-none gap-[3px] rounded-[10px] bg-hundida p-[3px]">
              {["P", "T", "A"].map((letra) => (
                <span
                  key={letra}
                  className={`grid h-[26px] w-[30px] place-items-center rounded-[7px] text-[11px] font-bold ${
                    letra === estudiante.marca
                      ? "bg-primario text-sobre-primario"
                      : "text-tinta-suave"
                  }`}
                >
                  {letra}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </Lienzo>
  );
}
