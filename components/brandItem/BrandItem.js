import Link from "next/link";
import React from "react";
import styles from "./BrandItem.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export function BrandItem({ name, link, image, detail }) {
  const { brandItemContainer, brandDetail, brandImgContainer } = styles;

  const { t } = useTranslation("brands");

  return (
    <Link href={link} className={brandItemContainer}>
      <div className={brandDetail}>
        <h1>{name}</h1>
        <p>{t(detail)}</p>
      </div>
      <div className={brandImgContainer}>
        <Image src={image} alt="brand-img" />
      </div>
    </Link>
  );
}
