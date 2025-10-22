import * as React from "react";
import * as Types from "./types";

declare function SlotItemTitleSection(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  eyebrowEyebrowTitle?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "Base" | "description --668";
  eyebrowVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
