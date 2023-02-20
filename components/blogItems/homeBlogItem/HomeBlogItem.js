import React from "react";
import styles from "./HomeBlogItem.module.scss";
import Image from "next/image";
import commonStyles from "../../../styles/Common.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import BlogTag from "components/tags/blogTag/BlogTag";

function HomeBlogItem({ blogImg, date, type, title, detail, tags, link }) {
  const { t } = useTranslation("blogs");
  const blogTitleT = t(`${title}`);
  const blogDetailT = t(`${detail}`);

  const { flexRowBetweenCenter, flexRowStartCenter, flexColumnBetweenStart } =
    commonStyles;
  const { blogItemTagWrapper } = styles;

  return (
    <Link href={link} className={`${styles.homeBlogItemContainer} `}>
      <div className={`${styles.homeBlogDetail} ${flexColumnBetweenStart} `}>
        <div>
          <div className={`${flexRowBetweenCenter}`}>
            <h1>{date}</h1>
            <h1>{type}</h1>
          </div>
          <h2>{blogTitleT}</h2>
          <p>{blogDetailT}</p>
        </div>
        <div className={blogItemTagWrapper}>
          <BlogTag tags={tags} />
        </div>
      </div>
      <div className={styles.homeBlogImgContainer}>
        <Image src={blogImg} alt="blog-img" />
      </div>
    </Link>
  );
}

export default HomeBlogItem;
