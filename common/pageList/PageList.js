import React from "react";
import styles from "./PageList.module.scss";
import { ArrowRightIcon } from "components/customIcons/ArrowRight";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export function PageList() {
  const { pageListContainer, textComtainer, listContainer } = styles;

  const { t } = useTranslation("common");
  return (
    <div className={pageListContainer}>
      <div className={textComtainer}>
        <h1>{t("view_more")}</h1>
      </div>
      <div className={listContainer}>
        <Link href="/privacy-policy">
          <h1> {t("privacy_policy")} </h1>
          <ArrowRightIcon />
        </Link>
        <Link href="/terms-conditions">
          <h1> {t("terms_conditions_sale")} </h1>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
