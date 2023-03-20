import React, { Fragment } from "react";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";

interface LinkProps {
  id: number;
  link: string;
  title: string;
}

interface BreadcrumbsProps {
  links?: LinkProps[];
}

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  const { breadcrumbsContainer } = styles;

  return (
    <div className={breadcrumbsContainer}>
      {links?.map(({ id, link, title }, index) => (
        <Fragment key={id}>
          <Link href={link}>{title}</Link>
          {links.length - 1 === index ? "" : <span> / </span>}
        </Fragment>
      ))}
    </div>
  );
}