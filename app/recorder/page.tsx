"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [time, setTime] = useState(0);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      setTime(0);
      return () => clearInterval(interval);
    }
  }, [isRecording]);

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
      <div
        className={cn(
          "bg-background-elevated/10 backdrop-blur-xl text-text-primary flex items-center justify-center p-2 shadow-recorder relative gap-2 w-16 h-40 rounded-full active:scale-[0.98] transition-all duration-200 ease-spring"
        )}
      >
        <div className="flex-col relative gap-3 flex items-center justify-between transition-colors duration-200 ease-default">
          <div className="relative flex flex-col items-center justify-center">
            <img
              src="/assets/icons/beside-mark.svg"
              alt="Finder"
              className="size-full aspect-square"
            />
          </div>

          <div className="flex text-body-medium font-medium text-text-secondary tabular-nums">
            {formatTime(time)}
          </div>
          <button
            className="group/button relative flex flex-col items-center justify-center border-4 border-border-primary rounded-full p-2 outline-none hover:bg-palette-red/10 active:scale-95 transition-all duration-200 ease-spring"
            onClick={() => setIsRecording(!isRecording)}
          >
            <div
              className={cn(
                "group-hover/button:scale-95 scale-90 transition-all duration-200 ease-spring block size-4 bg-palette-red rounded-full",
                isRecording && "rounded-sm scale-100"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
