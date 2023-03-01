import React from "react";
import styles from "./PageList.module.scss";
import { ArrowRightIcon } from "components/customIcons/ArrowRight";
import Link from "next/link";

export function PageList() {
  const { pageListContainer, textComtainer, listContainer } = styles;

  return (
    <div className={pageListContainer}>
      <div className={textComtainer}>
        <h1>View More</h1>
      </div>
      <div className={listContainer}>
        <Link href="/privacy-policy">
          <h1>Privacey policy</h1>
          <ArrowRightIcon />
        </Link>
        <Link href="/terms-conditions">
          <h1>Terms and conditions of sale</h1>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
