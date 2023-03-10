import React from "react";
import styles from "./BarItem.module.scss";

export function BarItem({ barBg }) {
  return <div className={`${styles.bar} ${barBg}`} />;
}
