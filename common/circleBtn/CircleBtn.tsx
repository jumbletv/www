import React from "react";
import styles from "./CircleBtn.module.scss";
import Link from "next/link";

interface CircleBtnProps {
  link: string;
}

export function CircleBtn({ link }: CircleBtnProps) {
  const { circleBtnWrapper, circleBtnContainer, insideCircle } = styles;
  return (
    <div className={circleBtnWrapper}>
      <Link href={link} className={circleBtnContainer}>
        <div className={insideCircle}>View All</div>
      </Link>
    </div>
  );
}