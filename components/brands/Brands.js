import { BrandItem } from "components/brandItem/BrandItem";
import React from "react";
import styles from "./Brands.module.scss";

export function Brands({ brands }) {
  const { brandsContainer } = styles;

  return (
    <div className={brandsContainer}>
      {brands.map(({ id, name, link, image, detail }) => (
        <BrandItem
          key={id}
          name={name}
          link={link}
          image={image}
          detail={detail}
        />
      ))}
    </div>
  );
}
