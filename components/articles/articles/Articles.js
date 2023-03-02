import React from "react";
import { ArticleItem } from "../../articleItems/articleItem/ArticleItem";
import styles from "./Articles.module.scss";
import CircleBtn from "../../../common/circleBtn/CircleBtn";
import { useTranslation } from "next-i18next";

export function Articles({ articlesData, showBtn }) {
  const { noArticleContainer, articlesContainer } = styles;
  const { t } = useTranslation("common");

  if (articlesData?.length === 0) {
    return (
      <div className={noArticleContainer}>
        <h1>{t("no_articles")}</h1>
      </div>
    );
  }

  return (
    <div className={articlesContainer}>
      {articlesData?.map(
        ({ id, img, date, type, detail, tags, title, link }) => (
          <ArticleItem
            id={id}
            key={id}
            img={img}
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
