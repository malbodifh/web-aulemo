import { Lienzo } from "@/components/funciones/lienzo";

const pasosProfesor = [3, 4, 2] as const;
const pasosOtraPlataforma = [5, 2, 2] as const;

function Fila({
  etiqueta,
  pasos,
  opacidad,
  punto = false,
}: {
  etiqueta: string;
  pasos: readonly number[];
  opacidad: string;
  punto?: boolean;
}) {
  return (
    <div className="grid grid-cols-[76px_1fr] items-center gap-3 movil:grid-cols-[64px_1fr]">
      <span className="text-[12px] leading-none font-semibold text-tinta-suave">
        {etiqueta}
      </span>
      <div className="flex gap-1.5">
        {pasos.map((paso, indice) => (
          <span
            key={indice}
            style={{ flex: paso }}
            className={`relative h-7 rounded-md bg-primario ${opacidad}`}
          >
            {punto && indice === pasos.length - 1 ? (
              <i className="absolute top-1/2 right-2.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-acento-claro" />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

export function IlustracionAdaptacion() {
  return (
    <Lienzo alto="muy-alto">
      <div className="flex h-full flex-col justify-center gap-6 px-[30px] movil:px-[18px]">
        <div>
          <b className="block text-[13px] leading-none font-semibold text-tinta-suave">
            Otras plataformas
          </b>
          <div className="mt-3.5 grid gap-2">
            <Fila
              etiqueta="Profesor"
              pasos={pasosProfesor}
              opacidad="opacity-[.22]"
            />
            <Fila
              etiqueta="Plataforma"
              pasos={pasosOtraPlataforma}
              opacidad="opacity-[.16]"
            />
          </div>
          <p className="mt-3 text-[13px] leading-[1.4] text-tinta-suave">
            Los pasos no coinciden: el profesor tiene que cambiar su forma de
            trabajar.
          </p>
        </div>
        <span className="h-px bg-linea" />
        <div>
          <b className="block text-[13px] leading-none font-semibold text-tinta">
            Con Aulemo
          </b>
          <div className="mt-3.5 grid gap-2">
            <Fila
              etiqueta="Profesor"
              pasos={pasosProfesor}
              opacidad="opacity-[.22]"
            />
            <Fila
              etiqueta="Aulemo"
              pasos={pasosProfesor}
              opacidad="opacity-70"
              punto
            />
          </div>
          <p className="mt-3 text-[13px] leading-[1.4] text-tinta-suave">
            Los pasos coinciden: el profesor sigue evaluando como siempre.
          </p>
        </div>
      </div>
    </Lienzo>
  );
}
