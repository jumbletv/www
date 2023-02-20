import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "./BlogDetail.module.scss";
import InstaEmbed from "common/instaEmbed/InstaEmbed";
import Image from "next/image";
import BlogTag from "components/tags/blogTag/BlogTag";

function BlogDetail({ blog }) {
  const { t } = useTranslation("blogs");

  const {
    blogDetailWrapper,
    blogDetailContainer,
    socialMediaEmbedBox,
    blogImg,
    blogDateContainer,
    mainHeading,
    blogText,
  } = styles;

  const renderText = () => {
    const segmenter = new Intl.Segmenter([], {
      granularity: "word",
    });
    if (blog.completeBlog) {
      return blog.completeBlog.map((paragraph) => {
        const paraT = t(`${paragraph.para}`);

        const parts = Array.from(segmenter.segment(paraT)).map(
          (part) => part.segment
        );

        const partsText = parts.map((part, index) => {
          return paragraph.matchTexts.map((text, index) => {
            const matchTextT = t(`${text.matchText}`);
            const linkTextT = t(`${text.linkText}`);
            if (part === matchTextT) {
              return (
                <Link href={text.linkTo} key={index} style={{ color: "blue" }}>
                  {linkTextT}
                </Link>
              );
            } else {
              if (index === paragraph.matchTexts.length - 1) {
                return part;
              }
            }
          });
        });
        return (
          <div key={Math.random()}>
            {paragraph.heading && <h1> {paragraph.heading} </h1>}
            <p className={blogText}>{partsText}</p>
            {paragraph.embedUrl && (
              <div className={socialMediaEmbedBox}>
                <InstaEmbed url={paragraph.embedUrl} />
              </div>
            )}
          </div>
        );
      });
    }
  };

  const blogTitleT = t(`${blog?.title}`);

  return (
    blog.completeBlog && (
      <div className={blogDetailWrapper}>
        <div className={blogDetailContainer}>
          <Image src={blog.blogImg} alt="blog-img" className={blogImg} />
          <div className={blogDateContainer}>
            <h1>{blog?.date}</h1>
            <h1>{blog?.type}</h1>
          </div>
          <h1 className={mainHeading}> {blogTitleT} </h1>
          <BlogTag tags={blog?.tags} />
          {renderText()}
        </div>
      </div>
    )
  );
}

export default BlogDetail;
