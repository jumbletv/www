import { AutherCardItem } from "components/cardItems/autherCard/AutherCardItem";
import React from "react";
import { AutherType } from "types/AutherType";

interface AutherCardProps {
  auther: AutherType;
}

export function AutherCard({ auther }: AutherCardProps) {
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