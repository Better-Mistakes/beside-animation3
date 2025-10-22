"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotItemButton } from "./SlotItemButton";
import { SlotItemFooterLink } from "./SlotItemFooterLink";
import * as _utils from "./utils";
import _styles from "./GlobalFooter.module.css";

export function GlobalFooter({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "light beige": "w-variant-6f11ee57-6e06-1df5-0d32-ab5379518954",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section",
        "is--footer",
        _activeStyleVariant
      )}
      tag="footer"
      animation="loading"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container--980",
          "is--footer",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "line--secondary", _activeStyleVariant)}
          id={_utils.cx(
            _styles,
            "w-node-_4c203fde-0296-728c-366e-527228d7435d-f7fb45b1"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-23", _activeStyleVariant)}
          tag="div"
          animation="loading"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "heading-style-32",
              _activeStyleVariant
            )}
            tag="div"
          >
            {"Try Beside now."}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <SlotItemButton
              variant="Base"
              text="Try for Free"
              link={{
                href: "#",
              }}
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "line--secondary", _activeStyleVariant)}
          id={_utils.cx(
            _styles,
            "w-node-_0c9e87ab-7111-0d07-65a0-23ae85d6be4d-f7fb45b1"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "footer--content", _activeStyleVariant)}
          tag="div"
          animation="loading"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer--column",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_93969a1d-cf8c-78dd-0705-5ddaf7fb45be-f7fb45b1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-column-title",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"Solutions"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer--column-wrapper",
                _activeStyleVariant
              )}
              tag="div"
            >
              <SlotItemFooterLink
                text="Pipedrive"
                link={{
                  href: "/integration/pipedrive-copy-2",
                }}
              />
              <SlotItemFooterLink
                text="Odoo"
                link={{
                  href: "/integration/pipedrive-copy-2",
                }}
              />
              <SlotItemFooterLink
                text="Zapier"
                link={{
                  href: "/integration/pipedrive-copy-2",
                }}
              />
              <SlotItemFooterLink
                text="See all"
                link={{
                  href: "/integration/pipedrive-copy-2",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer--column",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_93969a1d-cf8c-78dd-0705-5ddaf7fb45c7-f7fb45b1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-column-title",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"Resources"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer--column-wrapper",
                _activeStyleVariant
              )}
              tag="div"
            >
              <SlotItemFooterLink
                text="Pricing"
                link={{
                  href: "#",
                }}
              />
              <SlotItemFooterLink
                text="Download"
                link={{
                  href: "#",
                }}
              />
              <SlotItemFooterLink
                text="Contact"
                link={{
                  href: "#",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer--column",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_1703e57a-cbce-e3aa-3a27-bf191bb9c888-f7fb45b1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-column-title",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"Company"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer--column-wrapper",
                _activeStyleVariant
              )}
              tag="div"
            >
              <SlotItemFooterLink
                text="Blog"
                link={{
                  href: "#",
                }}
              />
              <SlotItemFooterLink text="News" />
              <SlotItemFooterLink
                text="Careers"
                link={{
                  href: "#",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer--column",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_1a85efe8-2028-2620-d0fc-2b0cf207fc92-f7fb45b1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-column-title",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"Legal"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer--column-wrapper",
                _activeStyleVariant
              )}
              tag="div"
            >
              <SlotItemFooterLink
                text="Terms of Service"
                link={{
                  href: "#",
                }}
              />
              <SlotItemFooterLink
                text="Privacy Policy"
                link={{
                  href: "#",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer--column",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_655860d4-a6c4-4da6-be5f-6a3ad061584a-f7fb45b1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-column-title",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"Connect"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer--column-wrapper",
                _activeStyleVariant
              )}
              tag="div"
            >
              <SlotItemFooterLink text="X (Twitter)" />
              <SlotItemFooterLink text="Instagram" />
              <SlotItemFooterLink text="LinkedIn" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "footer--content-2",
            _activeStyleVariant
          )}
          tag="div"
          animation="loading"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer--details",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_93969a1d-cf8c-78dd-0705-5ddaf7fb45dc-f7fb45b1"
            )}
            tag="div"
          >
            {"©2025 Interface, Inc."}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "div-block-21",
              "is--footer",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-a8dbb767-7dbd-238f-2e34-b0e26230f842-f7fb45b1"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "icon--16", _activeStyleVariant)}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/68da59e688b434b19dfe4efd/68da78ab72af9d54c2dee9a7_shield.checkmark.svg"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "body--text-14",
                "is--center",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"SOC 2 Certified"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
