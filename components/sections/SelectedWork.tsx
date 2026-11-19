import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";
import { CaseRail } from "@/components/sections/CaseRail";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-20 lg:px-12 lg:pt-28">
        <div className="max-w-3xl">
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
        </div>
      </div>

      {/* The wall: hanging frames you can light, nudge and click into. */}
      <div className="mx-auto mt-6 w-full max-w-[1400px] lg:px-6">
        <CaseRail />
      </div>

      {/* The same five cases as a plain list, for skimming and for screen readers. */}
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
        <ol className="divide-y divide-border border-y border-border">
          {caseStudies.map((cs, i) => (
            <li key={cs.slug}>
              <Link
                href={cs.href}
                className="group grid gap-2 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="md:col-span-3">
                  <span className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-foreground">
                    {cs.shortTitle}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 flex flex-wrap gap-x-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                    <span className="text-accent">{cs.statusLabel}</span>
                    <span className="text-foreground-subtle">{cs.year}</span>
                  </span>
                </span>
                <span className="text-pretty leading-relaxed text-foreground-muted md:col-span-8">
                  {cs.summary}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
