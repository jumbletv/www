export type Influencer = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    'created-by': string;
    'created-on': string;
    bio: string;
    featured: boolean;
    image: {
      alt: any;
      fileId: string;
      url: string;
    };
    'meta-description': string;
    name: string;
    "profil-pic": {
      alt: unknown;
      fileId: string;
      url: string;
    };
    'published-by': string;
    'published-on': string;
    slug: string;
    'updated-by': string;
    'updated-on': string;
    link?: string;
  }