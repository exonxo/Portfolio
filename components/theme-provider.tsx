"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
type CurtainPhase = "idle" | "falling" | "rising";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const DURATION = 550;
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

// Curtain colors — match the actual page background for each theme
const CURTAIN_COLORS: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#000000",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [mounted, setMounted] = useState(false);
  const curtainColorRef = useRef<string>(CURTAIN_COLORS.dark);

  // Initial mount: read theme from localStorage / html class
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial: Theme =
      stored ?? (prefersDark ? "dark" : "dark"); // default to dark
    applyTheme(initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  const applyTheme = (next: Theme) => {
    const html = document.documentElement;
    if (next === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", next);
  };

  const toggleTheme = useCallback(() => {
    if (phase !== "idle") return; // lock during animation

    const next: Theme = theme === "light" ? "dark" : "light";
    curtainColorRef.current = CURTAIN_COLORS[next];
    setPhase("falling");

    // After curtain falls and covers the page, swap the theme.
    setTimeout(() => {
      applyTheme(next);
      setTheme(next);
      setPhase("rising");

      // After curtain rises, return to idle.
      setTimeout(() => setPhase("idle"), DURATION + 60);
    }, DURATION);
  }, [phase, theme]);

  const curtainStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: curtainColorRef.current,
    transformOrigin: "top",
    transform: phase === "falling" ? "scaleY(1)" : "scaleY(0)",
    transition:
      phase !== "idle" ? `transform ${DURATION}ms ${EASING}` : "none",
    zIndex: 9999,
    pointerEvents: "none",
    willChange: "transform",
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isAnimating: phase !== "idle" }}
    >
      {children}
      {mounted && <div aria-hidden="true" style={curtainStyle} />}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return ctx;
}
