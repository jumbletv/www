import React from "react";
import styles from "./Banner.module.scss";
import { useTranslation } from "next-i18next";

interface BannerProps {
  bannerText: string;
  singleText?: boolean;
}

export function Banner({ bannerText, singleText }: BannerProps) {
  const { bannerContainer, singleBannerContainer } = styles;

  const { t } = useTranslation("common");

  const renderBanner = () => {
    if (singleText) {
      return (
        <div className={singleBannerContainer}>
          <h1>{t(bannerText)}</h1>
        </div>
      );
    } else {
      const keys = [...Array(100).keys()];
      return (
        <div className={bannerContainer}>
          {keys.map((item) => (
            <h1 key={item}>{t(bannerText)}</h1>
          ))}
        </div>
      );
    }
  };

  return renderBanner();
}