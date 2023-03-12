import React from "react";

import styles from "./ArticleDetail.module.scss";
import { AutherCard } from "components/cards/autherCardItem/AutherCard";
import { ArticleDetailHeader } from "./articleDetailHeader/ArticleDetailHeader";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

export function ArticleDetail({ articleDetail, auther }) {
  const { articleDetailWrapper, articleDetailContainer, autherCardWrapper } =
    styles;

  const { placeholderArticleContent } = articleDetail;

  return placeholderArticleContent ? (
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
