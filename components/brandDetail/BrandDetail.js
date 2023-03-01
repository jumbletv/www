import { AutherCard } from "components/cards/autherCardItem/AutherCard";
import React from "react";
import styles from "./BrandDetail.module.scss";
import Image from "next/image";

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

  return (
    auther.autherLink &&
    brandDetail && (
      <div className={brandDetailWrapper}>
        <div className={brandDetailContainer}>
          <Image
            src={image}
            alt="blog-img"
            className={brandImgContainer}
            priority={true}
          />
          <div className={brandDateContainer}>
            <h2>{date}</h2>
            <h2>{type}</h2>
          </div>
          <h1 className={mainHeading}> {name} </h1>

          <div className={autherCardWrapper}>
            <AutherCard auther={auther} />
          </div>
        </div>
      </div>
    )
  );
}
