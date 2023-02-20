import React from "react";
import styles from "./HeaderText.module.scss";
import commonStyles from "../../styles/Common.module.scss";

function HeaderText() {
  return (
    <div
      className={`${styles.textContainer} ${commonStyles.flexRowCenterCenter}`}
    >
      <h1>
        Get your hands on exclusive products in our live stream shopping
        experience
      </h1>
    </div>
  );
}
export default HeaderText;
