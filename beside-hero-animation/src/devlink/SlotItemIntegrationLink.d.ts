import * as React from "react";
import * as Types from "./types";

declare function SlotItemIntegrationLink(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
