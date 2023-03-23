import React from "react";
import styles from "./HeaderText.module.scss";
import commonStyles from "../styles/Common.module.scss";
import { useTranslation } from "next-i18next";

export function HeaderText(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <div
      className={`${styles.textContainer} ${commonStyles.flexRowCenterCenter}`}
    >
      <h1>{t("get_experience")}</h1>
    </div>
  );
}
