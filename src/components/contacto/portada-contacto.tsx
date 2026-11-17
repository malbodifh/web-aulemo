import { Az, Pt } from "@/components/funciones/titulo";

export function PortadaContacto() {
  return (
    <section className="contenedor pt-[192px] pb-16 text-center movil:pt-[120px] movil:pb-10">
      <h1 className="mx-auto max-w-[900px] animate-entrada text-[length:clamp(40px,5.4vw,72px)] leading-[1.02] font-bold tracking-[-.045em] reducido:animate-none">
        Conozca Aulemo{" "}
        <Az>
          en su colegio<Pt>.</Pt>
        </Az>
      </h1>
      <p className="mx-auto mt-[22px] max-w-[680px] animate-entrada text-[length:clamp(17px,1.35vw,20px)] leading-[1.5] text-tinta-suave [animation-delay:.08s] reducido:animate-none">
        Le mostramos la plataforma con los procesos de su institución y
        resolvemos sus dudas en una sola reunión.
      </p>
    </section>
  );
}
