export type Brand = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    author: string;
    'created-by': string;
    'created-on': Date;
    date: Date;
    body: string;
    'brand-summary': string;
    'main-image': {
      alt: string;
      fileId: string;
      url: string;
    };
    'meta-description': string;
    'meta-title': string;
    name: string;
    'published-by': string;
    'published-on': Date;
    slug: string;
    'updated-by': string;
    'updated-on': Date;
    wordcount: number;
  }