import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { NotificationCarousel } from "./notification-carousel";
import "../app/globals.css";

export default declareComponent(NotificationCarousel, {
  name: "Notification Carousel",
  description:
    "Animated notification card carousel that cycles through multiple cards automatically with full controls",
  group: "Animations",
  props: {
    autoPlay: props.Boolean({
      name: "Auto Play",
      defaultValue: true,
    }),
    intervalSeconds: props.Number({
      name: "Interval (seconds)",
      defaultValue: 5,
      min: 1,
      max: 30,
    }),
    // Card 1 Props
    card1Title: props.Text({
      name: "Card 1 - Title",
      defaultValue: "Incoming call",
    }),
    card1Subtitle: props.Text({
      name: "Card 1 - Subtitle",
      defaultValue: "(424) 456-2424",
    }),
    card1AvatarUrl: props.Text({
      name: "Card 1 - Avatar URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/img/avatar.png",
    }),
    card1IconUrl: props.Text({
      name: "Card 1 - Icon URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/icons/call.incoming.svg",
    }),
    card1ShowShake: props.Boolean({
      name: "Card 1 - Show Shake",
      defaultValue: true,
    }),
    // Card 2 Props
    card2Title: props.Text({
      name: "Card 2 - Title",
      defaultValue: "Beside is answering the phone",
    }),
    card2Subtitle: props.Text({
      name: "Card 2 - Subtitle",
      defaultValue:
        "Hey! This is Bobby's AI Receptionist, how can I help you today?",
    }),
    card2AvatarUrl: props.Text({
      name: "Card 2 - Avatar URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/img/ai.svg",
    }),
    card2IconUrl: props.Text({
      name: "Card 2 - Icon URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/icons/waveform.svg",
    }),
    card2ShowShake: props.Boolean({
      name: "Card 2 - Show Shake",
      defaultValue: false,
    }),
    // Card 3 Props
    card3Title: props.Text({
      name: "Card 3 - Title",
      defaultValue: "New Lead: Sarah Nguyen",
    }),
    card3Subtitle: props.Text({
      name: "Card 3 - Subtitle",
      defaultValue: "Kitchen remodel, tomorrow estimate",
    }),
    card3AvatarUrl: props.Text({
      name: "Card 3 - Avatar URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/img/ai.svg",
    }),
    card3IconUrl: props.Text({
      name: "Card 3 - Icon URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/icons/waveform.svg",
    }),
    card3ShowShake: props.Boolean({
      name: "Card 3 - Show Shake",
      defaultValue: false,
    }),
    // Card 4 Props
    card4Title: props.Text({
      name: "Card 4 - Title",
      defaultValue: "Follow-up text message to Sarah",
    }),
    card4Subtitle: props.Text({
      name: "Card 4 - Subtitle",
      defaultValue: "Delivered by Beside",
    }),
    card4AvatarUrl: props.Text({
      name: "Card 4 - Avatar URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/img/ai.svg",
    }),
    card4IconUrl: props.Text({
      name: "Card 4 - Icon URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/icons/chat.svg",
    }),
    card4ShowShake: props.Boolean({
      name: "Card 4 - Show Shake",
      defaultValue: false,
    }),
  },
});
