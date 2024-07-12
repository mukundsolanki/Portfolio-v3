"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function QuoteWithBackground() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden ">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white text-opacity-50 text-center  text-4xl font-bold">
            Make it secure, make it resilient, make it efficient.
          </p>
        }
        className="h-[40rem]"
      >
        Make it <span className="text-green-400">secure</span>, make it <span className="text-green-400">resilient</span>, make it <span className="text-green-400">efficient</span>.
      </MaskContainer>
    </div>
  );
}
