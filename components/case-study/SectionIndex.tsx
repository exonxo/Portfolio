"use client";

import { useEffect, useState } from "react";

export type SectionIndexItem = { id: string; label: string };

/**
 * Sticky "On this page" list for xl screens. Highlights the section that is
 * currently at the top of the viewport.
 */
export function SectionIndex({ items }: { items: SectionIndexItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // The first section (in page order) inside the reading band wins.
        const current = items.find((item) => visible.has(item.id));
        if (current) setActive(current.id);
      },
      // A band just below the fixed header, down to 40% of the viewport.
      { rootMargin: "-80px 0px -60% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="w-44">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
        <span className="h-px w-8 bg-accent" aria-hidden />
        On this page
      </div>
      <ol className="mt-5 space-y-1 border-l border-border">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px block border-l py-1.5 pl-4 text-sm motion-safe:transition-colors ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-foreground-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
