import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import commonStyles from "styles/Common.module.scss";
import logo from "assets/logos/jumble-logo.svg";
import Image from "next/image";
import MenuIcon from "assets/icons/menu-icon.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { MenuLeftArrow } from "components/customIcons/MenuLeftArrow";
import { MenuRightArrow } from "components/customIcons/MenuRightArrow";
import { useRouter } from "next/router";
import { SocialIconList } from "components/socialIconList/SocialIconList";
import { socialIconData } from "data/socialIconData";
import { navMenuData, mobileNavMenuData } from "data/menuData";

interface NavMenu {
  id: number;
  title: string;
  link: string;
}

interface MobileNavMenu {
  id: number;
  title: string;
  link: string;
}

export function Navbar(): JSX.Element {
  const router = useRouter();
  const { asPath } = router;

  const [menuId, setMenuId] = useState<number>(0);

  useEffect(() => {
    getMenuId();
  }, [asPath]);

  const getMenuId = () => {
    if (asPath) {
      const path = asPath.split("/")[1];
      if (path.length > 0) {
        navMenuData.forEach(({ id, link }) => {
          if (link.includes(path)) {
            setMenuId(id);
          }
        });
      }
    }
  };

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
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
    socialIconWrapper,
    mobileMenu,
    sideNav,
    menuIcon,
    mobileMenuItem,
  } = styles;
  const { flexRowStartCenter } = commonStyles;

  const { t } = useTranslation("common");

  return (
    <nav className={navContainer}>
      <Link href="/">
        <Image src={logo} alt="logo" className={logoImg} />
      </Link>
      <div className={menuListContainer}>
        <div className={flexRowStartCenter}>
          {navMenuData.map(({ id, title, link }: NavMenu) => (
            <Link href={link} className={menuItem} key={id}>
              <MenuRightArrow fill={menuId === id ? "black" : "#48c9ff"} />
              <p> {t(title)} </p>
              <MenuLeftArrow fill={menuId === id ? "black" : "#48c9ff"} />
            </Link>
          ))}
        </div>
        <div className={flexRowStartCenter}>
          <div className={socialIconWrapper}>
            <SocialIconList socialIconData={socialIconData} />
          </div>
          <div className={mobileMenu} onClick={toggleMobileNav}>
            <Image src={MenuIcon} alt="menu-icon" className={menuIcon} />
          </div>
          <div className={sideNav} id="mobile-nav">
            {mobileNavMenuData.map(({ id, title, link }: MobileNavMenu) => (
              <Link key={id} href={link} className={mobileMenuItem}>
                {t(title)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
