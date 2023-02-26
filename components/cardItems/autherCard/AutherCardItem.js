import React from "react";
import styles from "./AutherCardItem.module.scss";
import Image from "next/image";
import Link from "next/link";

export function AutherCardItem({ headerImg, title, detail, by }) {
  const { autherCardItemContainer, autherDetailContainer, autherImgContainer } =
    styles;
  return (
    <Link href={by} className={autherCardItemContainer}>
      <div className={autherImgContainer}>
        <Image src={headerImg} alt="auther-img" />
      </div>
      <div className={autherDetailContainer}>
        <h1>{title}</h1>
        <p>{detail}</p>
      </div>
    </Link>
  );
}
