/** "What I'd do differently", in the owner's own words, at the end of a case study. */
export function DoDifferently({ points }: { points?: string[] }) {
  if (!points || points.length === 0) return null;
  return (
    <section aria-labelledby="do-differently" className="border-t border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
        <div className="rounded-3xl border border-accent/25 bg-accent/5 p-8 lg:p-10">
          <h2
            id="do-differently"
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle"
          >
            <span className="h-px w-8 bg-accent" aria-hidden />
            What I&apos;d do differently
          </h2>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="text-pretty text-foreground lg:text-lg">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
