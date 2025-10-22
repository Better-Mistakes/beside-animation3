"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotItemPricingFeature } from "./SlotItemPricingFeature";
import * as _utils from "./utils";
import _styles from "./GlobalPricing.module.css";

export function GlobalPricing({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "container--980")} tag="div">
      <_Builtin.TabsWrapper
        current="Tab 1"
        easing="ease"
        fadeIn={300}
        fadeOut={100}
      >
        <_Builtin.TabsMenu
          className={_utils.cx(_styles, "tabs-menu")}
          tag="div"
          animation="loading"
        >
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "pricing--tab")}
            data-w-tab="Tab 1"
            block="inline"
          >
            <_Builtin.Block tag="div">{"Monthly"}</_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "pricing--tab")}
            data-w-tab="Tab 2"
            block="inline"
          >
            <_Builtin.Block tag="div">{"Yearly"}</_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing--save-tag")}
              tag="div"
            >
              {"Save 42%"}
            </_Builtin.Block>
          </_Builtin.TabsLink>
        </_Builtin.TabsMenu>
        <_Builtin.TabsContent
          className={_utils.cx(_styles, "tabs-content")}
          tag="div"
        >
          <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid--2els")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing--card")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3aef6c6a-6435-df53-44d9-27a86e489e4c-6e489e3e"
                )}
                tag="div"
                animation="loading"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-28")}
                      tag="h2"
                    >
                      {"Beside Individual"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "body--text-16",
                        "is--grey"
                      )}
                    >
                      {"Get started on Beside for Mac."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <SlotItemPricingFeature />
                    <SlotItemPricingFeature text="AI Receptionist for calls & texts" />
                    <SlotItemPricingFeature text="AI notes after each call" />
                    <SlotItemPricingFeature text="In-Person recorder" />
                    <SlotItemPricingFeature text="Daily Recap with notes & todos" />
                    <SlotItemPricingFeature text="Infinite memory searchable with AI" />
                    <SlotItemPricingFeature text="Meeting preps before calendar meetings" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "heading-style-18")}
                  >
                    {"7 days free, then $19.99 / "}
                    <_Builtin.Span
                      className={_utils.cx(_styles, "secondary--color")}
                    >
                      {"month"}
                    </_Builtin.Span>
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing--card-access-row")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "flex--8-icons")}
                      tag="div"
                    >
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.0625 16.25C14.5803 16.25 15 16.6697 15 17.1875C15 17.7053 14.5803 18.125 14.0625 18.125H5.9375C5.41973 18.125 5 17.7053 5 17.1875C5 16.6697 5.41973 16.25 5.9375 16.25H14.0625Z"
                          fill="currentColor"
                        />
                        <_Builtin.DOM
                          tag="path"
                          slot=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.3701 1.87988C14.6899 1.88497 14.9777 1.89545 15.2356 1.9165C15.7625 1.95956 16.2479 2.05212 16.7029 2.28394C17.4081 2.64338 17.9816 3.2169 18.3411 3.92212C18.5729 4.37708 18.6654 4.8625 18.7085 5.3894C18.7506 5.9052 18.75 6.54044 18.75 7.31201V9.56299C18.75 10.3346 18.7506 10.9698 18.7085 11.4856C18.6654 12.0125 18.5729 12.4979 18.3411 12.9529C17.9816 13.6581 17.4081 14.2316 16.7029 14.5911C16.2479 14.8229 15.7626 14.9154 15.2356 14.9585C14.7198 15.0006 14.0846 15 13.313 15H6.68701C5.91537 15 5.28023 15.0006 4.7644 14.9585C4.23744 14.9154 3.75212 14.8229 3.29712 14.5911C2.59187 14.2316 2.01839 13.6581 1.65894 12.9529C1.42715 12.4979 1.33456 12.0125 1.2915 11.4856C1.24941 10.9698 1.25 10.3346 1.25 9.56299V7.31201C1.25 6.54044 1.2494 5.9052 1.2915 5.3894C1.33456 4.8625 1.42712 4.37708 1.65894 3.92212C2.01841 3.2169 2.59188 2.64338 3.29712 2.28394C3.7521 2.05212 4.23746 1.95956 4.7644 1.9165C5.28023 1.87439 5.91538 1.875 6.68701 1.875H13.313L14.3701 1.87988ZM6.68701 3.75C5.88448 3.75 5.33881 3.75096 4.91699 3.7854C4.50652 3.81894 4.29577 3.87929 4.14917 3.95386C3.79641 4.1336 3.50862 4.42142 3.32886 4.77417C3.25428 4.92075 3.19394 5.13157 3.1604 5.54199C3.12596 5.96379 3.125 6.50956 3.125 7.31201V9.56299C3.125 10.3654 3.12597 10.9112 3.1604 11.333C3.19393 11.7434 3.2543 11.9542 3.32886 12.1008C3.50861 12.4536 3.7964 12.7414 4.14917 12.9211C4.29577 12.9957 4.50648 13.0561 4.91699 13.0896C5.33881 13.124 5.88448 13.125 6.68701 13.125H13.313C14.1155 13.125 14.6612 13.124 15.083 13.0896C15.4935 13.0561 15.7042 12.9957 15.8508 12.9211C16.2036 12.7414 16.4914 12.4536 16.6711 12.1008C16.7457 11.9542 16.8061 11.7434 16.8396 11.333C16.874 10.9112 16.875 10.3654 16.875 9.56299V7.31201C16.875 6.50956 16.874 5.96379 16.8396 5.54199C16.8061 5.13157 16.7457 4.92075 16.6711 4.77417C16.4914 4.42142 16.2036 4.1336 15.8508 3.95386C15.7042 3.87929 15.4935 3.81894 15.083 3.7854C14.8721 3.76818 14.6303 3.75937 14.3408 3.75488L13.313 3.75H6.68701Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
                        tag="svg"
                        slot=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <_Builtin.DOM
                          tag="g"
                          slot=""
                          clip-path="url(#clip0_2020_5318)"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            d="M11.25 2.5C11.7678 2.5 12.1875 2.91974 12.1875 3.4375C12.1875 3.95527 11.7678 4.375 11.25 4.375H8.75C8.23224 4.375 7.8125 3.95527 7.8125 3.4375C7.81251 2.91974 8.23224 2.50001 8.75 2.5H11.25Z"
                            fill="currentColor"
                          />
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.9375 3.28632e-06C11.7971 3.21407e-06 12.4983 -0.00124823 13.0664 0.0451693C13.6455 0.0924839 14.1686 0.194262 14.657 0.443119C15.4212 0.832571 16.0424 1.45382 16.4319 2.21802C16.6807 2.70644 16.7825 3.22954 16.8298 3.8086C16.8763 4.37673 16.875 5.07789 16.875 5.9375V14.0625C16.875 14.9221 16.8763 15.6233 16.8298 16.1914C16.7825 16.7705 16.6807 17.2936 16.4319 17.782C16.0424 18.5462 15.4212 19.1674 14.657 19.5569C14.1686 19.8057 13.6455 19.9075 13.0664 19.9548C12.4983 20.0013 11.7971 20 10.9375 20H9.0625C8.20291 20 7.50172 20.0013 6.9336 19.9548C6.35454 19.9075 5.83143 19.8057 5.34302 19.5569C4.57881 19.1674 3.95757 18.5462 3.56812 17.782C3.31926 17.2936 3.21748 16.7705 3.17017 16.1914C3.12375 15.6233 3.125 14.9221 3.125 14.0625V5.9375C3.125 5.07789 3.12375 4.37673 3.17017 3.8086C3.21748 3.22953 3.31926 2.70644 3.56812 2.21802C3.95757 1.45382 4.57882 0.832567 5.34302 0.443119C5.83143 0.194268 6.35454 0.0924817 6.9336 0.0451693C7.50172 -0.00124595 8.20291 3.32388e-06 9.0625 3.28632e-06H10.9375ZM9.0625 1.875C8.17197 1.875 7.56025 1.87534 7.08618 1.91407C6.62317 1.9519 6.37388 2.02132 6.19385 2.11304C5.78247 2.32272 5.44773 2.65747 5.23804 3.06885C5.14631 3.24888 5.07691 3.49815 5.03907 3.96118C5.00033 4.43525 5 5.04695 5 5.9375V14.0625C5 14.9531 5.00033 15.5648 5.03907 16.0388C5.07691 16.5019 5.14631 16.7511 5.23804 16.9312C5.44773 17.3425 5.78247 17.6773 6.19385 17.887C6.37388 17.9787 6.62317 18.0481 7.08618 18.0859C7.56025 18.1247 8.17197 18.125 9.0625 18.125H10.9375C11.828 18.125 12.4398 18.1247 12.9138 18.0859C13.3768 18.0481 13.6261 17.9787 13.8062 17.887C14.2175 17.6773 14.5523 17.3425 14.762 16.9312C14.8537 16.7511 14.9231 16.5018 14.9609 16.0388C14.9997 15.5648 15 14.9531 15 14.0625V5.9375C15 5.04695 14.9997 4.43525 14.9609 3.96118C14.9231 3.49816 14.8537 3.24888 14.762 3.06885C14.5523 2.65748 14.2175 2.32273 13.8062 2.11304C13.6261 2.02131 13.3768 1.95191 12.9138 1.91407C12.4398 1.87533 11.828 1.875 10.9375 1.875H9.0625Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.DOM>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "body--text-16")}
                      tag="div"
                    >
                      {"Access Beside for Mobile, Desktop"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    tag="div"
                    animate="hover"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "btn", "is--arrow")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-animate-chars__bg")}
                        tag="div"
                      />
                      <_Builtin.DOM
                        className={_utils.cx(
                          _styles,
                          "btn-animate-chars__text"
                        )}
                        tag="span"
                        slot=""
                        data-button-animate-chars=""
                      >
                        {"Get Started"}
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.1879 4.37502C14.26 4.37502 14.3709 4.37426 14.4699 4.38234C14.5524 4.3891 14.6721 4.40444 14.8056 4.45192L14.9436 4.51174C15.1198 4.60164 15.2714 4.73161 15.3867 4.89016L15.4892 5.05739C15.5848 5.24497 15.6096 5.42096 15.6186 5.53103C15.6267 5.63013 15.6259 5.74099 15.6259 5.81301V11.5625C15.6259 12.0802 15.2061 12.4999 14.6884 12.5C14.1707 12.5 13.7509 12.0803 13.7509 11.5625V7.57448L5.97506 15.3504C5.60892 15.7163 5.01542 15.7164 4.64937 15.3504C4.28355 14.9843 4.28354 14.3907 4.64937 14.0247L12.424 6.25002H8.43844C7.92067 6.25002 7.50094 5.83029 7.50094 5.31252C7.50095 4.79477 7.92068 4.37502 8.43844 4.37502H14.1879Z"
                          fill="white"
                        />
                      </_Builtin.DOM>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing--card", "is--team")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3aef6c6a-6435-df53-44d9-27a86e489e79-6e489e3e"
                )}
                tag="div"
                animation="loading"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-28")}
                      tag="h2"
                    >
                      {"Beside Teams"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "body--text-16",
                        "is--60opacity"
                      )}
                    >
                      {"Go further with your team."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <SlotItemPricingFeature text="Everything in Beside Individual." />
                    <SlotItemPricingFeature text="Invite unlimited team members." />
                    <SlotItemPricingFeature text="Manage multiple phone numbers." />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "heading-style-18")}
                  >
                    {"7 days free, then $19.99 / "}
                    <_Builtin.Span
                      className={_utils.cx(_styles, "opacity--60")}
                    >
                      {"month"}
                    </_Builtin.Span>
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "pricing--card-access-row",
                      "is--60opacity"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "flex--8-icons")}
                      tag="div"
                    >
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.0625 16.25C14.5803 16.25 15 16.6697 15 17.1875C15 17.7053 14.5803 18.125 14.0625 18.125H5.9375C5.41973 18.125 5 17.7053 5 17.1875C5 16.6697 5.41973 16.25 5.9375 16.25H14.0625Z"
                          fill="currentColor"
                        />
                        <_Builtin.DOM
                          tag="path"
                          slot=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.3701 1.87988C14.6899 1.88497 14.9777 1.89545 15.2356 1.9165C15.7625 1.95956 16.2479 2.05212 16.7029 2.28394C17.4081 2.64338 17.9816 3.2169 18.3411 3.92212C18.5729 4.37708 18.6654 4.8625 18.7085 5.3894C18.7506 5.9052 18.75 6.54044 18.75 7.31201V9.56299C18.75 10.3346 18.7506 10.9698 18.7085 11.4856C18.6654 12.0125 18.5729 12.4979 18.3411 12.9529C17.9816 13.6581 17.4081 14.2316 16.7029 14.5911C16.2479 14.8229 15.7626 14.9154 15.2356 14.9585C14.7198 15.0006 14.0846 15 13.313 15H6.68701C5.91537 15 5.28023 15.0006 4.7644 14.9585C4.23744 14.9154 3.75212 14.8229 3.29712 14.5911C2.59187 14.2316 2.01839 13.6581 1.65894 12.9529C1.42715 12.4979 1.33456 12.0125 1.2915 11.4856C1.24941 10.9698 1.25 10.3346 1.25 9.56299V7.31201C1.25 6.54044 1.2494 5.9052 1.2915 5.3894C1.33456 4.8625 1.42712 4.37708 1.65894 3.92212C2.01841 3.2169 2.59188 2.64338 3.29712 2.28394C3.7521 2.05212 4.23746 1.95956 4.7644 1.9165C5.28023 1.87439 5.91538 1.875 6.68701 1.875H13.313L14.3701 1.87988ZM6.68701 3.75C5.88448 3.75 5.33881 3.75096 4.91699 3.7854C4.50652 3.81894 4.29577 3.87929 4.14917 3.95386C3.79641 4.1336 3.50862 4.42142 3.32886 4.77417C3.25428 4.92075 3.19394 5.13157 3.1604 5.54199C3.12596 5.96379 3.125 6.50956 3.125 7.31201V9.56299C3.125 10.3654 3.12597 10.9112 3.1604 11.333C3.19393 11.7434 3.2543 11.9542 3.32886 12.1008C3.50861 12.4536 3.7964 12.7414 4.14917 12.9211C4.29577 12.9957 4.50648 13.0561 4.91699 13.0896C5.33881 13.124 5.88448 13.125 6.68701 13.125H13.313C14.1155 13.125 14.6612 13.124 15.083 13.0896C15.4935 13.0561 15.7042 12.9957 15.8508 12.9211C16.2036 12.7414 16.4914 12.4536 16.6711 12.1008C16.7457 11.9542 16.8061 11.7434 16.8396 11.333C16.874 10.9112 16.875 10.3654 16.875 9.56299V7.31201C16.875 6.50956 16.874 5.96379 16.8396 5.54199C16.8061 5.13157 16.7457 4.92075 16.6711 4.77417C16.4914 4.42142 16.2036 4.1336 15.8508 3.95386C15.7042 3.87929 15.4935 3.81894 15.083 3.7854C14.8721 3.76818 14.6303 3.75937 14.3408 3.75488L13.313 3.75H6.68701Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
                        tag="svg"
                        slot=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <_Builtin.DOM
                          tag="g"
                          slot=""
                          clip-path="url(#clip0_2020_5318)"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            d="M11.25 2.5C11.7678 2.5 12.1875 2.91974 12.1875 3.4375C12.1875 3.95527 11.7678 4.375 11.25 4.375H8.75C8.23224 4.375 7.8125 3.95527 7.8125 3.4375C7.81251 2.91974 8.23224 2.50001 8.75 2.5H11.25Z"
                            fill="currentColor"
                          />
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.9375 3.28632e-06C11.7971 3.21407e-06 12.4983 -0.00124823 13.0664 0.0451693C13.6455 0.0924839 14.1686 0.194262 14.657 0.443119C15.4212 0.832571 16.0424 1.45382 16.4319 2.21802C16.6807 2.70644 16.7825 3.22954 16.8298 3.8086C16.8763 4.37673 16.875 5.07789 16.875 5.9375V14.0625C16.875 14.9221 16.8763 15.6233 16.8298 16.1914C16.7825 16.7705 16.6807 17.2936 16.4319 17.782C16.0424 18.5462 15.4212 19.1674 14.657 19.5569C14.1686 19.8057 13.6455 19.9075 13.0664 19.9548C12.4983 20.0013 11.7971 20 10.9375 20H9.0625C8.20291 20 7.50172 20.0013 6.9336 19.9548C6.35454 19.9075 5.83143 19.8057 5.34302 19.5569C4.57881 19.1674 3.95757 18.5462 3.56812 17.782C3.31926 17.2936 3.21748 16.7705 3.17017 16.1914C3.12375 15.6233 3.125 14.9221 3.125 14.0625V5.9375C3.125 5.07789 3.12375 4.37673 3.17017 3.8086C3.21748 3.22953 3.31926 2.70644 3.56812 2.21802C3.95757 1.45382 4.57882 0.832567 5.34302 0.443119C5.83143 0.194268 6.35454 0.0924817 6.9336 0.0451693C7.50172 -0.00124595 8.20291 3.32388e-06 9.0625 3.28632e-06H10.9375ZM9.0625 1.875C8.17197 1.875 7.56025 1.87534 7.08618 1.91407C6.62317 1.9519 6.37388 2.02132 6.19385 2.11304C5.78247 2.32272 5.44773 2.65747 5.23804 3.06885C5.14631 3.24888 5.07691 3.49815 5.03907 3.96118C5.00033 4.43525 5 5.04695 5 5.9375V14.0625C5 14.9531 5.00033 15.5648 5.03907 16.0388C5.07691 16.5019 5.14631 16.7511 5.23804 16.9312C5.44773 17.3425 5.78247 17.6773 6.19385 17.887C6.37388 17.9787 6.62317 18.0481 7.08618 18.0859C7.56025 18.1247 8.17197 18.125 9.0625 18.125H10.9375C11.828 18.125 12.4398 18.1247 12.9138 18.0859C13.3768 18.0481 13.6261 17.9787 13.8062 17.887C14.2175 17.6773 14.5523 17.3425 14.762 16.9312C14.8537 16.7511 14.9231 16.5018 14.9609 16.0388C14.9997 15.5648 15 14.9531 15 14.0625V5.9375C15 5.04695 14.9997 4.43525 14.9609 3.96118C14.9231 3.49816 14.8537 3.24888 14.762 3.06885C14.5523 2.65748 14.2175 2.32273 13.8062 2.11304C13.6261 2.02131 13.3768 1.95191 12.9138 1.91407C12.4398 1.87533 11.828 1.875 10.9375 1.875H9.0625Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.DOM>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "body--text-16")}
                      tag="div"
                    >
                      {"Access Beside for Mobile, Desktop"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    tag="div"
                    animate="hover"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "btn",
                        "is--arrow",
                        "is--white"
                      )}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-animate-chars__bg")}
                        tag="div"
                      />
                      <_Builtin.DOM
                        className={_utils.cx(
                          _styles,
                          "btn-animate-chars__text"
                        )}
                        tag="span"
                        slot=""
                        data-button-animate-chars=""
                      >
                        {"Upgrade to Teams"}
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.1879 4.37502C14.26 4.37502 14.3709 4.37426 14.4699 4.38234C14.5524 4.3891 14.6721 4.40444 14.8056 4.45192L14.9436 4.51174C15.1198 4.60164 15.2714 4.73161 15.3867 4.89016L15.4892 5.05739C15.5848 5.24497 15.6096 5.42096 15.6186 5.53103C15.6267 5.63013 15.6259 5.74099 15.6259 5.81301V11.5625C15.6259 12.0802 15.2061 12.4999 14.6884 12.5C14.1707 12.5 13.7509 12.0803 13.7509 11.5625V7.57448L5.97506 15.3504C5.60892 15.7163 5.01542 15.7164 4.64937 15.3504C4.28355 14.9843 4.28354 14.3907 4.64937 14.0247L12.424 6.25002H8.43844C7.92067 6.25002 7.50094 5.83029 7.50094 5.31252C7.50095 4.79477 7.92068 4.37502 8.43844 4.37502H14.1879Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid--2els")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing--card")}
                id={_utils.cx(
                  _styles,
                  "w-node-a72eeebc-5ed5-2f1f-e4d5-b5cd892f4933-6e489e3e"
                )}
                tag="div"
                animation="loading"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-28")}
                      tag="h2"
                    >
                      {"Beside Individual"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "body--text-16",
                        "is--grey"
                      )}
                    >
                      {"Get started on Beside for Mac."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <SlotItemPricingFeature />
                    <SlotItemPricingFeature text="AI Receptionist for calls & texts" />
                    <SlotItemPricingFeature text="AI notes after each call" />
                    <SlotItemPricingFeature text="In-Person recorder" />
                    <SlotItemPricingFeature text="Daily Recap with notes & todos" />
                    <SlotItemPricingFeature text="Infinite memory searchable with AI" />
                    <SlotItemPricingFeature text="Meeting preps before calendar meetings" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "heading-style-18")}
                  >
                    {"7 days free, then $19.99 / "}
                    <_Builtin.Span
                      className={_utils.cx(_styles, "secondary--color")}
                    >
                      {"month"}
                    </_Builtin.Span>
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing--card-access-row")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "flex--8-icons")}
                      tag="div"
                    >
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.0625 16.25C14.5803 16.25 15 16.6697 15 17.1875C15 17.7053 14.5803 18.125 14.0625 18.125H5.9375C5.41973 18.125 5 17.7053 5 17.1875C5 16.6697 5.41973 16.25 5.9375 16.25H14.0625Z"
                          fill="currentColor"
                        />
                        <_Builtin.DOM
                          tag="path"
                          slot=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.3701 1.87988C14.6899 1.88497 14.9777 1.89545 15.2356 1.9165C15.7625 1.95956 16.2479 2.05212 16.7029 2.28394C17.4081 2.64338 17.9816 3.2169 18.3411 3.92212C18.5729 4.37708 18.6654 4.8625 18.7085 5.3894C18.7506 5.9052 18.75 6.54044 18.75 7.31201V9.56299C18.75 10.3346 18.7506 10.9698 18.7085 11.4856C18.6654 12.0125 18.5729 12.4979 18.3411 12.9529C17.9816 13.6581 17.4081 14.2316 16.7029 14.5911C16.2479 14.8229 15.7626 14.9154 15.2356 14.9585C14.7198 15.0006 14.0846 15 13.313 15H6.68701C5.91537 15 5.28023 15.0006 4.7644 14.9585C4.23744 14.9154 3.75212 14.8229 3.29712 14.5911C2.59187 14.2316 2.01839 13.6581 1.65894 12.9529C1.42715 12.4979 1.33456 12.0125 1.2915 11.4856C1.24941 10.9698 1.25 10.3346 1.25 9.56299V7.31201C1.25 6.54044 1.2494 5.9052 1.2915 5.3894C1.33456 4.8625 1.42712 4.37708 1.65894 3.92212C2.01841 3.2169 2.59188 2.64338 3.29712 2.28394C3.7521 2.05212 4.23746 1.95956 4.7644 1.9165C5.28023 1.87439 5.91538 1.875 6.68701 1.875H13.313L14.3701 1.87988ZM6.68701 3.75C5.88448 3.75 5.33881 3.75096 4.91699 3.7854C4.50652 3.81894 4.29577 3.87929 4.14917 3.95386C3.79641 4.1336 3.50862 4.42142 3.32886 4.77417C3.25428 4.92075 3.19394 5.13157 3.1604 5.54199C3.12596 5.96379 3.125 6.50956 3.125 7.31201V9.56299C3.125 10.3654 3.12597 10.9112 3.1604 11.333C3.19393 11.7434 3.2543 11.9542 3.32886 12.1008C3.50861 12.4536 3.7964 12.7414 4.14917 12.9211C4.29577 12.9957 4.50648 13.0561 4.91699 13.0896C5.33881 13.124 5.88448 13.125 6.68701 13.125H13.313C14.1155 13.125 14.6612 13.124 15.083 13.0896C15.4935 13.0561 15.7042 12.9957 15.8508 12.9211C16.2036 12.7414 16.4914 12.4536 16.6711 12.1008C16.7457 11.9542 16.8061 11.7434 16.8396 11.333C16.874 10.9112 16.875 10.3654 16.875 9.56299V7.31201C16.875 6.50956 16.874 5.96379 16.8396 5.54199C16.8061 5.13157 16.7457 4.92075 16.6711 4.77417C16.4914 4.42142 16.2036 4.1336 15.8508 3.95386C15.7042 3.87929 15.4935 3.81894 15.083 3.7854C14.8721 3.76818 14.6303 3.75937 14.3408 3.75488L13.313 3.75H6.68701Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
                        tag="svg"
                        slot=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <_Builtin.DOM
                          tag="g"
                          slot=""
                          clip-path="url(#clip0_2020_5318)"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            d="M11.25 2.5C11.7678 2.5 12.1875 2.91974 12.1875 3.4375C12.1875 3.95527 11.7678 4.375 11.25 4.375H8.75C8.23224 4.375 7.8125 3.95527 7.8125 3.4375C7.81251 2.91974 8.23224 2.50001 8.75 2.5H11.25Z"
                            fill="currentColor"
                          />
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.9375 3.28632e-06C11.7971 3.21407e-06 12.4983 -0.00124823 13.0664 0.0451693C13.6455 0.0924839 14.1686 0.194262 14.657 0.443119C15.4212 0.832571 16.0424 1.45382 16.4319 2.21802C16.6807 2.70644 16.7825 3.22954 16.8298 3.8086C16.8763 4.37673 16.875 5.07789 16.875 5.9375V14.0625C16.875 14.9221 16.8763 15.6233 16.8298 16.1914C16.7825 16.7705 16.6807 17.2936 16.4319 17.782C16.0424 18.5462 15.4212 19.1674 14.657 19.5569C14.1686 19.8057 13.6455 19.9075 13.0664 19.9548C12.4983 20.0013 11.7971 20 10.9375 20H9.0625C8.20291 20 7.50172 20.0013 6.9336 19.9548C6.35454 19.9075 5.83143 19.8057 5.34302 19.5569C4.57881 19.1674 3.95757 18.5462 3.56812 17.782C3.31926 17.2936 3.21748 16.7705 3.17017 16.1914C3.12375 15.6233 3.125 14.9221 3.125 14.0625V5.9375C3.125 5.07789 3.12375 4.37673 3.17017 3.8086C3.21748 3.22953 3.31926 2.70644 3.56812 2.21802C3.95757 1.45382 4.57882 0.832567 5.34302 0.443119C5.83143 0.194268 6.35454 0.0924817 6.9336 0.0451693C7.50172 -0.00124595 8.20291 3.32388e-06 9.0625 3.28632e-06H10.9375ZM9.0625 1.875C8.17197 1.875 7.56025 1.87534 7.08618 1.91407C6.62317 1.9519 6.37388 2.02132 6.19385 2.11304C5.78247 2.32272 5.44773 2.65747 5.23804 3.06885C5.14631 3.24888 5.07691 3.49815 5.03907 3.96118C5.00033 4.43525 5 5.04695 5 5.9375V14.0625C5 14.9531 5.00033 15.5648 5.03907 16.0388C5.07691 16.5019 5.14631 16.7511 5.23804 16.9312C5.44773 17.3425 5.78247 17.6773 6.19385 17.887C6.37388 17.9787 6.62317 18.0481 7.08618 18.0859C7.56025 18.1247 8.17197 18.125 9.0625 18.125H10.9375C11.828 18.125 12.4398 18.1247 12.9138 18.0859C13.3768 18.0481 13.6261 17.9787 13.8062 17.887C14.2175 17.6773 14.5523 17.3425 14.762 16.9312C14.8537 16.7511 14.9231 16.5018 14.9609 16.0388C14.9997 15.5648 15 14.9531 15 14.0625V5.9375C15 5.04695 14.9997 4.43525 14.9609 3.96118C14.9231 3.49816 14.8537 3.24888 14.762 3.06885C14.5523 2.65748 14.2175 2.32273 13.8062 2.11304C13.6261 2.02131 13.3768 1.95191 12.9138 1.91407C12.4398 1.87533 11.828 1.875 10.9375 1.875H9.0625Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.DOM>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "body--text-16")}
                      tag="div"
                    >
                      {"Access Beside for Mobile, Desktop"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    tag="div"
                    animate="hover"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "btn", "is--arrow")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-animate-chars__bg")}
                        tag="div"
                      />
                      <_Builtin.DOM
                        className={_utils.cx(
                          _styles,
                          "btn-animate-chars__text"
                        )}
                        tag="span"
                        slot=""
                        data-button-animate-chars=""
                      >
                        {"Get Started"}
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.1879 4.37502C14.26 4.37502 14.3709 4.37426 14.4699 4.38234C14.5524 4.3891 14.6721 4.40444 14.8056 4.45192L14.9436 4.51174C15.1198 4.60164 15.2714 4.73161 15.3867 4.89016L15.4892 5.05739C15.5848 5.24497 15.6096 5.42096 15.6186 5.53103C15.6267 5.63013 15.6259 5.74099 15.6259 5.81301V11.5625C15.6259 12.0802 15.2061 12.4999 14.6884 12.5C14.1707 12.5 13.7509 12.0803 13.7509 11.5625V7.57448L5.97506 15.3504C5.60892 15.7163 5.01542 15.7164 4.64937 15.3504C4.28355 14.9843 4.28354 14.3907 4.64937 14.0247L12.424 6.25002H8.43844C7.92067 6.25002 7.50094 5.83029 7.50094 5.31252C7.50095 4.79477 7.92068 4.37502 8.43844 4.37502H14.1879Z"
                          fill="white"
                        />
                      </_Builtin.DOM>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing--card", "is--team")}
                id={_utils.cx(
                  _styles,
                  "w-node-a72eeebc-5ed5-2f1f-e4d5-b5cd892f4960-6e489e3e"
                )}
                tag="div"
                animation="loading"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-28")}
                      tag="h2"
                    >
                      {"Beside Teams"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "body--text-16",
                        "is--60opacity"
                      )}
                    >
                      {"Go further with your team."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex--12")}
                    tag="div"
                  >
                    <SlotItemPricingFeature text="Everything in Beside Individual." />
                    <SlotItemPricingFeature text="AI Receptionist for calls & texts" />
                    <SlotItemPricingFeature text="AI notes after each call" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex--24")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "heading-style-18")}
                  >
                    {"7 days free, then $19.99 / "}
                    <_Builtin.Span
                      className={_utils.cx(_styles, "opacity--60")}
                    >
                      {"month"}
                    </_Builtin.Span>
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "pricing--card-access-row",
                      "is--60opacity"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "flex--8-icons")}
                      tag="div"
                    >
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.0625 16.25C14.5803 16.25 15 16.6697 15 17.1875C15 17.7053 14.5803 18.125 14.0625 18.125H5.9375C5.41973 18.125 5 17.7053 5 17.1875C5 16.6697 5.41973 16.25 5.9375 16.25H14.0625Z"
                          fill="currentColor"
                        />
                        <_Builtin.DOM
                          tag="path"
                          slot=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.3701 1.87988C14.6899 1.88497 14.9777 1.89545 15.2356 1.9165C15.7625 1.95956 16.2479 2.05212 16.7029 2.28394C17.4081 2.64338 17.9816 3.2169 18.3411 3.92212C18.5729 4.37708 18.6654 4.8625 18.7085 5.3894C18.7506 5.9052 18.75 6.54044 18.75 7.31201V9.56299C18.75 10.3346 18.7506 10.9698 18.7085 11.4856C18.6654 12.0125 18.5729 12.4979 18.3411 12.9529C17.9816 13.6581 17.4081 14.2316 16.7029 14.5911C16.2479 14.8229 15.7626 14.9154 15.2356 14.9585C14.7198 15.0006 14.0846 15 13.313 15H6.68701C5.91537 15 5.28023 15.0006 4.7644 14.9585C4.23744 14.9154 3.75212 14.8229 3.29712 14.5911C2.59187 14.2316 2.01839 13.6581 1.65894 12.9529C1.42715 12.4979 1.33456 12.0125 1.2915 11.4856C1.24941 10.9698 1.25 10.3346 1.25 9.56299V7.31201C1.25 6.54044 1.2494 5.9052 1.2915 5.3894C1.33456 4.8625 1.42712 4.37708 1.65894 3.92212C2.01841 3.2169 2.59188 2.64338 3.29712 2.28394C3.7521 2.05212 4.23746 1.95956 4.7644 1.9165C5.28023 1.87439 5.91538 1.875 6.68701 1.875H13.313L14.3701 1.87988ZM6.68701 3.75C5.88448 3.75 5.33881 3.75096 4.91699 3.7854C4.50652 3.81894 4.29577 3.87929 4.14917 3.95386C3.79641 4.1336 3.50862 4.42142 3.32886 4.77417C3.25428 4.92075 3.19394 5.13157 3.1604 5.54199C3.12596 5.96379 3.125 6.50956 3.125 7.31201V9.56299C3.125 10.3654 3.12597 10.9112 3.1604 11.333C3.19393 11.7434 3.2543 11.9542 3.32886 12.1008C3.50861 12.4536 3.7964 12.7414 4.14917 12.9211C4.29577 12.9957 4.50648 13.0561 4.91699 13.0896C5.33881 13.124 5.88448 13.125 6.68701 13.125H13.313C14.1155 13.125 14.6612 13.124 15.083 13.0896C15.4935 13.0561 15.7042 12.9957 15.8508 12.9211C16.2036 12.7414 16.4914 12.4536 16.6711 12.1008C16.7457 11.9542 16.8061 11.7434 16.8396 11.333C16.874 10.9112 16.875 10.3654 16.875 9.56299V7.31201C16.875 6.50956 16.874 5.96379 16.8396 5.54199C16.8061 5.13157 16.7457 4.92075 16.6711 4.77417C16.4914 4.42142 16.2036 4.1336 15.8508 3.95386C15.7042 3.87929 15.4935 3.81894 15.083 3.7854C14.8721 3.76818 14.6303 3.75937 14.3408 3.75488L13.313 3.75H6.68701Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
                        tag="svg"
                        slot=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <_Builtin.DOM
                          tag="g"
                          slot=""
                          clip-path="url(#clip0_2020_5318)"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            d="M11.25 2.5C11.7678 2.5 12.1875 2.91974 12.1875 3.4375C12.1875 3.95527 11.7678 4.375 11.25 4.375H8.75C8.23224 4.375 7.8125 3.95527 7.8125 3.4375C7.81251 2.91974 8.23224 2.50001 8.75 2.5H11.25Z"
                            fill="currentColor"
                          />
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.9375 3.28632e-06C11.7971 3.21407e-06 12.4983 -0.00124823 13.0664 0.0451693C13.6455 0.0924839 14.1686 0.194262 14.657 0.443119C15.4212 0.832571 16.0424 1.45382 16.4319 2.21802C16.6807 2.70644 16.7825 3.22954 16.8298 3.8086C16.8763 4.37673 16.875 5.07789 16.875 5.9375V14.0625C16.875 14.9221 16.8763 15.6233 16.8298 16.1914C16.7825 16.7705 16.6807 17.2936 16.4319 17.782C16.0424 18.5462 15.4212 19.1674 14.657 19.5569C14.1686 19.8057 13.6455 19.9075 13.0664 19.9548C12.4983 20.0013 11.7971 20 10.9375 20H9.0625C8.20291 20 7.50172 20.0013 6.9336 19.9548C6.35454 19.9075 5.83143 19.8057 5.34302 19.5569C4.57881 19.1674 3.95757 18.5462 3.56812 17.782C3.31926 17.2936 3.21748 16.7705 3.17017 16.1914C3.12375 15.6233 3.125 14.9221 3.125 14.0625V5.9375C3.125 5.07789 3.12375 4.37673 3.17017 3.8086C3.21748 3.22953 3.31926 2.70644 3.56812 2.21802C3.95757 1.45382 4.57882 0.832567 5.34302 0.443119C5.83143 0.194268 6.35454 0.0924817 6.9336 0.0451693C7.50172 -0.00124595 8.20291 3.32388e-06 9.0625 3.28632e-06H10.9375ZM9.0625 1.875C8.17197 1.875 7.56025 1.87534 7.08618 1.91407C6.62317 1.9519 6.37388 2.02132 6.19385 2.11304C5.78247 2.32272 5.44773 2.65747 5.23804 3.06885C5.14631 3.24888 5.07691 3.49815 5.03907 3.96118C5.00033 4.43525 5 5.04695 5 5.9375V14.0625C5 14.9531 5.00033 15.5648 5.03907 16.0388C5.07691 16.5019 5.14631 16.7511 5.23804 16.9312C5.44773 17.3425 5.78247 17.6773 6.19385 17.887C6.37388 17.9787 6.62317 18.0481 7.08618 18.0859C7.56025 18.1247 8.17197 18.125 9.0625 18.125H10.9375C11.828 18.125 12.4398 18.1247 12.9138 18.0859C13.3768 18.0481 13.6261 17.9787 13.8062 17.887C14.2175 17.6773 14.5523 17.3425 14.762 16.9312C14.8537 16.7511 14.9231 16.5018 14.9609 16.0388C14.9997 15.5648 15 14.9531 15 14.0625V5.9375C15 5.04695 14.9997 4.43525 14.9609 3.96118C14.9231 3.49816 14.8537 3.24888 14.762 3.06885C14.5523 2.65748 14.2175 2.32273 13.8062 2.11304C13.6261 2.02131 13.3768 1.95191 12.9138 1.91407C12.4398 1.87533 11.828 1.875 10.9375 1.875H9.0625Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.DOM>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "body--text-16")}
                      tag="div"
                    >
                      {"Access Beside for Mobile, Desktop"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    tag="div"
                    animate="hover"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "btn",
                        "is--arrow",
                        "is--white"
                      )}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-animate-chars__bg")}
                        tag="div"
                      />
                      <_Builtin.DOM
                        className={_utils.cx(
                          _styles,
                          "btn-animate-chars__text"
                        )}
                        tag="span"
                        slot=""
                        data-button-animate-chars=""
                      >
                        {"Upgrade to Teams"}
                      </_Builtin.DOM>
                      <_Builtin.DOM
                        className={_utils.cx(_styles, "icon--20")}
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
                          d="M14.1879 4.37502C14.26 4.37502 14.3709 4.37426 14.4699 4.38234C14.5524 4.3891 14.6721 4.40444 14.8056 4.45192L14.9436 4.51174C15.1198 4.60164 15.2714 4.73161 15.3867 4.89016L15.4892 5.05739C15.5848 5.24497 15.6096 5.42096 15.6186 5.53103C15.6267 5.63013 15.6259 5.74099 15.6259 5.81301V11.5625C15.6259 12.0802 15.2061 12.4999 14.6884 12.5C14.1707 12.5 13.7509 12.0803 13.7509 11.5625V7.57448L5.97506 15.3504C5.60892 15.7163 5.01542 15.7164 4.64937 15.3504C4.28355 14.9843 4.28354 14.3907 4.64937 14.0247L12.424 6.25002H8.43844C7.92067 6.25002 7.50094 5.83029 7.50094 5.31252C7.50095 4.79477 7.92068 4.37502 8.43844 4.37502H14.1879Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.TabsPane>
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}
