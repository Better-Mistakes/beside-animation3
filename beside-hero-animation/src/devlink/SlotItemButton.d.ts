import * as React from "react";
import * as Types from "./types";

declare function SlotItemButton(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  variant?:
    | "Base"
    | "ghost black"
    | "ghost white"
    | "pink"
    | "navbar"
    | "arrow-black"
    | "arrow-white"
    | "grey";
  arrowVisibility?: Types.Visibility.VisibilityConditions;
  arrowVariation?: "Base" | "Download";
}): React.JSX.Element;
