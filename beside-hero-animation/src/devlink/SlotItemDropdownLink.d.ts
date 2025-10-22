import * as React from "react";
import * as Types from "./types";

declare function SlotItemDropdownLink(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
