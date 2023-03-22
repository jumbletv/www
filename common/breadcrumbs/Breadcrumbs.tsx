import React, { Fragment } from "react";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");

  return (
    <div className={breadcrumbsContainer}>
      {links?.map(({ id, link, title }, index) => (
        <Fragment key={id}>
          <Link href={link}>{t(title)}</Link>
          {links.length - 1 === index ? "" : <span> / </span>}
        </Fragment>
      ))}
    </div>
  );
}
