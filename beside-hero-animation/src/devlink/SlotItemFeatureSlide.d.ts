import * as React from "react";
import * as Types from "./types";

declare function SlotItemFeatureSlide(props: {
  as?: React.ElementType;
  imageBig?: Types.Asset.Image;
  imageSmall?: Types.Asset.Image;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "Base" | "small image right";
}): React.JSX.Element;
