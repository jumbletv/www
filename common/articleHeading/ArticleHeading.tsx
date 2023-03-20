import React from "react";
import styles from "./ArticleHeading.module.scss";

interface Props {
  heading: string;
}

export function ArticleHeading({ heading }: Props) {
  const { articleHeading } = styles;
  return <h1 className={articleHeading}>{heading}</h1>;
}
