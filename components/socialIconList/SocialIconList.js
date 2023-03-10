import { SocialIconItem } from "components/socialIconItem/SocialIconItem";
import React from "react";

export function SocialIconList({ socialIconData }) {
  return socialIconData.map(({ id, link, icon }) => (
    <SocialIconItem key={id} link={link}>
      {icon}
    </SocialIconItem>
  ));
}
