export function PortadaFunciones() {
  return (
    <section className="contenedor pt-[192px] pb-24 text-center movil:pt-[120px] movil:pb-12">
      <h1 className="mx-auto max-w-[900px] animate-entrada text-[length:clamp(40px,5.4vw,72px)] leading-[1.02] font-bold tracking-[-.045em] reducido:animate-none">
        Todo el día a día del colegio<span className="ml-[-0.13em]">,</span>{" "}
        <span className="text-primario">
          en una sola plataforma<span className="punto">.</span>
        </span>
      </h1>
      <p className="mx-auto mt-[22px] max-w-[680px] animate-entrada text-[length:clamp(17px,1.35vw,20px)] leading-[1.5] text-tinta-suave [animation-delay:.08s] reducido:animate-none">
        Asistencia, calificaciones, boletas y avisos para profesores, encargados
        y dirección. Desde el celular, incluso sin internet.
      </p>
    </section>
  );
}
