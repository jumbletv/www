import Tags from 'data/cms/Tags.json'
import {Tag} from 'types/cms/Tag'

export function getTagsBySlug(slug?: string): Tag[] {
  return Tags.map((tag: Tag) => {
    if (slug !== undefined && tag.slug !== slug) return;
    tag.relatedPostsRef = tag["related-posts"]?.map((id) => {
        const post = BlogPosts.find((post) => post._id === id);
        if (!post) return;
        return {
            ...post,
            link: "/the-jumblog/" + post.slug,
            authorRef: Authors.find((author) => author._id === post.author),
            tagsRef: post.tags?.map((id) => Tags.find((tag) => tag._id === id))
        }
    });
    return {
      ...tag,
      link: "/tag/" + tag.slug
    };
  });
}