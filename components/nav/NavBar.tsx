"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function NavBar() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const handleToggle = () => {
    const html = document.documentElement;
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-4 lg:px-12 lg:pt-6">
        <div className="flex h-14 items-center justify-between rounded-full border border-border bg-background/70 px-5 backdrop-blur-xl">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/proloylogo.svg"
              alt="Proloy Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-foreground-muted md:flex">
            <Link
              href="/#work"
              className="transition-colors hover:text-foreground"
            >
              Work
            </Link>
            <Link
              href="/#experience"
              className="transition-colors hover:text-foreground"
            >
              Experience
            </Link>
            <Link
              href="/#about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/#process"
              className="transition-colors hover:text-foreground"
            >
              Process
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={handleToggle}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-border-strong transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-foreground" />
                )}
              </button>
            )}
            <a
              href="mailto:proloykarmakar25@gmail.com"
              className="bg-brand-gradient group inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 shadow-md"
            >
              Get in touch
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-45"
                strokeWidth={2.25}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
