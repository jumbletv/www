import React from "react";
import styles from "./Header.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import Logo2 from "../../assets/logos/logo-2.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function Header({ headerText, locale, shrink }) {
  const { flexRowBetweenCenter, flexColumnCenterCenter } = commonStyles;
  const { headerContainer, logoBox } = styles;

  const { t } = useTranslation("common");

  const headingFont = locale === "fr" && shrink ? "4.2vw" : "5.55vw";

  return (
    <div className={`${headerContainer} ${flexRowBetweenCenter}`}>
      <div className={`${logoBox} ${flexColumnCenterCenter}`}>
        <Image src={Logo2} alt="logo-2" />
      </div>
      <h1 style={{ fontSize: headingFont }}> {t(`${headerText}`)} </h1>
      <div className={`${logoBox} ${flexColumnCenterCenter}`}>
        <Image src={Logo2} alt="logo-2" />
      </div>
    </div>
  );
}

export default Header;
