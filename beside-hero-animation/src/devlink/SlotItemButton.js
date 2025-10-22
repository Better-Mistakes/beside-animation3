"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotItemButtonArrow } from "./SlotItemButtonArrow";
import * as _utils from "./utils";
import _styles from "./SlotItemButton.module.css";

export function SlotItemButton({
  as: _Component = _Builtin.Block,

  link = {
    href: "#",
  },

  text = "Explore the products",
  variant = "Base",
  arrowVisibility = false,
  arrowVariation = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "ghost black": "w-variant-ec323ece-8b09-c451-55c4-5895a7aa9eb8",
    "ghost white": "w-variant-3fc466dd-4835-fc08-861d-dbfb0594d866",
    pink: "w-variant-f079fb08-76d2-4e02-e2c2-906b5d89e92f",
    navbar: "w-variant-835f2c5b-cf5c-ff95-f234-ab8eaba805de",
    "arrow-black": "w-variant-66eb089b-6fc8-e197-60c3-097baacb1e00",
    "arrow-white": "w-variant-caf299c2-d620-7001-dc62-9de37f37525d",
    grey: "w-variant-9e3e7fd9-9cb5-46c0-c579-f54d4913dd62",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button-wrapper", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "btn", _activeStyleVariant)}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "btn-animate-chars__bg",
            _activeStyleVariant
          )}
          tag="div"
        />
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
        <SlotItemButtonArrow
          arrowVisibility={arrowVisibility}
          variant={arrowVariation}
        />
      </_Builtin.Link>
    </_Component>
  );
}
