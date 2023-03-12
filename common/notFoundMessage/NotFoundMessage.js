import React from "react";
import styles from "./NotFoundMessage.module.scss";

export function NotFoundMessage({ message }) {
  const { notFoundMessageContaienr } = styles;
  return (
    <div className={notFoundMessageContaienr}>
      <p>{message}</p>
    </div>
  );
}
