import { IntroHeaderItem } from "components/introHeaderItem/IntroHeaderItem";
import React from "react";
import styles from "./IntroHeader.module.scss";

export function IntroHeader({ introHeaderData }) {
  const { introHeaderContainer } = styles;
  const { id, headerImg, title, detail, noIntroContainer } = introHeaderData;

  if (introHeaderData?.length === 0) {
    return (
      <div className={noIntroContainer}>
        <p> No Article Intro </p>
      </div>
    );
  }

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
