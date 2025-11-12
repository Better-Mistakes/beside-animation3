"use client";

import React from "react";
import { motion } from "framer-motion";

interface RollingTextProps {
  text: string;
  isVisible: boolean;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function RollingText({
  text,
  isVisible,
  className,
  delay = 0,
  style,
}: RollingTextProps) {
  if (!isVisible) return null;

  // Generate a unique ID for this text instance to avoid conflicts
  const textId = React.useMemo(
    () => Math.random().toString(36).substr(2, 9),
    []
  );

  return (
    <span className={className} style={style}>
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={`${textId}-${index}`}
            initial={{
              filter: "blur(0.25rem)",
              opacity: 0,
              y: "1.125rem",
              rotateX: 270,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              duration: 0.125,
              ease: "easeOut",
              delay: delay + index * 0.025,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
