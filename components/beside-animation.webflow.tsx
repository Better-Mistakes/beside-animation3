import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BesideAnimation } from "./beside-animation";
import "../app/globals.css";

export default declareComponent(BesideAnimation, {
  name: "Beside Animation",
  description:
    "Complete 8-card animated sequence showcasing Beside's AI features - exactly as seen on localhost!",
  group: "Animations",
  props: {
    interval: props.Number({
      name: "Interval (seconds)",
      defaultValue: 5,
    }),
  },
});
