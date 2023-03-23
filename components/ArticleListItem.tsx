import React from "react";
import styles from "components/ArticleListItem.module.scss";

export interface ArticleListItem {
  title: string;
  detail: string;
  id: number;
  thumbnail: {
    blurDataURL: string;
    src: string;
  };
  category: string;
  date: string;
}

interface ArticleListItemProps {
  listItem: ArticleListItem;
}

export function ArticleListItem({ listItem }: ArticleListItemProps) {
  const { articleListItemContainer } = styles;
  return (
    <ul className={articleListItemContainer}>
      <li>{listItem}</li>
    </ul>
  );
}
