export type CacheSale = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    author: string;
    createdBy: string;
    createdOn: Date;
    date: Date;
    availability: string;
    bgColor: string;
    bgPattern: string;
    brandName: string;
    condition: string;
    estimatedDelivery: Date;
    featured: boolean;
    gtin13: string;
    influencer: string;
    mainProductPhoto: {
      alt: any;
      fileId: string;
      url: string;
    };
    mainProductPhotoList: {
      alt: any;
      fileId: string;
      url: string;
    }[];
    metaDescription: string;
    motif: {
      alt: any;
      fileId: string;
      url: string;
    };
    name: string;
    price: string;
    priceCurrency: string;
    productDescription: string;
    productName: string;
    productSynopsys: string;
    publishedBy: string;
    publishedOn: Date;
    ratingValue: string;
    relatedPosts: string[];
    reviewCount: string;
    sellOn: Date;
    sku: string;
    slug: string;
    updatedBy: string;
    updatedOn: Date;
  }
  