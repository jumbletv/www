import React from "react";
import styles from "./Footer.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import { Bars } from "../../common/bars/Bars";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { SocialIconList } from "components/socialIconList/SocialIconList";
import { socialIconData } from "data/socialIconData";
import { footerMenuData } from "data/menuData";

const { darkBlueBg, lightBlueBg, lightPinkBg, darkPinkBg } = commonStyles;
const barData = [
  { id: 1, barBg: darkBlueBg },
  { id: 2, barBg: lightBlueBg },
];
const barData2 = [
  { id: 1, barBg: lightPinkBg },
  { id: 2, barBg: darkPinkBg },
];
export function Footer() {
  const { footerLinksContainer, footerLink, footerSocialContainer, copyright } =
    styles;

  const { t } = useTranslation("common");

  return (
    <footer>
      <Bars barData={barData} />
      <div className={footerLinksContainer}>
        {footerMenuData?.map(({ id, title, link }) => (
          <Link key={id} href={link} className={footerLink}>
            {t(title)}
          </Link>
        ))}
      </div>
      <div className={footerSocialContainer}>
        <SocialIconList socialIconData={socialIconData} />
      </div>
      <Bars barData={barData2} />
      <div className={copyright}>
        <p>Jumble {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
