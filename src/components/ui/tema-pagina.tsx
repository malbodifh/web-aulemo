"use client";

import { useEffect } from "react";

const UMBRAL_DESPLAZADO = 8;

export function TemaPagina() {
  useEffect(() => {
    const raiz = document.documentElement;
    let pendiente = false;

    const calcular = () => {
      pendiente = false;
      if (window.scrollY > UMBRAL_DESPLAZADO) raiz.setAttribute("data-desplazado", "");
      else raiz.removeAttribute("data-desplazado");
    };

    const programar = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(calcular);
    };

    window.addEventListener("scroll", programar, { passive: true });
    calcular();

    return () => {
      window.removeEventListener("scroll", programar);
      raiz.removeAttribute("data-desplazado");
    };
  }, []);

  return null;
}
