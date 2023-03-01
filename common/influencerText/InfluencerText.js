import React from "react";
import styles from "./InfluencerText.module.scss";

export function InfluencerText({ influencer }) {
  const { influencerTextContainer } = styles;
  const { name, followers, url } = influencer;

  return (
    influencer && (
      <div className={influencerTextContainer}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        <h2>- {followers}</h2>
      </div>
    )
  );
}
