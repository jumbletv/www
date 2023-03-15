import React from "react";
import styles from "./AutherCardItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export function AutherCardItem({ headerImg, title, detail, autherLink }) {
  const { autherCardItemContainer, autherDetailContainer, autherImgContainer } =
    styles;

  const { t } = useTranslation("article-types");

  return (
    <Link href={autherLink} className={autherCardItemContainer}>
      <div className={autherImgContainer}>
        {headerImg && <Image src={headerImg} alt="auther-img" />}
      </div>
      <div className={autherDetailContainer}>
        <h1>{title}</h1>
        <p>{t(detail)}</p>
      </div>
    </Link>
  );
}
