import { AutherCardItem } from "components/cardItems/autherCard/AutherCardItem";
import React from "react";

export function AutherCard({ auther }) {
  const { id, title, detail, headerImg, autherLink } = auther;
  return (
    <AutherCardItem
      key={id}
      autherLink={autherLink}
      title={title}
      detail={detail}
      headerImg={headerImg}
    />
  );
}
