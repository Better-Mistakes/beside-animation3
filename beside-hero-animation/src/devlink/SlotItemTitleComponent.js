"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemTitleComponent.module.css";

export function SlotItemTitleComponent({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68da65f9d3a577157be437fb_Group%2010584.svg",
  iconTitle = "AI Receptionist",
  title = "Beside is your always-on agent",
  description = "Deploy your AI Receptionist and let it handle calls and texts.",
  descriptionVisibility = true,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "smaller width": "w-variant-bb3b2b52-b128-fe64-4616-324a94973b85",
    integration: "w-variant-ce213729-fea4-b230-c33f-fe427f236e9b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "flex--24", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-21", _activeStyleVariant)}
        tag="div"
        animation="fade"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "icon--20", _activeStyleVariant)}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={icon}
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "heading-style-18",
            _activeStyleVariant
          )}
          tag="div"
          animation="fade-split"
        >
          {iconTitle}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "flex--12", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "max--500", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "heading-style-32",
              _activeStyleVariant
            )}
            tag="h2"
            animation="fade-split"
          >
            {title}
          </_Builtin.Heading>
        </_Builtin.Block>
        {descriptionVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "max--520", _activeStyleVariant)}
            tag="div"
          >
            {descriptionVisibility ? (
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "body--text-18",
                  "is--secondary",
                  _activeStyleVariant
                )}
                animation="fade-split"
              >
                {description}
              </_Builtin.Paragraph>
            ) : null}
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
