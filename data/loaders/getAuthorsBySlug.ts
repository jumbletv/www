import Authors from "data/cms/Authors.json";
import {Author} from "types/cms/Author";

export function getAuthorsBySlug(slug?: string): Author[] {
    return Authors.map((author) => {
        if (author.slug !== slug) return;
        return {
        ...author,
            link: "/by/" + author.slug
        };
    });
}