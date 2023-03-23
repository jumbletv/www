import Link from "next/link";
import React from "react";
import styles from "components/ArticleTags.module.scss";

export interface Tag {
  id: string;
  tag: string;
  url: string;
}

interface Props {
  tags: Tag[];
}

export function ArticleTags({ tags }: Props) {
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
