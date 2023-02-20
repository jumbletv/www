import React, { useState } from "react";
import styles from "./JumblogMenu.module.scss";
import JumblogMenuItem from "components/menuItems/jumblogMenuItem/JumblogMenuItem";
import commonStyles from "styles/Common.module.scss";
import dropArrow from "assets/icons/down-arrow.svg";
import Image from "next/image";

const jumblogMenuData = [
  { id: 1, title: "ALL", link: "/" },
  { id: 2, title: "EDITORIALS", link: "/" },
  { id: 3, title: "ESSAYS", link: "/" },
  { id: 4, title: "FEATURES", link: "/" },
  { id: 5, title: "INTERVIEWS", link: "/" },
  { id: 6, title: "NEWS", link: "/" },
  { id: 7, title: "PORTRAITS", link: "/" },
  { id: 8, title: "RETRO REPORTS", link: "/" },
  { id: 9, title: "REVIEWS", link: "/" },
];

function JumblogMenu({ activeMenu }) {
  const { jumblogMenuContainer, jumblogMenuWrapper, dropdownContainer } =
    styles;
  const { blackBg, black, white, whiteBg } = commonStyles;

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMobileNav = () => {
    const navId = document.getElementById("jumblog-menu");
    if (navId) {
      if (toggleMenu) {
        navId.style.height = "0";
      } else {
        navId.style.height = "500px";
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
              menuItemBg={activeMenu === id ? whiteBg : blackBg}
              menuItemColor={activeMenu === id ? black : white}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default JumblogMenu;
