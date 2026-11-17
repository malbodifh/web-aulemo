import { Plus } from "lucide-react";
import { Icono } from "@/components/ui/icono";
import { revelar } from "@/lib/revelar";
import { preguntasFrecuentes } from "@/lib/sitio";

export function ListaPreguntas() {
  return (
    <div {...revelar()} className="vidrio rounded-[14px] p-2">
      {preguntasFrecuentes.map((item, indice) => (
        <details
          key={item.pregunta}
          open={indice === 0}
          className="group rounded-[10px] transition-[background] duration-[250ms] not-first:border-t not-first:border-[rgba(11,16,32,.07)] open:bg-white/70"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-[22px] text-[17px] leading-[1.35] font-semibold tracking-[-.01em] movil:px-4 movil:py-[18px] movil:text-base [&::-webkit-details-marker]:hidden">
            {item.pregunta}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[rgba(11,16,32,.08)] bg-white/80 transition-[transform,background,color] duration-300 ease-aulemo group-open:rotate-45 group-open:border-primario group-open:bg-primario group-open:text-white">
              <Icono icono={Plus} tamano="sm" />
            </span>
          </summary>
          <p className="max-w-[620px] px-6 pb-6 text-[15.5px] leading-[1.65] text-tinta-suave movil:px-4 movil:pb-5">
            {item.respuesta}
          </p>
        </details>
      ))}
    </div>
  );
}
