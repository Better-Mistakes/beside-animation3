import * as React from "react";
import * as Types from "./types";

declare function SlotItemDropdown(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  slot?: Types.Slots.SlotContent;
}): React.JSX.Element;
