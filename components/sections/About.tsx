import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative border-b border-border">
      <div
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="text-[11px] uppercase tracking-[0.25em] text-foreground-subtle font-mono">
                About me
              </div>

              <div className="mt-12 rounded-3xl border border-border bg-surface p-8">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground font-display text-2xl font-bold">
                    PK
                    <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-surface bg-emerald-400" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-foreground">
                      Proloy Karmakar
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Product Designer, Kolkata
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-sm border-t border-border pt-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-foreground-subtle font-mono">
                      Years
                    </div>
                    <div className="mt-1.5 font-medium text-foreground">4+</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-foreground-subtle font-mono">
                      Focus
                    </div>
                    <div className="mt-1.5 font-medium text-foreground">
                      Enterprise UX
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-foreground-subtle font-mono">
                      Currently
                    </div>
                    <div className="mt-1.5 font-medium text-foreground">
                      Capital Numbers
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-foreground-subtle font-mono">
                      Open to
                    </div>
                    <div className="mt-1.5 font-medium text-foreground">
                      Senior PD roles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-display text-balance text-foreground">
              Turning complex systems into{" "}
              <span className="text-accent">usable experiences.</span>
            </h2>

            <div className="mt-12 space-y-6 text-pretty text-foreground-muted lg:text-xl">
              <p>
                I am a product designer based in Kolkata, with 4+ years
                building scalable, accessible systems in B2B SaaS and
                enterprise software. My work sits at the intersection of
                usability, accessibility, and scalability.
              </p>
              <p>
                Whether I am translating retail operations into mobile
                workflows, simplifying warehouse management for one handed
                use, or making AI and ML outputs interpretable for domain
                experts, the common thread is making the invisible visible.
              </p>
              <p>
                I started in design agencies on consumer apps, healthcare,
                and internal tools, where I learned to design across very
                different industries and constraints. Today I am deeply
                embedded in operational enterprise systems at Capital
                Numbers, owning end to end UX for one of India&apos;s largest
                retail POS and ERP platforms.
              </p>
            </div>

            <figure className="relative mt-14 rounded-3xl border border-accent/20 bg-accent/5 p-8 lg:p-10">
              <Quote
                className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-background p-1.5 text-accent"
                strokeWidth={2.25}
              />
              <blockquote className="text-balance font-display text-lg font-medium leading-snug text-foreground lg:text-2xl">
                Great design is not about pretty pixels. It is about making
                life easier for the people who use the product.
              </blockquote>
              <figcaption className="mt-5 text-sm text-foreground-muted font-mono uppercase tracking-[0.18em]">
                A working principle
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
