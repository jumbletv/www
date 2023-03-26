import BlogPosts from "data/cms/BlogPosts.json";
import Authors from "data/cms/Authors.json";
import Tags from "data/cms/Tags.json";
import Types from "data/cms/Types.json";
import { BlogPost } from "types/cms/BlogPost";
import { Author } from "@/types/cms/Author";
import { Tag } from "@/types/cms/Tag";
import { Type } from "@/types/cms/Type";

export function getBlogPostsBySlug(slug?: string): BlogPost[] {
  return BlogPosts.map((blogPost) => {
    if (slug !== undefined && blogPost.slug !== slug) return;
    const author = Authors.find((author) => author["_id"] === blogPost.author);
    const tags = Tags.filter((tag) => blogPost.tags.includes(tag["_id"]));
    const relatedPosts = BlogPosts.filter((related) =>
      blogPost["related-posts"].includes(related["_id"])
    );
    const type = Types.find((type) => type["_id"] === blogPost["type"]);
    const link = "/the-jumblog/" + blogPost.slug;

    const finalRelated: BlogPost[] = relatedPosts.map((related) => {
      const relatedAuthor: Author = Authors.find(
        (author) => author["_id"] === related.author
      );
      const relatedTags: Tag[] = Tags.filter((tag) =>
        related.tags.includes(tag["_id"])
      );
      const relatedType: Type = Types.find(
        (type) => type["_id"] === related["type"]
      );
      const link = "/the-jumblog/" + related.slug;

      return {
        ...related,
        authorRef: relatedAuthor,
        tagsRef: relatedTags,
        typeRef: relatedType,
        link,
      };
    });

    return {
      ...blogPost,
      authorRef: author,
      tagsRef: tags,
      typeRef: type,
      relatedPostsRef: finalRelated,
      link,
    };
  });
}
