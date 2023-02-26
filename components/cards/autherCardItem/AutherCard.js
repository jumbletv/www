import { AutherCardItem } from "components/cardItems/autherCard/AutherCardItem";
import React from "react";
import styles from "./AutherCard.module.scss";

export function AutherCard({ auther }) {
  return auther?.map(({ id, title, detail, headerImg, by }) => (
    <AutherCardItem
      key={id}
      by={by}
      title={title}
      detail={detail}
      headerImg={headerImg}
    />
  ));
}
