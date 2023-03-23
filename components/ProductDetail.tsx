import styles from "./ProductDetail.module.scss";
import Logo2 from "assets/logos/logo-2.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { ProductInfo } from "components/ProductInfo";
import { InfluencerInfo } from "components/InfluencerInfo";

export interface ProductDetail {
  productPics: { id: number; pic: StaticImageData }[];
  aboutProduct: {
    id: string;
    heading?: string;
    description: string;
  }[];
  price: number;
  deliverDate: string;
  productLabel: string;
}

export interface InfluencerData {
  title: string;
  headerImg: string;
  detail: string;
  secondImg?: string;
  influencerLink?: string;
}

interface Props {
  product: {
    productTitle: string;
    productDate: string;
    productBg: StaticImageData;
    productBgColor: string;
    productDetail: ProductDetail;
  };
  influencerData: InfluencerData;
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
    productDetail,
  } = product;
  const { productLabel } = productDetail;
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
