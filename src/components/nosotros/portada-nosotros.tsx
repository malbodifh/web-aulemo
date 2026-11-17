import { Az } from "@/components/funciones/titulo";

export function PortadaNosotros() {
  return (
    <section className="contenedor pt-[192px] pb-24 text-center movil:pt-[120px] movil:pb-12">
      <h1 className="mx-auto max-w-[900px] animate-entrada text-[length:clamp(40px,5.4vw,72px)] leading-[1.02] font-bold tracking-[-.045em] reducido:animate-none">
        Construimos Aulemo para resolver{" "}
        <Az>
          un problema real<span className="punto">.</span>
        </Az>
      </h1>
      <p className="mx-auto mt-[22px] max-w-[680px] animate-entrada text-[length:clamp(17px,1.35vw,20px)] leading-[1.5] text-tinta-suave [animation-delay:.08s] reducido:animate-none">
        Noren es una agencia de desarrollo de software fundada en 2025 por David
        Arias Esquivel. Aulemo es nuestra respuesta a una plataforma que los
        profesores no usaban.
      </p>
    </section>
  );
}
