import BlogTagItem from "components/tagItems/blogTagItem/BlogTagItem";
import React from "react";
import styles from "./BlogTag.module.scss";

function BlogTag({ tags }) {
  const { blogTagContainer } = styles;
  return (
    <div className={blogTagContainer}>
      {tags?.map(({ id, tag, url }) => (
        <BlogTagItem key={id} tag={tag} url={url} />
      ))}
    </div>
  );
}

export default BlogTag;
