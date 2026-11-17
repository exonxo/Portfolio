"use client";

import { useEffect, useState } from "react";
import { AILoader } from "@/components/ui/ai-loader";
import { cn } from "@/lib/utils";

const MIN_VISIBLE_MS = 3500;
const FADE_MS = 600;

export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Lock scroll while the loader is up so the page underneath doesn't jitter.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), MIN_VISIBLE_MS);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prev;
    }, MIN_VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = prev;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden={fading}
      className={cn(
        "fixed inset-0 z-[10000] flex items-center justify-center bg-background",
        "transition-opacity duration-500 ease-out",
        // Hide on the very first paint so we don't see the loader after the
        // page has hydrated and the user re-navigates back — only show during
        // the initial mount window.
        !mounted && "opacity-0",
        fading && "opacity-0 pointer-events-none",
      )}
    >
      <AILoader />
    </div>
  );
}
