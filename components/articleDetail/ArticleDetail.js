import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./ArticleDetail.module.scss";
import Image from "next/image";
import { ArticleTags } from "components/tags/articleTags/ArticleTags";
import { EmbedElement } from "components/embedElement/EmbedElement";
import { InfluencerText } from "common/influencerText/InfluencerText";
import { ArticleList } from "components/lists/ArticleList";
import { AutherCard } from "components/cards/autherCardItem/AutherCard";

export function ArticleDetail({ articleDetail, auther }) {
  const { t } = useTranslation("articles");

  const {
    articleDetailWrapper,
    articleDetailContainer,
    articleImgContainer,
    articleDateContainer,
    mainHeading,
    articleText,
    articleDetailTagWrapper,
    paraLink,
    paraHeading,
    autherCardWrapper,
  } = styles;

  const { completeArticle, img, date, type, tags, title } = articleDetail;

  const renderText = () => {
    const segmenter = new Intl.Segmenter([], {
      granularity: "word",
    });
    if (completeArticle) {
      return completeArticle.map(
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

  const blogTitleT = t(`${title}`);

  return (
    completeArticle && (
      <div className={articleDetailWrapper}>
        <div className={articleDetailContainer}>
          <Image
            src={img}
            alt="blog-img"
            className={articleImgContainer}
            priority={true}
          />
          <div className={articleDateContainer}>
            <h2>{date}</h2>
            <h2>{type}</h2>
          </div>
          <h1 className={mainHeading}> {blogTitleT} </h1>
          <div className={articleDetailTagWrapper}>
            <ArticleTags tags={tags} />
          </div>
          {renderText()}
          <div className={autherCardWrapper}>
            <AutherCard auther={auther} />
          </div>
        </div>
      </div>
    )
  );
}
