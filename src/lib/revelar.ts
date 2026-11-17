export function revelar(retraso?: 1 | 2 | 3) {
  return retraso
    ? { "data-revelar": "", "data-retraso": String(retraso) }
    : { "data-revelar": "" };
}
