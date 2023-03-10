import React, { Fragment } from "react";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";

export function Breadcrumbs({ links }) {
  const { breadcrumbsContainer } = styles;

  return (
    <div className={breadcrumbsContainer}>
      {links?.map(({ id, link, title }) => (
        <Fragment key={id}>
          <Link href={link}>{title}</Link>
          {links.length === id ? "" : <span> / </span>}
        </Fragment>
      ))}
    </div>
  );
}
