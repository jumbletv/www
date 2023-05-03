import React from "react";
import { HomeSalesItem } from "@/components/HomeSalesItem";
import { CircleBtn } from "common/CircleBtn";
import styles from "./HomeSales.module.scss";
import { Sale } from "@/types";

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
  featuredSales: Sale[];
  showBtn?: boolean;
};

export function HomeSales({ featuredSales, showBtn }: Props) {
  const { homeProductsWrapper, homeProductsContainer } = styles;

  return (
    <div className={homeProductsWrapper}>
      <div className={homeProductsContainer}>
        {featuredSales?.map((sale) => (
          <HomeSalesItem key={sale._id} sale={sale} />
        ))}
      </div>
      {showBtn && <CircleBtn link="" />}
    </div>
  );
}
