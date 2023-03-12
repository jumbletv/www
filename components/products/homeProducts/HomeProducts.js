import React from "react";
import { HomeProductItem } from "../../productItems/homeProductItem/HomeProductItem";
import { CircleBtn } from "../../../common/circleBtn/CircleBtn";
import styles from "./HomeProducts.module.scss";

function HomeProducts({ productsData, showBtn }) {
  const { homeProductsWrapper, homeProductsContainer } = styles;

  return (
    <div className={homeProductsWrapper}>
      <div className={homeProductsContainer}>
        {productsData?.map((product) => (
          <HomeProductItem key={product.id} product={product} />
        ))}
      </div>
      {showBtn && <CircleBtn />}
    </div>
  );
}

export default HomeProducts;
