export type Product = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    'created-by': string;
    'created-on': string;
    name: string;
    slug: string;
    'main-image': {
      alt: any;
      fileId: string;
      url: string;
    };
    'meta-title': string;
    'meta-description': string;
    'brand': string;
    'product-description': string;
    'product-synopsis': string;
    sku: string;
    gtin13: string;
    price: string;
    condition: string;
    availability: string;
    'price-currency': string;
    'rating-value': string;
    'review-count': string;
    'published-by': string;
    'published-on': string;
    'updated-by': string;
    'updated-on': string;
    link?: string;
  }