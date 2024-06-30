"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
const portS = '/ProgressPortSwigger.png';
const pentesterL = '/pentesterlab.png';




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
            {item.image && (
              <img
                src={portS}
                alt={item.title}
                className="w-full h-auto rounded-lg mt-3"
              />
            )}
            {item.image2 && (
              <img
                src={pentesterL}
                alt={item.title}
                className="w-full h-auto rounded-lg mt-3"
              />
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Analyst Software/Ethical Hacker Trainee - Siesa",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Software Analysis and Testing: Conducted comprehensive analysis of enterprise software solutions
          including ERP, CRM systems, AGP (Supplier Management Support), and AGR (Revenue Management Support).
          Tested software functionality across various versions prior to production deployment.
        </li>
        <li>
          Security Testing and Improvement: Performed pentesting and testing on 2 applications,
          uncovering significant opportunities for enhancing information security. Proposed improvements
          to enhance confidentiality disclosure and input sanitization to mitigate SQL Boolean Injection and XSS Reflected attacks.
        </li>
        <li>
          Gained practical experience in knowledge management at Siesa during internship,
          contributing to critical software analysis and security testing initiatives aimed at optimizing operational efficiency and data protection.
        </li>
      </ul>
    ),
    badge: "💻 Experience",
    image: "",
  },
  {
    title: "DiceCTF 2024 Quals",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Successfully participate in DiceCTF 2024 Quals, a prestigious 48-hour
          online Capture The Flag, in the ESPower_ team.
        </li>
      </ul>
    ),
    badge: "🏅 Achievements",
    image: "",
  },
  {
    title: "PortSwigger Web Academy - Pentesterlab",
    description: (
      <ul className="list-disc ml-6">
        <li>
          I have been able to solve over 218 labs on the Portswigger and Pentesterlab platform covering topics such as:
          SSRF, SQLi, Disclosure Information, LLM Attacks, ClickJacking, SSTI, OS Command Injection, Path Traversal, File Upload, File Include,
          Access Control, Authentication/Authorization, Web Sockets, UNIX Systems, XSS (In Progress).

        </li>
      </ul>
    ),
    image: "/ProgressPortSwigger",
    image2: "/pentesterlab",
  },
  {
    title: "My Blog in Medium :)",
    description: (
      <ul className="list-disc ml-6">
        <li>
          In my spare time, I write on my personal blog about various topics related to computer security and software,
          from how AES hashing and Keccak states work in cryptography to how to set up dynamic routing between two LANs.
        </li>
        <li>
          Passionate about learning every day, every new topic is a great opportunity to expose it to the public,
          to teach it, to give the opportunity to someone who is in the same process as me to learn and not give up.
        </li>
      </ul>
    ),
    badge: "💡 Security Chronicles",
    image: "",
  },
];
