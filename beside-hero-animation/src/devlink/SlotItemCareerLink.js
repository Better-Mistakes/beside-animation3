"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemCareerLink.module.css";

export function SlotItemCareerLink({
  as: _Component = _Builtin.Block,
  text = "Mission",

  link = {
    href: "#",
  },

  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    left: "w-variant-33085ce5-9865-1571-46e9-f6c234c5ccc7",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "career--link-wrapper",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "career--link", _activeStyleVariant)}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "body--text-16", _activeStyleVariant)}
          tag="div"
        >
          {text}
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
