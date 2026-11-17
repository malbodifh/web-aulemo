import { Lienzo } from "@/components/funciones/lienzo";

const materias = [
  {
    nombre: "Matemáticas",
    tipo: "Académica",
    partes: ["flex-[35] opacity-70", "flex-[45] opacity-40", "flex-[10] opacity-[.22]", "flex-[10] opacity-[.16]"],
  },
  {
    nombre: "Electrónica",
    tipo: "Técnica",
    partes: ["flex-[50] opacity-70", "flex-[30] opacity-40", "flex-[20] opacity-[.22]"],
  },
  {
    nombre: "Orientación",
    tipo: "Formativa",
    partes: ["flex-1 opacity-[.22]"],
  },
] as const;

export function IlustracionMaterias() {
  return (
    <Lienzo>
      <div className="absolute inset-x-[34px] top-[34px] grid gap-3 movil:inset-x-[18px] movil:top-[18px]">
        {materias.map((materia) => (
          <div
            key={materia.nombre}
            className="rounded-xl border border-linea bg-elevada p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <b className="text-[15px]">{materia.nombre}</b>
              <small className="text-[13px] font-semibold text-tinta-suave">
                {materia.tipo}
              </small>
            </div>
            <div className="mt-3 flex h-3 gap-1">
              {materia.partes.map((parte) => (
                <span key={parte} className={`rounded-full bg-primario ${parte}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-[34px] bottom-[34px] left-[34px] flex flex-wrap items-center gap-2 movil:right-[18px] movil:bottom-[18px] movil:left-[18px]">
        <span className="inline-flex h-8 items-center rounded-full border border-linea bg-elevada px-[13px] text-[13px] font-semibold">
          Exención
        </span>
        <small className="text-[13px] text-tinta-suave">
          Estudiantes exentos de una materia
        </small>
      </div>
    </Lienzo>
  );
}
