import { ProductSlider } from "common/carousel/Carousel";
import React, { Fragment } from "react";
import styles from "./ProductInfo.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export function ProductInfo({ productDetail, productBg, productBgColor }) {
  const {
    carouselWrapper,
    aboutProductContainer,
    deliveryContainer,
    priceContainer,
    divider,
  } = styles;

  const { productPics, aboutProduct, price, deliverDate } = productDetail;
  const { t } = useTranslation("products");

  return (
    <div className={carouselWrapper}>
      <ProductSlider
        productPics={productPics}
        productBg={productBg}
        productBgColor={productBgColor}
      />
      <div className={aboutProductContainer}>
        <h4>About the sale</h4>
        {aboutProduct?.map(({ id, heading, description }) => (
          <Fragment key={id}>
            {heading && <h2>{heading}</h2>}
            <p>{t(description)}</p>
          </Fragment>
        ))}
        <div className={divider} />
        <div className={deliveryContainer}>
          <h4>Estimated Delivery</h4>
          <p>{deliverDate}</p>
        </div>
        <div className={divider} />
        <div className={priceContainer}>
          <h4>Price Tag</h4>
          <p>€ {price}</p>
        </div>
        <Link href="/get-in-touch">Get Notified</Link>
      </div>
    </div>
  );
}
