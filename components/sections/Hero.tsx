import Link from "next/link";
import { ProfileCard } from "@/components/ui/profile-card";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial" aria-hidden />
      <div className="absolute inset-0 grid-pattern" aria-hidden />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-[1400px] flex-col justify-between px-6 pt-8 pb-12 lg:px-12 lg:pt-12 lg:pb-16">
        <div>
          <div className="flex items-center gap-3 animate-fade-in-up">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground-muted font-mono">
              Open to UX engineer and product design roles
            </span>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left Side - Content */}
            <div>
              <h1 className="font-display text-display text-balance text-foreground animate-fade-in-up delay-100">
                Operational
                <br />
                Complexity
                <br />
                <span className="text-accent">Made Usable</span>
              </h1>

              <p className="mt-6 text-pretty text-base text-foreground-muted lg:text-lg leading-relaxed animate-fade-in-up delay-200">
                I design retail software for Ginesys One, a retail ERP used across India, and
                I build the front end of what I design. On the Ginesys Insights report builder I
                wrote the whole interface myself, so what customers use is the design, not a
                rebuild of it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up delay-300">
                <a
                  href="#work"
                  className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  See the work
                </a>
                <Link
                  href="/cv"
                  className="inline-flex items-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
                >
                  Read my CV
                </Link>
              </div>
            </div>

            {/* Right Side - Profile Card */}
            <div className="hidden lg:flex animate-fade-in-up delay-400">
              <ProfileCard />
            </div>
          </div>

          {/* Mobile Profile Card */}
          <div className="mt-12 lg:hidden animate-fade-in-up delay-400">
            <ProfileCard />
          </div>
        </div>

      </div>
    </section>
  );
}
