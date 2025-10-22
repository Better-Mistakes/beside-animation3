"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemNavlink.module.css";

export function SlotItemNavlink({
  as: _Component = _Builtin.Block,
  text = "This is some text inside of a div block.",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "relative")}
      tag="div"
      animation="navbarstagger"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "navlink")}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "btn-animate-chars__text")}
          tag="span"
          slot=""
          data-button-animate-chars=""
        >
          {text}
        </_Builtin.DOM>
      </_Builtin.Link>
    </_Component>
  );
}
