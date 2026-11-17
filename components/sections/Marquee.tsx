const items = [
  "Enterprise UX",
  "Workflow optimization",
  "Design systems",
  "Mobile POS",
  "Warehouse operations",
  "Two-sided marketplaces",
  "AI/ML interfaces",
  "Accessibility, WCAG",
  "Cross platform",
  "Information architecture",
  "Operational research",
  "Product strategy",
];

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-surface/60 py-8"
      aria-label="Capabilities"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10 px-6">
            <span className="font-display text-xl text-foreground/80 sm:text-2xl lg:text-3xl tracking-tight">
              {item}
            </span>
            <span
              className="inline-block h-2 w-2 rounded-full bg-accent shrink-0"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  );
}
