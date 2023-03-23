import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./SocialIconItem.module.scss";

type SocialIconItemProps = {
  children: ReactNode;
  link: string;
};

export function SocialIconItem({ children, link }: SocialIconItemProps) {
  const { socialIconItemContainer } = styles;

  return (
    <Link href={link} className={socialIconItemContainer}>
      {children}
    </Link>
  );
}
