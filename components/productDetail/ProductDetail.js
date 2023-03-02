import React, { Fragment } from "react";
import styles from "./ProductDetail.module.scss";
import Logo2 from "assets/logos/logo-2.svg";
import Image from "next/image";
import Link from "next/link";
import Carousel from "common/carousel/Carousel";
import Marquee from "react-fast-marquee";
import logo from "assets/logos/logo-3.svg";
import { useTranslation } from "next-i18next";

export function ProductDetail({ product, influencerData }) {
  const {
    productDetailHeader,
    productLogoBox,
    productHeading,
    productInfoContainer,
    productInfoWrapper,
    influencerContainer,
    nextSale,
    carouselWrapper,
    aboutProductContainer,
    deliveryContainer,
    priceContainer,
    divider,
    influencerDetailContainer,
    influencerInfoContainer,
    marqueeContainer,
    influencerText,
    logoBox,
    logoContainer,
    influencerImgContainer,
  } = styles;

  const {
    productTitle,
    productDate,
    productBg,
    productBgColor,
    productDetail: {
      productLabel,
      productPics,
      aboutProduct,
      price,
      deliverDate,
    },
  } = product;

  const { title, headerImg, influencerLink, detail } = influencerData;

  const logoArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, , 9];
  const { t } = useTranslation("article-types");

  return (
    <>
      <div className={productDetailHeader}>
        <div className={productLogoBox}>
          <Image src={Logo2} alt="logo-2" />
        </div>
        <div className={productHeading}>
          <h1> {productTitle} </h1>
          <h2> {productLabel} </h2>
        </div>
      </div>
      <div className={productInfoWrapper}>
        <div className={productInfoContainer}>
          <button>Watch</button>
          <h3>
            <span className={nextSale}>Next sale on</span> {productDate}
          </h3>
        </div>
        <div className={productInfoContainer}>
          <h3>PRESENTED BY</h3>
          <div className={influencerContainer}>
            <Link href={influencerLink}> {title} </Link>
            <Link href={influencerLink}>
              <Image src={headerImg} alt="influencer-pic" />
            </Link>
          </div>
        </div>
      </div>
      <div className={carouselWrapper}>
        <Carousel
          productPics={productPics}
          productBg={productBg}
          productBgColor={productBgColor}
        />
        <div className={aboutProductContainer}>
          <h1>About the sale</h1>
          {aboutProduct?.map(({ id, heading, description }) => (
            <Fragment key={id}>
              {heading && <h2>{heading}</h2>}
              <p>{description}</p>
            </Fragment>
          ))}
          <div className={divider} />
          <div className={deliveryContainer}>
            <h2>Estimated Delivery</h2>
            <p>{deliverDate}</p>
          </div>
          <div className={divider} />
          <div className={priceContainer}>
            <h2>Price Tag</h2>
            <p>€ {price}</p>
          </div>
          <Link href="/get-in-touch">Get Notified</Link>
        </div>
      </div>
      <div className={influencerDetailContainer}>
        <div className={influencerInfoContainer}>
          <div className={marqueeContainer}>
            <Marquee speed={70} gradient={false}>
              <h1>Jumble X {productTitle}</h1>
            </Marquee>
          </div>
          <div className={influencerText}>
            <h1> {title} </h1>
            <p>{t(detail)}</p>
          </div>
          <div className={logoContainer}>
            {logoArr.map((arrItem) => (
              <div className={logoBox} key={arrItem}>
                <Image src={logo} alt="logo" />
              </div>
            ))}
          </div>
        </div>
        <div className={influencerImgContainer}>
          <Image src={headerImg} alt="influencer-pic" />
        </div>
      </div>
    </>
  );
}
