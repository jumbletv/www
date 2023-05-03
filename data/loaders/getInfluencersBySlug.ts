import Influencers from 'data/cms/Influencers.json';
import {Influencer} from  'types/cms/Influencer';

export function getInfluencersBySlug(slug?: string): Influencer[] {
  return Influencers.map((influencer) => {
    if (slug !== undefined && influencer.slug !== slug) return;
    return {
      ...influencer,
      link: "/influencers/" + influencer.slug
    };
  }).filter((influencer) => influencer !== undefined) as Influencer[];
}
