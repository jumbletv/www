import { IntroHeaderItem } from "components/introHeaderItem/IntroHeaderItem";
import React from "react";
import styles from "./IntroHeader.module.scss";

export function IntroHeader({ introHeaderData }) {
  const { introHeaderContainer } = styles;
  return (
    <div className={introHeaderContainer}>
      {introHeaderData?.map(({ id, headerImg, title, detail }) => (
        <IntroHeaderItem
          key={id}
          headerImg={headerImg}
          title={title}
          detail={detail}
        />
      ))}
    </div>
  );
}
