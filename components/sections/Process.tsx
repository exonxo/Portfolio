import { Network, Layers, Target, Code2 } from "lucide-react";

const steps = [
  {
    icon: Network,
    title: "Understand the system",
    description:
      "I map business rules, system constraints, user workflows, and operational realities before drawing a single screen. Design starts with mapping the territory.",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    icon: Layers,
    title: "Translate complexity",
    description:
      "I convert tangled business requirements and data models into intuitive interfaces. Make the invisible visible. Reduce cognitive load wherever I can.",
    accent: "from-purple-500/20 to-transparent",
  },
  {
    icon: Target,
    title: "Design for constraints",
    description:
      "Accessibility, performance, one handed operation, low DPI environments. Constraints are not obstacles. They are the brief.",
    accent: "from-lime-400/20 to-transparent",
  },
  {
    icon: Code2,
    title: "Iterate with engineering",
    description:
      "I work closely with backend and frontend teams so every design decision is technically feasible, performant, and shippable at scale.",
    accent: "from-cyan-400/20 to-transparent",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground-subtle font-mono">
              Process
            </div>
            <h2 className="mt-6 font-display text-display text-balance text-foreground">
              How I think about
              <br />
              <span className="text-foreground-muted">
                operational design.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-pretty text-foreground-muted lg:text-lg">
            Not a rigid framework. A consistent way of thinking that travels
            across retail, healthcare, AI tooling, and any system with real
            users and real constraints.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:border-border-strong hover:-translate-y-1 lg:p-10"
              >
                <div
                  className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${step.accent} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background ring-1 ring-border-strong text-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-3xl font-semibold leading-none text-foreground/10 group-hover:text-accent/40 transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="relative mt-12 font-display text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                  {step.title}
                </h3>
                <p className="relative mt-4 text-pretty text-foreground-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
