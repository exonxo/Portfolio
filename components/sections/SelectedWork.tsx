import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
            <span className="inline-block h-px w-8 bg-accent" />
            Selected work, 2022 to 2026
          </div>
          <h2 className="mt-6 font-display text-display text-balance text-foreground">
            Case studies
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-foreground-muted lg:text-lg">
            Each one opens with a four-line summary. Read that, and keep going
            only if you want the full story.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={cs.href}
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 group-hover:border-border-strong">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-elevated">
                  {cs.image ? (
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt ?? ""}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    // No stock photos. Until a real screenshot exists, show the
                    // case study's key figures instead.
                    <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
                        {cs.capability}
                      </div>
                      <dl className="grid grid-cols-3 gap-4">
                        {(cs.metrics ?? []).slice(0, 3).map((m) => (
                          <div key={m.label}>
                            <dt className="sr-only">{m.label}</dt>
                            <dd className="font-display text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                              {m.value}
                            </dd>
                            <dd className="mt-1 text-xs leading-snug text-foreground-muted lg:text-sm">
                              {m.label}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em]">
                    <span className="text-accent">{cs.statusLabel}</span>
                    <span className="text-foreground-subtle">{cs.year}</span>
                  </div>
                  <h3 className="flex items-start justify-between gap-4 font-display text-xl font-semibold tracking-tight text-foreground">
                    {cs.shortTitle}
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-foreground-subtle transition-colors group-hover:text-foreground"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </h3>
                  <p className="text-pretty leading-relaxed text-foreground-muted">
                    {cs.summary}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
