"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import type { Variants } from "motion/react";
import { ArrowUpRight, Quote } from "lucide-react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import type { Testimonial } from "@/content/testimonials";

type Tone = "grid" | "accent" | "ink";

const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
  hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
};

// Faint grid that fades out from the top of the large cards.
const gridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, color-mix(in srgb, var(--foreground) 9%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 9%, transparent) 1px, transparent 1px)",
  backgroundSize: "48px 52px",
  maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 70%, transparent 110%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 70%, transparent 110%)",
};

const toneClass: Record<Tone, string> = {
  grid: "bg-surface text-foreground border-border",
  accent: "bg-accent text-accent-foreground border-transparent",
  ink: "bg-[#111111] text-white border-transparent dark:bg-surface-elevated dark:border-border",
};

const metaClass: Record<Tone, string> = {
  grid: "text-foreground-muted",
  accent: "text-accent-foreground/80",
  ink: "text-white/65 dark:text-foreground-muted",
};

const ringClass: Record<Tone, string> = {
  grid: "ring-accent",
  accent: "ring-accent-foreground/60",
  ink: "ring-white/25 dark:ring-accent",
};

function Card({
  t,
  tone,
  index,
  timelineRef,
  className = "",
  large = false,
}: {
  t: Testimonial;
  tone: Tone;
  index: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  className?: string;
  large?: boolean;
}) {
  return (
    <TimelineContent
      as="figure"
      animationNum={index}
      customVariants={revealVariants}
      timelineRef={timelineRef}
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 ${toneClass[tone]} ${className}`}
    >
      {tone === "grid" && <div className="pointer-events-none absolute inset-0" style={gridStyle} aria-hidden />}
      {large && (
        <Quote className="relative h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden />
      )}
      <div className="relative mt-auto pt-6">
        <blockquote className={`text-pretty leading-relaxed ${large ? "text-lg lg:text-xl" : "text-[15px]"}`}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-end justify-between gap-4 pt-6">
          <div className="min-w-0">
            <a
              href={t.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-display text-base font-semibold underline-offset-4 hover:underline lg:text-lg"
            >
              {t.name}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden />
              <span className="sr-only">(LinkedIn profile)</span>
            </a>
            <div className={`text-sm ${metaClass[tone]}`}>{t.role}</div>
            <div className={`mt-1 font-mono text-[10px] uppercase tracking-[0.18em] ${metaClass[tone]}`}>
              {t.relation} · {t.date}
            </div>
          </div>
          <a href={t.linkedin} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden className="shrink-0">
            <Image
              src={t.photo}
              alt=""
              width={112}
              height={112}
              className={`h-12 w-12 rounded-full object-cover ring-2 ring-offset-0 lg:h-14 lg:w-14 ${ringClass[tone]}`}
            />
          </a>
        </figcaption>
      </div>
    </TimelineContent>
  );
}

export default function ClientFeedback({
  items,
  profileUrl,
}: {
  items: Testimonial[];
  profileUrl: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [a, b, c, d, e, f, g] = items;

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="max-w-3xl">
        <TimelineContent
          as="div"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={ref}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle"
        >
          <span className="inline-block h-px w-8 bg-accent" />
          Kind words
        </TimelineContent>
        <TimelineContent
          as="h2"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={ref}
          className="mt-6 font-display text-display text-balance text-foreground"
        >
          What clients and engineers say
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={2}
          customVariants={revealVariants}
          timelineRef={ref}
          className="mt-6 max-w-2xl text-pretty text-foreground-muted lg:text-lg"
        >
          From recommendations on my LinkedIn, written by the people I designed for and the
          developers who built my designs.
        </TimelineContent>
      </div>

      <div className="mt-14 flex flex-col gap-3 lg:grid lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          {a && <Card t={a} tone="grid" index={0} timelineRef={ref} large className="lg:flex-[7]" />}
          {b && <Card t={b} tone="accent" index={1} timelineRef={ref} className="lg:flex-[3]" />}
        </div>
        <div className="flex flex-col gap-3">
          {c && <Card t={c} tone="ink" index={2} timelineRef={ref} className="lg:flex-1" />}
          {d && <Card t={d} tone="ink" index={3} timelineRef={ref} className="lg:flex-1" />}
          {e && <Card t={e} tone="ink" index={4} timelineRef={ref} className="lg:flex-1" />}
        </div>
        <div className="flex flex-col gap-3">
          {f && <Card t={f} tone="accent" index={5} timelineRef={ref} className="lg:flex-[3]" />}
          {g && <Card t={g} tone="grid" index={6} timelineRef={ref} large className="lg:flex-[7]" />}
        </div>
      </div>

      <div className="mt-10 flex">
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
        >
          Read them all on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      {/* Baseline with corner squares, from the original component. */}
      <div className="pointer-events-none absolute inset-x-6 bottom-8 h-px bg-border lg:inset-x-12" aria-hidden>
        <span className="absolute -left-2 -top-2 h-4 w-4 border border-border-strong bg-background" />
        <span className="absolute -right-2 -top-2 h-4 w-4 border border-border-strong bg-background" />
      </div>
    </section>
  );
}
