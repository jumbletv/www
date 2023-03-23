import React from "react";
import styles from "components/AuthorCardItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

type Props = {
  headerImg: string;
  title: string;
  detail: string;
  authorLink: string;
};

export function AuthorCardItem({ headerImg, title, detail, authorLink }: Props) {
  const { authorCardItemContainer, authorDetailContainer, authorImgContainer } =
    styles;

  const { t } = useTranslation("article-types");

  return (
    <Link href={authorLink} className={authorCardItemContainer}>
      <div className={authorImgContainer}>
        {headerImg && <Image src={headerImg} alt="author-img" />}
      </div>
      <div className={authorDetailContainer}>
        <h1>{title}</h1>
        <p>{t(detail)}</p>
      </div>
    </Link>
  );
}
