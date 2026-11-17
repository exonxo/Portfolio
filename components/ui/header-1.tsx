"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MenuIcon, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { useTheme } from "@/components/theme-provider";
import { Magnetic } from "@/components/ui/magnetic";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, toggleTheme, isAnimating } = useTheme();
  const isDark = theme === "dark";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    if (isAnimating) return;
    toggleTheme();
  };

  return (
    <header
      style={{
        // Force a dedicated compositor layer so the header keeps its
        // viewport-fixed position even if an ancestor introduces a transform
        // mid-animation (motion's tab panel, GSAP scroll triggers, etc.).
        transform: "translateZ(0)",
        willChange: "transform",
      }}
      className={cn(
        "fixed top-4 inset-x-0 z-[60] mx-auto w-[calc(100%-2rem)] max-w-3xl",
        "rounded-full border border-border shadow-lg isolate",
        "bg-background/95 supports-[backdrop-filter]:bg-background/70 backdrop-blur-xl",
      )}
    >
      <nav className="relative mx-auto flex items-center justify-between p-1.5">
        {/* Logo */}
        <a
          href="/"
          className="hover:bg-accent/10 flex shrink-0 items-center gap-2 rounded-full px-2 py-1 transition-colors"
          aria-label="Home"
        >
          <Image
            src="/proloylogo.svg"
            alt="Proloy Logo"
            width={24}
            height={24}
            className="h-6 w-6"
            priority
          />
          <p className="font-mono text-sm font-bold tracking-tight hidden sm:inline">
            Proloy
          </p>
        </a>

        {/* Segmented Control — centered, desktop only */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <SegmentedControl />
        </div>

        {/* Right side: theme toggle + CTA + mobile menu */}
        <div className="flex items-center gap-1.5">
          {mounted && (
            <Button
              size="icon"
              variant="ghost"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
              aria-pressed={isDark}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          )}

          <Magnetic strength={0.3} scale={1.06} className="hidden sm:inline-block">
            <a
              href="mailto:proloykarmakar25@gmail.com"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "group gap-1.5 rounded-full",
              )}
            >
              Get in touch
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:rotate-45"
                strokeWidth={2.25}
              />
            </a>
          </Magnetic>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-full"
              aria-label="Open menu"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
              showClose
              side="left"
            >
              <div className="flex flex-col items-center gap-6 px-4 pt-16 pb-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/proloylogo.svg"
                    alt="Proloy Logo"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  <p className="font-mono text-base font-bold">Proloy</p>
                </div>
                <p className="text-sm text-foreground-muted text-center max-w-xs">
                  Product Designer & Enterprise UX specialist. Use the bottom
                  bar to switch between About and Portfolio.
                </p>
              </div>
              <SheetFooter>
                <a
                  href="mailto:proloykarmakar25@gmail.com"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group gap-1.5 rounded-full",
                  )}
                >
                  Get in touch
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:rotate-45"
                    strokeWidth={2.25}
                  />
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
