import {FAQ} from "@/types/cms/FAQ";
import FAQs from "data/cms/FAQs.json";
import Authors from "data/cms/Authors.json";
import Tags from "data/cms/Tags.json";
import Types from "data/cms/Types.json";

export function getFAQsBySlug(slug?: string): FAQ[] {
    return FAQs.map((faq) => {
        if (slug !== undefined && faq.slug !== slug) return;
        const author = Authors.find((author) => author["_id"] === faq.author)
        const tags = Tags.filter((tag) => faq.tags.includes(tag["_id"]))
        const type = Types.find((type) => type["_id"] === faq["type"])
        return {
            ...faq,
            authorRef: author,
            tagsRef: tags,
            typeRef: type,
            link: "/faq/" + faq.slug
        };
    }).filter((faq) => faq !== undefined) as FAQ[];
}