import Link from "next/link";
import React from "react";
import styles from "./SocialIconItem.module.scss";

export function SocialIconItem({ children, link }) {
  const { socialIconItemContainer } = styles;

  return (
    <Link href={link} className={socialIconItemContainer}>
      {children}
    </Link>
  );
}
