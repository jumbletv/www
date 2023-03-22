import { AuthorCardItem } from "components/cardItems/authorCard/AuthorCardItem";
import React from "react";
import { AuthorType } from "types/authorType";

interface authorCardProps {
  author: AuthorType;
}

export function AuthorCard({ author }: authorCardProps) {
  const { id, title, detail, headerImg, authorLink } = author;
  return (
    <AuthorCardItem
      key={id}
      authorLink={authorLink}
      title={title}
      detail={detail}
      headerImg={headerImg}
    />
  );
}
