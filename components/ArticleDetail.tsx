import React from "react";
import styles from "components/ArticleDetail.module.scss";
import { AuthorCard } from "components/AuthorCard";
import { ArticleDetailHeader } from "components/ArticleDetailHeader";
import { NotFoundMessage } from "common/NotFoundMessage";
import { BlogPost } from "@/types";

export function ArticleDetail({article} : {article: BlogPost}) {
  const { articleDetailWrapper, articleDetailContainer, autherCardWrapper } =
    styles;
  console.log(article)
  
  return article?._id ? (
    <div className={articleDetailWrapper}>
      <div className={articleDetailContainer}>
        <ArticleDetailHeader article={article} />
        <div className={autherCardWrapper}>
          <AuthorCard author={article.authorRef} />
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMessage message="Loading..." />
  );
}
