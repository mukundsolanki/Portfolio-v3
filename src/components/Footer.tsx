"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export function Footer() {
  return (
    <div>
      <div className="h-[15rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Connect with me at
        </p>
        {/*
        Add some icons of linkedin twitter and github here using react icons
         */}

        <div className="flex space-x-4 text-4xl relative z-20">
          <a href="https://www.linkedin.com/in/mukund-solanki-10a558250/" target="_blank">
            <FaLinkedin className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
          <a href="https://twitter.com/Mukund_solanki_" target="_blank">
            <FaXTwitter className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
          <a href="mailto:mukundsolanki665@gmail.com" target="_blank">
            <MdEmail className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
        </div>

        <p className="text-sm text-center text-neutral-500 relative z-20 mt-5">
          Designed by Mukund Solanki, all rights reserved!
        </p>
      </div>
    </div>
  );
}
