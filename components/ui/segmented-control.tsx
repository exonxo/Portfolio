"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TabId, useTab } from "@/lib/tab-context";

const tabs: { id: TabId; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
];

interface SegmentedControlProps {
  className?: string;
  /**
   * Distinct layoutId for the morphing pill. Defaults to "segmented-pill".
   * When rendering multiple instances (e.g. desktop header + mobile bottom
   * nav), each instance MUST get a unique id or Motion will try to animate
   * between them.
   */
  layoutId?: string;
}

export function SegmentedControl({
  className,
  layoutId = "segmented-pill",
}: SegmentedControlProps) {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div
      role="navigation"
      aria-label="Jump to section"
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-background/60 supports-[backdrop-filter]:bg-background/40 backdrop-blur-lg p-1 shadow-sm",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            aria-current={isActive ? "true" : undefined}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative z-10 px-5 py-1.5 text-sm font-medium rounded-full transition-colors duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive ? "text-white" : "text-foreground/70 hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="bg-brand-gradient absolute inset-0 -z-10 rounded-full shadow-md"
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
