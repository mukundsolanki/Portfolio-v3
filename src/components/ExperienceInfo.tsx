"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function ExperienceInfo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit  py-2 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 px-6 font-bold")}>{item.title}</p>

            <div className="text-2-1 prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Mobile Developer - GDSC",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Contributed actively as a mobile developer in GDSC AITR, leveraging
          skills in Android/iOS development to build innovative applications and
          solutions.
        </li>
        <li>
          Organized and coordinated various technical events as part of GDSC
          AITR, demonstrating strong project management and organizational
          skills in planning, executing, and promoting events within the college
          community.
        </li>
        <li>
          Actively engaged in continuous learning and skill development, staying
          updated with the latest trends and technologies in mobile development.
        </li>
      </ul>
    ),
    badge: "✦ Experience",
    image: "",
  },
  {
    title: "OpinHacks 2k23 - Winner",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Successfully participated in OpinHacks 2k23, a prestigious 36-hour
          offline hackathon held at Bhilai Institute of Technology and Research
          in Chhattisgarh.
        </li>
        <li>
          Earned recognition for outstanding performance, securing a cash prize
          of Rupees 30,000 as a testament to our team&apos;s innovative solutions
          and technical prowess.
        </li>
        <li>
          Honored with the Quine track prize, showcasing excellence in a
          specific category and earning team exclusive swags and
          merchandise from Quine.sh, one of the event sponsors.
        </li>
        <li>
          Highlighting collaborative spirit, effective teamwork, and the ability
          to deliver impactful solutions within a competitive hackathon
          environment.
        </li>
      </ul>
    ),
    badge: "✦ Achievements",
    image: "",
  },
  {
    title: "HackCBS 6.0 - Winner",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Contributed to a record-breaking event with 11,863 registrations from
          716 colleges and 439 cities across 25 countries, demonstrating the
          widespread impact and reach of the hackathon.
        </li>
        <li>
          Secured the first position at HackCBS 6.0, showcasing exceptional
          skills, creativity, and problem-solving abilities, and earning
          recognition for our team&apos;s outstanding performance.
        </li>
        <li>
          Received significant rewards, including a cash
          prize of rupees 40,000, Logitech MX Master 3S series mice for each team
          member, and prizes worth $15,000. Additionally, being honored with
          swags and merchandise from sponsors like MLH and GitHub further
          highlights our team&apos;s success and industry recognition.
        </li>
        <li>
          Engaged with esteemed sponsors including Major League Hacking, Ton,
          Orkers, GitHub, Devfolio, Logitech, Replit, BlueLearn, BobbleAI, and
          more, underscoring team&apos;s relevance and recognition within the
          tech community.
        </li>
      </ul>
    ),
    image: "",
  },

  {
    title: "HackThisFall 4.0 - Top 10",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Participated in HackThisFall 2k24, a prestigious 36-hour hackathon
          held at Karnavati University in Gandhinagar, showcasing team&apos;s
          dedication to innovation and problem-solving in the tech industry.
        </li>
        <li>
          Secured a coveted position among the top 10 teams in the competition,
          demonstrating exceptional skills, creativity, and ability
          to deliver impactful solutions within a competitive hackathon
          environment.
        </li>
      </ul>
    ),
    image: "",
  },
];
