import { ArrowRight } from "lucide-react";
import type { FlowMap as FlowMapData } from "@/content/caseStudyMeta";
import { sectionId } from "./Section";

/** The product's main flow as a row of steps; each one jumps to the section that covers it. */
export function FlowMap({ map }: { map?: FlowMapData }) {
  if (!map) return null;
  return (
    <nav aria-label={map.title} className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
          <span className="h-px w-8 bg-accent" aria-hidden />
          {map.title}
        </div>
        <ol className="mt-6 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-y-3">
          {map.steps.map((step, i) => (
            <li key={step.label} className="flex items-center">
              <a
                href={`#${sectionId(step.section)}`}
                className="inline-flex items-center gap-3 rounded-full border border-border bg-surface py-2 pl-2 pr-4 text-sm text-foreground transition-colors hover:border-accent hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 font-mono text-[11px] text-accent">
                  {i + 1}
                </span>
                {step.label}
              </a>
              {i < map.steps.length - 1 && (
                <ArrowRight className="mx-2 hidden h-4 w-4 shrink-0 text-foreground-subtle md:block" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
