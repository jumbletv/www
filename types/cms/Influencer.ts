export type Influencer = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    author: string;
    'created-by': string;
    'created-on': Date;
    date: Date;
    bio: string;
    featured: boolean;
    image: {
      alt: string;
      fileId: string;
      url: string;
    };
    'meta-description': string;
    name: string;
    profilPic: {
      alt: unknown;
      fileId: string;
      url: string;
    };
    'published-by': string;
    'published-on': Date;
    slug: string;
    'updated-by': string;
    'updated-on': Date;
  }