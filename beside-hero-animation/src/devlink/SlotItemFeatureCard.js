"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemFeatureCard.module.css";

export function SlotItemFeatureCard({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68f8a61aa0f5046ec9316123_Beside%20Website.svg",
  title = "Phone Conversations",
  description = "Built-in phone line recorder for you, your team, and personal life.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "feature--card")}
      id={_utils.cx(
        _styles,
        "w-node-_04bff864-7713-c4a7-91d5-f3c8a0de85c1-a0de85c1"
      )}
      tag="div"
    >
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
        <_Builtin.Block className={_utils.cx(_styles, "max--264")} tag="div">
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
      </_Builtin.Block>
    </_Component>
  );
}
