import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

export function NextCase({ currentSlug }: { currentSlug: string }) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === currentSlug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="text-xs uppercase tracking-[0.18em] text-foreground-subtle">
          Next case study
        </div>
        <Link
          href={next.href}
          className="group mt-6 flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong hover:bg-surface-elevated lg:flex-row lg:items-center lg:justify-between lg:p-12"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">
              {next.capability}
            </div>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
              {next.shortTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-pretty text-foreground-muted">
              {next.summary}
            </p>
          </div>
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
          </span>
        </Link>
      </div>
    </section>
  );
}
