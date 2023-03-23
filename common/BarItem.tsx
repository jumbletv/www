import React from "react";
import styles from "./BarItem.module.scss";

type BarItemProps = {
  barBg: string;
}

export function BarItem({ barBg }: BarItemProps) {
  return <div className={`${styles.bar} ${barBg}`} />;
}