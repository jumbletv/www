import React from "react";

import styles from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  listItem: string;
}

export function ArticleListItem({ listItem }: ArticleListItemProps) {
  const { articleListItemContainer } = styles;
  return (
    <ul className={articleListItemContainer}>
      <li>{listItem}</li>
    </ul>
  );
}