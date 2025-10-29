import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RollingText } from "./rolling-text";

interface CarouselCard {
  id: string;
  title: string;
  subtitle: string;
  avatarUrl: string;
  iconUrl: string;
  showShake: boolean;
}

interface NotificationCarouselProps {
  autoPlay?: boolean;
  intervalSeconds?: number;
  // Card 1
  card1Title?: string;
  card1Subtitle?: string;
  card1AvatarUrl?: string;
  card1IconUrl?: string;
  card1ShowShake?: boolean;
  // Card 2
  card2Title?: string;
  card2Subtitle?: string;
  card2AvatarUrl?: string;
  card2IconUrl?: string;
  card2ShowShake?: boolean;
  // Card 3
  card3Title?: string;
  card3Subtitle?: string;
  card3AvatarUrl?: string;
  card3IconUrl?: string;
  card3ShowShake?: boolean;
  // Card 4
  card4Title?: string;
  card4Subtitle?: string;
  card4AvatarUrl?: string;
  card4IconUrl?: string;
  card4ShowShake?: boolean;
}

export const NotificationCarousel: React.FC<NotificationCarouselProps> = ({
  autoPlay = true,
  intervalSeconds = 5,
  // Card 1 defaults
  card1Title = "Incoming call",
  card1Subtitle = "(424) 456-2424",
  card1AvatarUrl = "https://besideanimation-code.netlify.app/assets/img/avatar.png",
  card1IconUrl = "https://besideanimation-code.netlify.app/assets/icons/call.incoming.svg",
  card1ShowShake = true,
  // Card 2 defaults
  card2Title = "Beside is answering the phone",
  card2Subtitle = "Hey! This is Bobby's AI Receptionist, how can I help you today?",
  card2AvatarUrl = "https://besideanimation-code.netlify.app/assets/img/ai.svg",
  card2IconUrl = "https://besideanimation-code.netlify.app/assets/icons/waveform.svg",
  card2ShowShake = false,
  // Card 3 defaults
  card3Title = "New Lead: Sarah Nguyen",
  card3Subtitle = "Kitchen remodel, tomorrow estimate",
  card3AvatarUrl = "https://besideanimation-code.netlify.app/assets/img/ai.svg",
  card3IconUrl = "https://besideanimation-code.netlify.app/assets/icons/waveform.svg",
  card3ShowShake = false,
  // Card 4 defaults
  card4Title = "Follow-up text message to Sarah",
  card4Subtitle = "Delivered by Beside",
  card4AvatarUrl = "https://besideanimation-code.netlify.app/assets/img/ai.svg",
  card4IconUrl = "https://besideanimation-code.netlify.app/assets/icons/chat.svg",
  card4ShowShake = false,
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Build cards from props
  const cards: CarouselCard[] = [
    {
      id: "card-1",
      title: card1Title,
      subtitle: card1Subtitle,
      avatarUrl: card1AvatarUrl,
      iconUrl: card1IconUrl,
      showShake: card1ShowShake,
    },
    {
      id: "card-2",
      title: card2Title,
      subtitle: card2Subtitle,
      avatarUrl: card2AvatarUrl,
      iconUrl: card2IconUrl,
      showShake: card2ShowShake,
    },
    {
      id: "card-3",
      title: card3Title,
      subtitle: card3Subtitle,
      avatarUrl: card3AvatarUrl,
      iconUrl: card3IconUrl,
      showShake: card3ShowShake,
    },
    {
      id: "card-4",
      title: card4Title,
      subtitle: card4Subtitle,
      avatarUrl: card4AvatarUrl,
      iconUrl: card4IconUrl,
      showShake: card4ShowShake,
    },
  ];

  const currentCard = cards[currentCardIndex];

  const nextCard = useCallback(() => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      setCurrentCardIndex(0); // Loop back to start
    }
  }, [currentCardIndex, cards.length]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      nextCard();
    }, intervalSeconds * 1000);

    return () => clearTimeout(timer);
  }, [currentCardIndex, nextCard, isPlaying, intervalSeconds]);

  return (
    <div className="font-sans flex flex-col items-center justify-center">
      <motion.div
        layout="size"
        className="w-full max-w-[360px] bg-white/80 backdrop-blur-xl text-gray-900 flex flex-col items-center justify-center px-4 py-3 shadow-lg rounded-[28px] relative overflow-clip"
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
        <div className="flex gap-3 items-center relative w-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`header-${currentCard.id}`}
              className="flex gap-3 items-center w-full"
              initial={{ scale: 1 }}
              animate={{
                scale: 1,
                ...(currentCard.showShake && {
                  x: [0, -4, 4, -4, 4, 0, 0, -2, 2, -2, 2, 0],
                }),
              }}
              exit={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 10,
                ...(currentCard.showShake && {
                  x: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <div className="relative flex items-center justify-center w-10 h-10">
                <motion.span
                  key={`avatar-${currentCard.avatarUrl}`}
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
                  className="relative flex w-10 h-10 shrink-0 overflow-hidden rounded-full shadow-md"
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
                    alt={currentCard.title}
                    src={currentCard.avatarUrl}
                    className="w-full h-full aspect-square object-cover"
                  />
                </motion.span>
              </div>

              <div className="flex flex-col gap-0.5 flex-1 min-w-0 h-fit overflow-hidden">
                <motion.span
                  className="text-gray-900 text-sm font-semibold"
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
                  <RollingText
                    text={currentCard.title}
                    isVisible={true}
                    delay={0}
                  />
                </motion.span>
                <motion.span
                  className="text-gray-600 text-xs whitespace-nowrap overflow-hidden relative"
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
                  <RollingText
                    text={currentCard.subtitle}
                    isVisible={true}
                    delay={0}
                  />
                  <div
                    className="absolute z-10 bottom-0 right-0 w-full h-full pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, transparent 75%, #FFFFFF 100%)",
                    }}
                  />
                </motion.span>
              </div>

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
                src={currentCard.iconUrl}
                className="w-7 h-7 shrink-0 rounded-lg p-1"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
