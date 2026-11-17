import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-20 lg:px-10 lg:pt-20 lg:pb-28">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.25} />
          Back to selected work
        </Link>

        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-foreground-subtle">
          <span className="rounded-full border border-border-strong bg-surface px-3 py-1 text-foreground-muted">
            {caseStudy.capability}
          </span>
          {caseStudy.status === "placeholder" && (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
              Coming soon
            </span>
          )}
        </div>

        <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          {caseStudy.title}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-lg text-foreground-muted">
          {caseStudy.description}
        </p>

        <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">
              Role
            </div>
            <div className="mt-2 text-foreground">{caseStudy.role}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">
              Timeline
            </div>
            <div className="mt-2 text-foreground">{caseStudy.timeline}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">
              Team
            </div>
            <div className="mt-2 text-foreground">{caseStudy.team}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">
              Domain
            </div>
            <div className="mt-2 text-foreground">{caseStudy.industry}</div>
          </div>
        </div>

        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="bg-surface p-6">
                <div className="text-2xl font-semibold tracking-tight text-foreground">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-foreground-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
