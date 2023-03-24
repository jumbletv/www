import Influencers from 'data/cms/Influencers.json';
import {Influencer} from  'types/cms/Influencer';

export function getInfluencersBySlug(slug?: string): Influencer[] {
  return Influencers.map((influencer) => {
    if (influencer.slug !== slug) return;
    return {
      ...influencer,
      link: "/influencers/" + influencer.slug
    };
  });
}
