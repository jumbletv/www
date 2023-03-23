import Link from "next/link";
import React from "react";
import styles from "./SocialIconList.module.scss";

export type SocialIcon = {
  id: number;
  link: string;
  icon: JSX.Element;
};

type SocialIconListProps = {
  socialIconData: SocialIcon[];
};

export function SocialIconList({ socialIconData }: SocialIconListProps) {
  const { socialIconItemContainer } = styles;

  return (
    <>
      {socialIconData.map(({ id, link, icon }) => (
        <Link key={id} href={link} className={socialIconItemContainer}>
          {icon}
        </Link>
      ))}
    </>
  );
}
