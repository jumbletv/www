import React from "react";
import styles from "./JumblogMenuItem.module.scss";
import Link from "next/link";

function JumblogMenuItem({ title, link, menuItemBg, menuItemColor }) {
  const { jumblogMenuItemContainer } = styles;

  return (
    <Link
      href={link}
      className={`${jumblogMenuItemContainer} ${menuItemBg} ${menuItemColor}`}
    >
      {title}
    </Link>
  );
}

export default JumblogMenuItem;
