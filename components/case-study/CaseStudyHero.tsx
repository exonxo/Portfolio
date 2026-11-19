import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyHero({
  caseStudy,
  readingMinutes,
}: {
  caseStudy: CaseStudy;
  /** Estimated reading time for the whole page, shown beside the status. */
  readingMinutes?: number;
}) {
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
          {readingMinutes !== undefined && (
            <span className="font-mono text-[11px] tracking-[0.2em] text-foreground-subtle">
              {readingMinutes} min read
            </span>
          )}
        </div>

        <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground">
          {caseStudy.title}
        </h1>

        {caseStudy.links && caseStudy.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {caseStudy.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                    : "inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
                }
              >
                {link.label}
                <ExternalLink className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}

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
