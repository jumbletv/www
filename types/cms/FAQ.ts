import {Tag} from "@/types/cms/Tag";
import {Type} from "@/types/cms/Type";
import {Author} from "@/types/cms/Author";

export type FAQ = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    author: string;
    authorRef?: Author;
    "created-by": string;
    "created-on": string;
    answer: string;
    category: string;
    featured: boolean;
    "meta-answer": string;
    "meta-description": string;
    "meta-title": string;
    name: string;
    number?: number;
    "published-by": string;
    "published-on": string;
    question: string;
    slug: string;
    tags?: string[];
    tagsRef?: Tag[];
    type: string;
    typeRef?: Type;
    "updated-by": string;
    "updated-on": string;
    link?: string;
  }