"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemCustomerStoriesSliderSlide.module.css";

export function SlotItemCustomerStoriesSliderSlide({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68da70b11d421250bd56b009_Beside%20Website%20Frame%20(1)%20(1).avif",
  title = "From Missed Calls to More Contracts: Why Tradespeople Are Turning to AI Receptionists",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "swiper-slide")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "customerstory--card")}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "absolute--img")}
          id={_utils.cx(
            _styles,
            "w-node-_94d92374-3556-c1bc-4d86-961112e87e95-12e87e93"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "customer--story-content")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-style-18", "is--135")}
            tag="h3"
          >
            {title}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "flex--story")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "body--text-14")}
              tag="div"
            >
              {"Read story"}
            </_Builtin.Block>
            <_Builtin.DOM
              className={_utils.cx(_styles, "icon--16")}
              tag="svg"
              slot=""
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 16 16"
              fill="none"
            >
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M8.96973 3.71973C9.26262 3.42684 9.73738 3.42684 10.0303 3.71973L13.4971 7.18652C13.5378 7.22727 13.6009 7.28993 13.6523 7.35059C13.7095 7.41795 13.7956 7.53124 13.8477 7.69141C13.9127 7.89198 13.9127 8.10803 13.8477 8.30859C13.7956 8.46876 13.7095 8.58206 13.6523 8.64941C13.6008 8.71007 13.5378 8.77273 13.4971 8.81348L10.0303 12.2803C9.73739 12.5731 9.26262 12.5731 8.96973 12.2803C8.67684 11.9874 8.67685 11.5126 8.96973 11.2197L11.4395 8.75H2.75C2.33583 8.75 2.00006 8.41416 2 8C2 7.58579 2.33579 7.25 2.75 7.25H11.4395L8.96973 4.78027C8.67685 4.48739 8.67686 4.01262 8.96973 3.71973Z"
                fill="currentColor"
              />
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
