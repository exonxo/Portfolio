"use client";

import Image from "next/image";
import { useState } from "react";
import type { BeforeAfter as BeforeAfterData } from "@/content/caseStudyMeta";

/** Drag the handle (or use the arrow keys) to compare the old screen with the redesign. */
export function BeforeAfter({ data }: { data?: BeforeAfterData }) {
  const [pos, setPos] = useState(50);
  if (!data) return null;
  return (
    <section aria-label="Before and after" className="border-b border-border/60">
      <figure className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-12 lg:px-10">
        <div
          className="relative select-none overflow-hidden rounded-2xl border border-border bg-surface"
          style={{ aspectRatio: `${data.width} / ${data.height}` }}
        >
          <Image src={data.after} alt={data.afterLabel} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image src={data.before} alt={data.beforeLabel} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent" style={{ left: `${pos}%` }}>
            <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-lg">
              ⇆
            </span>
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
            {data.beforeLabel}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground">
            {data.afterLabel}
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`Slide between ${data.beforeLabel} and ${data.afterLabel}`}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <figcaption className="font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
          {data.caption}
        </figcaption>
      </figure>
    </section>
  );
}
