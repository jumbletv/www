import Tags from 'data/cms/Tags.json'
import {Tag} from 'types/cms/Tag'

export function getTagsBySlug(slug?: string): Tag[] {
  return Tags.map((tag: Tag) => {
    if (tag.slug !== slug) return;
    return {
      ...tag,
      link: "/tag/" + tag.slug
    };
  });
}