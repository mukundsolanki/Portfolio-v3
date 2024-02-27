import { Projects } from "@/components/Projects";
import { ExperienceInfo } from "@/components/ExperienceInfo";
import { Hero } from "@/components/Hero";
import { ProjectsCards } from "@/components/ProjectsCards";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceInfo />
      <Projects />
      <ProjectsCards/>
    </>
  );
}
