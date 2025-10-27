"use client";

import { animate } from "motion/react";
import { useEffect, useState } from "react";

const delimiter = ""; // or " " to split by word

export function useAnimatedText(
  text: string,
  start?: boolean,
  delay: number = 0
) {
  const [cursor, setCursor] = useState(
    start ? text.split(delimiter).length : 0
  );
  const [startingCursor, setStartingCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  if (prevText !== text) {
    setPrevText(text);
    setStartingCursor(text.startsWith(prevText) ? cursor : 0);
  }

  useEffect(() => {
    if (start) {
      setCursor(text.split(delimiter).length);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    const timeoutId = setTimeout(() => {
      const controls = animate(startingCursor, text.split(delimiter).length, {
        duration: 3,
        ease: "easeOut",
        onUpdate(latest) {
          setCursor(Math.floor(latest));
        },
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [startingCursor, text, start, delay]);

  const animatedText = text.split(delimiter).slice(0, cursor).join(delimiter);

  return {
    text: animatedText,
    isAnimating,
    isVisible: cursor > 0,
  };
}
