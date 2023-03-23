import { SocialIconItem } from "components/SocialIconItem";
import React from "react";

type SocialIcon = {
  id: number;
  link: string;
  icon: React.ReactNode;
};

type SocialIconListProps = {
  socialIconData: SocialIcon[];
};

export function SocialIconList({
  socialIconData,
}: SocialIconListProps): JSX.Element {
  return (
    <>
      {socialIconData.map(({ id, link, icon }) => (
        <SocialIconItem key={id} link={link}>
          {icon}
        </SocialIconItem>
      ))}
    </>
  );
}
