import { IntroHeaderItem } from "components/IntroHeaderItem";
import React from "react";
import styles from "./IntroHeader.module.scss";
import {Author} from "@/types/cms/Author";

export type IntroHeaderData = {
    id: number;
    headerImg: any;
    title: string;
    detail: string;
}

export function IntroHeader(introHeaderData: IntroHeaderData) {
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