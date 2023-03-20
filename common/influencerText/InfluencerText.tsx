import React from "react";
import styles from "./InfluencerText.module.scss";

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
    </div>
  );
}