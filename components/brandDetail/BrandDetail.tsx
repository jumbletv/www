import { AutherCard } from "components/cards/autherCardItem/AutherCard";
import React from "react";
import Image from "next/image";
import { ArticleHeading } from "common/articleHeading/ArticleHeading";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";
import styles from "./BrandDetail.module.scss";

interface BrandDetailType {
  image: string;
  type: string;
  date: string;
  name: string;
}

type AutherType = {
  id: number;
  name: string;
  profilePic: string;
  description: string;
  autherLink: string;
  twitterLink: string;
  linkedinLink: string;
};

type BrandDetailProps = {
  brandDetail: BrandDetailType;
  auther: AutherType;
};

export function BrandDetail({ brandDetail, auther }: BrandDetailProps) {
  const {
    brandDetailWrapper,
    brandDetailContainer,
    brandDateContainer,
    brandImgContainer,
    mainHeading,
    autherCardWrapper,
  } = styles;

  const { image, type, date, name } = brandDetail;

  return auther.autherLink && brandDetail ? (
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
        <div className={autherCardWrapper}>
          <AutherCard auther={auther} />
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMessage message="Loading..." />
  );
}
