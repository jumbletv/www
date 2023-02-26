import React from "react";
import InstaEmbed from "common/instaEmbed/InstaEmbed";
import styles from "./EmbedURL.module.scss";
import { TikTokEmbed } from "react-social-media-embed";

export function EmbedURL({ embed }) {
  const { embedURLContainer, embedURLWrapper } = styles;

  const renderEmbededUrl = () =>
    embed?.map(({ id, type, url }) => {
      if (type === "instagram") {
        return (
          <div className={embedURLContainer} key={id}>
            <InstaEmbed url={url} />
          </div>
        );
      } else if (type === "tiktok") {
        return (
          <div className={embedURLContainer} key={id}>
            <TikTokEmbed url={url} />
          </div>
        );
      } else {
        return null;
      }
    });

  return <div className={embedURLWrapper}>{renderEmbededUrl()}</div>;
}
