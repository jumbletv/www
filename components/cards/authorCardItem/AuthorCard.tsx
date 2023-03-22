import { AuthorCardItem } from "components/cardItems/authorCard/authorCardItem";
import React from "react";
import { authorType } from "types/authorType";

interface authorCardProps {
  author: authorType;
}

export function authorCard({ author }: authorCardProps) {
  const { id, title, detail, headerImg, authorLink } = author;
  return (
    <authorCardItem
      key={id}
      authorLink={authorLink}
      title={title}
      detail={detail}
      headerImg={headerImg}
    />
  );
}