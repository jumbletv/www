import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArticleTags } from "components/ArticleTags";
import { ArticleHeading } from "common/ArticleHeading";
import { useTranslation } from "next-i18next";
import styles from "./ArticleDetailHeader.module.scss";
import { NotFoundMessage } from "common/NotFoundMessage";
import { Tag } from "@/types/cms/Tag";

interface ArticleDetail {
  img: StaticImageData;
  date: string;
  type: string;
  tags: Tag[];
  title: string;
}

interface Props {
  articleDetail: ArticleDetail;
}

export function ArticleDetailHeader({ articleDetail }: Props) {
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
          width={100}
          height={100}
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
