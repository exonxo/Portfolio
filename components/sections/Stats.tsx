const stats = [
  {
    value: "4+",
    label: "Years building product systems",
    detail: "B2B SaaS, enterprise, healthcare",
  },
  {
    value: "8",
    label: "WMS modules unified",
    detail: "Picklist, GRN, bin count, batch, more",
  },
  {
    value: "Pan-India",
    label: "Retail deployment reach",
    detail: "Ginesys POS, Quebuster MVP",
  },
  {
    value: "12",
    label: "Service categories live",
    detail: "EaseCare marketplace",
  },
];

export function Stats() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-3 ${
                i > 0 ? "lg:pl-12" : ""
              } pt-6 lg:pt-0 ${
                i > 0 ? "border-t lg:border-t-0 border-border" : ""
              }`}
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-foreground-subtle font-mono uppercase tracking-[0.16em]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
