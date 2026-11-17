"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface UseMagneticOptions {
  /** How strongly the element follows the cursor (0–1). Default: 0.4 */
  strength?: number;
  /** Hover scale multiplier. Default: 1.05 */
  scale?: number;
  /** Rotation factor (3D tilt). Default: 0 (disabled) */
  tilt?: number;
  /** Easing on follow. Default: power2.out */
  ease?: string;
  /** Follow duration in seconds. Default: 0.4 */
  duration?: number;
}

/**
 * Returns a ref that gives the element a "magnetic" cursor follow + spring back.
 * Respects `prefers-reduced-motion` and uses GSAP context for safe cleanup.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  options: UseMagneticOptions = {},
) {
  const {
    strength = 0.4,
    scale = 1.05,
    tilt = 0,
    ease = "power2.out",
    duration = 0.4,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const w = rect.width / 2;
        const h = rect.height / 2;
        const x = e.clientX - rect.left - w;
        const y = e.clientY - rect.top - h;

        gsap.to(element, {
          x: x * strength,
          y: y * strength,
          rotationX: tilt ? -y * tilt : 0,
          rotationY: tilt ? x * tilt : 0,
          scale,
          ease,
          duration,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 1.2,
        });
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, element);

    return () => ctx.revert();
  }, [strength, scale, tilt, ease, duration]);

  return ref;
}
