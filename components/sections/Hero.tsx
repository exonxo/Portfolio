import { ArrowDown } from "lucide-react";
import { ProfileCard } from "@/components/ui/profile-card";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial" aria-hidden />
      <div className="absolute inset-0 grid-pattern" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1400px] flex-col justify-between px-6 pt-8 pb-12 lg:px-12 lg:pt-12 lg:pb-16">
        <div>
          <div className="flex items-center gap-3 animate-fade-in-up">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground-muted font-mono">
              Available for Senior Product Designer roles
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
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-gradient">Made Usable</span>
                  <span
                    className="absolute inset-x-0 bottom-2 -z-0 h-3 bg-brand-gradient opacity-20 blur-md"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="mt-6 text-pretty text-base text-foreground-muted lg:text-lg leading-relaxed animate-fade-in-up delay-200">
                Product Designer specializing in enterprise workflows for retail, supply chain, and
                healthcare. Currently shipping mobile POS and warehouse systems for Ginesys at
                Pan-India retail scale.
              </p>
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

        <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground-subtle font-mono animate-fade-in-up delay-500">
          <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={2} />
          Scroll to discover
        </div>
      </div>
    </section>
  );
}
