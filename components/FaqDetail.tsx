import React from "react";
import styles from "./FaqDetail.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export type FaqAnswer =
  | string
  | {
      beforeLink: string;
      link: string;
      linkText: string;
      afterLink: string;
      linkquestion?: string;
    };

export interface Faq {
  id: number;
  question: string;
  answer: FaqAnswer;
  link: string;
  bg: string;
  addLink?: boolean;
}

interface FaqDetailProps {
  faqDetail: Faq;
  prevFaq?: Faq;
  nextFaq?: Faq;
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
  const { question, answer, bg, addLink } = faqDetail;

  const { t } = useTranslation("faq");

  return (
    <>
      <div className={`${faqDetailWrapper} ${bg}`}>
        <div className={faqDetailContainer}>
          <h1> {t(`${question}`)} </h1>
          {addLink && typeof answer !== "string" ? (
            <p>
              {t(`${answer.beforeLink}`)}
              <a href={answer.link}>{t(`${answer.linkquestion}`)}</a>
              {t(`${answer.afterLink}`)}
            </p>
          ) : (
            <p> {t(`${answer}`)} </p>
          )}
        </div>
      </div>
      <div className={`${preNextContainer}`}>
        {prevFaq?.link ? (
          <Link href={prevFaq.link} className={`${faqContainer} ${prevFaq.bg}`}>
            <h1>{t(prevFaq.question)}</h1>
            <div className={faqArrow}>⟶</div>
          </Link>
        ) : (
          <div className={`${faqContainer} ${noFaq}`}>
            <h1> No Previous Faq </h1>
          </div>
        )}
        {nextFaq?.link ? (
          <Link href={nextFaq.link} className={`${faqContainer} ${nextFaq.bg}`}>
            <h1>{t(nextFaq.question)}</h1>
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
