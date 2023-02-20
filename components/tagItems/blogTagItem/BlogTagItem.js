import React from "react";
import styles from "./BlogTagItem.module.scss";

function BlogTagItem({ tag }) {
  const { blogTagItemContainer } = styles;

  return (
    <div className={blogTagItemContainer}>
      <h3>{tag}</h3>
    </div>
  );
}

export default BlogTagItem;
