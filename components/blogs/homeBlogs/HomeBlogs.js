import React from "react";
import HomeBlogItem from "../../blogItems/homeBlogItem/HomeBlogItem";
import styles from "./HomeBlogs.module.scss";
import CircleBtn from "../../../common/circleBtn/CircleBtn";
import { useTranslation } from "next-i18next";

function HomeBlog({ homeBlogData, showBtn }) {
  const { noArticleContainer, homeBlogContainer } = styles;
  const { t } = useTranslation("common");

  if (homeBlogData?.length === 0) {
    return (
      <div className={noArticleContainer}>
        <h1>{t("no_articles")}</h1>
      </div>
    );
  }

  return (
    <div className={homeBlogContainer}>
      {homeBlogData?.map(
        ({ id, blogImg, date, type, detail, tags, title, link }) => (
          <HomeBlogItem
            id={id}
            key={id}
            blogImg={blogImg}
            date={date}
            type={type}
            detail={detail}
            tags={tags}
            title={title}
            link={link}
          />
        )
      )}
      {showBtn && <CircleBtn />}
    </div>
  );
}

export default HomeBlog;
