import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Brands } from "@/components/sections/Brands";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Explorations } from "@/components/sections/Explorations";
import { Writing } from "@/components/sections/Writing";
import { Footer } from "@/components/sections/Footer";

// One scrolling page, in the order a recruiter needs it: who this is, the
// work (case studies, then side explorations), then who I am and background.
export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Explorations />
      <About />
      <Testimonials />
      <Experience />
      <Writing />
      <Brands />
      <Footer />
    </>
  );
}
