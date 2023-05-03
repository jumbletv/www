import {Type} from 'types/cms/Type'
import Types from 'data/cms/Types.json'
import BlogPosts from 'data/cms/BlogPosts.json'
import Authors from 'data/cms/Authors.json'
import Tags from 'data/cms/Tags.json'

export function getTypesBySlug(slug?: string): Type[] {
  const types = Types.map((type: Type) => {
    if (slug !== undefined && type.slug !== slug) return;
    type.relatedPostsRef = type["related-posts"]?.map((id) => {
        const post = BlogPosts.find((post) => post._id === id);
        if (!post) return;
        return {
            ...post,
            link: "/the-jumblog/" + post.slug,
            authorRef: Authors.find((author) => author._id === post.author),
            tagsRef: post.tags?.map((id) => Tags.find((tag) => tag._id === id))
        };
    }) || null;
    return {
      ...type,
      link: "/type/" + type.slug
    };
  }).filter((type) => type !== undefined) as Type[];
  return types;
}