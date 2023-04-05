import { AuthorCard } from "components/AuthorCard";
import React from "react";
import Image from "next/image";
import { ArticleHeading } from "common/ArticleHeading";
import { NotFoundMessage } from "common/NotFoundMessage";
import styles from "./BrandDetail.module.scss";
import { AuthorType } from "../types/authorType";

interface BrandDetailType {
  image: string;
  type: string;
  date: string;
  name: string;
}

type BrandDetailProps = {
  brandDetail: BrandDetailType;
  author: AuthorType;
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
