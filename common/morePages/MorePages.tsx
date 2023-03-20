import React from "react";
import styles from "./MorePages.module.scss";
import { ArrowRightIcon } from "components/customIcons/ArrowRight";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export function MorePages(): JSX.Element {
  const { morePagesContainer, textComtainer, listContainer } = styles;
  const { t } = useTranslation("common");

  return (
    <div className={morePagesContainer}>
      <div className={textComtainer}>
        <h1>{t("view_more")}</h1>
      </div>
      <div className={listContainer}>
        <Link href="/privacy-policy">
          <span> {t("privacy_policy")} </span>
          <ArrowRightIcon />
        </Link>
        <Link href="/terms-conditions">
          <span> {t("terms_conditions_sale")} </span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}