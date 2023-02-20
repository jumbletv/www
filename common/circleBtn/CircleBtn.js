import React from "react";
import styles from "./CircleBtn.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import Link from "next/link";

function CircleBtn() {
  const { flexColumnCenterCenter } = commonStyles;
  const { viewAllWrapper, viewAllContainer, insideCircle } = styles;
  return (
    <div className={viewAllWrapper}>
      <Link
        href="/"
        className={`${viewAllContainer} ${flexColumnCenterCenter}`}
      >
        <div className={`${insideCircle} ${flexColumnCenterCenter}`}>
          <h1>
            View
            <br />
            All
          </h1>
        </div>
      </Link>
    </div>
  );
}
export default CircleBtn;
