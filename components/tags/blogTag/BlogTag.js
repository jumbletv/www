import BlogTagItem from "components/tagItems/blogTagItem/BlogTagItem";
import React from "react";
import styles from "./BlogTag.module.scss";

function BlogTag({ tags }) {
  const { blogTagContainer } = styles;
  return (
    <div className={blogTagContainer}>
      {tags?.map(({ id, tag }) => (
        <BlogTagItem key={id} tag={tag} />
      ))}
    </div>
  );
}

export default BlogTag;
