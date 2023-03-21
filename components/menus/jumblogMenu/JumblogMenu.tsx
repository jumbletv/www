import React, { useState } from "react";
import styles from "./JumblogMenu.module.scss";
import { JumblogMenuItem } from "components/menuItems/jumblogMenuItem/JumblogMenuItem";
import commonStyles from "styles/Common.module.scss";
import dropArrow from "assets/icons/down-arrow.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { jumblogMenuData } from "data/menuData";

interface JumblogMenuProps {
  activeMenu: string;
}

function JumblogMenu({ activeMenu }: JumblogMenuProps) {
  const { jumblogMenuContainer, jumblogMenuWrapper, dropdownContainer } =
    styles;
  const { blackBg, black, white, whiteBg } = commonStyles;
  const [toggleMenu, setToggleMenu] = useState(true);

  const { t } = useTranslation("article-types");

  const toggleMobileNav = () => {
    const navId = document.getElementById("jumblog-menu");
    if (navId) {
      if (toggleMenu) {
        navId.style.height = "3.5rem";
        navId.style.zIndex = "1";
        navId.style.display = "flex";
      } else {
        navId.style.height = "0";
        navId.style.zIndex = "-1";
      }
      setToggleMenu(!toggleMenu);
    }
  };

  return (
    <>
      <div className={dropdownContainer} onClick={toggleMobileNav}>
        <h1>All Articles</h1>
        <Image src={dropArrow} alt="down-arrow" />
      </div>
      <div className={jumblogMenuWrapper}>
        <div className={jumblogMenuContainer} id="jumblog-menu">
          {jumblogMenuData.map(({ id, title, link, text }) => (
            <JumblogMenuItem
              key={id}
              text={t(text)}
              link={link}
              menuItemBg={activeMenu == title ? whiteBg : blackBg}
              menuItemColor={activeMenu == title ? black : white}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default JumblogMenu;
