import React, { useState, useEffect } from "react";
import styles from "./JumblogMenu.module.scss";
import JumblogMenuItem from "components/menuItems/jumblogMenuItem/JumblogMenuItem";
import commonStyles from "styles/Common.module.scss";
import dropArrow from "assets/icons/down-arrow.svg";
import Image from "next/image";

const jumblogMenuData = [
  { id: 1, title: "ALL", link: "/the-jumblog/page/1" },
  { id: 2, title: "EDITORIALS", link: "/type/editorials" },
  { id: 3, title: "ESSAYS", link: "/type/essays" },
  { id: 4, title: "FEATURES", link: "/type/features" },
  { id: 5, title: "INTERVIEWS", link: "/type/interviews" },
  { id: 6, title: "NEWS", link: "/type/news" },
  { id: 7, title: "PORTRAITS", link: "/type/portraits" },
  { id: 8, title: "RETRO REPORTS", link: "/type/retro-reports" },
  { id: 9, title: "REVIEWS", link: "/type/reviews" },
];

function JumblogMenu({ activeMenu }) {
  const { jumblogMenuContainer, jumblogMenuWrapper, dropdownContainer } =
    styles;
  const { blackBg, black, white, whiteBg } = commonStyles;
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    eleHeight();
    window.addEventListener("resize", eleHeight);
    return () => window.removeEventListener("resize", eleHeight);
  }, []);

  const eleHeight = () => {
    const navId = document.getElementById("jumblog-menu");
    if (navId) {
      if (window.innerWidth > 1024) {
        navId.style.height = "35px";
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
        navId.style.height = "350px";
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
          {jumblogMenuData.map(({ id, title, link }) => (
            <JumblogMenuItem
              key={id}
              title={title}
              link={link}
              menuItemBg={
                activeMenu?.toUpperCase() == title ? whiteBg : blackBg
              }
              menuItemColor={activeMenu?.toUpperCase() == title ? black : white}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default JumblogMenu;
