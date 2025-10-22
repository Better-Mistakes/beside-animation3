import * as React from "react";
import * as Types from "./types";

declare function SlotItemTitleComponent(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  iconTitle?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  descriptionVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "smaller width" | "integration";
}): React.JSX.Element;
