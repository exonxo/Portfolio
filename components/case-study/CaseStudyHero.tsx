import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  const brief = [
    { label: "Problem", text: caseStudy.brief.problem },
    { label: "My role", text: caseStudy.brief.myRole },
    { label: "What I did", text: caseStudy.brief.whatIDid },
    { label: "Where it stands", text: caseStudy.brief.whereItStands },
  ];

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-16 lg:px-10 lg:pt-20 lg:pb-20">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.25} />
          All case studies
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em]">
          <span className="rounded-full border border-accent/40 px-3 py-1 text-accent">
            {caseStudy.statusLabel}
          </span>
          <span className="rounded-full border border-border-strong px-3 py-1 text-foreground-muted">
            {caseStudy.capability}
          </span>
        </div>

        <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground">
          {caseStudy.title}
        </h1>

        {/* The 30-second version. Everything below it is optional reading. */}
        <dl className="mt-12 max-w-4xl divide-y divide-border border-y border-border">
          {brief.map((row) => (
            <div key={row.label} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="pt-0.5 font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                {row.label}
              </dt>
              <dd className="text-pretty text-foreground lg:text-lg">{row.text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">Timeline</div>
            <div className="mt-2 text-foreground">{caseStudy.timeline}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">Team</div>
            <div className="mt-2 text-foreground">{caseStudy.team}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">Domain</div>
            <div className="mt-2 text-foreground">{caseStudy.industry}</div>
          </div>
        </div>

        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <div className="mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="bg-surface p-6">
                <div className="text-2xl font-semibold tracking-tight text-foreground">{m.value}</div>
                <div className="mt-1 text-sm text-foreground-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
          The full story follows
        </p>
      </div>
    </section>
  );
}
