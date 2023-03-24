import {Type} from 'types/cms/Type'
import Types from 'data/cms/Types.json'

export function getTypesBySlug(slug?: string): Type[] {
  return Types.map((type: Type) => {
    if (type.slug !== slug) return;
    return {
      ...type,
      link: "/type/" + type.slug
    };
  });
}