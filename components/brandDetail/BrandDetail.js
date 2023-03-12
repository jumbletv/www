import { AutherCard } from "components/cards/autherCardItem/AutherCard";
import React from "react";
import styles from "./BrandDetail.module.scss";
import Image from "next/image";
import { ArticleHeading } from "common/articleHeading/ArticleHeading";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

export function BrandDetail({ brandDetail, auther }) {
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
