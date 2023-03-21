import styles from "./ProductDetail.module.scss";
import Logo2 from "assets/logos/logo-2.svg";
import Image from "next/image";
import Link from "next/link";

import { ProductInfo } from "./productInfo/ProductInfo";
import { InfluencerInfo } from "./influencerInfo/InfluencerInfo";

interface Props {
  product: {
    productTitle: string;
    productDate: string;
    productBg: string;
    productBgColor: string;
    productDetail: {
      productLabel: string;
    };
  };
  influencerData: {
    title: string;
    headerImg: string;
    influencerLink: string;
  };
}

export function ProductDetail({ product, influencerData }: Props) {
  const {
    productDetailHeader,
    productLogoBox,
    productHeading,
    productInfoContainer,
    productInfoWrapper,
    influencerContainer,
    nextSale,
  } = styles;
  const {
    productTitle,
    productDate,
    productBg,
    productBgColor,
    productDetail: { productLabel },
  } = product;
  const { productDetail } = product;
  const { title, headerImg, influencerLink } = influencerData;

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
          <Link href={influencerLink} className={influencerContainer}>
            <p> {title} </p>
            <Image src={headerImg} alt="influencer-pic" />
          </Link>
        </div>
      </div>
      <ProductInfo
        productDetail={productDetail}
        productBg={productBg}
        productBgColor={productBgColor}
      />
      <InfluencerInfo
        influencerData={influencerData}
        productTitle={productTitle}
      />
    </>
  );
}
