import React from "react";
import Image from "next/image";
import { ArticleTags } from "components/tags/articleTags/ArticleTags";
import { ArticleHeading } from "common/articleHeading/ArticleHeading";
import { useTranslation } from "next-i18next";
import styles from "./ArticleDetailHeader.module.scss";

export function ArticleDetailHeader({ articleDetail }) {
  const { articleImgContainer, articleDateContainer, articleDetailTagWrapper } =
    styles;
  const { img, date, type, tags, title } = articleDetail;
  const { t } = useTranslation("articles");

  return (
    <>
      <Image
        src={img}
        alt="blog-img"
        className={articleImgContainer}
        priority={true}
      />
      <div className={articleDateContainer}>
        <p>{date}</p>
        <p>{type}</p>
      </div>
      <ArticleHeading heading={t(title)} />
      <div className={articleDetailTagWrapper}>
        <ArticleTags tags={tags} />
      </div>
    </>
  );
}
