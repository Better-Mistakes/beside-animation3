"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemTitleSection.module.css";

export function SlotItemTitleSection({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68dd0364d6792766c89ac8f1_star.svg",
  eyebrowEyebrowTitle = "5-star service without the staff",
  title = "Beside answers the phone, remembers everything, acts across your world",
  description = "We built Beside where it matters most — for people whose work happens through conversation.",
  variant = "Base",
  eyebrowVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "description --668": "w-variant-ebf6121a-efae-257d-87ec-27718f7a409d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "container--980", _activeStyleVariant)}
      tag="div"
    >
      {eyebrowVisibility ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "div-block-21",
            "is--home-hero",
            _activeStyleVariant
          )}
          tag="div"
          animation="fade"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flex--8-icons", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "icon--20", _activeStyleVariant)}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={icon}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "heading-style-16",
              "is--eyebrow",
              _activeStyleVariant
            )}
            tag="div"
          >
            {eyebrowEyebrowTitle}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "container--744", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "home-customerstories-content",
            "is--16gap",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "heading-style-40",
              _activeStyleVariant
            )}
            tag="h2"
            animation="fade"
          >
            {title}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container--494",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "body--text-18",
                "is--secondary",
                _activeStyleVariant
              )}
              animation="fade"
            >
              {description}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
