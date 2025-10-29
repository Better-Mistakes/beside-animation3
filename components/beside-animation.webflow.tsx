import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BesideAnimation } from "./beside-animation";
import "../app/globals.css";

export default declareComponent(BesideAnimation, {
  name: "Beside Animation",
  description:
    "Complete 9-card animated sequence showcasing Beside's AI features. Emits 'beside-card-change' events for syncing external animations (like circle pulse and headings).",
  group: "Animations",
  props: {
    interval: props.Number({
      name: "Interval (seconds)",
      defaultValue: 5,
    }),
    startDelay: props.Number({
      name: "Start Delay (seconds)",
      defaultValue: 3,
    }),
  },
});
