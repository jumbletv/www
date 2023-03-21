import { IntroHeaderItem } from "components/introHeaderItem/IntroHeaderItem";
import React from "react";
import styles from "./IntroHeader.module.scss";

interface IntroHeaderProps {
  introHeaderData: {
    id: number;
    headerImg: string;
    title: string;
    detail: string;
  };
}

export function IntroHeader({ introHeaderData }: IntroHeaderProps) {
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