import { Lienzo } from "../lienzo";

const dias = ["L", "K", "M", "J", "V"] as const;

export function IlustracionAgenda() {
  return (
    <Lienzo>
      <div className="absolute top-10 right-[34px] left-[34px] grid grid-cols-5 gap-2">
        {dias.map((dia) => {
          const marcado = dia === "M";
          return (
            <span
              key={dia}
              className={`relative h-[120px] rounded-[10px] ${marcado ? "bg-[rgba(82,102,235,.7)]" : "bg-[rgba(82,102,235,.16)]"}`}
            >
              <em
                className={`absolute top-2.5 left-3 text-[13px] font-bold not-italic ${marcado ? "text-white" : "text-primario-fuerte"}`}
              >
                {dia}
              </em>
              {marcado ? (
                <i className="absolute bottom-4 left-1/2 -ml-1.5 h-3 w-3 rounded-full bg-acento-claro" />
              ) : null}
            </span>
          );
        })}
      </div>
      <div className="absolute right-[34px] bottom-[34px] left-[34px] flex items-center gap-3.5 rounded-xl border border-linea bg-elevada px-[18px] py-4 movil:right-[18px] movil:bottom-[18px] movil:left-[18px]">
        <span className="h-3 w-3 flex-none rounded-full bg-acento-claro shadow-[0_0_0_4px_rgba(169,179,247,.35)]" />
        <div className="min-w-0">
          <b className="block text-[15px]">Prueba parcial · 10-3</b>
          <small className="block text-[13px] text-tinta-suave">
            Miércoles, lección 4 · Química
          </small>
        </div>
      </div>
    </Lienzo>
  );
}
