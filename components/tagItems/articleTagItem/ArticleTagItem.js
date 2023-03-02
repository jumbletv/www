import Link from "next/link";
import React from "react";
import styles from "./ArticleTagItem.module.scss";

export function ArticleTagItem({ tag, url }) {
  const { articleItemContainer } = styles;

  return (
    <Link href={url} className={articleItemContainer}>
      <h3>{tag}</h3>
    </Link>
  );
}
