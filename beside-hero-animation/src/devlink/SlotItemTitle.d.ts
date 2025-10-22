import * as React from "react";
import * as Types from "./types";

declare function SlotItemTitle(props: {
  as?: React.ElementType;
  eyebrowIcon?: Types.Asset.Image;
  eyebrowTitle?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  eyebrowVisibility?: Types.Visibility.VisibilityConditions;
  descriptionVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
