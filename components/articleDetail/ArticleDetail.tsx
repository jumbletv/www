import React from "react";
import styles from "./ArticleDetail.module.scss";
import { AutherCard } from "components/cards/autherCardItem/AutherCard";
import { ArticleDetailHeader } from "./articleDetailHeader/ArticleDetailHeader";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";
import { articleDetailTypes } from "types/articleList";

export function ArticleDetail({ articleDetail, auther }: articleDetailTypes) {
  const { articleDetailWrapper, articleDetailContainer, autherCardWrapper } =
    styles;

  return articleDetail.id ? (
    <div className={articleDetailWrapper}>
      <div className={articleDetailContainer}>
        <ArticleDetailHeader articleDetail={articleDetail} />
        <div className={autherCardWrapper}>
          <AutherCard auther={auther} />
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMessage message="Loading..." />
  );
}
