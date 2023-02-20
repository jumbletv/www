import React from "react";
import styles from "./Footer.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import Bars from "../../common/bars/Bars";
import Link from "next/link";
import FacebookIcon from "../../components/social/FacebookIcon";
import InstagramIcon from "../../components/social/InstagramIcon";
import WhatsappIcon from "../../components/social/WhatsappIcon";
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

  return (
    <div>
      <Bars barData={barData} />
      <div className={`${footerLinksContainer} ${flexRowCenterCenter} `}>
        <Link href="https://jumble.tv" className={footerLink}>
          The jumblog
        </Link>
        <Link href="https://jumble.tv" className={footerLink}>
          Brands
        </Link>
        <Link href="https://jumble.tv" className={footerLink}>
          Privacy Policy
        </Link>
        <Link href="https://jumble.tv" className={footerLink}>
          Terms and conditions of sale
        </Link>
        <Link href="https://jumble.tv" className={footerLink}>
          Get in touch
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
