import { BrandItem } from "components/brandItem/BrandItem";
import { StaticImageData } from "next/image";
import React from "react";
import styles from "./Brands.module.scss";

type BrandItemType = {
  id: number;
  name: string;
  link: string;
  image: StaticImageData;
  detail: string;
}

interface BrandsProps {
  brands: BrandItemType[];
}

export function Brands({ brands }: BrandsProps) {
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