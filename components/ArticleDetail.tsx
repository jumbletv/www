import React from "react";
import styles from "components/ArticleDetail.module.scss";
import { AuthorCard } from "components/AuthorCard";
import { ArticleDetailHeader } from "components/ArticleDetailHeader";
import { NotFoundMessage } from "common/NotFoundMessage";
import { ArticleDetailTypes } from "types/articleList";

export function ArticleDetail({ articleDetail, author }: ArticleDetailTypes) {
  const { articleDetailWrapper, articleDetailContainer, autherCardWrapper } =
    styles;

  return articleDetail.id ? (
    <div className={articleDetailWrapper}>
      <div className={articleDetailContainer}>
        <ArticleDetailHeader articleDetail={articleDetail} />
        <div className={autherCardWrapper}>
          <AuthorCard author={author} />
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMessage message="Loading..." />
  );
}
