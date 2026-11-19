"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode, RefObject } from "react";

// The tags this site reveals. A fixed map keeps the motion components static.
const tags = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  figure: motion.figure,
  article: motion.article,
} as const;

type Tag = keyof typeof tags;

type TimelineContentProps = {
  as?: Tag;
  children?: ReactNode;
  className?: string;
  /** Position in the reveal sequence; feeds the variant's custom value. */
  animationNum: number;
  /** Element whose visibility starts the sequence. */
  timelineRef: RefObject<HTMLElement | null>;
  customVariants?: Variants;
};

const defaultVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
  hidden: { y: -20, opacity: 0, filter: "blur(10px)" },
};

/** Reveals its children in sequence once the timeline element scrolls into view. */
export function TimelineContent({
  as = "div",
  children,
  className,
  animationNum,
  timelineRef,
  customVariants,
}: TimelineContentProps) {
  const inView = useInView(timelineRef, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();
  const MotionTag = tags[as];

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <MotionTag
      className={className}
      custom={animationNum}
      variants={customVariants ?? defaultVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}
