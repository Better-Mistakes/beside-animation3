"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemTestimonialSliderSlide.module.css";

export function SlotItemTestimonialSliderSlide({
  as: _Component = _Builtin.Block,
  quote = "Beside changed my life. I’m completely blown away everyday by the responses it gives to people on the phone.",
  personImage = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68dbd1a2c8104ee5eff51fa7_Frame%2010120794-1.svg",
  personName = "Mark",
  personPosition = "Runs a retail shop in CA",
}) {
  return (
    <_Component className={_utils.cx(_styles, "swiper-slide")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "slide--testimonial")}
        tag="div"
      >
        <_Builtin.Blockquote
          className={_utils.cx(_styles, "slide--testimonial-quote")}
        >
          {quote}
        </_Builtin.Blockquote>
        <_Builtin.Block
          className={_utils.cx(_styles, "slide--testimonial-person")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "slide--testimonial-person-img")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={personImage}
          />
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "slide--testimonial-person-name")}
              tag="div"
            >
              {personName}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "slide--testimonial-person-position"
              )}
              tag="div"
            >
              {personPosition}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
