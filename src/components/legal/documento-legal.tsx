import type { ReactNode } from "react";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";
import { legal } from "@/lib/legal";

export type SeccionLegal = {
  id: string;
  titulo: string;
  contenido: ReactNode;
};

type Propiedades = {
  titulo: string;
  introduccion: ReactNode;
  secciones: readonly SeccionLegal[];
};

function Indice({ secciones }: { secciones: readonly SeccionLegal[] }) {
  return (
    <ol className="grid gap-2 text-[14.5px] leading-[1.35] text-tinta-suave">
      {secciones.map((seccion, indice) => (
        <li key={seccion.id} className="flex gap-2">
          <span className="w-6 shrink-0 text-right tabular-nums">
            {indice + 1}.
          </span>
          <a href={`#${seccion.id}`} className="hover:text-tinta">
            {seccion.titulo}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function DocumentoLegal({ titulo, introduccion, secciones }: Propiedades) {
  return (
    <>
      <TemaPagina />
      <Menu />
      <main>
        <section className="contenedor pt-[192px] pb-12 movil:pt-[120px] movil:pb-8">
          <h1 className="max-w-[900px] animate-entrada text-[length:clamp(40px,5.4vw,64px)] leading-[1.04] font-black tracking-[-.045em] reducido:animate-none">
            {titulo}
          </h1>
          <p className="mt-5 animate-entrada text-[15px] text-tinta-suave [animation-delay:.08s] reducido:animate-none">
            Última actualización: {legal.fechaVigencia}
          </p>
          <div className="mt-5 max-w-[720px] animate-entrada text-[length:clamp(17px,1.35vw,19px)] leading-[1.6] text-tinta-suave [animation-delay:.12s] reducido:animate-none">
            {introduccion}
          </div>
        </section>
        <section className="contenedor pb-[120px] movil:pb-20">
          <div className="grid grid-cols-[280px_minmax(0,1fr)] items-start gap-16 medio:grid-cols-1 medio:gap-8">
            <nav
              aria-label="Contenido"
              className="sticky top-[96px] max-h-[calc(100vh-120px)] overflow-y-auto pr-2 medio:hidden"
            >
              <p className="mb-4 text-[14px] font-bold text-tinta">Contenido</p>
              <Indice secciones={secciones} />
            </nav>
            <details className="hidden rounded-2xl border border-linea bg-elevada px-4 py-3 medio:block">
              <summary className="cursor-pointer text-[15px] font-semibold">
                Contenido
              </summary>
              <div className="mt-4 pb-2">
                <Indice secciones={secciones} />
              </div>
            </details>
            <article className="texto-legal max-w-[720px]">
              {secciones.map((seccion, indice) => (
                <section key={seccion.id}>
                  <h2 id={seccion.id}>
                    {indice + 1}. {seccion.titulo}
                  </h2>
                  {seccion.contenido}
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Pie />
      <Revelador />
    </>
  );
}
