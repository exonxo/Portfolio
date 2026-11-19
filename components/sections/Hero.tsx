import Link from "next/link";
import MascotPortfolioHero from "@/components/ui/mascot-portfolio-hero";

export function Hero() {
  return (
    <section className="relative border-b border-border">
      {/* The header floats over the top 5rem of the page. */}
      <MascotPortfolioHero
        height="calc(100svh - 5rem)"
        minHeight="520px"
        index="UX/26"
        discipline="UX engineer"
        tagline="Design it, then build it"
        collection={["Selected", "Work"]}
        reel={["Kolkata, India", "Open to work · 2026"]}
        year="2026"
        initials="PK"
        badge="Hire me"
        line2="Designs"
        line3="Builds"
        word="Ship"
        verticalTag="Code"
        bracketed="S"
        seekingLabel="Open to*"
        seeking="UX roles"
        href="/cv"
        services={["Product design", "Front end", "Design systems", "Research"]}
        greetings={[
          "Namaste! I'm Proloy.",
          "I design it, then I build it.",
          "Psst… I'm open to UX engineer roles.",
          "Okay, you can stop poking me :)",
        ]}
        accent="var(--accent)"
        accentInk="var(--accent-foreground)"
        paper="var(--background)"
        ink="var(--foreground)"
        card="var(--surface)"
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground-muted lg:text-lg">
          I design retail software for Ginesys One, a retail ERP used across India, and I build the
          front end myself. I designed the mobile POS now used by more than 1,000 retailers, and I
          wrote the entire interface of Ginesys Insights, a report builder now in pilot.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
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
    </section>
  );
}
