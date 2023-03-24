import { Author } from "./Author";
import { Tag } from "./Tag";
import { Type } from "./Type";

export type BlogPost = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    author: string;
    authorRef?: Author;
    "created-by": string;
    "created-on": string;
    date: string;
    featured: boolean;
    keywords?: string;
    "main-image": {
      alt: any;
      fileId: string;
      url: string;
    };
    "meta-description": string;
    "meta-title": string;
    name: string;
    "post-body": string;
    "post-summary": string;
    "published-by": string;
    "published-on": string;
    "related-posts"?: string[];
    "relatedPostsRef"?: BlogPost[];
    slug: string;
    tags: string[];
    tagsRef?: Tag[];
    "thumbnail-image"?: {
      alt: any;
      fileId: string;
      url: string;
    };
    "type": string;
    "typeRef"?: Type;
    "updated-by": string;
    "updated-on": string;
    wordcount: number;
    link?: string;
  };