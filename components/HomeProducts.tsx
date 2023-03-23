import React from "react";
import { HomeProductItem } from "components/HomeProductItem";
import { CircleBtn } from "common/CircleBtn";
import styles from "./HomeProducts.module.scss";

type Product = {
  id: number;
  productBg: {
    src: string;
  };
  productImg: string;
  productBgColor: string;
  productTitle: string;
  productDate: string;
  productLink: string;
  productDetail: {
    productLabel: string;
  };
};

type Props = {
  productsData: Product[];
  showBtn: boolean;
}

function HomeProducts({ productsData, showBtn }: Props) {
  const { homeProductsWrapper, homeProductsContainer } = styles;

  return (
    <div className={homeProductsWrapper}>
      <div className={homeProductsContainer}>
        {productsData?.map((product) => (
          <HomeProductItem key={product.id} product={product} />
        ))}
      </div>
      {showBtn && <CircleBtn link="" />}
    </div>
  );
}

export default HomeProducts;
