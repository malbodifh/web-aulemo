"use client";

import { useEffect } from "react";

export function Revelador() {
  useEffect(() => {
    const elementos = document.querySelectorAll<HTMLElement>(
      "[data-revelar]:not([data-visible])",
    );

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            (entrada.target as HTMLElement).setAttribute("data-visible", "");
            observador.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elementos.forEach((elemento) => observador.observe(elemento));

    return () => observador.disconnect();
  }, []);

  return null;
}
