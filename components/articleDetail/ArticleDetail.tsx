import React from "react";
import styles from "./ArticleDetail.module.scss";
import { authorCard } from "components/cards/authorCardItem/authorCard";
import { ArticleDetailHeader } from "./articleDetailHeader/ArticleDetailHeader";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";
import { articleDetailTypes } from "types/articleList";

export function ArticleDetail({ articleDetail, author }: articleDetailTypes) {
  const { articleDetailWrapper, articleDetailContainer, authorCardWrapper } =
    styles;

  return articleDetail.id ? (
    <div className={articleDetailWrapper}>
      <div className={articleDetailContainer}>
        <ArticleDetailHeader articleDetail={articleDetail} />
        <div className={authorCardWrapper}>
          <authorCard author={author} />
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMessage message="Loading..." />
  );
}
