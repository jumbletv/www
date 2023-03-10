import React from "react";
import styles from "./HomeProductItem.module.scss";
import Image from "next/image";
import Link from "next/link";

export function HomeProductItem({ product }) {
  const { homeProductItemContainer, homeProductItemDetail } = styles;
  const {
    id,
    productBg,
    productImg,
    productBgColor,
    productTitle,
    productDate,
    productLink,
  } = product;
  return (
    <Link href={productLink}>
      <div
        style={{
          backgroundImage: `url(${productBg.src})`,
        }}
        className={`${homeProductItemContainer}  ${productBgColor}`}
      >
        <Image src={productImg} alt="product" priority={id === 1} />
      </div>
      <div className={`${homeProductItemDetail} ${productBgColor}`}>
        <h1>{productTitle}</h1>
        <h2>{productDate}</h2>
      </div>
    </Link>
  );
}
