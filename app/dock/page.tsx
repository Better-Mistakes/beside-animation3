"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Dock() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
      <div
        className={cn(
          "bg-background-elevated/10 backdrop-blur-xl text-text-primary flex items-center justify-center p-2 shadow-dock rounded-[28px] relative gap-2"
        )}
      >
        <div className="group/finder h-20 w-20 relative gap-3 flex items-center justify-between transition-colors duration-200 ease-default">
          <div className="relative flex flex-col items-center justify-center">
            <img
              src="/assets/icons/finder.svg"
              alt="Finder"
              className="group-hover/finder:scale-120 group-hover/finder:-rotate-2 group-hover/finder:-translate-y-4 transition-transform duration-300 ease-default size-full aspect-square"
            />
            <div className="block size-1.5 bg-[#808080] mix-blend-plus-darker rounded-full" />
          </div>
        </div>
        <div className="group/beside h-20 w-20 relative gap-3 flex items-center justify-between transition-colors duration-200 ease-default">
          <div className="relative flex flex-col items-center justify-center">
            <img
              src="/assets/icons/beside.svg"
              alt="Beside"
              className="group-hover/beside:scale-120 group-hover/beside:rotate-2 group-hover/beside:-translate-y-4 transition-transform duration-300 ease-default size-full aspect-square"
            />
            <div className="block size-1.5 bg-[#808080] mix-blend-plus-darker rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
