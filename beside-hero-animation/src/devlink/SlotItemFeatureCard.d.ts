import * as React from "react";
import * as Types from "./types";

declare function SlotItemFeatureCard(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  title?: React.ReactNode;
  description?: React.ReactNode;
}): React.JSX.Element;
