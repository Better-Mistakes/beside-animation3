import React from "react";
import { motion } from "motion/react";
import { RollingText } from "./rolling-text";

interface NotificationCardProps {
  title: string;
  subtitle: string;
  avatarUrl?: string;
  iconUrl?: string;
  showShakeAnimation?: boolean;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  subtitle,
  avatarUrl,
  iconUrl,
  showShakeAnimation = false,
}) => {
  return (
    <motion.div
      className="w-full max-w-md bg-white/80 backdrop-blur-xl text-gray-900 flex flex-col items-center justify-center p-5 shadow-lg rounded-[44px] relative overflow-clip"
      initial={{
        opacity: 0,
        y: 200,
        rotate: 5,
        scale: 0.5,
      }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      exit={{
        opacity: 0,
        y: 0,
        rotate: 5,
        scale: 0.5,
      }}
      transition={{
        duration: 0.3,
        ease: [0.175, 0.885, 0.32, 1.1],
      }}
    >
      <div className="flex gap-4 justify-between items-center relative w-full">
        <motion.div
          className="flex gap-4 justify-between items-center"
          initial={{ scale: 1 }}
          animate={{
            scale: 1,
            ...(showShakeAnimation && {
              x: [0, -4, 4, -4, 4, 0, 0, -2, 2, -2, 2, 0],
            }),
          }}
          exit={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 500,
            damping: 10,
            ...(showShakeAnimation && {
              x: {
                duration: 0.5,
                ease: "easeOut",
              },
            }),
          }}
        >
          <div className="relative flex items-center justify-center w-12 h-12">
            {avatarUrl && (
              <motion.span
                initial={{
                  opacity: 0,
                  filter: "blur(2px)",
                  scale: 0.8,
                }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(2px)", scale: 0.8 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  ease: [0.175, 0.885, 0.32, 1.1],
                }}
                className="relative flex w-12 h-12 shrink-0 overflow-hidden rounded-full shadow-lg"
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    filter: "blur(2px)",
                    scale: 0.8,
                  }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(2px)", scale: 0.8 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.175, 0.885, 0.32, 1.1],
                  }}
                  alt={title}
                  src={avatarUrl}
                  className="w-full h-full aspect-square object-cover"
                />
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-0.5 flex-1 h-fit overflow-hidden">
            <motion.span
              className="text-gray-900 text-base font-semibold"
              initial={{
                opacity: 0,
                x: -8,
                filter: "blur(5px)",
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -8,
                filter: "blur(5px)",
                scale: 0.9,
              }}
              transition={{
                duration: 0.2,
                delay: 0.05,
                ease: [0.175, 0.885, 0.32, 1.1],
              }}
            >
              <RollingText text={title} isVisible={true} delay={0} />
            </motion.span>
            <motion.span
              className="text-gray-600 text-base max-w-sm whitespace-nowrap overflow-hidden"
              initial={{
                opacity: 0,
                x: -8,
                filter: "blur(5px)",
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -8,
                filter: "blur(5px)",
                scale: 0.9,
              }}
              transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0.175, 0.885, 0.32, 1.1],
              }}
            >
              <RollingText text={subtitle} isVisible={true} delay={0} />
              <div
                className="absolute z-10 bottom-0 right-0 w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, transparent 75%, #FFFFFF 100%)",
                }}
              />
            </motion.span>
          </div>

          {iconUrl && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex h-fit items-center justify-between mr-2 shrink-0">
              <motion.img
                initial={{
                  opacity: 0,
                  filter: "blur(5px)",
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(5px)",
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: [0.175, 0.885, 0.32, 1.1],
                }}
                src={iconUrl}
                className="relative flex w-8 h-8 shrink-0 overflow-hidden rounded-lg p-1 aspect-square"
              />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
