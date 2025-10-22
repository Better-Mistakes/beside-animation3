"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemDropdownLink.module.css";

export function SlotItemDropdownLink({
  as: _Component = _Builtin.Block,
  title = "This is some text inside of a div block.",
  description = "Lorem ipsum dolor sit amet consectetur elit",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      id={_utils.cx(
        _styles,
        "w-node-_19abcdb4-099e-59f1-d563-a4ec2c6bf3ff-2c6bf3ff"
      )}
      tag="div"
      animation="navbardropdown"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "dropdown--nav-link")}
        id={_utils.cx(
          _styles,
          "w-node-_19abcdb4-099e-59f1-d563-a4ec2c6bf400-2c6bf3ff"
        )}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-style-text1", "is--dropdown")}
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-20")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "body-text-text3",
              "is--navbar-dropdown"
            )}
            tag="div"
          >
            {description}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "arrow--btn")}
            tag="div"
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "icon--10", "is--dropdown")}
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
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
