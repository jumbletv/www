import {Author} from "types/cms/Author"

export type Brand = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    author: string;
    authorRef?: Author
    'created-by': string;
    'created-on': string;
    date: string;
    body: string;
    'brand-summary': string;
    'main-image': {
      alt: string | null;
      fileId: string;
      url: string;
    };
    'meta-description': string;
    'meta-title': string;
    name: string;
    'published-by': string;
    'published-on': string;
    slug: string;
    'updated-by': string;
    'updated-on': string;
    wordcount: number;
    link?: string;
  }