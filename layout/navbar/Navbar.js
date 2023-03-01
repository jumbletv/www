import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import commonStyles from "styles/Common.module.scss";
import logo from "assets/logos/jumble-logo.svg";
import Image from "next/image";
import FacebookIcon from "components/customIcons/FacebookIcon";
import InstagramIcon from "components/customIcons/InstagramIcon";
import WhatsappIcon from "components/customIcons/WhatsappIcon";
import LeftArrow from "assets/icons/left-arrow.svg";
import RightArrow from "assets/icons/right-arrow.svg";
import MenuIcon from "assets/icons/menu-icon.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMobileNav = () => {
    const navId = document.getElementById("mobile-nav");
    if (navId) {
      if (toggleMenu) {
        navId.style.height = "0";
      } else {
        navId.style.height = "30rem";
      }
      setToggleMenu(!toggleMenu);
    }
  };
  const {
    navContainer,
    logoImg,
    menuListContainer,
    menuItem,
    arrows,
    socialBox,
    mobileMenu,
    sideNav,
    menuIcon,
    mobileMenuItem,
  } = styles;
  const { flexRowBetweenCenter, flexRowStartCenter, flexColumnCenterCenter } =
    commonStyles;

  const { t } = useTranslation("common");

  return (
    <div className={`${navContainer} ${flexRowBetweenCenter}`}>
      <Link href="/">
        <Image src={logo} alt="logo" className={logoImg} />
      </Link>
      <div className={`${menuListContainer} ${flexRowStartCenter}`}>
        <div className={` ${flexRowStartCenter}`}>
          <Link href="/live" className={`${menuItem} ${flexRowBetweenCenter}`}>
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p> {t("live")} </p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </Link>
          <Link
            href="/the-jumblog/page/1"
            className={`${menuItem} ${flexRowBetweenCenter}`}
          >
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p> {t("the_jumblog")} </p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </Link>
          <Link
            href="/brands/page/1"
            className={`${menuItem} ${flexRowBetweenCenter}`}
          >
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>{t("brands")}</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </Link>
          <Link
            href="/frequently-asked-questions"
            className={`${menuItem} ${flexRowBetweenCenter}`}
          >
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>{t("faq")}</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </Link>
          <Link
            href="/get-in-touch"
            className={`${menuItem} ${flexRowBetweenCenter}`}
          >
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>{t("get_in_touch")}</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </Link>
        </div>
        <div className={`${flexRowStartCenter}`}>
          <div className={`${socialBox} ${flexColumnCenterCenter}`}>
            <InstagramIcon />
          </div>
          <div className={`${socialBox} ${flexColumnCenterCenter}`}>
            <FacebookIcon />
          </div>
          <div className={`${socialBox} ${flexColumnCenterCenter}`}>
            <WhatsappIcon />
          </div>
          <div
            className={`${mobileMenu} ${flexColumnCenterCenter}`}
            onClick={toggleMobileNav}
          >
            <Image src={MenuIcon} alt="menu-icon" className={menuIcon} />
          </div>

          <div className={sideNav} id="mobile-nav">
            <Link href="/sales/page/1" className={mobileMenuItem}>
              {t("upcoming_sales")}
            </Link>
            <Link href="/the-jumblog/page/1" className={mobileMenuItem}>
              {t("the_jumblog")}
            </Link>
            <Link href="/frequently-asked-questions" className={mobileMenuItem}>
              {t("faq")}
            </Link>
            <Link href="/get-in-touch" className={mobileMenuItem}>
              {t("get_in_touch")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
