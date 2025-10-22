import * as React from "react";
import * as Types from "./types";

declare function SlotItemButtonArrow(props: {
  as?: React.ElementType;
  arrowVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "Download";
}): React.JSX.Element;
