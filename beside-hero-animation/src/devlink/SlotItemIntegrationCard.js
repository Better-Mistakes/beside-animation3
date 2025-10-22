"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemIntegrationCard.module.css";

export function SlotItemIntegrationCard({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68dbd1a2c8104ee5eff51fa7_Frame%2010120794-1.svg",
  title = "Mark",
  position = "Runs a retail shop in CA",
  description = "Keep your CRM always sync with your calls.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "integration--card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "slide--testimonial-person")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "slide--testimonial-person-img")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={image}
        />
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "slide--testimonial-person-name")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "slide--testimonial-person-position")}
            tag="div"
          >
            {position}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "body--text-16", "is--160")}
      >
        {description}
      </_Builtin.Paragraph>
    </_Component>
  );
}
