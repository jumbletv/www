import {Sale} from "@/types/cms/Sale";
import Sales from "@/data/cms/Sales.json";
import Influencers from 'data/cms/Influencers.json';
import BlogPosts from 'data/cms/BlogPosts.json'
import Authors from 'data/cms/Authors.json'
import Tags from 'data/cms/Tags.json'

export const getSalesBySlug = (slug?: string): Sale[] => {
    return Sales.map((sale) => {
        if (slug !== undefined && sale.slug !== slug) return;
        return {
        ...sale,
        link: "/sales/" + sale.slug,
        influencerRef: Influencers.find((influencer) => influencer._id === sale.influencer),
        relatedPostsRef: sale["related-posts"]?.map((id) => {
            const post = BlogPosts.find((post) => post._id === id);
            if (!post) return;
            return {
            ...post,
            link: "/the-jumblog/" + post.slug,
            authorRef: Authors.find((author) => author._id === post.author),
            tagsRef: post.tags?.map((id) => Tags.find((tag) => tag._id === id))
            }
        }) || null
        };
    }).filter((sale) => sale !== undefined) as Sale[];
}