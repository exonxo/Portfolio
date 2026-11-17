const brands = [
  { name: "Ginesys One", note: "ERP and POS, current client" },
  { name: "Capital Numbers", note: "Current employer" },
  { name: "EaseCare", note: "Marketplace, founders" },
  { name: "Dark Yeti", note: "US Federal Agency" },
  { name: "ALYF", note: "US healthcare suite" },
  { name: "PictureYOU", note: "iOS photographer app" },
  { name: "QOMIX", note: "Comic platform" },
  { name: "TalentSPOT", note: "Internal ATS" },
];

export function Brands() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground-subtle font-mono">
              Trust
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Worked with teams shipping at real world scale.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {brands.map((b) => (
                <li
                  key={b.name}
                  className="group flex flex-col justify-between gap-3 bg-surface p-5 transition-colors hover:bg-surface-elevated"
                >
                  <div className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {b.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-foreground-subtle font-mono">
                    {b.note}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
