import Link from "next/link";
import React from "react";
import styles from "./BlogTagItem.module.scss";

function BlogTagItem({ tag, url }) {
  const { blogTagItemContainer } = styles;

  return (
    <Link href={url} className={blogTagItemContainer}>
      <h3>{tag}</h3>
    </Link>
  );
}

export default BlogTagItem;
