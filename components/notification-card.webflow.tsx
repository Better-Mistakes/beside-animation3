import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { NotificationCard } from "./notification-card";
import "../app/globals.css";

export default declareComponent(NotificationCard, {
  name: "Notification Card",
  description:
    "Animated notification card with rolling text, avatar, and smooth entrance animations",
  group: "Animations",
  props: {
    title: props.Text({
      name: "Title",
      defaultValue: "Incoming call",
    }),
    subtitle: props.Text({
      name: "Subtitle",
      defaultValue: "(424) 456-2424",
    }),
    avatarUrl: props.Text({
      name: "Avatar URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/img/avatar.png",
    }),
    iconUrl: props.Text({
      name: "Icon URL",
      defaultValue:
        "https://besideanimation-code.netlify.app/assets/icons/call.incoming.svg",
    }),
    showShakeAnimation: props.Boolean({
      name: "Show Shake Animation",
      defaultValue: false,
    }),
  },
});
