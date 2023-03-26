import {Author} from "@/types/cms/Author";

export function getAuthorsHeaderBySlug(slug?: string): Author[] {
    return Authors.map((author: Author) => {
        if (author.slug !== slug) return;
        author.relatedPostsRef = author["related-posts"]?.map((id) => {
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
        ...author,
            link: "/by/" + author.slug
        };
    });
}