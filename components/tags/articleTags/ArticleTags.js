import Link from "next/link";
import React from "react";
import styles from "./ArticleTags.module.scss";

export function ArticleTags({ tags }) {
  const { articleTagsContainer } = styles;
  return (
    <div className={articleTagsContainer}>
      {tags?.map(({ id, tag, url }) => (
        <Link key={id} href={url}>
          {tag}
        </Link>
      ))}
    </div>
  );
}
