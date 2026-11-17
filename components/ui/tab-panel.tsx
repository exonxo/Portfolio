"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { TabId, useTab } from "@/lib/tab-context";

interface TabPanelProps {
  id: TabId;
  children: React.ReactNode;
}

/**
 * Wraps a panel that fades + slides in with spring physics when its tab becomes active.
 * Children that are direct flex/block elements will stagger-reveal automatically.
 */
export function TabPanel({ id, children }: TabPanelProps) {
  const { activeTab } = useTab();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {activeTab === id && (
        <motion.section
          key={id}
          id={`panel-${id}`}
          role="tabpanel"
          aria-labelledby={`tab-${id}`}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 220,
              damping: 26,
              mass: 0.9,
              staggerChildren: 0.08,
              delayChildren: 0.05,
            },
          }}
          exit={{
            opacity: 0,
            y: -16,
            scale: 0.98,
            transition: { duration: 0.25, ease: "easeIn" },
          }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
}

/**
 * A single staggered child block — wrap top-level sections inside a TabPanel.
 * Springs in with overshoot when its parent's stagger reaches it.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 22,
            mass: 0.8,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
