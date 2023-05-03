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

export function getTagIntroHeader(baseObject: Tag): IntroHeader {
  return {
    id: baseObject["_id"],
    headerImg: baseObject["icon"].url,
    title: baseObject.name,
    detail: baseObject.description,
  };
}
