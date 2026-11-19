import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Brands } from "@/components/sections/Brands";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { ToolStack } from "@/components/sections/ToolStack";
import { Explorations } from "@/components/sections/Explorations";
import { Footer } from "@/components/sections/Footer";

// One scrolling page, in the order a recruiter needs it: who this is, the
// work, then background. Nothing is hidden behind a tab.
export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Testimonials />
      <Experience />
      <Brands />
      <ToolStack />
      <Explorations />
      <Footer />
    </>
  );
}
