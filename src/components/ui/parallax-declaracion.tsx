"use client";

import { useEffect, useRef, type ReactNode } from "react";

function acotar(valor: number) {
  return Math.min(1, Math.max(0, valor));
}

function suavizar(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function tramo(p: number, inicio: number, fin: number) {
  return suavizar(acotar((p - inicio) / (fin - inicio)));
}

const VARIABLES = [
  "--d-l1-y",
  "--d-l1-o",
  "--d-l2-y",
  "--d-l2-o",
  "--d-p-y",
  "--d-p-o",
];

export function ParallaxDeclaracion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)");
    const movil = window.matchMedia("(max-width: 720px)");
    let escuchando = false;
    let pendiente = false;
    let observador: IntersectionObserver | null = null;

    const calcular = () => {
      pendiente = false;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? acotar(-rect.top / total) : 1;
      const m = movil.matches;
      const l1 = tramo(p, 0.1, 0.55);
      const salida = tramo(p, 0.55, 0.75);
      const l2 = tramo(p, 0.2, 0.65);
      const par = tramo(p, 0.6, 0.85);
      el.style.setProperty(
        "--d-l1-y",
        `${(m ? -32 : -48) * l1 + (m ? -28 : -40) * salida}px`,
      );
      el.style.setProperty(
        "--d-l1-o",
        String((1 - 0.68 * l1) * (1 - salida)),
      );
      el.style.setProperty("--d-l2-y", `${(m ? 60 : 90) * (1 - l2)}px`);
      el.style.setProperty("--d-l2-o", String(l2));
      el.style.setProperty("--d-p-y", `${24 * (1 - par)}px`);
      el.style.setProperty("--d-p-o", String(par));
    };

    const programar = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(calcular);
    };

    const escuchar = () => {
      if (escuchando) return;
      escuchando = true;
      window.addEventListener("scroll", programar, { passive: true });
      programar();
    };

    const dejarDeEscuchar = () => {
      if (!escuchando) return;
      escuchando = false;
      window.removeEventListener("scroll", programar);
    };

    const detener = () => {
      dejarDeEscuchar();
      observador?.disconnect();
      observador = null;
      window.removeEventListener("resize", programar);
      for (const variable of VARIABLES) el.style.removeProperty(variable);
    };

    const iniciar = () => {
      if (reducido.matches) return;
      observador = new IntersectionObserver(
        ([entrada]) => {
          if (entrada.isIntersecting) escuchar();
          else {
            dejarDeEscuchar();
            calcular();
          }
        },
        { rootMargin: "200px 0px" },
      );
      observador.observe(el);
      window.addEventListener("resize", programar);
      calcular();
    };

    const alCambiarPreferencia = () => {
      detener();
      iniciar();
    };

    iniciar();
    reducido.addEventListener("change", alCambiarPreferencia);
    movil.addEventListener("change", programar);

    return () => {
      detener();
      reducido.removeEventListener("change", alCambiarPreferencia);
      movil.removeEventListener("change", programar);
    };
  }, []);

  return (
    <section ref={ref} className="declaracion relative text-center">
      {children}
    </section>
  );
}
