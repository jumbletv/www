import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./BlogDetail.module.scss";
import Image from "next/image";
import BlogTag from "components/tags/blogTag/BlogTag";
import { EmbedURL } from "components/embedUrl/EmbedURL";
import { InfluencerText } from "common/influencerText/InfluencerText";
import { ArticleList } from "components/lists/ArticleList";
import { AutherCard } from "components/cards/autherCardItem/AutherCard";

function BlogDetail({ blog, auther }) {
  const { t } = useTranslation("blogs");

  const {
    blogDetailWrapper,
    blogDetailContainer,
    blogImgContainer,
    blogDateContainer,
    mainHeading,
    blogText,
    articleDetailBlogWrapper,
    paraLink,
    paraHeading,
    autherCardWrapper,
  } = styles;

  const { completeBlog, blogImg, date, type, tags, title } = blog;

  const renderText = () => {
    const segmenter = new Intl.Segmenter([], {
      granularity: "word",
    });
    if (completeBlog) {
      return completeBlog.map(
        ({ para, matchTexts, heading, embed, influencer, list }, index) => {
          const paraT = t(`${para}`);

          const parts = Array.from(segmenter.segment(paraT)).map(
            (part) => part.segment
          );

          const partsText = parts.map((part) => {
            return matchTexts.map(({ matchText, linkText, linkTo }, index) => {
              const matchTextT = t(`${matchText}`);
              const linkTextT = t(`${linkText}`);
              if (part === matchTextT) {
                return (
                  <Link href={linkTo} key={index} className={paraLink}>
                    {linkTextT}
                  </Link>
                );
              } else {
                if (index === matchTexts.length - 1) {
                  return part;
                }
              }
            });
          });
          return (
            <div key={index}>
              {heading && <h1 className={paraHeading}> {heading} </h1>}
              <p className={blogText}>{partsText}</p>
              {list && <ArticleList list={list} />}
              {influencer && <InfluencerText influencer={influencer} />}
              <EmbedURL embed={embed} />
            </div>
          );
        }
      );
    }
  };

  const blogTitleT = t(`${title}`);

  return (
    completeBlog && (
      <div className={blogDetailWrapper}>
        <div className={blogDetailContainer}>
          <Image
            src={blogImg}
            alt="blog-img"
            className={blogImgContainer}
            priority={true}
          />
          <div className={blogDateContainer}>
            <h1>{date}</h1>
            <h1>{type}</h1>
          </div>
          <h1 className={mainHeading}> {blogTitleT} </h1>
          <div className={articleDetailBlogWrapper}>
            <BlogTag tags={tags} />
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

export default BlogDetail;
