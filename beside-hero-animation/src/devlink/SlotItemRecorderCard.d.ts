import * as React from "react";
import * as Types from "./types";

declare function SlotItemRecorderCard(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  title?: React.ReactNode;
  description?: React.ReactNode;
  background?: Types.Asset.Image;
}): React.JSX.Element;
