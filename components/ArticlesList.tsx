import React from "react";
import { ArticleItem } from "components/ArticleItem";
import styles from "components/ArticlesList.module.scss";
import { CircleBtn } from "common/CircleBtn";
import { useTranslation } from "next-i18next";
import { articleListTypes } from "types/articleList";

export function ArticlesList({ articlesData, showBtn }: articleListTypes) {
  const { noArticleContainer, articlesContainer } = styles;
  const { t } = useTranslation("common");

  return (
    <div className={articlesContainer}>
      {articlesData?.length > 0 ? (
        articlesData.map(
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
        )
      ) : (
        <div className={noArticleContainer}>
          <h1>{t("no_articles")}</h1>
        </div>
      )}
      {showBtn && <CircleBtn link="/the-jumblog/page/1" />}
    </div>
  );
}
