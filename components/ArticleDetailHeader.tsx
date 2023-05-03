import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArticleTags } from "components/ArticleTags";
import { ArticleHeading } from "common/ArticleHeading";
import { useTranslation } from "next-i18next";
import styles from "./ArticleDetailHeader.module.scss";
import { NotFoundMessage } from "common/NotFoundMessage";
import { Tag } from "@/types/cms/Tag";
import { BlogPost } from "@/types";

interface ArticleDetail {
  img: StaticImageData;
  date: string;
  type: string;
  tags: Tag[];
  title: string;
}

interface Props {
  article: BlogPost;
}

export function ArticleDetailHeader({ article }: Props) {
  const { articleImgContainer, articleDateContainer, articleDetailTagWrapper } =
    styles;

  const { t } = useTranslation("articles");

  return (
    <>
      {article["main-image"] ? (
        <Image
          src={article["main-image"].url}
          alt={article.name}
          className={articleImgContainer}
          //blurDataURL={img.blurDataURL}
          placeholder="blur"
          priority={true}
          width={100}
          height={100}
        />
      ) : (
        <NotFoundMessage message="Loading..." />
      )}

      <div className={articleDateContainer}>
        <p>{article.date}</p>
        <p>{article.type}</p>
      </div>
      <ArticleHeading heading={t(article.name)} />
      <div className={articleDetailTagWrapper}>
        <ArticleTags tags={article.tagsRef} />
      </div>
    </>
  );
}
