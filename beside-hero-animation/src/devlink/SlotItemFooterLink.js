"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemFooterLink.module.css";

export function SlotItemFooterLink({
  as: _Component = _Builtin.Block,
  text = "Overview",

  link = {
    href: "#",
  },

  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    small: "w-variant-76f5a8d1-c970-9f11-a33e-f2a144ae705b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component tag="div" animate="hover">
      <_Builtin.Link
        className={_utils.cx(_styles, "footer--link", _activeStyleVariant)}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.DOM
          className={_utils.cx(
            _styles,
            "btn-animate-chars__text",
            _activeStyleVariant
          )}
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
