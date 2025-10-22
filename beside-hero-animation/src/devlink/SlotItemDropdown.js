"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemDropdown.module.css";

export function SlotItemDropdown({
  as: _Component = _Builtin.Block,
  name = "The Problem",
  slot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "navbar--dropdown")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar--dropdown-trigger")}
        tag="div"
        animate="hover"
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "btn-animate-chars__text")}
          tag="span"
          slot=""
          data-button-animate-chars=""
        >
          {name}
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "icon--dropdown")}
          tag="svg"
          slot=""
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 11 11"
          fill="none"
        >
          <_Builtin.DOM
            tag="path"
            slot=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.7842 7.88438C5.62723 8.03854 5.37276 8.03854 5.21578 7.88438L1.11773 3.85993C0.960757 3.70577 0.960757 3.45588 1.11773 3.30172L1.30722 3.11562C1.46419 2.96146 1.71869 2.96146 1.87567 3.11562L5.49999 6.67486L9.12434 3.11562C9.28132 2.96146 9.53578 2.96146 9.69276 3.11562L9.88227 3.30172C10.0392 3.45588 10.0392 3.70577 9.88227 3.85993L5.7842 7.88438Z"
            fill="currentColor"
          />
        </_Builtin.DOM>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar--dropdown-list")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar--dropdown-list-inner")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container--1376")}
            tag="div"
          >
            <_Builtin.NotSupported _atom="Slot" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
