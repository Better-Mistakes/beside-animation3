import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RollingText } from "./rolling-text";

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  avatar: string;
  roundedAvatar: boolean;
  icon: string;
  hasContent: boolean;
  showBesideBadge?: boolean;
  showTeamAvatars?: boolean;
  showHubSpot?: boolean;
  content?: React.ReactNode;
}

interface NotificationCarouselProps {
  autoPlay?: boolean;
  intervalSeconds?: number;
}

export const NotificationCarousel: React.FC<NotificationCarouselProps> = ({
  autoPlay = true,
  intervalSeconds = 5,
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const animatedTextPrepItem1 = "Role: Backend & AI Lead at Beside.";
  const animatedTextPrepItem2 = "Location: New York, NY";
  const animatedTextPrepItem3 = "LinkedIn: Matthias Thomas-Lamotte LinkedIn";
  const animatedTextNewLead =
    "Hi Sarah! You're confirmed for Tomorrow, Oct 15 at 10am tomorrow. See you then!";
  const animatedTextSummary =
    "The meeting discusses the product strategy for the macOS app, focusing on contact unification with iOS and aiming for a cohesive user experience.";

  const cards: CardData[] = [
    {
      id: "incoming-call",
      title: "Incoming call",
      subtitle: "(424) 456-2424",
      avatar: "https://besideanimation-code.netlify.app/assets/img/avatar.png",
      roundedAvatar: false,
      icon: "https://besideanimation-code.netlify.app/assets/icons/call.incoming.svg",
      hasContent: false,
      showBesideBadge: true,
    },
    {
      id: "answering-phone",
      title: "Beside is answering the phone",
      subtitle:
        "Hey! This is Bobby's AI Receptionist, how can I help you today?",
      avatar: "https://besideanimation-code.netlify.app/assets/img/ai.svg",
      roundedAvatar: false,
      icon: "https://besideanimation-code.netlify.app/assets/icons/waveform.svg",
      hasContent: false,
    },
    {
      id: "new-lead",
      title: "New Lead: Sarah Nguyen",
      subtitle: "Kitchen remodel, tomorrow estimate",
      avatar: "https://besideanimation-code.netlify.app/assets/img/ai.svg",
      roundedAvatar: false,
      icon: "https://besideanimation-code.netlify.app/assets/icons/waveform.svg",
      hasContent: true,
      showHubSpot: true,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-4 justify-between bg-background-view shadow-card-large rounded-[22px] p-4 relative overflow-clip min-h-20"
        >
          <RollingText
            text={animatedTextNewLead}
            isVisible={true}
            className="text-text-primary text-body-medium font-medium"
          />
        </motion.div>
      ),
    },
    {
      id: "follow-up-text",
      title: "Follow-up text message to Sarah",
      subtitle: "Delivered by Beside",
      avatar: "https://besideanimation-code.netlify.app/assets/img/ai.svg",
      roundedAvatar: false,
      icon: "https://besideanimation-code.netlify.app/assets/icons/chat.svg",
      hasContent: false,
    },
    {
      id: "team-joined",
      title: "Your team joined your inbox",
      subtitle: "Bobby, Maxime, Helene, +3",
      avatar: "https://besideanimation-code.netlify.app/assets/img/logo.svg",
      roundedAvatar: true,
      icon: "https://besideanimation-code.netlify.app/assets/icons/call.incoming.svg",
      hasContent: false,
      showTeamAvatars: true,
    },
    {
      id: "meeting-prep",
      title: "1:1 Maxime x Matthias",
      subtitle: "Joining in 5 mins",
      avatar:
        "https://besideanimation-code.netlify.app/assets/img/google-meet.svg",
      roundedAvatar: true,
      icon: "https://besideanimation-code.netlify.app/assets/icons/cursor.click.svg",
      hasContent: true,
      showBesideBadge: true,
      content: (
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-4 justify-between bg-background-view shadow-card-large rounded-[22px] p-4 relative overflow-clip"
        >
          <div className="flex items-center justify-between gap-1 text-palette-purple">
            <span className="size-6 bg-background-elevated rounded-xs p-1 text-palette-purple">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9019 12.8086C12.1718 12.7897 12.5292 13.0502 13.2437 13.5718L18.9185 17.7144C19.7606 18.3292 20.182 18.6367 20.2368 18.9155C20.2842 19.1569 20.2052 19.4063 20.0273 19.5776C19.8217 19.7753 19.2985 19.7884 18.2534 19.8164L16.3198 19.8691C16.0381 19.8766 15.7789 20.0234 15.6313 20.2603L14.5825 21.9463C14.0627 22.7814 13.8022 23.1991 13.5322 23.2778C13.2984 23.346 13.045 23.2939 12.8569 23.1401C12.6403 22.9622 12.5674 22.4763 12.4204 21.5068L11.3848 14.6836C11.2528 13.8132 11.1877 13.3779 11.3306 13.1499C11.4548 12.9522 11.6675 12.8253 11.9019 12.8086Z"
                  fill="currentColor"
                />
                <path
                  d="M6.69141 17.2646C7.13075 16.8253 7.84289 16.8253 8.28223 17.2646C8.72139 17.704 8.72151 18.4162 8.28223 18.8555L5.63086 21.5068C5.19158 21.9461 4.47939 21.946 4.04004 21.5068C3.6007 21.0675 3.6007 20.3554 4.04004 19.916L6.69141 17.2646Z"
                  fill="currentColor"
                />
                <path
                  d="M5.625 12.4248C6.24632 12.4248 6.75 12.9285 6.75 13.5498C6.7499 14.171 6.24626 14.6748 5.625 14.6748H1.875C1.25374 14.6748 0.750095 14.171 0.75 13.5498C0.75 12.9285 1.25368 12.4248 1.875 12.4248H5.625Z"
                  fill="currentColor"
                />
                <path
                  d="M22.125 12.4248C22.7463 12.4248 23.25 12.9285 23.25 13.5498C23.2499 14.171 22.7463 14.6748 22.125 14.6748H18.375C17.7537 14.6748 17.2501 14.171 17.25 13.5498C17.25 12.9285 17.7537 12.4248 18.375 12.4248H22.125Z"
                  fill="currentColor"
                />
                <path
                  d="M4.05029 5.59717C4.48963 5.15783 5.20177 5.15783 5.64111 5.59717L8.29248 8.24853C8.73182 8.68787 8.73182 9.40001 8.29248 9.83935C7.85313 10.2785 7.14094 10.2786 6.70166 9.83935L4.05029 7.18799C3.61101 6.74871 3.61113 6.03652 4.05029 5.59717Z"
                  fill="currentColor"
                />
                <path
                  d="M18.3589 5.59717C18.7982 5.15783 19.5104 5.15783 19.9497 5.59717C20.3889 6.03652 20.389 6.74871 19.9497 7.18799L17.2983 9.83935C16.8591 10.2786 16.1469 10.2785 15.7075 9.83935C15.2682 9.40001 15.2682 8.68787 15.7075 8.24853L18.3589 5.59717Z"
                  fill="currentColor"
                />
                <path
                  d="M11.9927 2.30713C12.6139 2.30722 13.1177 2.81087 13.1177 3.43213V7.18213C13.1177 7.80339 12.6139 8.30703 11.9927 8.30713C11.3714 8.30713 10.8677 7.80345 10.8677 7.18213V3.43213C10.8677 2.81081 11.3714 2.30713 11.9927 2.30713Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="flex-1 flex text-palette-purple text-body-small font-bold">
              5-Minute Prep
            </span>
            <span className="size-6 bg-background-elevated rounded-xs p-1 text-palette-purple">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.40319 11.495C8.81631 11.5237 9.12776 11.8816 9.09925 12.2946C9.07057 12.7078 8.71278 13.0193 8.29961 12.9907L4.32559 12.7152C4.28065 12.7121 4.20316 12.7071 4.13293 12.6965C4.07204 12.6874 3.98726 12.6699 3.89331 12.6309L3.79664 12.5854L3.68201 12.5094C3.60911 12.4542 3.54386 12.389 3.48866 12.3161L3.4127 12.2014C3.3394 12.0701 3.31371 11.9462 3.30152 11.8651C3.29097 11.7948 3.28599 11.7173 3.28288 11.6725L3.00736 7.69845C2.97888 7.28547 3.29045 6.92763 3.70342 6.89881C4.11651 6.87021 4.47426 7.18181 4.50305 7.59487L4.75648 11.2416L8.40319 11.495Z"
                  fill="currentColor"
                />
                <path
                  d="M12.507 3.68438L12.583 3.79901L12.6286 3.89568C12.6675 3.98971 12.685 4.0744 12.6942 4.1353C12.7047 4.20561 12.7097 4.28304 12.7128 4.32796L12.9883 8.30198C13.0169 8.71515 12.7055 9.07294 12.2923 9.10162C11.8792 9.13009 11.5213 8.81866 11.4926 8.40556L11.2392 4.75885L7.5925 4.50542C7.17946 4.47661 6.86784 4.11886 6.89644 3.70578C6.92517 3.29275 7.28306 2.98127 7.69608 3.00973L11.6701 3.28525C11.7149 3.28836 11.7924 3.29334 11.8628 3.30389C11.9438 3.31608 12.0677 3.34176 12.1991 3.41507L12.3137 3.49103C12.3866 3.54625 12.4518 3.61145 12.507 3.68438Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-text-primary text-body-large font-bold">
              Matthias Thomas-Lamotte
            </span>
            <ul className="list-none list-inside flex flex-col">
              <li className="flex items-center justify-start gap-2">
                <RollingText
                  text={animatedTextPrepItem1}
                  isVisible={true}
                  className="text-text-secondary text-body-small font-medium"
                />
              </li>
              <li className="flex items-center justify-start gap-2">
                <RollingText
                  text={animatedTextPrepItem2}
                  isVisible={true}
                  className="text-text-secondary text-body-small font-medium"
                />
              </li>
              <li className="flex items-center justify-start gap-2">
                <RollingText
                  text={animatedTextPrepItem3}
                  isVisible={true}
                  className="text-text-secondary text-body-small font-medium"
                />
              </li>
            </ul>
          </div>
          <div
            className="absolute z-10 bottom-0 right-0 w-full h-2/3"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent, #FFFFFF)",
            }}
          />
        </motion.div>
      ),
    },
    {
      id: "writing-notes",
      title: "You're in 1:1 Maxime x Matthias",
      subtitle: "Writing notes for you",
      avatar:
        "https://besideanimation-code.netlify.app/assets/img/google-meet.svg",
      roundedAvatar: true,
      icon: "https://besideanimation-code.netlify.app/assets/icons/pencil.sparkle.svg",
      hasContent: false,
      showBesideBadge: true,
    },
    {
      id: "meeting-notes-ready",
      title: "You're in 1:1 Maxime x Matthias",
      subtitle: "Your meeting notes are ready",
      avatar:
        "https://besideanimation-code.netlify.app/assets/img/google-meet.svg",
      roundedAvatar: true,
      icon: "https://besideanimation-code.netlify.app/assets/icons/pencil.sparkle.svg",
      hasContent: true,
      showBesideBadge: true,
      content: (
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-4 justify-between bg-background-view shadow-card-large rounded-[22px] p-4 relative overflow-clip min-h-36"
        >
          <div className="flex flex-col gap-2">
            <RollingText
              text="MacOS App Development Workshop"
              isVisible={true}
              className="text-text-primary text-body-large font-bold"
            />
            <div className="flex items-center justify-start gap-6">
              <div className="flex items-center justify-start gap-2">
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(5px)",
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(5px)",
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                    ease: [0.175, 0.885, 0.32, 1.1],
                  }}
                  className="size-6"
                  src="https://besideanimation-code.netlify.app/assets/img/avatar2.png"
                />
                <RollingText
                  text="Maxime"
                  isVisible={true}
                  className="text-text-primary text-body-small font-medium"
                  delay={0.1}
                />
              </div>
              <div className="flex items-center justify-start gap-2">
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(5px)",
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(5px)",
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2,
                    ease: [0.175, 0.885, 0.32, 1.1],
                  }}
                  className="size-6"
                  src="https://besideanimation-code.netlify.app/assets/img/avatar4.png"
                />
                <RollingText
                  text="Matthias"
                  isVisible={true}
                  className="text-text-primary text-body-small font-medium"
                  delay={0.2}
                />
              </div>
            </div>
            <p className="text-text-secondary text-body-small leading-tight">
              <RollingText
                text={animatedTextSummary}
                isVisible={true}
                className="text-text-secondary text-body-small font-medium"
              />
            </p>
          </div>
          <div
            className="absolute z-10 bottom-0 right-0 w-full h-2/3"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent, #FFFFFF)",
            }}
          />
        </motion.div>
      ),
    },
  ];

  const currentCard = cards[currentCardIndex];

  const nextCard = useCallback(() => {
    if (currentCardIndex < cards.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCardIndex((prev) => prev + 1);
        setIsTransitioning(false);
      }, 500);
    } else {
      // Loop back to start
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCardIndex(0);
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentCardIndex, cards.length]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      nextCard();
    }, intervalSeconds * 1000);

    return () => clearTimeout(timer);
  }, [currentCardIndex, nextCard, isPlaying, intervalSeconds]);

  const cn = (...classes: (string | boolean | undefined)[]) =>
    classes.filter(Boolean).join(" ");

  return (
    <div className="font-sans flex flex-col items-center justify-center">
      <motion.div
        layout="size"
        className="w-full max-w-md bg-background-elevated/80 backdrop-blur-xl text-text-primary flex flex-col items-center justify-center p-5 shadow-base rounded-[44px] relative overflow-clip"
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
        <div className="@container/card-header flex gap-4 justify-between items-center relative w-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`header-${currentCard.id}`}
              className="flex gap-4 justify-between items-center"
              initial={{ scale: 1 }}
              animate={{
                scale: 1,
                ...(currentCardIndex === 0 && {
                  x: [0, -4, 4, -4, 4, 0, 0, -2, 2, -2, 2, 0],
                }),
              }}
              exit={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 10,
                ...(currentCardIndex === 0 && {
                  x: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <div className="relative flex items-center justify-center size-12">
                <motion.span
                  key={`avatar-${currentCard.avatar}`}
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
                  className={cn(
                    "relative flex size-8 shrink-0 overflow-hidden rounded-full",
                    "size-12 shadow-[0_6px_112px_0_rgba(0,0,0,0.06),0_2px_28px_0_rgba(0,0,0,0.02),0_2px_8px_0_rgba(0,0,0,0.04)] p-0",
                    currentCard.roundedAvatar && "rounded-lg p-2"
                  )}
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
                    src={currentCard.avatar}
                    className="size-full aspect-square"
                  />
                </motion.span>

                {currentCard.showBesideBadge && (
                  <motion.span
                    key={`logo-beside-${currentCard.avatar}`}
                    initial={{
                      opacity: 0,
                      filter: "blur(2px)",
                      scale: 0.8,
                    }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(2px)", scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                    className="size-5.5 absolute bottom-0 right-0 bg-background-elevated rounded-xs p-1 shadow-[0_0_12px_0_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src="https://besideanimation-code.netlify.app/assets/img/logo.svg"
                      className="size-full aspect-square"
                    />
                  </motion.span>
                )}
              </div>

              <div className="flex flex-col gap-0.5 flex-1 h-fit w-86 overflow-hidden">
                <motion.span
                  className="text-text-primary text-body-medium font-semibold"
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
                  className="text-text-secondary text-body-medium max-w-76 whitespace-nowrap overflow-hidden max-h-12"
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
                  {currentCard.showHubSpot && (
                    <img
                      src="https://besideanimation-code.netlify.app/assets/img/hubspot.png"
                      className="size-4 flex-shrink-0 inline-block mr-1"
                      alt="HubSpot"
                    />
                  )}
                  <RollingText
                    text={currentCard.subtitle}
                    isVisible={true}
                    delay={0}
                  />
                  <div
                    className="absolute z-10 bottom-0 right-0 w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, transparent 75%, #FFFFFF 100%)",
                    }}
                  />
                </motion.span>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex h-fit items-center justify-between mr-2 shrink-0">
                {currentCard.showTeamAvatars ? (
                  <motion.div
                    className="*:data-[slot=avatar]:ring-background flex -space-x-2 items-center *:data-[slot=avatar]:ring-2"
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(5px)",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      scale: 1,
                    }}
                    exit={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    transition={{
                      duration: 0.3,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                  >
                    <motion.img
                      initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(5px)",
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0,
                        ease: [0.175, 0.885, 0.32, 1.1],
                      }}
                      src="https://besideanimation-code.netlify.app/assets/img/avatar.png"
                      className="relative flex size-8 shrink-0 overflow-hidden rounded-full aspect-square"
                    />
                    <motion.img
                      initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(5px)",
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05,
                        ease: [0.175, 0.885, 0.32, 1.1],
                      }}
                      src="https://besideanimation-code.netlify.app/assets/img/avatar2.png"
                      className="relative flex size-8 shrink-0 overflow-hidden rounded-full aspect-square"
                    />
                    <motion.img
                      initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(5px)",
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                        ease: [0.175, 0.885, 0.32, 1.1],
                      }}
                      src="https://besideanimation-code.netlify.app/assets/img/avatar3.png"
                      className="relative flex size-8 shrink-0 overflow-hidden rounded-full aspect-square"
                    />
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(5px)",
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.15,
                        ease: [0.175, 0.885, 0.32, 1.1],
                      }}
                      className="relative flex size-8 shrink-0 overflow-hidden items-center justify-center rounded-full bg-background-grouped p-1 text-body-tiny font-medium tabular-nums"
                    >
                      +3
                    </motion.span>
                  </motion.div>
                ) : (
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
                    src={currentCard.icon}
                    className="relative flex size-8 shrink-0 overflow-hidden rounded-xs p-1 aspect-square"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="sync">
          {currentCard.hasContent && currentCard.content && (
            <motion.div
              key={`content-${currentCard.id}`}
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0.175, 0.885, 0.32, 1.1],
              }}
              className="relative w-full"
            >
              <motion.div
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: [0.175, 0.885, 0.32, 1.1],
                }}
                className="mt-4"
              >
                {currentCard.content}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
