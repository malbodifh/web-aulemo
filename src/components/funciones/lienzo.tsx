import type { ReactNode } from "react";

type Alto = "normal" | "alto" | "muy-alto";

const clasesAlto: Record<Alto, string> = {
  normal: "h-[340px] movil:h-[300px]",
  alto: "h-[380px]",
  "muy-alto": "h-[400px]",
};

export function Lienzo({
  children,
  alto = "normal",
}: {
  children: ReactNode;
  alto?: Alto;
}) {
  return (
    <div className="relative min-w-0 rounded-[14px] bg-elevada p-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_0_0_1px_rgba(11,16,32,.09),0_24px_60px_-28px_rgba(11,16,32,.35),0_2px_8px_rgba(11,16,32,.04)]">
      <div
        className={`relative overflow-hidden rounded-[10px] border border-linea bg-hundida ${clasesAlto[alto]}`}
      >
        {children}
      </div>
    </div>
  );
}
