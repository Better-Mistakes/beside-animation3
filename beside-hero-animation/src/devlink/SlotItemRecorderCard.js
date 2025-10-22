"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemRecorderCard.module.css";

export function SlotItemRecorderCard({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68f8a61aa0f5046ec9316123_Beside%20Website.svg",
  title = "Phone Conversations",
  description = "Built-in phone line recorder for you, your team, and personal life.",
  background = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68f8a6818b05c40ee3d01e44_Beside%20Website%20Image.avif",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-35")}
      id={_utils.cx(
        _styles,
        "w-node-ea98a935-26fb-444c-365b-73e0ef8b6cd2-ef8b6cd2"
      )}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "absolute--img", "is--last")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={background}
      />
      <_Builtin.Block className={_utils.cx(_styles, "flex--6")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "icon--24")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={icon}
        />
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-style-18")}
          tag="h3"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "body--text-16",
            "is--160",
            "is--opacity-70"
          )}
        >
          {description}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
