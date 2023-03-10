import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./ArticleDetail.module.scss";
import { EmbedElement } from "components/embedElement/EmbedElement";
import { InfluencerText } from "common/influencerText/InfluencerText";
import { ArticleList } from "components/lists/ArticleList";
import { AutherCard } from "components/cards/autherCardItem/AutherCard";
import { ArticleDetailHeader } from "./articleDetailHeader/ArticleDetailHeader";

export function ArticleDetail({ articleDetail, auther }) {
  const { t } = useTranslation("articles");
  const {
    articleDetailWrapper,
    articleDetailContainer,
    articleText,
    paraLink,
    paraHeading,
    autherCardWrapper,
  } = styles;

  const { placeholderArticleContent } = articleDetail;

  const renderText = () => {
    const segmenter = new Intl.Segmenter([], {
      granularity: "word",
    });
    if (placeholderArticleContent) {
      return placeholderArticleContent.map(
        ({ id, para, matchTexts, heading, embed, influencer, list }) => {
          const paraT = t(`${para}`);

          const parts = Array.from(segmenter.segment(paraT)).map(
            (part) => part.segment
          );

          const partsText = parts.map((part) => {
            return matchTexts.map(
              ({ id, matchText, linkText, linkTo }, index) => {
                const matchTextT = t(`${matchText}`);
                const linkTextT = t(`${linkText}`);
                if (part === matchTextT) {
                  return (
                    <Link href={linkTo} key={id} className={paraLink}>
                      {linkTextT}
                    </Link>
                  );
                } else {
                  if (index === matchTexts.length - 1) {
                    return part;
                  }
                }
              }
            );
          });
          return (
            <div key={id}>
              {heading && <h2 className={paraHeading}> {heading} </h2>}
              <p className={articleText}>{partsText}</p>
              {list && <ArticleList list={list} />}
              {influencer && <InfluencerText influencer={influencer} />}
              <EmbedElement embed={embed} />
            </div>
          );
        }
      );
    }
  };

  return (
    placeholderArticleContent && (
      <div className={articleDetailWrapper}>
        <div className={articleDetailContainer}>
          <ArticleDetailHeader articleDetail={articleDetail} />
          {renderText()}
          <div className={autherCardWrapper}>
            <AutherCard auther={auther} />
          </div>
        </div>
      </div>
    )
  );
}
