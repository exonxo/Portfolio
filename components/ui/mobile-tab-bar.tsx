"use client";

import { SegmentedControl } from "@/components/ui/segmented-control";

/**
 * Mobile-only floating tab bar. Sits pinned to the bottom of the viewport so
 * About / Portfolio switching is one tap away — no hamburger menu detour.
 *
 * Hidden at lg+ because the desktop header already shows the SegmentedControl
 * centered in the nav.
 */
export function MobileTabBar() {
  return (
    <div
      className="fixed bottom-4 inset-x-0 z-[55] flex justify-center px-4 lg:hidden pointer-events-none"
      style={{
        // Respect the iOS safe area so the pill clears the home indicator.
        paddingBottom: "max(0px, env(safe-area-inset-bottom))",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <div className="pointer-events-auto rounded-full border border-border bg-background/90 supports-[backdrop-filter]:bg-background/70 backdrop-blur-xl shadow-2xl p-1">
        <SegmentedControl layoutId="segmented-pill-mobile" />
      </div>
    </div>
  );
}
