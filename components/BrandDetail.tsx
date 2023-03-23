import { AuthorCard } from "components/AuthorCard";
import React from "react";
import Image from "next/image";
import { ArticleHeading } from "common/ArticleHeading";
import { NotFoundMessage } from "common/NotFoundMessage";
import styles from "./BrandDetail.module.scss";

interface BrandDetailType {
  image: string;
  type: string;
  date: string;
  name: string;
}

interface authorType {
  id: number;
  name: string;
  title: string;
  headerImg: string;
  detail: string;
  profilePic: string;
  description: string;
  authorLink: string;
  twitterLink: string;
  linkedinLink: string;
};

type BrandDetailProps = {
  brandDetail: BrandDetailType;
  author: authorType;
};

export function BrandDetail({ brandDetail, author }: BrandDetailProps) {
  const {
    brandDetailWrapper,
    brandDetailContainer,
    brandDateContainer,
    brandImgContainer,
    mainHeading,
    authorCardWrapper,
  } = styles;

  const { image, type, date, name } = brandDetail;

  return author.authorLink && brandDetail ? (
    <div className={brandDetailWrapper}>
      <div className={brandDetailContainer}>
        <Image
          src={image}
          alt="blog-img"
          className={brandImgContainer}
          priority={true}
        />
        <div className={brandDateContainer}>
          <p>{date}</p>
          <p>{type}</p>
        </div>
        <ArticleHeading heading={name} />
        <div className={authorCardWrapper}>
          <AuthorCard author={author} />
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMessage message="Loading..." />
  );
}
