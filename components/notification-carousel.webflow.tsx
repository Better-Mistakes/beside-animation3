import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { NotificationCarousel } from "./notification-carousel";
import "../app/globals.css";

export default declareComponent(NotificationCarousel, {
  name: "Notification Carousel",
  description:
    "Full-featured animated notification carousel with 8 cards showcasing Beside's AI features: incoming calls, meeting prep, notes, and team collaboration",
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
  },
});
