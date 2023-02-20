import React from "react";
import styles from "./HomeProductItem.module.scss";
import commonStyles from "../../../styles/Common.module.scss";
import Image from "next/image";
import Link from "next/link";
function HomeProductItem({
  productBg,
  productImg,
  productBgColor,
  productTitle,
  productDate,
}) {
  return (
    <Link href="/">
      <div
        style={{
          backgroundImage: `url(${productBg.src})`,
        }}
        className={`${styles.homeProductItemContainer} ${commonStyles.flexColumnCenterCenter} ${productBgColor}`}
      >
        <Image src={productImg} alt="product" />
      </div>
      <div className={`${styles.homeProductItemDetail} ${productBgColor}`}>
        <h1>{productTitle}</h1>
        <h2>{productDate}</h2>
      </div>
    </Link>
  );
}

export default HomeProductItem;
