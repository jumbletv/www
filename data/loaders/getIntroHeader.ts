import { Author } from "types/cms/Author";
import { Type } from "types/cms/Type";
import { Tag } from "types/cms/Tag";
import { Influencer } from "@/types/cms/Influencer";

export type IntroHeader = {
  id: string;
  headerImg: string;
  title: string;
  detail: string;
};

export function getAuthorIntroHeader(baseObject: Author): IntroHeader {
  return {
    id: baseObject["_id"],
    headerImg: baseObject.avatar.url,
    title: baseObject.name,
    detail: baseObject.bio,
  };
}

export function getTypeIntroHeader(baseObject: Type): IntroHeader {
  return {
    id: baseObject["_id"],
    headerImg: baseObject["main-image"].url,
    title: baseObject.name,
    detail: baseObject["meta-description"],
  };
}

export function getTagIntroHeader(baseObject: Tag): IntroHeader {
  return {
    id: baseObject["_id"],
    headerImg: baseObject["icon"].url,
    title: baseObject.name,
    detail: baseObject.description,
  };
}

export function getInfluencerIntroHeader(baseObject: Influencer): IntroHeader {
  return {
    id: baseObject["_id"],
    headerImg: baseObject.image.url,
    title: baseObject.name,
    detail: baseObject.bio,
  };
}
