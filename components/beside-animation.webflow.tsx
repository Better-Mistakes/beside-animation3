import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BesideAnimation } from "./beside-animation";
import "../app/fonts.css";
import "../app/globals.css";

export default declareComponent(BesideAnimation, {
  name: "Beside Animation",
  description:
    "Complete 9-card animated sequence showcasing Beside's AI features with enhanced smooth animations. Cards appear after 5 seconds with elegant entrance, then cycle automatically every 3.5 seconds. Features refined shake effect on first card. Emits 'beside-card-change' events for syncing external animations.",
  group: "Animations",
  props: {
    interval: props.Number({
      name: "Interval (seconds)",
      defaultValue: 3.5,
    }),
  },
});
