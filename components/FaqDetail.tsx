import React from "react";
import styles from "./FaqDetail.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface FaqDetailProps {
  faqDetail: {
    text: string;
    detail:
      | string
      | {
          beforeLink: string;
          link: string;
          linkText: string;
          afterLink: string;
        };
    bg: string;
    addLink?: boolean;
  };
  prevFaq?: {
    text: string;
    link: string;
    bg: string;
  };
  nextFaq?: {
    text: string;
    link: string;
    bg: string;
  };
}

export function FaqDetail({ faqDetail, prevFaq, nextFaq }: FaqDetailProps) {
  const {
    faqDetailWrapper,
    faqDetailContainer,
    preNextContainer,
    faqContainer,
    faqArrow,
    noFaq,
  } = styles;
  const { text, detail, bg, addLink } = faqDetail;

  const { t } = useTranslation("faq");

  return (
    <>
      <div className={`${faqDetailWrapper} ${bg}`}>
        <div className={faqDetailContainer}>
          <h1> {t(`${text}`)} </h1>
          {addLink && typeof detail !== "string" ? (
            <p>
              {t(`${detail.beforeLink}`)}
              <a href={detail.link}>{t(`${detail.linkText}`)}</a>
              {t(`${detail.afterLink}`)}
            </p>
          ) : (
            <p> {t(`${detail}`)} </p>
          )}
        </div>
      </div>
      <div className={`${preNextContainer}`}>
        {prevFaq?.link ? (
          <Link href={prevFaq.link} className={`${faqContainer} ${prevFaq.bg}`}>
            <h1>{t(prevFaq.text)}</h1>
            <div className={faqArrow}>⟶</div>
          </Link>
        ) : (
          <div className={`${faqContainer} ${noFaq}`}>
            <h1> No Previous Faq </h1>
          </div>
        )}
        {nextFaq?.link ? (
          <Link href={nextFaq.link} className={`${faqContainer} ${nextFaq.bg}`}>
            <h1>{t(nextFaq.text)}</h1>
            <div className={faqArrow}>⟶</div>
          </Link>
        ) : (
          <div className={`${faqContainer} ${noFaq}`}>
            <h1> No Next Faq </h1>
          </div>
        )}
      </div>
    </>
  );
}
