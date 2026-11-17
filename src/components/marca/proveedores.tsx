export function MarcaVercel() {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[21px] w-[21px] text-tinta movil:h-[18px] movil:w-[18px]" fill="currentColor">
        <path d="m12 1.608 12 20.784H0Z" />
      </svg>
      <span className="text-[24px] leading-none font-semibold tracking-[-.035em] movil:text-[20px] text-tinta">Vercel</span>
    </span>
  );
}

export function MarcaSupabase() {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 movil:h-5 movil:w-5">
        <path
          fill="#3ECF8E"
          d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
        />
      </svg>
      <span className="text-[24px] leading-none font-semibold tracking-[-.035em] movil:text-[20px] text-tinta">supabase</span>
    </span>
  );
}
