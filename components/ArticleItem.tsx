import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ArticleTags } from "components/ArticleTags";
import { ArticleHeading } from "common/ArticleHeading";
import { Tag } from "@/types/cms/Tag";

interface Props {
  id: string;
  img: string;
  date: string;
  type: string;
  title: string;
  detail: string;
  tags: Tag[];
  link: string;
}

export function ArticleItem({
  id,
  img,
  date,
  type,
  title,
  detail,
  tags,
  link,
}: Props) {
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

  const displayDate = new Date(date);
  const year = displayDate.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
    displayDate,
  );
  const day = displayDate.getDate();

  return (
    <div className={`${articleItemContainer} ${typeBg}`}>
      <div className={articleItemDetail}>
        <Link href={link}>
          <div className={`${dateContainer}`}>
            <p>{month} {day}, {year}</p>
            <p>{type}</p>
          </div>
          <ArticleHeading heading={t(title)} />
          <h2>{t(detail)}</h2>
        </Link>
        <div className={articleItemTagWrapper}>
          <ArticleTags tags={tags} />
        </div>
      </div>
      <Link href={link} className={articleItemImgContainer}>
        <Image src={img} fill alt={title} /* priority={_id === 1} */ />
      </Link>
    </div>
  );
}
