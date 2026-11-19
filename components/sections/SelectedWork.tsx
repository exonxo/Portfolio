import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";
import { CaseRail } from "@/components/sections/CaseRail";
import { Reveal } from "@/components/ui/reveal";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-20 lg:px-12 lg:pt-28">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
            <span className="inline-block h-px w-8 bg-accent" />
            Selected work, 2024 to 2026
          </div>
          <h2 className="mt-6 font-display text-display text-balance text-foreground">
            Case studies
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-foreground-muted lg:text-lg">
            Each one opens with a four-line summary. Read that, and keep going
            only if you want the full story.
          </p>
        </Reveal>
      </div>

      {/* The wall: hanging frames you can light, nudge and click into. */}
      <div className="mx-auto mt-6 w-full max-w-[1400px] lg:px-6">
        <CaseRail />
      </div>

      {/* The main scan path: every case with its status, one key figure and its live links. */}
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
        <ol className="divide-y divide-border border-y border-border">
          {caseStudies.map((cs, i) => {
            const figure = cs.metrics?.[0];
            return (
              <Reveal
                as="li"
                key={cs.slug}
                index={i}
                className="group relative grid gap-3 py-6 transition-colors hover:bg-surface/60 md:grid-cols-12 md:items-baseline md:gap-6 md:px-3"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-3">
                  {/* The title link stretches over the whole row; the live links sit above it. */}
                  <Link
                    href={cs.href}
                    className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-foreground after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-ring"
                  >
                    {cs.shortTitle}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </Link>
                  <div className="mt-1 flex flex-wrap gap-x-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                    <span className="text-accent">{cs.statusLabel}</span>
                    <span className="text-foreground-subtle">{cs.year}</span>
                  </div>
                </div>
                <p className="text-pretty leading-relaxed text-foreground-muted md:col-span-5">
                  {cs.summary}
                </p>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 md:col-span-3 md:flex-col md:items-end md:text-right">
                  {figure && (
                    <div>
                      <div className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {figure.value}
                      </div>
                      <div className="text-xs text-foreground-muted">{figure.label}</div>
                    </div>
                  )}
                  {cs.links && (
                    <div className="relative z-10 flex gap-2">
                      {cs.links.map((l, k) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            k === 0
                              ? "inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground hover:opacity-90"
                              : "inline-flex items-center gap-1 rounded-full border border-border-strong px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-surface-elevated"
                          }
                        >
                          {l.label}
                          <ArrowUpRight className="h-3 w-3" strokeWidth={2.25} aria-hidden />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
