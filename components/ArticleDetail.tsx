import React from "react";
import styles from "components/ArticleDetail.module.scss";
import { AuthorCard } from "components/AuthorCard";
import { ArticleDetailHeader } from "components/ArticleDetailHeader";
import { NotFoundMessage } from "common/NotFoundMessage";

export function ArticleDetail({ articleDetail, author }) {
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
