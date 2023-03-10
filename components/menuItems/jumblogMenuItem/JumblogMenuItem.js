import React from "react";
import styles from "./JumblogMenuItem.module.scss";
import Link from "next/link";

export function JumblogMenuItem({ link, menuItemBg, menuItemColor, text }) {
  const { jumblogMenuItemContainer } = styles;

  const handleMenuItem = () => {
    if (window.innerWidth < 1024) {
      const navId = document.getElementById("jumblog-menu");
      if (navId) {
        navId.style.height = "0";
        navId.style.zIndex = "-1";
      }
    }
  };

  return (
    <Link
      onClick={handleMenuItem}
      href={link}
      className={`${jumblogMenuItemContainer} ${menuItemBg} ${menuItemColor}`}
    >
      {text}
    </Link>
  );
}
