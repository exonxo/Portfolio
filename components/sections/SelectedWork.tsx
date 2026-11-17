"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type CaseStudy = {
  title: string;
  description: string;
  tag: string;
  image: string;
  href: string;
  external: boolean;
  year: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Ginesys POS",
    description:
      "Mobile point-of-sale for Pan-India retail chains. 436 screens, 48 modules, deployed for festive-peak Quebuster rollout.",
    tag: "Enterprise Retail",
    image: "/case-studies/ginesys-pos/scanner.png",
    href: "/work/ginesys-pos",
    external: false,
    year: "2024",
  },
  {
    title: "Ginesys WMS",
    description:
      "Redesigning a warehouse app nobody wanted to use. One-handed mobile workflows for Pan-India retail.",
    tag: "Operational UX",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
    href: "/work/ginesys-wms",
    external: false,
    year: "2025",
  },
  {
    title: "EaseCare",
    description:
      "Two-sided marketplace connecting elder care providers with families across 12 service categories.",
    tag: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=80&auto=format&fit=crop",
    href: "/work/easecare",
    external: false,
    year: "2024",
  },
  {
    title: "Bitescape",
    description:
      "An AI-powered venue discovery marketplace. Helping users find the perfect spot, instantly.",
    tag: "Marketplace · AI",
    image: "/case-studies/bitescape.png",
    href: "https://www.behance.net/gallery/180630815/Bitescape-Discover-the-perfect-venue-powered-by-AI",
    external: true,
    year: "2023",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground-subtle font-mono">
              <span className="inline-block h-px w-8 bg-accent" />
              Selected work, 2022 to 2026
            </div>
            <h2 className="mt-6 font-display text-display text-balance text-foreground">
              Four case studies.
              <br />
              <span className="text-foreground-muted">
                Each one solving a different problem.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-foreground-muted lg:text-lg">
            From warehouse workflows to AI-powered marketplaces, each case study
            is proof of how I translate operational complexity into usable
            systems.
          </p>
        </div>

        {/* 2 × 2 grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => {
            const cardContent = (
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay for readability */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    aria-hidden
                  />
                  {/* Top-right icon badge */}
                  <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand-gradient group-hover:border-white/40 group-hover:scale-110">
                    {cs.external ? (
                      <ExternalLink className="h-4 w-4" strokeWidth={2.25} />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                    )}
                  </div>
                  {/* Year badge */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                    {cs.year}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-foreground-subtle font-mono">
                    {cs.tag}
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {cs.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {cs.description}
                  </p>
                </div>
              </article>
            );

            return cs.external ? (
              <a
                key={cs.title}
                href={cs.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read about ${cs.title} (opens in new tab)`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
              >
                {cardContent}
              </a>
            ) : (
              <Link
                key={cs.title}
                href={cs.href}
                aria-label={`View ${cs.title} case study`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
