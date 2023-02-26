import React from "react";
import { ArticleListItem } from "components/llistItem/ArticleListItem";
import styles from "./ArticleList.module.scss";

export function ArticleList({ list }) {
  const { lists, listHeading } = list;

  const { articleListContainer } = styles;

  return (
    <div className={articleListContainer}>
      <h1>{listHeading}</h1>
      {lists?.map(({ id, listItem }) => (
        <ArticleListItem listItem={listItem} key={id} />
      ))}
    </div>
  );
}
