import React from "react";
import styles from "./InfluencerText.module.scss";
import { useTranslation } from "next-i18next";

interface Influencer {
  name: string;
  followers: string;
  url: string;
}

interface InfluencerTextProps {
  influencer: Influencer | null;
}

export function InfluencerText({ influencer }: InfluencerTextProps): JSX.Element | null {
  const { influencerTextContainer } = styles;
  const { t } = useTranslation("common");

  if (!influencer) {
    return null;
  }

  const { name, followers, url } = influencer;

  return (
    <div className={influencerTextContainer}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <h2>- {followers}</h2>
      <p>{t("influencer_description")}</p>
    </div>
  );
}