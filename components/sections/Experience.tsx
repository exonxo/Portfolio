import { Building2, Briefcase, ArrowRight } from "lucide-react";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  focus: string;
  highlights: string[];
  domains: string[];
  current?: boolean;
};

const roles: Role[] = [
  {
    company: "Capital Numbers",
    title: "UX/Product Designer",
    period: "Jul 2024 to Present",
    location: "Kolkata, India",
    focus:
      "Sole designer on POS Mobile and ERP Web for Ginesys One, owning the UX end to end.",
    highlights: [
      "Shipped the Quebuster mobile POS MVP, now in use at 1,000+ retailers across India",
      "Designed and built the entire front end of Ginesys Insights, a report builder, in Next.js; I keep improving it through pull requests",
      "Lead the mPOS design stream; run design audits, set UX standards and mentor designers",
      "Earlier client work: Dark Yeti brand and WCAG-compliant website, PictureYOU iOS booking flows, and dashboards for AI/ML proofs of concept (machine fault detection, X-ray diagnostics)",
    ],
    domains: [
      "Retail billing",
      "Inventory",
      "Reporting",
      "Next.js and React",
      "POS Mobile",
      "ERP Web",
      "AI/ML interfaces",
      "Accessibility",
    ],
    current: true,
  },
  {
    company: "Cloudcraftz Solutions",
    title: "Associate Designer",
    period: "May 2022 to Jul 2024",
    location: "Kolkata, India",
    focus:
      "Worked across consumer apps, healthcare products, and internal tools, building a foundation in designing for different industries and constraints.",
    highlights: [
      "QOMIX: mobile experience and CMS design for a comic reading platform",
      "ALYF: mobile healthcare suite for iOS and Web, partnered with founders",
      "TalentSPOT: built an internal ATS from research to handoff",
    ],
    domains: ["Healthcare", "Consumer apps", "Internal tools", "CMS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
              <span className="inline-block h-px w-8 bg-accent" />
              Experience
            </div>
            <h2 className="mt-6 font-display text-display text-balance text-foreground max-w-3xl">
              Agency, to product,
              <br />
              <span className="text-foreground-muted">
                to enterprise scale.
              </span>
            </h2>
          </div>
          <div className="text-xs text-foreground-subtle font-mono uppercase tracking-[0.2em] lg:text-right">
            2 roles
            <br />
            <span className="text-foreground-muted">4+ years</span>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {roles.map((role, idx) => (
            <article
              key={role.company}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-border-strong"
            >
              {role.current && (
                <div className="absolute right-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-400 font-mono">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Currently
                </div>
              )}

              <div className="grid gap-6 p-6 lg:grid-cols-12 lg:gap-12 lg:p-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-foreground-subtle font-mono">
                    {role.current ? (
                      <Briefcase className="h-3.5 w-3.5 text-accent" strokeWidth={2.25} />
                    ) : (
                      <Building2 className="h-3.5 w-3.5 text-foreground-muted" strokeWidth={2.25} />
                    )}
                    Role 0{idx + 1}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                    {role.company}
                  </h3>
                  <div className="mt-2 text-foreground-muted">{role.title}</div>
                  <div className="mt-6 space-y-1 text-sm text-foreground-subtle font-mono">
                    <div>{role.period}</div>
                    <div>{role.location}</div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-pretty text-foreground-muted lg:text-lg">
                    {role.focus}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <ArrowRight
                          className="mt-1.5 h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={2.5}
                        />
                        <span className="text-pretty">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
