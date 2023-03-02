import { ArticleTagItem } from "components/tagItems/articleTagItem/ArticleTagItem";
import React from "react";
import styles from "./ArticleTags.module.scss";

export function ArticleTags({ tags }) {
  const { articleTagsContainer } = styles;
  return (
    <div className={articleTagsContainer}>
      {tags?.map(({ id, tag, url }) => (
        <ArticleTagItem key={id} tag={tag} url={url} />
      ))}
    </div>
  );
}
