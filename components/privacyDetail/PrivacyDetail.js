import React from "react";
import styles from "./PrivacyDetail.module.scss";
import { useTranslation } from "next-i18next";

export function PrivacyDetail() {
  const { privacyDetailContainer, privacyDetailWrapper, leadingHeading } =
    styles;
  const { t } = useTranslation("privacy");

  return (
    <div className={privacyDetailWrapper}>
      <div className={privacyDetailContainer}>
        <h1> {t("heading_1")} </h1>
        <p>{t("para_1")}</p>
        <p>{t("para_2")}</p>
        <p>{t("para_3")}</p>
        <p>{t("para_4")}</p>
        <h1 className={leadingHeading}>{t("heading_2")}</h1>
        <p>{t("para_5")}</p>
        <h1> {t("heading_3")} </h1>
        <p>{t("para_6")}</p>
        <h1> {t("heading_4")} </h1>
        <p>{t("para_7")}</p>
        <h1> {t("heading_5")} </h1>
        <p>{t("para_8")}</p>
        <h1> {t("heading_6")} </h1>
        <p> {t("para_9")} </p>
        <ul>
          <li>
            <span> {t("list_headig_1")} </span>
            {t("list_1")}
          </li>
          <li>
            <span> {t("list_headig_2")} </span>
            {t("list_2")}
          </li>
        </ul>
        <p> {t("para_10")} </p>
        <p> {t("para_11")} </p>
        <h1> {t("heading_7")} </h1>
        <p> {t("para_12")} </p>
        <p> {t("para_13")} </p>
        <a
          href="https://marketingplatform.google.com/about/analytics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("link_text_1")}
        </a>
        <a
          href="https://mixpanel.com/legal/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("link_text_2")}
        </a>
        <br />
        <h1> {t("heading_8")} </h1>
        <p> {t("para_14")} </p>
        <p> {t("para_15")} </p>
        <a href="https://policies.google.com/technologies/ads" target="_blank">
          {t("link_text_3")}
        </a>
        <a
          href="https://help.instagram.com/1896641480634370?ref=ig"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("link_text_4")}
        </a>
        <a
          href="https://www.facebook.com/help/568137493302217"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("link_text_5")}
        </a>
        <h1> {t("heading_9")} </h1>
        <p> {t("para_16")} </p>
        <h1> {t("heading_10")} </h1>
        <p> {t("para_17")} </p>
        <h1> {t("heading_11")} </h1>
        <ul>
          <li>{t("list_3")}</li>
          <li>{t("list_4")}</li>
          <li>{t("list_5")}</li>
          <li>{t("list_6")}</li>
        </ul>
        <h1> {t("heading_12")} </h1>
        <p> {t("para_18")} </p>
        <h1> {t("heading_13")} </h1>
        <p> {t("para_19")} </p>
        <h1> {t("heading_14")} </h1>
        <p> {t("para_20")} </p>
        <h1> {t("heading_15")} </h1>
        <p> {t("para_21")} </p>
        <h1> {t("heading_16")} </h1>
        <p> {t("para_22")} </p>
        <h1> {t("heading_17")} </h1>
        <p> {t("para_23")} </p>
        <h1> {t("heading_18")} </h1>
        <p> {t("para_24")} </p>
        <h1> {t("heading_19")} </h1>
        <p> {t("para_25")} </p>
        <h1> {t("heading_20")} </h1>
        <p> {t("para_26")} </p>
        <p>
          {t("before_link")}
          <a href="mailto:admin@jumble.tv" rel="noopener noreferrer">
            admin@jumble.tv
          </a>{" "}
          {t("after_link")}
        </p>
      </div>
    </div>
  );
}
