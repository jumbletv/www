import React from "react";
import styles from "./Header.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import Logo2 from "../../assets/logos/logo-2.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function Header({ headerText }) {
  const { flexRowBetweenCenter, flexColumnCenterCenter } = commonStyles;
  const { headerContainer, logoBox } = styles;

  const { t } = useTranslation("common");

  return (
    <div>
      <div className={`${headerContainer} ${flexRowBetweenCenter}`}>
        <div className={`${logoBox} ${flexColumnCenterCenter}`}>
          <Image src={Logo2} alt="logo-2" />
        </div>
        <h1> {headerText} </h1>
        <div className={`${logoBox} ${flexColumnCenterCenter}`}>
          <Image src={Logo2} alt="logo-2" />
        </div>
      </div>
    </div>
  );
}

export default Header;
