import React from "react";
import HomeProductItem from "../../productItems/homeProductItem/HomeProductItem";
import styles from "./HomeProducts.module.scss";
import Product1 from "../../../assets/products/product-1.webp";
import Product2 from "../../../assets/products/product-2.webp";
import Product3 from "../../../assets/products/product-3.webp";
import ProductBg1 from "../../../assets/products/product-bg-1.png";
import ProductBg2 from "../../../assets/products/product-bg-2.webp";
import ProductBg3 from "../../../assets/products/product-bg-3.webp";
import CircleBtn from "../../../common/circleBtn/CircleBtn";
import commonStyles from "../../../styles/Common.module.scss";

const { lightPinkBg, lightBlueBg, darkBlueBg } = commonStyles;

const homeProductsData = [
  {
    id: 1,
    productBg: ProductBg1,
    productImg: Product1,
    productBgColor: lightPinkBg,
    productTitle: "puple de vie",
    productDate: "december 7, 2022",
  },
  {
    id: 2,
    productBg: ProductBg2,
    productImg: Product2,
    productBgColor: lightBlueBg,
    productTitle: "modologie",
    productDate: "october 27, 2022",
  },
  {
    id: 3,
    productBg: ProductBg3,
    productImg: Product3,
    productBgColor: darkBlueBg,
    productTitle: "danacare",
    productDate: "october 7, 2022",
  },
];

function HomeProducts() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.homeProductsContainer}>
        {homeProductsData.map(
          ({
            id,
            productBg,
            productImg,
            productBgColor,
            productTitle,
            productDate,
          }) => (
            <HomeProductItem
              key={id}
              productBg={productBg}
              productImg={productImg}
              productBgColor={productBgColor}
              productTitle={productTitle}
              productDate={productDate}
            />
          )
        )}
      </div>

      <CircleBtn />
    </div>
  );
}

export default HomeProducts;
