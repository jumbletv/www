import React from "react";
import styles from "./HomeBlogItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import BlogTag from "components/tags/blogTag/BlogTag";

function HomeBlogItem({ id, blogImg, date, type, title, detail, tags, link }) {
  const { t } = useTranslation("blogs");

  const {
    blogItemTagWrapper,
    dateContainer,
    homeBlogItemContainer,
    homeBlogDetail,
    greenBg,
    blueBg,
  } = styles;

  const typeBg = type === "editorials" ? blueBg : greenBg;

  return (
    <div className={`${homeBlogItemContainer} ${typeBg}`}>
      <div className={homeBlogDetail}>
        <Link href={link}>
          <div className={`${dateContainer}`}>
            <h1>{date}</h1>
            <h1>{type}</h1>
          </div>
          <h2>{t(title)}</h2>
          <p>{t(detail)}</p>
        </Link>
        <div className={blogItemTagWrapper}>
          <BlogTag tags={tags} />
        </div>
      </div>
      <div className={styles.homeBlogImgContainer}>
        <Link href={link}>
          <Image src={blogImg} alt="blog-img" priority={id === 1} />
        </Link>
      </div>
    </div>
  );
}

export default HomeBlogItem;
