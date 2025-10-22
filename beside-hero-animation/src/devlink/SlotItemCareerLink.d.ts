import * as React from "react";
import * as Types from "./types";

declare function SlotItemCareerLink(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  variant?: "Base" | "left";
}): React.JSX.Element;
