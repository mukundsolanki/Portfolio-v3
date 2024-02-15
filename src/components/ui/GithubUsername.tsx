"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function GithubUsername() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Swipe to see"
        revealText="github.com/mukundsolanki"
      >
        <TextRevealCardTitle>
          Checkout here.
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
