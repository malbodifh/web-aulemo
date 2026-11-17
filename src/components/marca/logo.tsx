type PropiedadesSimbolo = {
  className?: string;
};

export function Simbolo({ className }: PropiedadesSimbolo) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={`shrink-0 ${className ?? "h-[30px] w-[30px]"}`}
    >
      <rect width="64" height="64" rx="16" fill="#171A23" />
      <path
        d="M16 50V32a16 16 0 0 1 32 0v18h-8V32a8 8 0 0 0-16 0v18z"
        fill="#FFFFFF"
      />
      <circle cx="32" cy="42" r="4" fill="#FFFFFF" />
    </svg>
  );
}

type PropiedadesLogo = {
  tamano?: number;
  tono?: "profundo" | "blanco" | "auto";
};

export function Logo({ tamano = 22, tono = "profundo" }: PropiedadesLogo) {
  const claro = tono === "blanco";
  const auto = tono === "auto";
  const color = auto
    ? "var(--logo-tinta, #171A23)"
    : claro
      ? "#FFFFFF"
      : "#171A23";
  const punto = auto
    ? "var(--logo-punto, #5266EB)"
    : claro
      ? "#FFFFFF"
      : "#5266EB";

  return (
    <span
      className={auto ? "logo-auto" : undefined}
      style={{
        display: "flex",
        alignItems: "flex-start",
        color,
      }}
    >
      <svg
        viewBox="16 16 32 34"
        aria-hidden="true"
        height={tamano}
        width={(tamano * 32) / 34}
        style={{ flexShrink: 0 }}
      >
        <path
          d="M16 50V32a16 16 0 0 1 32 0v18h-8V32a8 8 0 0 0-16 0v18z"
          fill={color}
        />
        <circle cx="32" cy="42" r="4" fill={punto} />
      </svg>
      <span
        style={{
          display: "flex",
          marginLeft: tamano * 0.3,
          marginTop: tamano * -0.056,
          fontSize: tamano,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: (tamano * -0.5) / 34,
        }}
      >
        Aulemo
      </span>
    </span>
  );
}

type PropiedadesLogoNoren = {
  alto?: number;
  className?: string;
};

export function LogoNoren({ alto = 12, className }: PropiedadesLogoNoren) {
  return (
    <svg
      viewBox="674 316 1785 467"
      role="img"
      aria-label="Noren"
      height={alto}
      width={(alto * 1785) / 467}
      className={`shrink-0 ${className ?? ""}`}
      fill="currentColor"
    >
      <path d="M 745.00,420.00 Q 745.00,386.00 774.57,402.78 L 1011.43,537.22 Q 1041.00,554.00 1041.96,587.99 L 1042.04,591.01 Q 1043.00,625.00 1013.42,608.23 L 774.58,472.77 Q 745.00,456.00 745.00,422.00 L 745.00,420.00 Z" />
      <path d="M 745.54,675.97 Q 747.00,642.00 776.57,625.22 L 821.43,599.78 Q 851.00,583.00 851.00,617.00 L 851.00,617.00 Q 851.00,651.00 821.46,667.84 L 773.54,695.16 Q 744.00,712.00 745.46,678.03 L 745.54,675.97 Z" />
      <g transform="translate(1213.0,708) scale(0.4581,-0.4581)">
        <path d="M350 500Q400 500 430.5 483.0Q461 466 476.5 437.0Q492 408 497.0 371.5Q502 335 502 296V0H371V297Q371 342 353.5 357.0Q336 372 309 372Q277 372 244.0 356.0Q211 340 187 315V0H56V489H154L171 429Q208 461 253.5 480.5Q299 500 350 500Z" />
        <path d="M282 -12Q206 -12 148.5 20.5Q91 53 59.0 110.5Q27 168 27 244Q27 320 59.0 377.5Q91 435 148.5 467.5Q206 500 282 500Q358 500 415.5 467.5Q473 435 505.0 377.5Q537 320 537 244Q537 168 505.0 110.5Q473 53 415.5 20.5Q358 -12 282 -12ZM282 115Q336 115 370.0 151.0Q404 187 404 244Q404 302 370.0 338.0Q336 374 282 374Q228 374 194.5 338.5Q161 303 161 245Q161 187 194.5 151.0Q228 115 282 115Z" transform="translate(553,0)" />
        <path d="M154 489 167 436Q189 460 222.5 480.0Q256 500 292 500Q325 500 341 491V372H309Q223 372 187 334V0H56V489Z" transform="translate(1117,0)" />
        <path d="M270 -10Q197 -10 142.0 21.5Q87 53 57.0 110.0Q27 167 27 244Q27 320 57.0 377.5Q87 435 142.0 467.5Q197 500 270 500Q344 500 398.5 467.0Q453 434 483.0 376.0Q513 318 513 245Q513 233 512.0 223.0Q511 213 510 206H151Q155 154 188.0 124.5Q221 95 275 95Q326 95 355.0 116.0Q384 137 405 168L496 116Q463 55 406.5 22.5Q350 -10 270 -10ZM270 397Q223 397 192.0 372.0Q161 347 153 304H386Q376 346 347.5 371.5Q319 397 270 397Z" transform="translate(1477,0)" />
        <path d="M350 500Q400 500 430.5 483.0Q461 466 476.5 437.0Q492 408 497.0 371.5Q502 335 502 296V0H371V297Q371 342 353.5 357.0Q336 372 309 372Q277 372 244.0 356.0Q211 340 187 315V0H56V489H154L171 429Q208 461 253.5 480.5Q299 500 350 500Z" transform="translate(2014,0)" />
      </g>
    </svg>
  );
}

export function IsotipoNoren({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 529.7 529.7"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <g transform="translate(-628.6,-284.6)">
        <path d="M 745.00,420.00 Q 745.00,386.00 774.57,402.78 L 1011.43,537.22 Q 1041.00,554.00 1041.96,587.99 L 1042.04,591.01 Q 1043.00,625.00 1013.42,608.23 L 774.58,472.77 Q 745.00,456.00 745.00,422.00 L 745.00,420.00 Z" />
        <path d="M 745.54,675.97 Q 747.00,642.00 776.57,625.22 L 821.43,599.78 Q 851.00,583.00 851.00,617.00 L 851.00,617.00 Q 851.00,651.00 821.46,667.84 L 773.54,695.16 Q 744.00,712.00 745.46,678.03 L 745.54,675.97 Z" />
      </g>
    </svg>
  );
}

export function IsotipoAulemo({ className }: { className?: string }) {
  return (
    <svg viewBox="16 16 32 34" aria-hidden="true" className={className}>
      <path
        d="M16 50V32a16 16 0 0 1 32 0v18h-8V32a8 8 0 0 0-16 0v18z"
        fill="currentColor"
      />
      <circle cx="32" cy="42" r="4" fill="#5266EB" />
    </svg>
  );
}
