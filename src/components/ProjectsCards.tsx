"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I am an Open Source Contributor actively seeking opportunities to contribute effectively to open source projects and connect with like-minded individuals. You can explore my GitHub profile for more information :)
`;

export function ProjectsCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
      <TextGenerateEffect words={words} />
      {/* <GoogleGeminiEffectDemo />*/}

      <div className="h-[20rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <a
            href="https://github.com/mukundsolanki"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mukundsolanki
          </a>
        </p>
        <p className="text-sm text-center text-neutral-500 relative z-20 t-10">
          Give it a ⭐, if you like it :)
        </p>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "WebLink",
    description:
      "WebLink is a web application created using SvelteJS ,allow user to create their portfolio for all their links in one place.",
    link: "https://github.com/mukundsolanki/WebLink",
  },
  {
    title: "Pi-Drop",
    description:
      "A Flutter based mobile application to use Raspberry Pi as NAS Server. allows user to use there NAS from anywhere",
    link: "https://github.com/mukundsolanki/Pi-Drop",
  },
  {
    title: "DevLit-v2",
    description:
      "A web-based Code Editor built with React. It allows users to write and run HTML, CSS, and JavaScript code in real-time, providing a live output preview.",
    link: "https://github.com/mukundsolanki/Devlit-v2",
  },
  {
    title: "Quizit",
    description:
      "Quizit👀 is a Flutter-based mobile application that allows users to complete quizzes and receive a certificate upon completing all the quizzes.",
    link: "https://github.com/mukundsolanki/Quizit-the-quiz-app",
  },
  {
    title: "SyncPad",
    description:
      "Flutter application that allows you to control your computer mouse movements remotely using your mobile device as a touchpad.",
    link: "https://github.com/mukundsolanki/SyncPad",
  },
  {
    title: "RapidLink",
    description:
      "A URL Shortener service implemented using GoLang, currently working on this project",
    link: "https://github.com/mukundsolanki/RapidLink-URL-shortener",
  },
];
