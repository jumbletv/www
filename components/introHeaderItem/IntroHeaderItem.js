import React from "react";
import styles from "./IntroHeaderItem.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export function IntroHeaderItem({ headerImg, title, detail }) {
  const {
    introHeaderItemContainer,
    introHeaderDetail,
    introHeaderImgContainer,
  } = styles;

  const { t } = useTranslation("article-types");
  const blogTitleT = t(`${title}`);
  const blogDetailT = t(`${detail}`);

  return (
    <div className={`${introHeaderItemContainer}`}>
      <div className={`${introHeaderDetail}`}>
        <h2>{blogTitleT}</h2>
        <p>{blogDetailT}</p>
      </div>
      <div className={introHeaderImgContainer}>
        <Image src={headerImg} alt="header-img" />
      </div>
    </div>
  );
}
