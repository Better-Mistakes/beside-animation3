"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemButtonArrow.module.css";

export function SlotItemButtonArrow({
  as: _Component = _Builtin.DOM,
  arrowVisibility = false,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Download: "w-variant-86f3db28-ab0a-7da6-a635-e2b5cae5deaf",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return arrowVisibility ? (
    <_Component
      className={_utils.cx(_styles, "icon--10", _activeStyleVariant)}
      tag="svg"
      slot=""
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 10 10"
      fill="none"
    >
      <_Builtin.DOM
        tag="path"
        slot=""
        d="M9.14552 4.75L4.41325 9.5L3.50933 8.59608L6.7528 5.42351H0V4.07649H6.7528L3.50933 0.903917L4.41325 0L9.14552 4.75Z"
        fill="currentColor"
      />
    </_Component>
  ) : null;
}
