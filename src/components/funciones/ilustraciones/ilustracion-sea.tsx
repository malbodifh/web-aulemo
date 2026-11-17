import { Lienzo } from "../lienzo";

const encabezados = ["Estudiante", "Cot.", "Pru.", "Asis.", "Tar.", "Total"] as const;

const filas = [
  ["Calderón Vega, Andrés", "32", "40", "10", "9", "91"],
  ["Mora Jiménez, Valeria", "33", "41", "10", "8", "92"],
  ["Solano Rojas, José Pablo", "28", "36", "9", "10", "83"],
  ["Quesada, María Fernanda", "34", "43", "10", "10", "97"],
  ["Araya Brenes, Daniel", "26", "33", "7", "9", "75"],
  ["Vargas Soto, Camila", "30", "39", "10", "10", "89"],
] as const;

const claseCelda =
  "flex items-center overflow-hidden border-r border-b border-linea px-3 text-[13px] whitespace-nowrap";

export function IlustracionSea() {
  return (
    <Lienzo>
      <div className="absolute top-10 right-[-40px] bottom-[-40px] left-[34px] grid auto-rows-[44px] grid-cols-[1.8fr_repeat(5,1fr)] overflow-hidden rounded-xl border border-linea bg-elevada">
        {encabezados.map((encabezado) => (
          <span
            key={encabezado}
            className={`${claseCelda} bg-[rgba(82,102,235,.16)] font-semibold text-primario-fuerte`}
          >
            {encabezado}
          </span>
        ))}
        {filas.map((fila) =>
          fila.map((celda, columna) => (
            <span
              key={`${fila[0]}-${columna}`}
              className={
                columna === 0
                  ? `${claseCelda} text-tinta-suave`
                  : `${claseCelda} justify-end font-semibold text-tinta`
              }
            >
              {celda}
            </span>
          )),
        )}
      </div>
    </Lienzo>
  );
}
