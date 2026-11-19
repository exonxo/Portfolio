import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

/** Previous and next case study, in the order of content/caseStudies.ts, wrapping around. */
export function NextCase({ currentSlug }: { currentSlug: string }) {
  const count = caseStudies.length;
  const currentIndex = Math.max(
    0,
    caseStudies.findIndex((c) => c.slug === currentSlug),
  );
  const prev = caseStudies[(currentIndex - 1 + count) % count];
  const next = caseStudies[(currentIndex + 1) % count];

  const links = [
    { kind: "Previous", study: prev, Icon: ArrowLeft },
    { kind: "Next", study: next, Icon: ArrowRight },
  ];

  return (
    <nav aria-label="More case studies" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
          <span className="h-px w-8 bg-accent" aria-hidden />
          More case studies
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {links.map(({ kind, study, Icon }) => (
            <Link
              key={kind}
              href={study.href}
              rel={kind === "Previous" ? "prev" : "next"}
              className={`group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong hover:bg-surface-elevated lg:p-10 ${
                kind === "Next" ? "md:items-end md:text-right" : ""
              }`}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                {kind === "Previous" && (
                  <Icon className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:group-hover:-translate-x-0.5" strokeWidth={2.25} />
                )}
                {kind}
                {kind === "Next" && (
                  <Icon className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" strokeWidth={2.25} />
                )}
              </span>
              <span className="text-balance text-2xl font-semibold tracking-tight text-foreground">
                {study.shortTitle}
              </span>
              <span className="max-w-md text-pretty text-sm text-foreground-muted">
                {study.summary}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
