import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import commonStyles from "styles/Common.module.scss";
import logo from "assets/logos/jumble-logo.svg";
import Image from "next/image";
import FacebookIcon from "components/customIcons/FacebookIcon";
import InstagramIcon from "components/customIcons/InstagramIcon";
import WhatsappIcon from "components/customIcons/WhatsappIcon";
import MenuIcon from "assets/icons/menu-icon.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { MenuLeftArrow } from "components/customIcons/MenuLeftArrow";
import { MenuRightArrow } from "components/customIcons/MenuRightArrow";
import { useRouter } from "next/router";

const menuData = [
  { id: 1, link: "/live", title: "live" },
  { id: 2, link: "/the-jumblog/page/1", title: "the_jumblog" },
  { id: 3, link: "/brands/page/1", title: "brands" },
  { id: 4, link: "/frequently-asked-questions", title: "faq" },
  { id: 5, link: "/get-in-touch", title: "get_in_touch" },
];

function Navbar() {
  const router = useRouter();
  const { asPath } = router;

  const [menuId, setMenuId] = useState(0);

  useEffect(() => {
    getMenuId();
  }, [asPath]);

  const getMenuId = () => {
    if (asPath) {
      const path = asPath.split("/")[1];
      menuData.forEach(({ id, link }) => {
        if (link.includes(path)) {
          setMenuId(id);
        }
      });
    }
  };

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
    socialBox,
    mobileMenu,
    sideNav,
    menuIcon,
    mobileMenuItem,
  } = styles;
  const { flexRowStartCenter } = commonStyles;

  const { t } = useTranslation("common");

  return (
    <div className={navContainer}>
      <Link href="/">
        <Image src={logo} alt="logo" className={logoImg} />
      </Link>
      <div className={menuListContainer}>
        <div className={flexRowStartCenter}>
          {menuData.map(({ id, title, link }) => (
            <Link href={link} className={menuItem} key={id}>
              <MenuRightArrow fill={menuId === id ? "black" : "#48c9ff"} />
              <p> {t(title)} </p>
              <MenuLeftArrow fill={menuId === id ? "black" : "#48c9ff"} />
            </Link>
          ))}
        </div>
        <div className={`${flexRowStartCenter}`}>
          <div className={socialBox}>
            <InstagramIcon />
          </div>
          <div className={socialBox}>
            <FacebookIcon />
          </div>
          <div className={socialBox}>
            <WhatsappIcon />
          </div>
          <div className={mobileMenu} onClick={toggleMobileNav}>
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
