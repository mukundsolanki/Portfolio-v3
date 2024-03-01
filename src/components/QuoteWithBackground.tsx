"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function QuoteWithBackground() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden ">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white text-opacity-50 text-center  text-4xl font-bold">
            Make it work, make it right, make it fast.
          </p>
        }
        className="h-[40rem]"
      >
        Make it <span className="text-red-500">work</span>, make it <span className="text-red-500">right</span>, make it <span className="text-red-500">fast</span>.
      </MaskContainer>
    </div>
  );
}
