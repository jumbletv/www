import React from "react";
import { ArticleListItem } from "components/listItem/ArticleListItem";
import styles from "./ArticleList.module.scss";

interface ListProps {
  list: {
    lists: {
      id: number;
      listItem: {
        title: string;
        detail: string;
        id: number;
        thumbnail: {
          blurDataURL: string;
          src: string;
        };
        category: string;
        date: string;
      };
    }[];
    listHeading: string;
  };
}

export function ArticleList({ list }: ListProps) {
  const { lists, listHeading } = list;

  const { articleListContainer } = styles;

  return (
    <div className={articleListContainer}>
      <h1>{listHeading}</h1>
      {lists?.map(({ id, listItem }) => (
        <ArticleListItem listItem={listItem} key={id} />
      ))}
    </div>
  );
}