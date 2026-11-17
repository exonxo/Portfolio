"use client";

import React from "react";
import { useMagnetic, type UseMagneticOptions } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

interface MagneticProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    UseMagneticOptions {
  children: React.ReactNode;
}

/**
 * Wraps a child element and gives it a magnetic cursor-follow effect.
 *
 *   <Magnetic strength={0.4}>
 *     <Button>Click me</Button>
 *   </Magnetic>
 */
export function Magnetic({
  children,
  className,
  strength,
  scale,
  tilt,
  ease,
  duration,
  ...rest
}: MagneticProps) {
  const ref = useMagnetic<HTMLSpanElement>({
    strength,
    scale,
    tilt,
    ease,
    duration,
  });

  return (
    <span
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      {...rest}
    >
      {children}
    </span>
  );
}
