"use client";

import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Brands } from "@/components/sections/Brands";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { ToolStack } from "@/components/sections/ToolStack";
import { Explorations } from "@/components/sections/Explorations";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { TabPanel, StaggerItem } from "@/components/ui/tab-panel";

export default function Home() {
  return (
    <>
      <TabPanel id="about">
        <StaggerItem>
          <Hero />
        </StaggerItem>
        <StaggerItem>
          <About />
        </StaggerItem>
        <StaggerItem>
          <Experience />
        </StaggerItem>
        <StaggerItem>
          <ToolStack />
        </StaggerItem>
        <StaggerItem>
          <Brands />
        </StaggerItem>
      </TabPanel>

      <TabPanel id="portfolio">
        <StaggerItem>
          <SelectedWork />
        </StaggerItem>
        <StaggerItem>
          <Explorations />
        </StaggerItem>
      </TabPanel>

      <CinematicFooter />
    </>
  );
}
