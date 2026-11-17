"use client";
import React from "react";

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // also check on first load
  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}

export type ScrollDirection = "up" | "down";

/**
 * Tracks scroll direction with a small threshold to avoid jitter.
 * Always returns "up" near the top of the page so the header stays visible.
 */
export function useScrollDirection(threshold: number = 8) {
  const [direction, setDirection] = React.useState<ScrollDirection>("up");
  const [atTop, setAtTop] = React.useState(true);

  React.useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY;

      setAtTop(y < 10);

      if (Math.abs(diff) > threshold) {
        setDirection(diff > 0 ? "down" : "up");
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, atTop };
}
