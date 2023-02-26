import React, { Fragment, useState, useEffect } from "react";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";

function Breadcrumbs({ links }) {
  const { breadcrumbsContainer } = styles;
  const [linksLength, setLinksLength] = useState();

  useEffect(() => {
    setLinksLength(links.length);
  }, [linksLength]);

  return (
    <div className={breadcrumbsContainer}>
      {links.map(({ id, link, title }) => (
        <Fragment key={id}>
          <Link href={link}>{title}</Link>
          {linksLength === id ? "" : <span> / </span>}
        </Fragment>
      ))}
    </div>
  );
}

export default Breadcrumbs;
