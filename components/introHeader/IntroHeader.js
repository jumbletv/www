import { IntroHeaderItem } from "components/introHeaderItem/IntroHeaderItem";
import React from "react";
import styles from "./IntroHeader.module.scss";

export function IntroHeader({ introHeaderData }) {
  const { introHeaderContainer } = styles;
  const { id, headerImg, title, detail } = introHeaderData;
  return (
    <div className={introHeaderContainer}>
      <IntroHeaderItem
        key={id}
        headerImg={headerImg}
        title={title}
        detail={detail}
      />
    </div>
  );
}
