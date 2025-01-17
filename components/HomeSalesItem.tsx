import React from "react";
import styles from "./HomeSalesItem.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Sale } from "@/types";

interface Props {
  sale: Sale;
}

export function HomeSalesItem({ sale }: Props) {
  const { homeProductItemContainer, homeProductItemDetail } = styles;

  return (
    <Link href={"/sale/" + sale.slug}>
      <div
        style={{
          backgroundImage: `url(${sale["bg-pattern"]})`,
        }}
        className={`${homeProductItemContainer}  ${sale["bg-color"]}`}
      >
        <Image
          src={sale["main-product-photo"].url}
          alt={sale.name} /* priority={id === 1} */
          width={300}
          height={300}
        />
      </div>
      <div className={`${homeProductItemDetail} ${sale["bg-color"]}`}>
        <h1>{sale.name}</h1>
        <h2>{sale["sell-on"]}</h2>
      </div>
    </Link>
  );
}
