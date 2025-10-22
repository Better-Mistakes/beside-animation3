"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemTitle.module.css";

export function SlotItemTitle({
  as: _Component = _Builtin.Block,
  eyebrowIcon = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68dfe82e835416cc6232fe61_Group%2010584.png",
  eyebrowTitle = "AI Receptionist",
  title = "Answering missed calls & texts is our most loved feature used by 20,000+",
  description = "Beside is ready for it all: calls, texts, emails, meetings, and takes action automatically on the right platform.",
  eyebrowVisibility = true,
  descriptionVisibility = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "container--980")} tag="div">
      {eyebrowVisibility ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-21", "is--home-hero")}
          tag="div"
          animation="fade"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flex--8-icons")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "icon--28")}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src={eyebrowIcon}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-style-28")}
            tag="div"
          >
            {eyebrowTitle}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "container--980")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "home-customerstories-content",
            "is--16gap"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-style-40")}
            tag="h2"
            animation="fade"
          >
            {title}
          </_Builtin.Heading>
          {descriptionVisibility ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "container--494")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "body--text-18", "is--secondary")}
                animation="fade"
              >
                {description}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
