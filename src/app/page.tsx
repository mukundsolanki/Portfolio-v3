"use client";
import { Projects } from "@/components/Projects";
import { ExperienceInfo } from "@/components/ExperienceInfo";
import { Hero } from "@/components/Hero";
import { ProjectsCards } from "@/components/ProjectsCards";
import { HeroScrollDemo } from "@/components/ContainerScrollDemo";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { QuoteWithBackground } from "@/components/QuoteWithBackground";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <Hero />
      <ExperienceInfo />
      <Projects />
      <ProjectsCards />
      <HeroScrollDemo />
      <QuoteWithBackground />
      <Footer />
      <ScrollToTop />
    </>
  );
}
