import React, { useState, useEffect } from "react";
import styles from "./JumblogMenu.module.scss";
import JumblogMenuItem from "components/menuItems/jumblogMenuItem/JumblogMenuItem";
import commonStyles from "styles/Common.module.scss";
import dropArrow from "assets/icons/down-arrow.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const jumblogMenuData = [
  {
    id: 1,
    title: "all",
    text: "all_title",
    link: "/the-jumblog/page/1",
  },
  {
    id: 2,
    title: "editorials",
    text: "editorials_title",
    link: "/type/editorials",
  },
  { id: 3, title: "essays", text: "essays_title", link: "/type/essays" },
  {
    id: 4,
    title: "features",
    text: "features_title",
    link: "/type/features",
  },
  {
    id: 5,
    title: "interviews",
    text: "interviews_title",
    link: "/type/interviews",
  },
  { id: 6, title: "news", text: "news_title", link: "/type/news" },
  {
    id: 7,
    title: "portraits",
    text: "portraits_title",
    link: "/type/portraits",
  },
  {
    id: 8,
    title: "retro reports",
    text: "retro_reports_title",
    link: "/type/retro-reports",
  },
  { id: 9, title: "reviews", text: "reviews_title", link: "/type/reviews" },
];

function JumblogMenu({ activeMenu }) {
  const { jumblogMenuContainer, jumblogMenuWrapper, dropdownContainer } =
    styles;
  const { blackBg, black, white, whiteBg } = commonStyles;
  const [toggleMenu, setToggleMenu] = useState(false);

  const { t } = useTranslation("article-types");

  useEffect(() => {
    menuHeight();
    window.addEventListener("resize", menuHeight);
    return () => window.removeEventListener("resize", menuHeight);
  }, []);

  const menuHeight = () => {
    const navId = document.getElementById("jumblog-menu");
    if (navId) {
      if (window.innerWidth > 1024) {
        navId.style.height = "3.5rem";
      } else {
        navId.style.height = "0";
      }
    }
  };

  const toggleMobileNav = () => {
    const navId = document.getElementById("jumblog-menu");
    if (navId) {
      if (toggleMenu) {
        navId.style.height = "0";
        navId.style.zIndex = "-1";
      } else {
        navId.style.height = "35rem";
        navId.style.zIndex = "1";
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
