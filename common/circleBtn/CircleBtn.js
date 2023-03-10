import React from "react";
import styles from "./CircleBtn.module.scss";
import Link from "next/link";

export function CircleBtn({ link }) {
  const { circleBtnWrapper, circleBtnContainer, insideCircle } = styles;
  return (
    <div className={circleBtnWrapper}>
      <Link href={link} className={circleBtnContainer}>
        <div className={insideCircle}>View All</div>
      </Link>
    </div>
  );
}
