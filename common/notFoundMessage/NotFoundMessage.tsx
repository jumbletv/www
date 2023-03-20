import React from "react";
import styles from "./NotFoundMessage.module.scss";

export function NotFoundMessage({ message }) {
  const { notFoundMessageContainer } = styles;
  return (
    <div className={notFoundMessageContainer}>
      <p>{message}</p>
    </div>
  );
}