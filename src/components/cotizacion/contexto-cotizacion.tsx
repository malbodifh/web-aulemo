"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const estudiantesPorDefecto = "1200";
const profesoresPorDefecto = "70";

export type CampoCantidad = "estudiantes" | "profesores";

type ValorContexto = {
  estudiantes: string;
  profesores: string;
  cambiar: (campo: CampoCantidad, valor: string) => void;
  sumar: (campo: CampoCantidad, paso: number) => void;
  reiniciar: () => void;
};

const ContextoCotizacion = createContext<ValorContexto | null>(null);

function limpiar(valor: string) {
  return valor.replace(/[^\d]/g, "").slice(0, 5);
}

export function ProveedorCotizacion({ children }: { children: ReactNode }) {
  const [estudiantes, setEstudiantes] = useState(estudiantesPorDefecto);
  const [profesores, setProfesores] = useState(profesoresPorDefecto);

  const cambiar = useCallback((campo: CampoCantidad, valor: string) => {
    const limpio = limpiar(valor);
    if (campo === "estudiantes") setEstudiantes(limpio);
    else setProfesores(limpio);
  }, []);

  const sumar = useCallback((campo: CampoCantidad, paso: number) => {
    const actualizar = (anterior: string) =>
      String(Math.max(0, (Number(anterior) || 0) + paso));
    if (campo === "estudiantes") setEstudiantes(actualizar);
    else setProfesores(actualizar);
  }, []);

  const reiniciar = useCallback(() => {
    setEstudiantes(estudiantesPorDefecto);
    setProfesores(profesoresPorDefecto);
  }, []);

  const valor = useMemo(
    () => ({ estudiantes, profesores, cambiar, sumar, reiniciar }),
    [estudiantes, profesores, cambiar, sumar, reiniciar],
  );

  return (
    <ContextoCotizacion.Provider value={valor}>
      {children}
    </ContextoCotizacion.Provider>
  );
}

export function useCotizacion() {
  const valor = useContext(ContextoCotizacion);
  if (!valor) {
    throw new Error("useCotizacion debe usarse dentro de ProveedorCotizacion");
  }
  return valor;
}
