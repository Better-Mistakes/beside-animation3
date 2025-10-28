import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { RollingText } from "./rolling-text";
import "../app/globals.css";

export default declareComponent(RollingText, {
  name: "Rolling Text",
  description:
    "Animated text that rolls in character by character with 3D rotation effect",
  group: "Animations",
  props: {
    text: props.Text({
      name: "Text Content",
      defaultValue: "Hello World",
    }),
    isVisible: props.Boolean({
      name: "Is Visible",
      defaultValue: true,
    }),
    delay: props.Number({
      name: "Delay (seconds)",
      defaultValue: 0,
    }),
  },
});
