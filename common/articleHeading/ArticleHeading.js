import React from "react";
import styles from "./ArticleHeading.module.scss";

export function ArticleHeading({ heading }) {
  const { articleHeading } = styles;
  return <h1 className={articleHeading}>{heading}</h1>;
}
