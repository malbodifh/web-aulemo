import { Lienzo } from "../lienzo";

const componentes = [
  { nombre: "Cotidiano", valor: 35, barra: "flex-[35] opacity-70", punto: "opacity-70" },
  { nombre: "Pruebas", valor: 45, barra: "flex-[45] opacity-40", punto: "opacity-40" },
  { nombre: "Asistencia", valor: 10, barra: "flex-[10] opacity-[.22]", punto: "opacity-[.22]" },
  { nombre: "Tareas", valor: 10, barra: "flex-[10] opacity-[.16]", punto: "opacity-[.16]" },
] as const;

export function IlustracionCalificaciones() {
  return (
    <Lienzo>
      <div className="absolute top-[46px] right-[34px] left-[34px] flex h-10 gap-1">
        {componentes.map((componente) => (
          <span
            key={componente.nombre}
            className={`rounded-lg bg-primario ${componente.barra}`}
          />
        ))}
      </div>
      <div className="absolute top-[108px] right-[34px] left-[34px] grid grid-cols-2 gap-x-5 gap-y-2.5 text-sm font-medium text-tinta-suave">
        {componentes.map((componente) => (
          <span key={componente.nombre} className="flex items-center gap-2">
            <i className={`h-2.5 w-2.5 rounded-[3px] bg-primario ${componente.punto}`} />
            {componente.nombre}
            <b className="ml-auto font-semibold text-tinta">{componente.valor}</b>
          </span>
        ))}
      </div>
      <div className="absolute right-[34px] bottom-[30px] left-[34px] flex h-24 items-center justify-between rounded-xl border border-linea bg-elevada px-[22px]">
        <div>
          <small className="block text-[13px] font-semibold text-tinta-suave">
            Química · I periodo
          </small>
          <strong className="text-[15px] font-semibold">Promedio actual</strong>
        </div>
        <span className="text-[52px] leading-none font-bold tracking-[-.03em] text-tinta">
          92
        </span>
      </div>
    </Lienzo>
  );
}
