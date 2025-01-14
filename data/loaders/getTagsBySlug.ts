import Tags from 'data/cms/Tags.json'
import {Tag} from 'types/cms/Tag'
import BlogPosts from 'data/cms/BlogPosts.json'
import Authors from 'data/cms/Authors.json'

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
    }) || null;
    return {
      ...tag,
      link: "/tag/" + tag.slug
    };
  }).filter((tag) => tag !== undefined) as Tag[];
}