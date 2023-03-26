import { IntroHeaderItem } from "components/IntroHeaderItem";
import React from "react";
import styles from "./IntroHeader.module.scss";

export type IntroHeaderData = {
  id: number;
  headerImg: any;
  title: string;
  detail: string;
};

export function IntroHeader({ id, headerImg, title, detail }: IntroHeaderData) {
  const { introHeaderContainer } = styles;

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
