"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type TabId = "about" | "portfolio";

interface TabContextValue {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const TabContext = createContext<TabContextValue | undefined>(undefined);

const VALID_TABS: TabId[] = ["about", "portfolio"];

function readHashTab(): TabId {
  if (typeof window === "undefined") return "about";
  const raw = window.location.hash.replace("#", "").toLowerCase();
  return (VALID_TABS as string[]).includes(raw) ? (raw as TabId) : "about";
}

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTabState] = useState<TabId>("about");

  // Sync from URL hash on mount and when it changes
  useEffect(() => {
    const sync = () => setActiveTabState(readHashTab());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const setActiveTab = useCallback((tab: TabId) => {
    setActiveTabState(tab);
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}#${tab}`;
      window.history.replaceState(null, "", newUrl);
    }
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
