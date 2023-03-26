import React, { useState } from "react";
import styles from "./QuestionsList.module.scss";
import TriagleArrow from "../assets/icons/triangle-arrow.svg";
import Image from "next/image";
import { CircleBtn } from "./CircleBtn";
import { useTranslation } from "next-i18next";

type Detail =
  | {
      beforeLink?: string;
      linkText?: string;
      afterLink?: string;
      link?: string;
    }
  | string;

type Data = {
  id: number;
  question: string;
  bg: string;
  addLink?: boolean;
  answer: Detail;
};

type Props = {
  data: Data[];
  showBtn?: boolean;
};

export function QuestionsList({ data, showBtn }: Props) {
  const {
    supportContainer,
    supportItem,
    listContainer,
    listTitleContainer,
    downArrow,
  } = styles;
  const { t } = useTranslation("faq");
  const [listId, setListId] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = (id: number) => {
    setExpanded((prev) => (listId === id ? !prev : true));
    setListId(id);
  };

  const renderDetail = (id: number, addLink?: boolean, detail?: Detail) => {
    if (id === listId && expanded) {
      if (typeof detail === "string") {
        return <p> {t(detail)} </p>;
      } else {
        const { beforeLink, linkText, afterLink, link } = detail;
        return (
          <p>
            {t(beforeLink ?? "")}
            <a href={link}>{t(linkText ?? "")}</a>
            {t(afterLink ?? "")}
          </p>
        );
      }
    }
  };

  return (
    <div className={supportContainer}>
      {data.map(({ id, question, bg, addLink, answer }) => (
        <div
          key={id}
          className={`${supportItem} ${bg}`}
          onClick={() => handleCollapse(id)}
        >
          <div className={listContainer}>
            <div className={listTitleContainer}>
              <h1> {t(`${question}`)}</h1>
              <Image
                src={TriagleArrow}
                alt="triangle-arrow"
                className={id === listId && expanded ? downArrow : undefined}
              />
            </div>
            {renderDetail(id, addLink, answer)}
          </div>
        </div>
      ))}
      {showBtn && <CircleBtn link="/frequently-asked-questions" />}
    </div>
  );
}
