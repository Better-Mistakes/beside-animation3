"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlotItemCustomerStoryCheck.module.css";

export function SlotItemCustomerStoryCheck({
  as: _Component = _Builtin.Block,
  text = "Customer stories",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-21", "is--customerstories")}
      tag="div"
      animation="loading"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "icon--16")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68ee03dc25b89abeabf27db8_checkmark.svg"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "body--text-14", "is--100height")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
