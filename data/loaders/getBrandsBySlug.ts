import Brands from 'data/cms/Brands.json';
import { Brand } from 'types/cms/Brand';
import Authors from "data/cms/Authors.json";

export function getBrandsBySlug(slug?: string): Brand[] {
  return Brands.map((brand) => {
    if (brand.slug !== slug) return;
    const author = Authors.find((a) => a["_id"] === brand.author)
    return {
      ...brand,
        authorRef: author,
      link: "/brands/" + brand.slug
    };
  });
}