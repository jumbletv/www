import React from "react";
import styles from "./BarItem.module.scss";
function BarItem({ barBg }) {
  return <div className={`${styles.bar} ${barBg}`} />;
}
export default BarItem;
