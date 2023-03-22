import { authorDataTypes } from "./introHeader";

interface tagTypes {
  id: number;
  tag: string;
  url: string;
}

export interface articleDataTypes {
  id: number;
  img: string;
  date: string;
  type: string;
  by: string;
  title: string;
  link: string;
  detail: string;
  tags: Array<tagTypes>;
}

export interface articleListTypes {
  articlesData: Array<articleDataTypes>;
  showBtn?: boolean;
}

export interface articleDetailTypes {
  articleDetail: articleDataTypes;
  author: authorDataTypes;
}

// Valeus

export const articleDataValues = {
  id: 1,
  img: "",
  date: "",
  type: "",
  by: "",
  title: "",
  link: "",
  detail: "",
  tags: [{ id: 1, tag: "", url: "" }],
};
