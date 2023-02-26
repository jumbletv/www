import React from "react";

import styles from "./ArticleListItem.module.scss";

export function ArticleListItem({ listItem }) {
  const { articleListItemContainer } = styles;
  return (
    <ul className={articleListItemContainer}>
      <li>{listItem}</li>
    </ul>
  );
}
