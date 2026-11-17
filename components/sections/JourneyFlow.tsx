'use client';

import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function JourneyFlow() {
  const handleSkipToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FlowArt aria-label="Proloy's Design Journey">
      {/* Section 1: Philosophy */}
      <FlowSection
        aria-label="Design Philosophy"
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            01 — The Problem
          </p>
          <button
            onClick={handleSkipToWork}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted hover:text-accent transition-colors duration-200 border border-border-strong rounded-full px-4 py-2 hover:border-accent"
            aria-label="Skip to case studies"
          >
            Skip to Work
          </button>
        </div>
        <hr className="my-[2vw] border-none border-t border-border" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight font-display">
            Operational
            <br />
            Complexity
            <br />
            Breaks
            <br />
            Products
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-border" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-foreground-muted">
          Enterprise systems are built for databases, not humans. Warehouses, retail operations,
          healthcare workflows — they collapse under complexity. The gap between business rules and
          usable interfaces kills products before they ship.
        </p>
      </FlowSection>

      {/* Section 2: Approach */}
      <FlowSection
        aria-label="Design Approach"
        style={{
          backgroundColor: 'var(--surface)',
          color: 'var(--foreground)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-secondary">
          02 — The Approach
        </p>
        <hr className="my-[2vw] border-none border-t border-border" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight font-display">
            Systems
            <br />
            Thinking
            <br />
            Always
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-border" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-foreground-muted">
          I don't design screens. I translate operational reality into usable systems. Every
          decision starts with understanding constraints, mapping workflows, and ruthlessly cutting
          what doesn't matter.
        </p>
        <hr className="my-[2vw] border-none border-t border-border" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Understand</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Business rules, system constraints, user workflows, operational realities before
              drawing a single screen.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Translate</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Convert tangled requirements and data models into intuitive interfaces. Make the
              invisible visible.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Design for Constraints</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Accessibility, performance, one-handed operation, low-DPI environments. Constraints
              breed better design.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-border" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Iterate with Engineering</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Work closely with backend and frontend teams so every design is technically feasible,
              performant, and shippable.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* Section 3: Impact */}
      <FlowSection
        aria-label="Impact and Scale"
        style={{
          backgroundColor: '#ff6b35',
          color: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — The Impact</p>
        <hr className="my-[2vw] border-none border-t border-black/20" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight font-display">
            Enterprise
            <br />
            At
            <br />
            Scale
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          4+ years shipping systems that work. From Ginesys POS deployed Pan-India to EaseCare's
          two-sided marketplace connecting thousands of caregivers and families. Not just good
          design. Operational design that moves the needle.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/20" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">8 WMS Modules</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Unified warehouse system from picklist to delivery. Replaced paper. Shipped.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Pan-India Retail</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Ginesys POS and Quebuster MVP deployed across thousands of retail locations.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">12 Service Categories</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              EaseCare marketplace connecting providers and families at scale.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Every project started with chaos. Every project shipped organized, usable, scalable.
        </p>
      </FlowSection>

      {/* Section 4: Vision */}
      <FlowSection
        aria-label="Future Vision"
        style={{
          backgroundColor: '#000',
          color: '#fff',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The Vision</p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight font-display">
            Better
            <br />
            Enterprise
            <br />
            Software
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Enterprise software doesn't have to be broken. Teams shipping retail, supply chain, and
          healthcare systems need designers who think operationally. I build those systems.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">What I Do</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              End-to-end UX for operational software. Design systems. Mobile-first thinking.
              Accessibility as standard.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Who I Help</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Growth-stage SaaS, established enterprise software, startups pivoting to better UX.
              Senior Product Designer roles.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">How I Work</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Deep research, systems thinking, accessibility-first, iteration with engineering.
              Shipping products that matter.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* Section 5: CTA */}
      <FlowSection
        aria-label="Get Started"
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          05 — Let's Work Together
        </p>
        <hr className="my-[2vw] border-none border-t border-border" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight font-display">
            See
            <br />
            What's
            <br />
            Possible
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-border" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-foreground-muted">
          Scroll down to see case studies. Or let's talk about what operational UX could do for
          your team.
        </p>
        <hr className="my-[2vw] border-none border-t border-border" />
        <div className="flex flex-wrap gap-6">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View Case Studies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:proloykarmakar25@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
