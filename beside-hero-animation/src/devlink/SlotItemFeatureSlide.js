"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemFeatureSlide.module.css";

export function SlotItemFeatureSlide({
  as: _Component = _Builtin.Block,
  imageBig = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68ee084402f0d225a63bb314_image.svg",
  imageSmall = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68ee0844b7e683c76ed31002_image-1.svg",
  title = "Beside takes care of scheduling.",
  description = "Booking appointments right from your calls and texts.",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "small image right": "w-variant-c398c9c1-6f1f-ef51-ba18-d7ce532e5810",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "div-block-33", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "flex--22", _activeStyleVariant)}
        id={_utils.cx(
          _styles,
          "w-node-_5ee6b338-7be8-ca63-29f8-b4e387416ee0-87416edf"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "img--100", _activeStyleVariant)}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={imageSmall}
        />
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "heading-style-18",
              _activeStyleVariant
            )}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "body--text-18",
              "is--secondary",
              _activeStyleVariant
            )}
            tag="div"
          >
            {description}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        id={_utils.cx(
          _styles,
          "w-node-_5ee6b338-7be8-ca63-29f8-b4e387416ee7-87416edf"
        )}
        className={_utils.cx(_styles, "", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "img--100", _activeStyleVariant)}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={imageBig}
        />
      </_Builtin.Block>
    </_Component>
  );
}
