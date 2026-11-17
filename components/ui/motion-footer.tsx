"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Custom social icons ────────────────────────────────────────────────────
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.857V9h2.957v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.978 0 1.778-.773 1.778-1.729V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─── Inline theme-adaptive styles ──────────────────────────────────────────
const STYLES = `
.proloy-footer-wrapper {
  --pill-bg-1: color-mix(in oklch, var(--foreground) 4%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);

  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 22%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

@keyframes proloy-footer-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1;    }
}
@keyframes proloy-footer-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes proloy-footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, #B946FF 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, #B946FF 80%, transparent)); }
  30%      { transform: scale(1); }
}

.proloy-animate-breathe   { animation: proloy-footer-breathe 8s ease-in-out infinite alternate; }
.proloy-animate-marquee   { animation: proloy-footer-marquee 40s linear infinite; }
.proloy-animate-heartbeat { animation: proloy-footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

.proloy-footer-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.proloy-footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklch, #B946FF 18%, transparent) 0%,
    color-mix(in oklch, #466FFF 14%, transparent) 40%,
    transparent 70%
  );
}

.proloy-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
      0 10px 30px -10px var(--pill-shadow),
      inset 0 1px 1px var(--pill-highlight),
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.proloy-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
      0 20px 40px -10px var(--pill-shadow-hover),
      inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground);
}

.proloy-giant-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 8%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 12%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.proloy-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent));
}
`;

// ─── Marquee items ──────────────────────────────────────────────────────────
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Operational UX</span>
    <span style={{ color: "#B946FF" }}>✦</span>
    <span>Systems Thinking</span>
    <span style={{ color: "#466FFF" }}>✦</span>
    <span>Enterprise Design</span>
    <span style={{ color: "#B946FF" }}>✦</span>
    <span>Mobile-First Workflows</span>
    <span style={{ color: "#466FFF" }}>✦</span>
    <span>Pan-India Scale</span>
    <span style={{ color: "#B946FF" }}>✦</span>
  </div>
);

// ─── Magnetic anchor primitive ─────────────────────────────────────────────
interface MagneticAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}
function MagneticAnchor({ children, className, ...rest }: MagneticAnchorProps) {
  const ref = useMagnetic<HTMLAnchorElement>({ strength: 0.4, scale: 1.05 });
  return (
    <a ref={ref} className={cn("will-change-transform", className)} {...rest}>
      {children}
    </a>
  );
}

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function MagneticButtonEl({
  children,
  className,
  ...rest
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLButtonElement>({ strength: 0.4, scale: 1.05 });
  return (
    <button ref={ref} className={cn("will-change-transform", className)} {...rest}>
      {children}
    </button>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground proloy-footer-wrapper">
          {/* Aurora glow + grid */}
          <div className="proloy-footer-aurora pointer-events-none absolute top-1/2 left-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 proloy-animate-breathe rounded-[50%] blur-[80px]" />
          <div className="proloy-footer-grid pointer-events-none absolute inset-0 z-0" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="proloy-giant-text pointer-events-none absolute -bottom-[5vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          >
            PROLOY
          </div>

          {/* Diagonal marquee */}
          <div className="absolute top-24 left-0 z-10 w-full -rotate-2 scale-110 overflow-hidden border-y border-border/50 bg-background/60 py-4 shadow-2xl backdrop-blur-md">
            <div className="flex w-max proloy-animate-marquee text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Center content */}
          <div className="relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6">
            <h2
              ref={headingRef}
              className="proloy-text-glow mb-12 text-center text-5xl font-black tracking-tighter md:text-8xl"
            >
              Let&apos;s build together.
            </h2>

            <div ref={linksRef} className="flex w-full flex-col items-center gap-6">
              {/* Primary CTAs */}
              <div className="flex w-full flex-wrap justify-center gap-4">
                <MagneticAnchor
                  href="mailto:proloykarmakar25@gmail.com"
                  className="proloy-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
                >
                  <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  Send a message
                </MagneticAnchor>

                <MagneticAnchor
                  href="https://www.linkedin.com/in/kproloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proloy-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
                >
                  <LinkedinIcon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  Connect on LinkedIn
                </MagneticAnchor>
              </div>

              {/* Secondary text links */}
              <div className="mt-2 flex w-full flex-wrap justify-center gap-3 md:gap-6">
                <MagneticAnchor
                  href="https://github.com/exonxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proloy-glass-pill flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </MagneticAnchor>
                <MagneticAnchor
                  href="https://www.behance.net/proloykarmakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proloy-glass-pill rounded-full px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
                >
                  Behance
                </MagneticAnchor>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 flex w-full flex-col items-center justify-between gap-6 px-6 pb-8 md:flex-row md:px-12">
            <div className="order-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:order-1 md:text-xs">
              © 2026 Proloy Karmakar. Designed and built in Kolkata.
            </div>

            <MagneticButtonEl
              onClick={scrollToTop}
              className="proloy-glass-pill order-3 flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Scroll to top"
            >
              <svg
                className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </MagneticButtonEl>
          </div>
        </footer>
      </div>
    </>
  );
}
