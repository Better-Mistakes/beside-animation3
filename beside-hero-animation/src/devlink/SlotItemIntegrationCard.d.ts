import * as React from "react";
import * as Types from "./types";

declare function SlotItemIntegrationCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  position?: React.ReactNode;
  description?: React.ReactNode;
}): React.JSX.Element;
