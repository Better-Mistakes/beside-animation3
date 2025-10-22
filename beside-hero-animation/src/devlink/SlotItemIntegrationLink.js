"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemIntegrationLink.module.css";

export function SlotItemIntegrationLink({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68da65f9d3a577157be437fb_Group%2010584.svg",
  text = "AI Receptionist",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "integration--link-wrapper")}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "integration--link")}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-21", "is--integrations")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "icon--20")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={icon}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "body--text-16", "is--black")}
            tag="div"
          >
            {text}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
