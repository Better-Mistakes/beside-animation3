import React from "react";
import { motion } from "motion/react";

interface RollingTextProps {
  text: string;
  isVisible: boolean;
  className?: string;
  delay?: number;
}

export function RollingText({
  text,
  isVisible,
  className,
  delay = 0,
}: RollingTextProps) {
  if (!isVisible) return null;

  // Generate a unique ID for this text instance to avoid conflicts
  const textId = React.useMemo(
    () => Math.random().toString(36).substr(2, 9),
    []
  );

  return (
    <span className={className}>
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={`${textId}-${index}`}
            initial={{
              filter: "blur(4px)",
              opacity: 0,
              y: 18,
              rotateX: 270,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
              delay: delay + index * 0.05,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
