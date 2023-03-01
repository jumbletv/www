import React from "react";
import InstaEmbed from "common/instaEmbed/InstaEmbed";
import styles from "./EmbedURL.module.scss";
import { TikTokEmbed } from "react-social-media-embed";

export function EmbedElement({ embed }) {
  const { embedURLContainer, embedURLWrapper } = styles;

  const renderEmbededUrl = () =>
    embed?.map(({ id, type, url }) => {
      const EmbedComponent = type === "instagram" ? InstaEmbed : TikTokEmbed;
      return (
        <div className={embedURLContainer} key={id}>
          <EmbedComponent url={url} />
        </div>
      );
    });

  return <div className={embedURLWrapper}>{renderEmbededUrl()}</div>;
}
