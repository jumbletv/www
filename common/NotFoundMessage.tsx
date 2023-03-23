import React from "react";
import styles from "./NotFoundMessage.module.scss";
import { useTranslation } from "next-i18next";

interface NotFoundMessageProps {
  message: string;
}

export function NotFoundMessage({ message }: NotFoundMessageProps) {
  const { notFoundMessageContainer } = styles;
  const { t } = useTranslation("common");

  return (
    <div className={notFoundMessageContainer}>
      <p>{t(message)}</p>
    </div>
  );
}
