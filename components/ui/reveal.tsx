"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// The one scroll reveal used across the home page, matching the testimonials:
// a short rise with a blur that clears. Children appear once, when they reach
// the viewport. `index` staggers siblings.

const tags = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
  article: motion.article,
} as const;

type Tag = keyof typeof tags;

export function Reveal({
  as = "div",
  index = 0,
  className,
  children,
}: {
  as?: Tag;
  index?: number;
  className?: string;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const MotionTag = tags[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
