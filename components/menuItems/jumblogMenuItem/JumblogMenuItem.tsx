import React from "react";
import styles from "./JumblogMenuItem.module.scss";
import Link from "next/link";

interface JumblogMenuItemProps {
  link: string;
  menuItemBg: string;
  menuItemColor: string;
  text: string;
}

export function JumblogMenuItem({ link, menuItemBg, menuItemColor, text }: JumblogMenuItemProps): JSX.Element {
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