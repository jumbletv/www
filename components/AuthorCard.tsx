import { AuthorCardItem } from "components/AuthorCardItem";
import React from "react";
import { Author } from "types";

interface authorCardProps {
  author: Author;
}

export function AuthorCard({ author }: authorCardProps) {
  return (
    <AuthorCardItem
      key={author._id}
      authorLink={author.slug}
      title={author.name}
      detail={author.bio}
      headerImg={author.avatar.url}
    />
  );
}
