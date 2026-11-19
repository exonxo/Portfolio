import { Mail, ArrowUpRight, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.857V9h2.957v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.978 0 1.778-.773 1.778-1.729V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.18em] text-foreground-subtle">
              Contact
            </div>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Hiring a designer who ships the front end?
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-foreground-muted">
              Open to UX engineer and product designer roles. Especially
              interested in teams building complex operational software: retail,
              supply chain, healthcare.
            </p>

            <a
              href="mailto:proloykarmakar25@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" strokeWidth={2.25} />
              proloykarmakar25@gmail.com
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.25}
              />
            </a>
          </Reveal>

          <Reveal index={1} className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.18em] text-foreground-subtle">
              Elsewhere
            </div>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/kproloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:bg-surface-elevated"
                >
                  <span className="flex items-center gap-3 text-foreground">
                    <LinkedinIcon className="h-4 w-4 text-foreground-muted" />
                    LinkedIn
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://bento.me/uxproloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:bg-surface-elevated"
                >
                  <span className="flex items-center gap-3 text-foreground">
                    <Globe className="h-4 w-4 text-foreground-muted" strokeWidth={2} />
                    Bento profile
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:proloykarmakar25@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:bg-surface-elevated"
                >
                  <span className="flex items-center gap-3 text-foreground">
                    <Mail className="h-4 w-4 text-foreground-muted" strokeWidth={2} />
                    Email
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-8 text-sm text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <div>Proloy Karmakar. Designed and built in Kolkata, 2026.</div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Open to UX engineer and product designer roles
          </div>
        </div>
      </div>
    </footer>
  );
}
