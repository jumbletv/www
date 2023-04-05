import React from "react";
import { HomeProductItem } from "components/HomeProductItem";
import { CircleBtn } from "common/CircleBtn";
import styles from "./HomeProducts.module.scss";
import {Sale} from "@/types";

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
  sales: Sale[];
  showBtn?: boolean;
};

export function HomeProducts({ sales, showBtn }: Props) {
  const { homeProductsWrapper, homeProductsContainer } = styles;

  return (
    <div className={homeProductsWrapper}>
      <div className={homeProductsContainer}>
        {sales?.map((sale) => (
          <HomeProductItem key={sale._id} sale={sale} />
        ))}
      </div>
      {showBtn && <CircleBtn link="" />}
    </div>
  );
}
