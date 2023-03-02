import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ArticleTags } from "components/tags/articleTags/ArticleTags";

export function ArticleItem({
  id,
  img,
  date,
  type,
  title,
  detail,
  tags,
  link,
}) {
  const { t } = useTranslation("articles");

  const {
    articleItemTagWrapper,
    dateContainer,
    articleItemContainer,
    articleItemDetail,
    greenBg,
    blueBg,
    articleItemImgContainer,
  } = styles;

  const typeBg = type === "editorials" ? blueBg : greenBg;

  return (
    <div className={`${articleItemContainer} ${typeBg}`}>
      <div className={articleItemDetail}>
        <Link href={link}>
          <div className={`${dateContainer}`}>
            <h1>{date}</h1>
            <h1>{type}</h1>
          </div>
          <h2>{t(title)}</h2>
          <p>{t(detail)}</p>
        </Link>
        <div className={articleItemTagWrapper}>
          <ArticleTags tags={tags} />
        </div>
      </div>
      <div className={articleItemImgContainer}>
        <Link href={link}>
          <Image src={img} alt="blog-img" priority={id === 1} />
        </Link>
      </div>
    </div>
  );
}
