import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-b border-border">
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
                      UX Engineer, Kolkata
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
                      Design and front end
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
                      UX engineer roles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-display text-balance text-foreground">
              I design it,{" "}
              <span className="text-accent">then I build it.</span>
            </h2>

            <div className="mt-12 space-y-6 text-pretty text-foreground-muted lg:text-xl">
              <p>
                I&apos;m a product designer in Kolkata with four years in B2B
                and retail software. For the last part of that I have also
                been writing the front end of what I design.
              </p>
              <p>
                On Ginesys Insights, a report builder, I designed the product
                and built the entire interface in Next.js. I send my changes
                as pull requests like any engineer on the team. That removed
                the back and forth between design and development: nobody
                rebuilds my screens from Figma, and I go to the developers
                when I need their advice on the backend or an approach.
              </p>
              <p>
                I build with AI coding agents. Claude is my daily driver,
                in Cursor and Claude Code, and for larger changes I split
                the work across several agents. I review what they write,
                because I&apos;m the one who answers for it.
              </p>
              <p>
                I also design the mobile POS and warehouse apps for
                Ginesys. Before Capital Numbers, I designed consumer,
                healthcare and internal tools at Cloudcraftz.
              </p>
            </div>

            <figure className="relative mt-14 rounded-3xl border border-accent/20 bg-accent/5 p-8 lg:p-10">
              <Quote
                className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-background p-1.5 text-accent"
                strokeWidth={2.25}
              />
              <blockquote className="text-balance font-display text-lg font-medium leading-snug text-foreground lg:text-2xl">
                Since I started shipping my own front end, I spend less
                time making designs pretty and more on whether they work,
                and whether the feature is needed at all.
              </blockquote>
              <figcaption className="mt-5 text-sm text-foreground-muted font-mono uppercase tracking-[0.18em]">
                How I work now
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
