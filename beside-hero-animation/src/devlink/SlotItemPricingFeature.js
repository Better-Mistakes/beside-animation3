"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemPricingFeature.module.css";

export function SlotItemPricingFeature({
  as: _Component = _Builtin.Block,
  text = "Unlimited texts & calls (US & CA)",
}) {
  return (
    <_Component className={_utils.cx(_styles, "help--title-wrapper")} tag="div">
      <_Builtin.DOM
        className={_utils.cx(_styles, "icon--20")}
        tag="svg"
        slot=""
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 20 20"
        fill="none"
      >
        <_Builtin.DOM
          tag="path"
          slot=""
          d="M14.8144 4.52887C15.0746 4.08138 15.6486 3.92953 16.0962 4.18951C16.5436 4.44965 16.6955 5.02365 16.4355 5.47125L10.7849 15.199C10.6529 15.4263 10.5229 15.6527 10.3979 15.8289C10.2715 16.0072 10.0784 16.2429 9.77416 16.3929C9.38502 16.5847 8.93561 16.6155 8.52416 16.4783C8.20268 16.3711 7.97912 16.1642 7.82958 16.0047C7.68181 15.8471 7.52139 15.6407 7.35961 15.4334L4.26146 11.471L4.20653 11.3929C3.95279 10.9909 4.04013 10.4542 4.4226 10.1551C4.80478 9.85619 5.34595 9.90059 5.67504 10.243L5.73851 10.3162L8.83788 14.2786C8.90857 14.3692 8.96815 14.4438 9.01732 14.5057C9.05756 14.4379 9.10621 14.357 9.16381 14.2579L14.8144 4.52887Z"
          fill="currentColor"
        />
      </_Builtin.DOM>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "body--text-16", "is--160")}
          tag="div"
        >
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
