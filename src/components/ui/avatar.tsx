type PropiedadesAvatar = {
  iniciales: string;
  oscuro?: boolean;
};

export function Avatar({ iniciales, oscuro = false }: PropiedadesAvatar) {
  const tono = oscuro
    ? "bg-white/[.12] text-white movil:h-6 movil:w-6 movil:text-[9px]"
    : "bg-hundida text-tinta-suave";

  return (
    <span
      className={`grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full text-[11px] leading-none font-bold ${tono}`}
    >
      {iniciales}
    </span>
  );
}
