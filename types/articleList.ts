import { StaticImageData } from "next/image";
import { Tag } from "../components/tags/articleTags/ArticleTags";
import { AuthorType } from "./authorType";
import { authorDataTypes } from "./introHeader";

interface tagTypes {
  id: number;
  tag: string;
  url: string;
}

export interface ArticleDataTypes {
  id: number;
  img: StaticImageData;
  date: string;
  type: string;
  by: string;
  title: string;
  link: string;
  detail: string;
  tags: Tag[];
}

export interface articleListTypes {
  articlesData: Array<ArticleDataTypes>;
  showBtn?: boolean;
}

export interface ArticleDetailTypes {
  articleDetail: ArticleDataTypes;
  author: AuthorType;
}

// Valeus

export const articleDataValues: ArticleDataTypes = {
  id: 1,
  img: undefined,
  date: "",
  type: "",
  by: "",
  title: "",
  link: "",
  detail: "",
  tags: [],
};
