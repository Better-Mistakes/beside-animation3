import * as React from "react";
import * as Types from "./types";

declare function SlotItemFooterLink(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  variant?: "Base" | "small";
}): React.JSX.Element;
