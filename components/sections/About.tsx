import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

// Compact on purpose: who I am, what I do, what I build with. One screen on
// desktop, so a recruiter doesn't have to scroll to get the picture.

const facts: [string, string][] = [
  ["Based in", "Kolkata, India"],
  ["Experience", "4+ years"],
  ["Now", "Capital Numbers, for Ginesys One"],
  ["Open to", "UX engineer roles"],
];

const work = [
  {
    title: "Product design",
    body: "Flows, screens and design systems for retail POS, warehouse and reporting software.",
  },
  {
    title: "Front end",
    body: "I build what I design in Next.js and React and ship it through pull requests.",
  },
  {
    title: "Research",
    body: "Sessions with the people who use the product, before deciding what to build.",
  },
];

const stack: [string, string[]][] = [
  ["Design", ["Figma", "Rive", "Lottie", "Miro"]],
  ["Front end", ["Next.js", "React", "TypeScript", "Tailwind CSS", "AG Grid"]],
  ["Data and shipping", ["Supabase", "Git and pull requests", "Vercel"]],
  ["AI tools", ["Claude Code", "Cursor"]],
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-b border-border">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
          <span className="inline-block h-px w-8 bg-accent" />
          About me
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photo and quick facts */}
          <Reveal className="lg:col-span-4">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="relative aspect-[4/3] bg-surface-elevated lg:aspect-square">
                <Image
                  src="https://caerngsicqdfqubm.public.blob.vercel-storage.com/proloy-profile.png"
                  alt="Proloy Karmakar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 p-6 text-sm">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground-subtle">
                      {k}
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Intro, what I do, stack */}
          <Reveal index={1} className="lg:col-span-8">
            <h2 className="font-display text-display text-balance text-foreground">
              I design it, <span className="text-accent">then I build it.</span>
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-pretty text-foreground-muted lg:text-lg">
              <p>
                I&apos;m Proloy. I&apos;ve spent four years designing B2B and
                retail software, and since 2025 I also write the front end of
                what I design.
              </p>
              <p>
                At Ginesys One I design the mobile POS and warehouse apps. On
                Ginesys Insights I built the whole interface myself, so nobody
                rebuilds my screens from Figma. When it&apos;s a backend
                question, I still ask the developers.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {work.map((w) => (
                <div key={w.title} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="font-display text-base font-semibold text-foreground">
                    {w.title}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{w.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground-subtle">
                What I work with
              </div>
              <dl className="mt-4 space-y-3">
                {stack.map(([group, items]) => (
                  <div key={group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                    <dt className="w-40 shrink-0 text-sm font-medium text-foreground">{group}</dt>
                    <dd className="flex flex-wrap gap-2">
                      {items.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/cv"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Read my CV
              </Link>
              <a
                href="mailto:proloykarmakar25@gmail.com"
                className="inline-flex items-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
              >
                Email me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
