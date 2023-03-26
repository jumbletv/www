import React from "react";
import { ArticleItem } from "components/ArticleItem";
import styles from "components/ArticlesList.module.scss";
import { CircleBtn } from "common/CircleBtn";
import { useTranslation } from "next-i18next";
import { BlogPost } from "@/types/cms/BlogPost";

export function ArticlesList({ articlesData, showBtn }: { articlesData: BlogPost[], showBtn: boolean }) {
  const { noArticleContainer, articlesContainer } = styles;
  const { t } = useTranslation("common");

  return (
    <div className={articlesContainer}>
      {articlesData?.length > 0 ? (
        articlesData.map(
          (a) => (
            <ArticleItem
              id={a._id}
              key={a._id}
              img={a["main-image"].url}
              date={a.date}
              type={a.typeRef[0].name}
              detail={a["post-summary"]}
              tags={a.tagsRef}
              title={a.name}
              link={a.slug}
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
