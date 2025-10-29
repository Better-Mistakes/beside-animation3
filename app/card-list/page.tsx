"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CardList() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
      <div
        className={cn(
          "w-full max-w-[16rem] bg-background-elevated/10 backdrop-blur-xl text-text-primary flex flex-col items-center justify-center p-2 shadow-card-list rounded-[22px] relative overflow-clip"
        )}
      >
        <div
          onClick={() => setActiveCard("bobby's-inbox")}
          className="hover:bg-white hover:shadow-card-large rounded-2xl relative p-3 gap-3 flex items-center justify-between w-full transition-colors duration-200 ease-spring active:scale-[0.98]"
        >
          <div className="relative flex items-center justify-center size-8 bg-palette-yellow rounded-full p-2">
            <img
              src="/assets/icons/chat-filled.svg"
              alt="Menu"
              className="size-full aspect-square"
            />
          </div>
          <div className="relative flex flex-col items-start justify-center flex-1">
            <span className="pointer-events-none touch-none text-black text-body-large font-semibold">
              Bobby's Inbox
            </span>
            <span className="pointer-events-none touch-none text-black/50 text-body-small font-medium">
              (424) 460-9490
            </span>
          </div>

          <div
            className={cn(
              "relative flex items-center justify-center size-8 rounded-full p-2 transition duration-200 ease-spring translate-y-full scale-50 opacity-0",
              activeCard === "bobby's-inbox" &&
                "translate-y-0 scale-100 opacity-100"
            )}
          >
            <img
              src="/assets/icons/check.svg"
              alt="Check"
              className="size-full aspect-square"
            />
          </div>
        </div>
        <div
          onClick={() => setActiveCard("jeff's-car")}
          className="hover:bg-white hover:shadow-card-large rounded-2xl relative p-3 gap-3 flex items-center justify-between w-full transition-colors duration-200 ease-spring active:scale-[0.98]"
        >
          <div className="relative flex items-center justify-center size-8 bg-palette-purple rounded-full p-2">
            <img
              src="/assets/icons/car.filled.svg"
              alt="Menu"
              className="size-full aspect-square pointer-events-none touch-none"
            />
          </div>
          <div className="relative flex flex-col items-start justify-center flex-1">
            <span className="pointer-events-none touch-none text-black text-body-large font-semibold">
              Jeff's Car
            </span>
            <span className="pointer-events-none touch-none text-black/50 text-body-small font-medium">
              (201) 538-7775
            </span>
          </div>

          <div
            className={cn(
              "relative flex items-center justify-center size-8 rounded-full p-2 transition duration-200 ease-spring translate-y-full scale-50 opacity-0",
              activeCard === "jeff's-car" &&
                "translate-y-0 scale-100 opacity-100"
            )}
          >
            <img
              src="/assets/icons/check.svg"
              alt="Check"
              className="size-full aspect-square pointer-events-none touch-none"
            />
          </div>
        </div>
        <div className="hover:bg-black/5 rounded-2xl relative p-3 gap-3 flex items-center justify-between w-full transition-colors duration-200 ease-spring active:scale-[0.98]">
          <div className="relative flex items-center justify-center size-8 bg-black/10 rounded-full p-2">
            <img
              src="/assets/icons/plus.svg"
              alt="Menu"
              className="size-full aspect-square pointer-events-none touch-none"
            />
          </div>
          <div className="relative flex flex-col items-start justify-center flex-1">
            <span className="pointer-events-none touch-none text-black text-body-large font-semibold">
              New Inbox
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
