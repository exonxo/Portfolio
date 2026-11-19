import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { DesignToCode as DesignToCodeData } from "@/content/caseStudyMeta";

type Shot = DesignToCodeData["design"];

function ShotFigure({ shot, step }: { shot: Shot; step: string }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <Image
          src={shot.src}
          alt={shot.label}
          width={shot.width}
          height={shot.height}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-subtle">
        <span className="text-accent">{step}</span> · {shot.label}
      </figcaption>
    </figure>
  );
}

/** The same screen as a design, a coded prototype and the shipped change. */
export function DesignToCode({ data }: { data?: DesignToCodeData }) {
  if (!data) return null;
  return (
    <section aria-labelledby="design-to-code" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
        <h2
          id="design-to-code"
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle"
        >
          <span className="h-px w-8 bg-accent" aria-hidden />
          From design to production
        </h2>
        <div className="mt-8 grid items-start gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <ShotFigure shot={data.design} step="01 Design" />
          <ArrowRight className="mt-16 hidden h-5 w-5 text-foreground-subtle md:block" aria-hidden />
          <ShotFigure shot={data.prototype} step="02 Prototype" />
          <ArrowRight className="mt-16 hidden h-5 w-5 text-foreground-subtle md:block" aria-hidden />
          <a
            href={data.production.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">03 Shipped</span>
            <span className="font-display text-lg font-semibold text-foreground">{data.production.label}</span>
            <span className="text-sm text-foreground-muted">{data.production.detail}</span>
            <ArrowUpRight className="h-4 w-4 text-foreground-subtle group-hover:text-accent" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
