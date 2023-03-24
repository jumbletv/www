import {Influencer} from "@/types/cms/Influencer";
import {BlogPost} from "@/types/cms/BlogPost";

export type Sale = {
    _archived: boolean;
    _cid: string;
    _draft: boolean;
    _id: string;
    "created-by": string;
    "created-on": string;
    availability: string;
    "bg-color": string;
    "bg-pattern": string;
    "brand-name": string;
    condition: string;
    "estimated-delivery": string;
    featured: boolean;
    gtin13?: string;
    influencer?: string;
    influencerRef?: Influencer;
    "link-to-player"?: string;
    "main-product-photo": {
      alt: any;
      fileId: string;
      url: string;
    };
    "main-product-photo-list": {
      alt: any;
      fileId: string;
      url: string;
    }[];
    "meta-description": string;
    motif?: {
      alt: any;
      fileId: string;
      url: string;
    };
    name: string;
    price: string;
    "price-currency": string;
    "product-description": string;
    "product-name": string;
    "product-synopsys": string;
    "published-by": string;
    "published-on": string;
    "rating-value": string;
    "related-posts"?: string[];
    relatedPostsRef?: BlogPost[];
    "review-count": string;
    "sell-on": string;
    sku?: string;
    slug: string;
    "updated-by": string;
    "updated-on": string;
    link?: string;
  }
  