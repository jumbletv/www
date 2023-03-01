import React from "react";
import styles from "./Footer.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import Bars from "../../common/bars/Bars";
import Link from "next/link";
import FacebookIcon from "../../components/customIcons/FacebookIcon";
import InstagramIcon from "../../components/customIcons/InstagramIcon";
import WhatsappIcon from "../../components/customIcons/WhatsappIcon";
import { useTranslation } from "next-i18next";

const { darkBlueBg, lightBlueBg, lightPinkBg, darkPinkBg } = commonStyles;
const barData = [
  { id: 1, barBg: darkBlueBg },
  { id: 2, barBg: lightBlueBg },
];
const barData2 = [
  { id: 1, barBg: lightPinkBg },
  { id: 2, barBg: darkPinkBg },
];
function Footer() {
  const { flexRowCenterCenter } = commonStyles;
  const {
    footerLinksContainer,
    footerLink,
    footerSocialContainer,
    footerSocialLink,
    copyright,
  } = styles;

  const { t } = useTranslation("common");

  return (
    <div>
      <Bars barData={barData} />
      <div className={`${footerLinksContainer} ${flexRowCenterCenter} `}>
        <Link href="/the-jumblog/page/1" className={footerLink}>
          {t("the_jumblog")}
        </Link>
        <Link href="/brands/page/1" className={footerLink}>
          {t("brands")}
        </Link>
        <Link href="/privacy-policy" className={footerLink}>
          {t("privacy_policy")}
        </Link>
        <Link href="/terms-conditions" className={footerLink}>
          {t("terms_conditions_sale")}
        </Link>
        <Link href="/get-in-touch" className={footerLink}>
          {t("get_in_touch")}
        </Link>
      </div>
      <div className={`${footerSocialContainer}`}>
        <div className={footerSocialLink}>
          <InstagramIcon />
        </div>
        <div className={footerSocialLink}>
          <FacebookIcon />
        </div>
        <div className={footerSocialLink}>
          <WhatsappIcon />
        </div>
      </div>
      <Bars barData={barData2} />
      <div className={`${copyright} ${flexRowCenterCenter} `}>
        <h1>Jumble {new Date().getFullYear()}</h1>
      </div>
    </div>
  );
}

export default Footer;
