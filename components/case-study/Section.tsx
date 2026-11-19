import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type SectionProps = {
  eyebrow: string;
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
};

/** Stable anchor id for a section, derived from its eyebrow ("The problem" -> "the-problem"). */
export function sectionId(eyebrow: string) {
  return eyebrow
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function CaseSection({ eyebrow, title, icon: Icon, children }: SectionProps) {
  return (
    <section id={sectionId(eyebrow)} className="scroll-mt-20 border-b border-border/60">
      {/* At xl the left 14rem is kept free for the sticky "On this page" index. */}
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24 xl:pl-56">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-foreground-subtle">
              {Icon && (
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
              )}
              {eyebrow}
            </div>
            <h2 className="mt-4 text-balance text-lg font-semibold tracking-tight text-foreground sm:text-xl lg:text-2xl">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-5 text-pretty text-foreground-muted lg:text-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base text-foreground">
          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-8">
      <p className="text-balance text-base font-medium text-foreground lg:text-lg">
        {children}
      </p>
    </blockquote>
  );
}
