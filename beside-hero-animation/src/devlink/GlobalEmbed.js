"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GlobalEmbed.module.css";

export function GlobalEmbed({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed--typography")}
        value="%3Cstyle%3E%0A%2F*%20body%20settings%20*%2F%0Abody%20%7B%0A%09overflow-x%3Ahidden%3B%0A%20%20overflow%3A%20overlay%3B%0A%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%7D%0A%0Ahtml%20%7B%0A%09font-size%3A%20calc((100vw%2F1500)%20*%2016)%3B%0A%7D%0A%0A%40media%20screen%20and%20(min-width%3A%201500px)%20%7B%0A%09html%20%7Bfont-size%3A%2016px%3B%7D%0A%7D%0A%0A%40media%20screen%20and%20(min-width%3A%20768px)%20and%20(max-width%3A%20991px)%20%7B%0A%09html%20%7Bfont-size%3A%20calc((100vw%2F768)%20*%2016)%3B%7D%0A%7D%0A%0A%40media%20screen%20and%20(min-width%3A%20480px)%20and%20(max-width%3A%20767px)%20%7B%0A%09html%20%7Bfont-size%3A%20calc((100vw%2F480)%20*%2016)%3B%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%09html%20%7Bfont-size%3A%20calc((100vw%2F402)%20*%2016)%3B%7D%0A%7D%0A%0A%5Bclass*%3D%22heading-style-%22%5D%20%7B%0A%09margin-top%3A0px%3B%0A%20%20margin-bottom%3A0px%3B%0A%20%20font-family%3Avar(--_typography---heading)%3B%0A%7D%0A%0A%5Bclass*%3D%22body-text-%22%5D%20%7B%0A%09margin-top%3A0px%3B%0A%20%20margin-bottom%3A0px%3B%0A%7D%0A%0A%0A%0A.w-editor%20.main-wrapper%20%7B%0A%09opacity%3A1%20!important%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed--items")}
        value="%3Cstyle%3E%0A%5Bclass*%3D%22image-wrapper%22%5D%20%7B%0A%09width%3A100%25%3B%0A%20%20position%3Arelative%3B%0A%20%20overflow%3Ahidden%3B%0A%7D%0A%0A%5Bclass*%3D%22overlay-%22%5D%20%7B%0A%09pointer-events%3Anone%3B%0A%7D%0A%0A%5Bclass*%3D%22container-%22%5D%20%7B%0A%09margin-left%3Aauto%3B%0A%20%20margin-right%3Aauto%3B%0A%20%20width%3A100%25%3B%0A%7D%0A%0A.w-richtext%20%3E%20*%3Afirst-child%20%7B%20margin-top%3A%200%3B%20%7D%0A.w-richtext%20%3E%20*%3Alast-child%20%7B%20margin-bottom%3A%200%3B%20%7D%0A%0A.w-richtext%20figure%20div%20%7B%0A%09width%3A%20100%25%3B%0A%09overflow%3Ahidden%3B%0A%09border-radius%3A0.5rem%3B%0A%7D%0A%0A.grid--terms-cell%3Anth-child(3n)%20%7B%0A%09border-right-width%3A0px%3B%0A%7D%0A%0A%2F*%20Last%20child%20*%2F%0A.grid--terms-cell%3Anth-last-child(1)%20%7B%0A%20border-bottom-width%3A0px%3B%0A%7D%0A%0A%2F*%20Second%20to%20last%20*%2F%0A.grid--terms-cell%3Anth-last-child(2)%20%7B%0A%20%20border-bottom-width%3A0px%3B%0A%7D%0A%0A%2F*%20Third%20to%20last%20*%2F%0A.grid--terms-cell%3Anth-last-child(3)%20%7B%0A%20border-bottom-width%3A0px%3B%0A%7D%0A%0A.grid--terms.is--4%20.grid--terms-cell%3Anth-child(3n)%20%7B%0A%09border-right-width%3A1px%3B%0A%7D%0A%0A.grid--terms.is--4%20.grid--terms-cell%3Anth-child(4n)%20%7B%0A%09border-right-width%3A0px%3B%0A%7D%0A%0A.grid--terms.is--4%20.grid--terms-cell%3Anth-last-child(1)%2C%0A.grid--terms.is--4%20.grid--terms-cell%3Anth-last-child(2)%2C%0A.grid--terms.is--4%20.grid--terms-cell%3Anth-last-child(3)%2C%0A.grid--terms.is--4%20.grid--terms-cell%3Anth-last-child(4)%20%7B%0A%09border-bottom-width%3A0px%3B%0A%7D%0A%0A.grid--terms.is--2%20.grid--terms-cell%3Anth-child(3n)%20%7B%0A%09border-right-width%3A1px%3B%0A%7D%0A%0A.grid--terms.is--2%20.grid--terms-cell%3Anth-child(2n)%20%7B%0A%09border-right-width%3A0px%3B%0A%7D%0A%0A.grid--terms.is--2%20.grid--terms-cell%3Anth-last-child(3)%20%7B%0A%09border-bottom-width%3A1px%3B%0A%7D%0A%0A.grid--terms.is--2%20.grid--terms-cell%3Anth-last-child(1)%2C%0A.grid--terms.is--2%20.grid--terms-cell%3Anth-last-child(2)%20%7B%0A%09border-bottom-width%3A0px%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
