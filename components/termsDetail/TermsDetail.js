import React from "react";
import styles from "./TermsDetail.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export function TermsDetail() {
  const { termsDetailContainer, termsDetailWrapper } = styles;
  const { t } = useTranslation("terms");

  return (
    <div className={termsDetailWrapper}>
      <div className={termsDetailContainer}>
        <p> {t("para_1")}</p>
        <p>
          <span>{t("heading_1")}: </span>
          Nathalie Gueyne d&apos;Aboville
        </p>
        <p>
          <span>{t("heading_2")}:</span> Qonto (Olinda SAS), 20 Bis Rue la
          Fayette, 75009 Paris. France
        </p>
        <p>
          <span>{t("heading_3")}: </span> +33187651050
        </p>
        <p>
          <span>{t("heading_4")}:</span>
          <Link href="/get-in-touch"> https://jumble.tv/contact-us</Link>
        </p>
        <p>
          <span>{t("heading_5")}:</span> JTV - Service Client - 231 rue Saint
          Honoré 75001 Paris - France
        </p>
        <p>
          {t("para_2_before_link")}
          <Link href="/"> jumble.tv</Link> {t("para_2_after_link")}
        </p>
        <p>{t("para_3")}</p>
        <h1>{t("heading_6")}</h1>
        <p>{t("para_4")}</p>
        <h1>{t("heading_7")}</h1>
        <p>{t("para_5")}</p>
        <p>{t("para_6")}</p>
        <p> {t("para_7")} </p>
        <ul>
          <li>{t("list_1")}</li>
        </ul>
        <p> {t("para_8")} </p>
        <h1>{t("heading_8")}</h1>
        <p> {t("para_9")} </p>
        <p> {t("para_10")} </p>
        <br />
        <br />
        <br />
        <h1>{t("heading_9")}</h1>
        <p> {t("para_11")} </p>
        <p>
          {t("para_12")} <span>{t("heading_10")} </span> {t("para_13")}
        </p>
        <p> {t("para_14")} </p>
        <p> {t("para_15")} </p>
        <br />
        <br />
        <p> {t("para_16")} </p>
        <h1>{t("heading_10")}</h1>
        <p> {t("para_17")} </p>
        <p> {t("para_18")} </p>
        <p> {t("para_19")} </p>
        <h1> {t("heading_12")} </h1>
        <p> {t("para_20")} </p>
        <p> {t("para_21")} </p>
        <p> {t("para_22")} </p>
        <p>
          {t("para_23")}
          <a
            href="https://www.checkout.com/legal/terms-and-policies"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.checkout.com/legal/terms-and-policies .
          </a>{" "}
          <span> {t("heading_13")} </span>
        </p>
        <h1>{t("heading_14")}</h1>
        <p> a. {t("para_24")} </p>
        <p> b. {t("para_25")} </p>
        <p>
          {" "}
          c. {t("para_26")} <span>{t("heading_15")}</span>{" "}
        </p>
        <p> d. {t("para_27")} </p>
        <p>
          {" "}
          <span>{t("heading_16")}</span> {t("para_28")}{" "}
        </p>
        <p>
          {" "}
          <span>{t("heading_17")}</span> {t("para_29")}{" "}
        </p>
        <h1> {t("heading_18")} </h1>
        <p> {t("para_30")} </p>
        <p> {t("para_31")} </p>
        <p> {t("para_32")} </p>
        <p> {t("para_33")} </p>
        <p> {t("para_34")} </p>
        <p>
          {" "}
          <span>{t("heading_19")} </span> {t("para_35")}{" "}
        </p>
        <p>
          {" "}
          <span>{t("heading_20")} </span> {t("para_36")}{" "}
        </p>
        <p> {t("para_37")} </p>
        <p> {t("para_38")} </p>
        <p> {t("para_39")} </p>
        <p> {t("para_40")} </p>
        <p> {t("para_41")} </p>
        <p> {t("para_42")} </p>
        <p> {t("para_43")} </p>
        <p> {t("para_44")} </p>
        <p> {t("para_45")} </p>
        <p> {t("para_46")} </p>
        <p> {t("para_47")} </p>
        <p> {t("para_48")} </p>
        <p> {t("para_49")} </p>
        <p> {t("para_50")} </p>
        <p> {t("para_51")} </p>
        <p> {t("para_52")} </p>
        <p> {t("para_53")} </p>
        <h1> {t("heading_21")} </h1>
        <p> {t("para_54")} </p>
        <p> {t("para_55")} </p>
        <br />
        <br />
        <p> {t("para_56")} </p>
        <h1> {t("heading_22")} </h1>
        <p> {t("para_57")} </p>
        <h1> {t("heading_23")} </h1>
        <p> {t("para_58")} </p>
        <p> {t("para_59")} </p>
        <p> {t("para_60")} </p>
        <p> {t("para_61")} </p>
        <h1> {t("heading_24")} </h1>
        <p> {t("para_62")} </p>
        <h1> {t("heading_25")} </h1>
        <p> {t("para_63")} </p>
        <h1> {t("heading_26")} </h1>
        <p> {t("para_64")} </p>
        <h1> {t("heading_27")} </h1>
        <p>
          {" "}
          {t("para_65")} <span>{t("heading_28")}</span> {t("para_66")}{" "}
        </p>
        <h1> {t("heading_29")} </h1>
        <p>
          {" "}
          {t("para_67")} <span>{t("heading_30")}</span>{" "}
        </p>
        <h1> {t("heading_31")} </h1>
        <p> {t("para_68")} </p>
        <h1> {t("heading_32")} </h1>
        <p> {t("para_69")} </p>
        <h1> {t("heading_33")} </h1>
        <p> {t("para_70")} </p>
        <h1> {t("heading_34")} </h1>
        <p> {t("para_71")} </p>
        <h1> {t("heading_35")} </h1>
        <p> {t("para_72")} </p>
        <h1> {t("heading_36")} </h1>
        <p> {t("para_73")} </p>
        <h1> {t("heading_37")} </h1>
      </div>
    </div>
  );
}
