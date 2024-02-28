"use client"
import { Projects } from "@/components/Projects";
import { ExperienceInfo } from "@/components/ExperienceInfo";
import { Hero } from "@/components/Hero";
import { ProjectsCards } from "@/components/ProjectsCards";
import { HeroScrollDemo } from "@/components/ContainerScrollDemo";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceInfo />
      <Projects />
      <ProjectsCards/>
      <HeroScrollDemo />
      <Footer/>
      <ScrollToTop/>
    </>
  );
}
