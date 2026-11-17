import type { ReactNode } from "react";

export function Pt({ children }: { children: ReactNode }) {
  return <span className="ml-[-0.08em]">{children}</span>;
}

export function Az({ children }: { children: ReactNode }) {
  return <span className="text-primario">{children}</span>;
}
