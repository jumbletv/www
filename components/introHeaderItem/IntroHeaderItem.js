import React from "react";
import styles from "./IntroHeaderItem.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

export function IntroHeaderItem({ headerImg, title, detail }) {
  const {
    introHeaderItemContainer,
    introHeaderDetail,
    introHeaderImgContainer,
  } = styles;

  const { t } = useTranslation("article-types");

  return (
    <div className={introHeaderItemContainer}>
      <div className={`${introHeaderDetail}`}>
        <h2>{t(title)}</h2>
        <p>{t(detail)}</p>
      </div>
      <div className={introHeaderImgContainer}>
        {headerImg ? (
          <Image src={headerImg} alt="header-img" priority={true} />
        ) : (
          <NotFoundMessage message="Loading...." />
        )}
      </div>
    </div>
  );
}
