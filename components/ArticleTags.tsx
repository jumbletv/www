import Link from "next/link";
import React from "react";
import styles from "components/ArticleTags.module.scss";
import {Tag} from "@/types/cms/Tag";

interface Props {
  tags: Tag[];
}

export function ArticleTags({ tags }: Props) {
  const { articleTagsContainer } = styles;

  return (
    <div className={articleTagsContainer}>
      {tags?.map((t: Tag) => (
        <Link key={t._id} href={"/tag/" + t.slug}>
          {t.name}
        </Link>
      ))}
    </div>
  );
}
