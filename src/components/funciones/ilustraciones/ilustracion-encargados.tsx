import { Lienzo } from "../lienzo";

const avisos = [
  { titulo: "Nota registrada", detalle: "Valeria · Química, prueba parcial 1: 88" },
  { titulo: "Tardía", detalle: "Valeria · Lección 2, Matemáticas" },
  { titulo: "Boleta", detalle: "Valeria · Uniforme incompleto" },
] as const;

export function IlustracionEncargados() {
  return (
    <Lienzo alto="alto">
      <div className="absolute top-[34px] left-1/2 h-[400px] w-[230px] -translate-x-1/2 rounded-[38px] bg-profundo p-[9px]">
        <div className="h-full overflow-hidden rounded-[30px] bg-superficie">
          <div className="bg-profundo px-4 pt-[34px] pb-4 text-white">
            <small className="text-[11px] text-white/70">Encargado</small>
            <b className="mt-0.5 block text-base">Hola, Andrea</b>
          </div>
          <div className="grid gap-2 p-2.5">
            {avisos.map((aviso) => (
              <div
                key={aviso.titulo}
                className="rounded-xl border border-linea bg-elevada px-3 py-2.5 text-xs leading-[1.35]"
              >
                <b className="block text-[12.5px]">{aviso.titulo}</b>
                <span className="text-tinta-suave">{aviso.detalle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Lienzo>
  );
}
