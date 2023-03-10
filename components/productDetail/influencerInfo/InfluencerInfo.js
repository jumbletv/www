import React from "react";
import styles from "./InfluencerInfo.module.scss";
import Marquee from "react-fast-marquee";
import logo from "assets/logos/logo-3.svg";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export function InfluencerInfo({ influencerData, productTitle }) {
  const {
    influencerDetailContainer,
    influencerInfoContainer,
    marqueeContainer,
    influencerText,
    logoBox,
    logoContainer,
    influencerImgContainer,
  } = styles;

  const { title, headerImg, detail, secondImg } = influencerData;

  const logoArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, , 9];
  const { t } = useTranslation("article-types");

  return (
    <div className={influencerDetailContainer}>
      <div className={influencerInfoContainer}>
        <div className={marqueeContainer}>
          <Marquee speed={70} gradient={false}>
            <h4>Jumble X {productTitle}</h4>
          </Marquee>
        </div>
        <div className={influencerText}>
          <h4> {title} </h4>
          <p>{t(detail)}</p>
        </div>
        <div className={logoContainer}>
          {logoArr.map((arrItem) => (
            <div className={logoBox} key={arrItem}>
              <Image src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>
      <div className={influencerImgContainer}>
        <Image src={secondImg ? secondImg : headerImg} alt="influencer-pic" />
      </div>
    </div>
  );
}
