"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

// The home page is one scrolling page. The header switch no longer hides
// sections; it scrolls to them and highlights whichever one is in view.
export type TabId = "work" | "about";

interface TabContextValue {
  /** null when no home page section is in view (e.g. on a case study page). */
  activeTab: TabId | null;
  setActiveTab: (tab: TabId) => void;
}

const TabContext = createContext<TabContextValue | undefined>(undefined);

// Section element ids on the home page.
const SECTION_ID: Record<TabId, string> = { work: "work", about: "about" };

// Old links used #portfolio for the work section.
const HASH_ALIASES: Record<string, TabId> = {
  work: "work",
  portfolio: "work",
  about: "about",
};

function scrollToSection(tab: TabId) {
  const el = document.getElementById(SECTION_ID[tab]);
  if (!el) {
    // Not on the home page: go there.
    window.location.href = `/#${SECTION_ID[tab]}`;
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTabState] = useState<TabId | null>(null);
  const pathname = usePathname();

  // Honour an incoming hash (including the old #portfolio) once on load.
  useEffect(() => {
    const tab = HASH_ALIASES[window.location.hash.replace("#", "").toLowerCase()];
    if (tab) {
      // Let the page lay out first. A timer, not requestAnimationFrame,
      // because background tabs may not deliver animation frames.
      const t = window.setTimeout(() => scrollToSection(tab), 60);
      return () => window.clearTimeout(t);
    }
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const els = (Object.keys(SECTION_ID) as TabId[])
      .map((t) => [t, document.getElementById(SECTION_ID[t])] as const)
      .filter(([, el]) => el) as [TabId, HTMLElement][];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const hit = els.find(([, el]) => el === entry.target);
          if (!hit) continue;
          if (entry.isIntersecting) setActiveTabState(hit[0]);
          else setActiveTabState((cur) => (cur === hit[0] ? null : cur));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach(([, el]) => observer.observe(el));
    return () => {
      observer.disconnect();
      // Leaving the page clears the highlight.
      setActiveTabState(null);
    };
  }, [pathname]);

  const setActiveTab = useCallback((tab: TabId) => {
    setActiveTabState(tab);
    scrollToSection(tab);
    window.history.replaceState(null, "", `/#${SECTION_ID[tab]}`);
  }, []);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const ctx = useContext(TabContext);
  if (!ctx) {
    throw new Error("useTab must be used inside a TabProvider");
  }
  return ctx;
}
