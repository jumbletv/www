import React from "react";
import Image from "next/image";
import { ArticleTags } from "components/tags/articleTags/ArticleTags";
import { ArticleHeading } from "common/articleHeading/ArticleHeading";
import { useTranslation } from "next-i18next";
import styles from "./ArticleDetailHeader.module.scss";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

export function ArticleDetailHeader({ articleDetail }) {
  const { articleImgContainer, articleDateContainer, articleDetailTagWrapper } =
    styles;
  const { img, date, type, tags, title } = articleDetail;
  const { t } = useTranslation("articles");

  return (
    <>
      {img ? (
        <Image
          src={img.src}
          alt="blog-img"
          className={articleImgContainer}
          blurDataURL={img.blurDataURL}
          placeholder="blur"
          priority={true}
        />
      ) : (
        <NotFoundMessage message="Loading..." />
      )}

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
