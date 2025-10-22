"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ComponentDownloadPopup.module.css";

export function ComponentDownloadPopup({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "beside--download-popup", "is--ios")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "beside--download-popup-bg")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "download--popup-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "popup--close")}
          tag="div"
        >
          <_Builtin.DOM
            tag="svg"
            slot=""
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 20 20"
            fill="none"
          >
            <_Builtin.DOM
              tag="path"
              slot=""
              d="M14.0244 4.64966C14.3905 4.28354 14.9845 4.28354 15.3506 4.64966C15.7166 5.01578 15.7167 5.60976 15.3506 5.97583L11.3262 10.0002L15.3506 14.0247C15.7165 14.3908 15.7167 14.9848 15.3506 15.3508C14.9845 15.7168 14.3905 15.7167 14.0244 15.3508L10 11.3264L5.97559 15.3508C5.60951 15.7168 5.01549 15.7168 4.64941 15.3508C4.28335 14.9848 4.28344 14.3908 4.64941 14.0247L8.67383 10.0002L4.64941 5.97583C4.28335 5.60976 4.28345 5.01579 4.64941 4.64966C5.01553 4.28354 5.60947 4.28354 5.97559 4.64966L10 8.67407L14.0244 4.64966Z"
              fill="#6B6D70"
            />
          </_Builtin.DOM>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "flex--16", "is--center")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-style-24", "is--medium")}
            tag="h3"
          >
            {"Get Beside for Phone"}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "body--text-16",
              "is--160",
              "is--grey"
            )}
          >
            {"Scan the QR code to open App Store"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68dd1e764ef72ad262a17401_Group%2010693.svg"
        />
        <_Builtin.Block className={_utils.cx(_styles, "flex--20")} tag="div">
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "body--text-16",
              "is--160",
              "is--grey"
            )}
          >
            {"or enter your number and we’ll send a link"}
          </_Builtin.Paragraph>
          <_Builtin.DOM
            className={_utils.cx(_styles, "sms-form")}
            tag="div"
            slot=""
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "form")}
              tag="form"
              slot=""
            >
              <_Builtin.DOM
                className={_utils.cx(_styles, "phone-input")}
                tag="input"
                slot=""
                type="tel"
                placeholder="+1 (424) 460-9490"
                required="required"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "send-button")}
                button={true}
                type="submit"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Send link"}
              </_Builtin.Link>
            </_Builtin.DOM>
          </_Builtin.DOM>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
