import React from "react";
import HomeProductItem from "../../productItems/homeProductItem/HomeProductItem";
import CircleBtn from "../../../common/circleBtn/CircleBtn";
import styles from "./HomeProducts.module.scss";

function HomeProducts({ productsData, showBtn }) {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.homeProductsContainer}>
        {productsData?.map(
          ({
            id,
            productBg,
            productImg,
            productBgColor,
            productTitle,
            productDate,
            productLink,
          }) => (
            <HomeProductItem
              key={id}
              productBg={productBg}
              productImg={productImg}
              productBgColor={productBgColor}
              productTitle={productTitle}
              productDate={productDate}
              productLink={productLink}
            />
          )
        )}
      </div>

      {showBtn && <CircleBtn />}
    </div>
  );
}

export default HomeProducts;
