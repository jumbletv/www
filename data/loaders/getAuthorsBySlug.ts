import Authors from "data/cms/Authors.json";
import {Author} from "types/cms/Author";
import BlogPosts from "data/cms/BlogPosts.json";
import Tags from "data/cms/Tags.json";

export function getAuthorsBySlug(slug?: string): Author[] {
    return Authors.map((author: Author) => {
        if (slug !== undefined && author.slug !== slug) return;
        author.relatedPostsRef = author["related-posts"]?.map((id) => {
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
        ...author,
            link: "/by/" + author.slug
        };
    }).filter((author) => author !== undefined) as Author[];
}