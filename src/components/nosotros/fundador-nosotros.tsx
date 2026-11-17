import { IsotipoNoren } from "@/components/marca/logo";
import { revelar } from "@/lib/revelar";

export function FundadorNosotros() {
  return (
    <section className="py-14">
      <div className="contenedor">
        <article
          {...revelar()}
          className="vidrio grid grid-cols-[1fr_auto] items-center gap-8 rounded-[14px] p-10 movil:grid-cols-1 movil:p-6"
        >
          <div>
            <h2 className="text-[length:clamp(28px,3.2vw,40px)] leading-[1.1] font-semibold tracking-[-.04em]">
              David Arias Esquivel
            </h2>
            <p className="mt-2 text-[17px] leading-[1.5] text-tinta-suave">
              Fundador de Noren
            </p>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-tinta-suave">
              Noren se fundó en 2025 como agencia de desarrollo de software.
              Aulemo es el producto con el que atiende a los centros educativos.
            </p>
          </div>
          <IsotipoNoren className="h-[72px] w-[72px] text-tinta movil:order-first" />
        </article>
      </div>
    </section>
  );
}
