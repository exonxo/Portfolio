import type { KeyDecision } from "@/content/caseStudyMeta";

export function KeyDecisions({ decisions }: { decisions: KeyDecision[] }) {
  if (decisions.length === 0) return null;

  return (
    <section aria-labelledby="key-decisions" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <h2
          id="key-decisions"
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle"
        >
          <span className="h-px w-8 bg-accent" aria-hidden />
          Key decisions
        </h2>
        <ol
          className={`mt-8 grid gap-4 ${
            decisions.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {decisions.map((d, i) => (
            <li
              key={d.decision}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 lg:p-8"
            >
              <span className="font-mono text-xs text-accent" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty font-display text-base font-semibold leading-snug text-foreground lg:text-lg">
                {d.decision}
              </p>
              <p className="text-pretty text-sm text-foreground-muted lg:text-base">{d.why}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
