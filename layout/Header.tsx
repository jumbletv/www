import React from "react";
import styles from "./Header.module.scss";
import Logo2 from "assets/logos/logo-2.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { headerTypes } from "types/header";

interface HeaderProps {
  headerText: string;
  locale?: string;
  shrink?: boolean;
}

export function Header({ headerText, locale = 'en', shrink = false }: HeaderProps): JSX.Element {
  const { headerContainer, logoBox } = styles;

  const { t } = useTranslation("common");

  const headingFontSize = locale === "fr" && shrink ? "4.2vw" : "5.55vw";

  return (
    <header className={headerContainer}>
      <div className={logoBox}>
        <Image src={Logo2} alt="logo-2" />
      </div>
      <h1 style={{ fontSize: headingFontSize }}> {t(`${headerText}`)} </h1>
      <div className={logoBox}>
        <Image src={Logo2} alt="logo-2" />
      </div>
    </header>
  );
}
